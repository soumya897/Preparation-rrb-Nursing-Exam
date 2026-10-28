import { UserProfile } from '../types';
import { supabase, isSupabaseConfigured } from './supabaseClient';

const AUTH_STORAGE_KEY = 'rrb_nursing_active_user_v1';

export const authService = {
  // Get active authenticated user
  getCurrentUser(): UserProfile | null {
    try {
      const stored = localStorage.getItem(AUTH_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // Ignore
    }
    return null;
  },

  // Save user session locally
  saveUserSession(user: UserProfile) {
    try {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    } catch {
      // Ignore
    }
  },

  // Sign out user
  async signOut(): Promise<void> {
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY);
      if (isSupabaseConfigured) {
        await supabase.auth.signOut();
      }
    } catch (err) {
      console.warn("Sign out error", err);
    }
  },

  // Google OAuth via Supabase
  async signInWithGoogle(): Promise<{ success: boolean; user?: UserProfile; error?: string }> {
    if (isSupabaseConfigured) {
      try {
        const { error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            redirectTo: window.location.origin,
            queryParams: {
              access_type: 'offline',
              prompt: 'consent',
            }
          }
        });
        if (error) {
          return { success: false, error: error.message };
        }
        return { success: true };
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : 'Google OAuth failed';
        return { success: false, error: msg };
      }
    } else {
      // Demo profile login when Supabase credentials are not yet configured
      const demoUser: UserProfile = {
        id: 'google-user-demo-2026',
        name: 'Nursing Candidate',
        email: 'candidate@gmail.com',
        avatarUrl: 'https://images.unsplash.com/photo-1594824813511-231a44f8490a?auto=format&fit=crop&q=80&w=256',
        provider: 'google'
      };
      this.saveUserSession(demoUser);
      return { success: true, user: demoUser };
    }
  },

  // One-click Google Login with any custom Google account name/email
  signInWithGoogleAccount(name: string, email: string): UserProfile {
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim() || 'Nursing Candidate';
    const avatarUrl = `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(cleanName)}&backgroundColor=b6e3f4,c0aede,d1d4f9`;

    const user: UserProfile = {
      id: `google-${btoa(cleanEmail).substring(0, 16)}`,
      name: cleanName,
      email: cleanEmail,
      avatarUrl,
      provider: 'google'
    };

    this.saveUserSession(user);
    return user;
  },

  // Listen to Supabase OAuth redirects and restore session
  initAuthListener(onUserChanged: (user: UserProfile | null) => void) {
    if (!isSupabaseConfigured) {
      const active = this.getCurrentUser();
      onUserChanged(active);
      return;
    }

    // Check existing Supabase session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        const metadata = session.user.user_metadata || {};
        const profile: UserProfile = {
          id: session.user.id,
          email: session.user.email || '',
          name: metadata.full_name || metadata.name || 'Nursing Candidate',
          avatarUrl: metadata.avatar_url || metadata.picture || `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(session.user.email || 'user')}`,
          provider: 'google'
        };
        this.saveUserSession(profile);
        onUserChanged(profile);
      } else {
        const active = this.getCurrentUser();
        onUserChanged(active);
      }
    });

    // Listen to changes (e.g. after OAuth redirect)
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        const metadata = session.user.user_metadata || {};
        const profile: UserProfile = {
          id: session.user.id,
          email: session.user.email || '',
          name: metadata.full_name || metadata.name || 'Nursing Candidate',
          avatarUrl: metadata.avatar_url || metadata.picture || `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(session.user.email || 'user')}`,
          provider: 'google'
        };
        this.saveUserSession(profile);
        onUserChanged(profile);
      } else if (event === 'SIGNED_OUT') {
        localStorage.removeItem(AUTH_STORAGE_KEY);
        onUserChanged(null);
      }
    });
  }
};
