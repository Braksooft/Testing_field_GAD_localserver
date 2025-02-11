import { test, expect } from '@playwright/test';


test.describe("GAD example test", () => {

    test.beforeEach(async ({ page }) => {
      await page.goto('/practice/simple-reservation-v1.html');
    });
    
    test("", async ({ page }) => {
        // Arrange:
        const checkBoxFood = page.getByRole('row', { name: /Food/}).getByRole('checkbox')
        const buttonReserve = page.getByRole('row', { name: /23.10/}).getByRole('button')
        const buttonCheckout = page.getByRole('button').filter({hasText: "checkout"})
        const expetedMessage = page.locator('[id="results"]')
       
        
        // Act:
        await checkBoxFood.check()
        await buttonReserve.click()
        await buttonCheckout.click()
        
        // Assert:
        await expect(expetedMessage).toHaveText("Reservation for 23.10.2024 with features: Food for total price: 150$")
});

});

