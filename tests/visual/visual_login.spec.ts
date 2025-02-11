import { test, expect } from "@playwright/test";

test.describe.only("Visual Regresion Testing", () => {


    test("Snapshot - full page - login page ", async ({ page }) => {
        // Arrange:
        
        // Act:
        await page.goto("/login/");
        // Assert:
        expect(await page.screenshot()).toMatchSnapshot("full-page.png");
    });
    test("Snapshot - single element ", async ({ page }) => {
        // Arrange:
        const snapshotElement = page.locator("#loginButton")
        
        // Act:
        await page.goto("/login/");
        // Assert:
        expect(await snapshotElement.screenshot()).toMatchSnapshot("login-page.png");
    });
});