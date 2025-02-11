## New project to learn test automation with playwright on GAD software installed locally 

clone :
### https://github.com/jaktestowac/gad-gui-api-demo

in cmd : 

to install new modules
: npm i

-to start GAD
: npm run start

- to run agian 
: npm start

Commands

    -check NodeJS version
    node -v
    -new project with Playwright
    npm init playwright@latest
    -record tests for given site
    npx playwright codegen https://test.comp/
    -run tests without browser GUI
    npx playwright test
    -run tests with browser GUI
    npx playwright test --headed
    -view report
    npx playwright show-report
    -run Trace Viewer on zip file
    npx playwright show-trace trace.zip
    -run tests form exact file
    npx playwright test tests/login.spec.ts
    - run test from Ui mode
    npx playwright test --ui


Updating Playwright

    check if Playwright should be updated
    npm outdated @playwright/test
    update Playwright
    npm i @playwright/test
    update browsers
    npx playwright install
    verify Playwright version
    npx @playwright/test --version

- npx playwright test --ui 


