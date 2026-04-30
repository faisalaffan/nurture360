// Global test setup for Vitest + Vue Test Utils
// This file runs before each test file

// Cleanup after each test to prevent state leakage
afterEach(() => {
  document.body.innerHTML = ''
})
