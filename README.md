# SauceDemo UI Tests with Playwright

This project contains UI automation tests for the [SauceDemo](https://www.saucedemo.com) website using Playwright with JavaScript.

## Prerequisites

- Node.js  **v16+** installed

verify installation:

```bash
node -v
npm -v
```

## Installation

```bash
npm install
npx playwright install
```


## Running Tests

### Local with UI (headed)
```bash
npx playwright test --headed
```

### Run Specific test
```bash
npx playwright test tests/09_sort_products.test.js
```

### View HTML Report
```bash
npx playwright show-report
```

## Environment Setup

Create a `.env` file in the root directory for local run:

```env
SAUCE_USERNAME=standard_user
SAUCE_PASSWORD=secret_sauce
SAUCE_LOCKED_USER=locked_out_user
```

These values are loaded using `dotenv` and should be kept as secret variables in CI/CD.



## GitHub Actions / CI

Use GitHub secrets for CI environment variables:

```yaml
env:
  SAUCE_USERNAME: ${{ secrets.SAUCE_USERNAME }}
  SAUCE_PASSWORD: ${{ secrets.SAUCE_PASSWORD }}
  SAUCE_LOCKED_USER: ${{ secrets.SAUCE_LOCKED_USER }}
```

Add `require('dotenv').config();` in helper files or config to enable secret loading.



## Best Practices Used for the framework and test suites

- POM (Page Object Model) abstraction
- SOLID principles applied via encapsulated classes
- Custom test wrappers for login context (`testWithLogin`)
- No duplicated locators or login steps
- Easy-to-maintain, scalable test setup

## Future Enhancements

The current test framework is fully functional and scalable, below are some improvements for future:

### 1. Storage State (Session Reuse)
- Record login session using `storageState`
- Avoid repeated logins across tests this can improve test suite speed and reduce backend load

### 2. Test Tagging , grouping and  Filtering
- Add tags like `@smoke`, `@regression`, `@e2e`

### 3. Test Coverage Reporting
- Integrate with tools like `playwright-coverage` or `nyc`
- Measure what parts of the app are being tested and identify gaps in UI automation

### 4. Data-Driven Testing
- Drive tests using external JSON, CSV, or API data
- Parameterize login and checkout flows with multiple datasets

### 5. Cloud/CI Integration
- Run tests on GitHub Actions, GitLab CI, or CircleCI
- Use Playwright Docker image for isolated builds

### 6. Better Test Report Management
- Integrate Allure or custom HTML dashboards
- Store screenshots/videos in CI artifacts
- Auto-email test reports to stakeholders

### 7. Custom Test Utilities
- Retry flaky test steps
- Central test logger with appropriate levels
- Role-based login utilities
