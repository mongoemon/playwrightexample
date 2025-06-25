# Playwright Example Project

## Project Overview
This project demonstrates best practices for UI and API testing using [Playwright](https://playwright.dev/). It includes:

- Page Object Model for UI tests (`page-objects/`)
- UI test scripts (`tests/bestpractice.spec.ts`)
- API test scripts (`tests/api.spec.ts`, `tests/api-real.spec.ts`)
- Example data files (`data/`)

### Key Files & Folders
- `page-objects/` — Page Object Model classes for UI automation
- `tests/bestpractice.spec.ts` — E2E UI tests for inventory management
- `tests/api.spec.ts` — Example API tests (JSONPlaceholder)
- `tests/api-real.spec.ts` — Real API tests (e.g., reqres.in or JSONPlaceholder)
- `playwright.config.ts` — Playwright configuration
- `package.json` — Project dependencies and scripts

## Installation

1. **Clone the repository**
   ```sh
   git clone <your-repo-url>
   cd playwrightexample
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Install Playwright browsers**
   ```sh
   npx playwright install
   ```

## Running Tests

### Run All Tests
```sh
npx playwright test
```

### Run a Specific Test File
```sh
npx playwright test tests/bestpractice.spec.ts
```

### Run in UI Mode (Recommended for Debugging)
```sh
npx playwright test --ui
```

## Running Tests with Different Environments

By default, tests run against the production environment (`https://www.saucedemo.com/`).

To run tests against a different environment, set the `TEST_ENV` variable:

### On Windows PowerShell
```powershell
$env:TEST_ENV="dev"; npx playwright test tests/test-env.spec.ts
```

### On Windows Command Prompt (cmd.exe)
```cmd
set TEST_ENV=dev && npx playwright test tests/test-env.spec.ts
```

### On macOS/Linux/bash
```sh
TEST_ENV=dev npx playwright test tests/test-env.spec.ts
```

Valid values for `TEST_ENV` are: `dev`, `staging`, `prod`.

## Additional Tips
- Update credentials and test data in `data/` as needed.
- Customize or add more page objects in `page-objects/` for new pages.
- See [Playwright Docs](https://playwright.dev/docs/intro) for more advanced usage.

---

Happy Testing!
