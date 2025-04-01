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
    test("Checking all name title in loop 2", async ({ page }) => {
        // Arrange:
        await page.goto('http://127.0.0.1:3000/practice/simple-elements.html')
    
        // Act:
        await page.locator(".my-button")
        page.locator('[data-testid="dti-button-element"]').click()
        // page.click("dti-button-element")
        page.click(".my-button")
        
        // Assert:
        
    });
    test("Checking all title name in loop", async ({ page }) => {
        // Arrange:
        const element = await page.locator('[data-testid*="article-"]').and(page.locator('[data-testid$="title"]'));
        const elements = await element.all();
        const titles: string [] = [];
        // Act:

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const titleText = await element.innerText();
            titles.push(titleText)
        }
        console.log(titles.length)
        console.log(titles)
        // Assert:
        
    });
});