import {PlaywrightTestConfig} from '@playwright/test';
const BASE_URL = 'http://127.0.0.1:3000'
const config: PlaywrightTestConfig = {
    testDir: 'tests/visual',
    retries: 0,
    timeout: 50000,
    use: {
        baseURL: BASE_URL,
        headless: true,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 5000,
        ignoreHTTPSErrors: true,
        video: 'on-first-retry',
        screenshot: 'only-on-failure',
    },
    projects: [
        {
            name: 'chrome',
            use: { browserName: 'chromium' },
        },
        {
            name: 'firefox',
            use: { browserName: 'firefox' },
        },
        {
            name: 'webkit',
            use: { browserName: 'webkit' },
        },
    ],
    };
export default config;
    