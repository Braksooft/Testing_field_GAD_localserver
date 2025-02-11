import { test, expect } from "@playwright/test";

test.describe("Articles page", () => {
    test.beforeEach(async ({ page }) => {
        // TODO: open the page
        await page.goto("/articles.html");
    });

    test("Checking the number of articles - default ", async ({ page }, testInfo) => {
        // Arrange:
        const articles = page.locator(".card-wrapper")
        const sortArticles = page.locator("#opt2")
        // Act:
        const text = await sortArticles.innerText()
        // Assert:
        await expect(articles).toHaveCount(6)
        expect(text).toContain("6")
        console.log(testInfo)
    });
    test("Checking navigation button ", async ({ page }) => {
        // Arrange:
        const pageCounter = page.getByTestId("current-page")
        const nextButton = page.getByTestId("next-button")
        // Act:
        await nextButton.click()
        // Assert:
        const text = await pageCounter.innerText()
        expect(text).toContain("2") 
    });
});