import {PlaywrightTestConfig} from '@playwright/test';
import path from 'path';
import fs from 'fs';

const BASE_URL = 'http://127.0.0.1:3000'
const filetoken = path.join(__dirname, 'token.json')
const token = JSON.parse(fs.readFileSync(filetoken, 'utf-8')).token
const config: PlaywrightTestConfig = {
    testDir: 'tests/api',
    retries: 0,
    timeout: 50000,
    use: {
        baseURL: BASE_URL,
        extraHTTPHeaders: {
            'Authorization': `Bearer ${token}`,
        },
        headless: true,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 5000,
        ignoreHTTPSErrors: true,
        video: 'off',
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
    