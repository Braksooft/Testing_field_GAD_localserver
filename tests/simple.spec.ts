import { test, expect } from '@playwright/test';

test.describe("GAD example test", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('practice/simple-elements.html');
  });

  test("", async ({ page }) => {
    // Arrange:
    const labelelement = page.getByLabel("label");
    const buttonelement = page.getByRole("button", { name: "Click me!" });
    const checkboxelement = page.getByRole("checkbox");
    const inputelement = page.getByTestId("dti-input");
   
    

    // Act:
    await buttonelement.click();
    await checkboxelement.check();
    await inputelement.fill("test text")
  

    // Assert:
    await expect(labelelement).toBeVisible()
  });
});