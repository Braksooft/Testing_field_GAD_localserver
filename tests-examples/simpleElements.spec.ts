import { test, expect } from '@playwright/test';


test.describe("GAD example test", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/practice/simple-elements.html');
    });

    test("", async ({ page }) => {
        // Arrange:
        const labelelement = page.getByText(/Some text for label/);
        const ex = "Some text for label"
        const buttonelement = page.getByRole("button", { name: "Click me!" });
        const expectResult = page.locator('#results-container');
        const checkboxelement = page.getByRole("checkbox");
        const inputelement = page.getByTestId('dti-input');
        const textArea = page.getByTestId('dti-textarea');
        const inputMessage = "input text";
        const dropdown = page.getByTestId("dti-dropdown");
        const radioButton = page.locator("#id-radio1")
        const rangeBar = page.getByTestId('dti-range');
        const hooverMouse = page.getByTestId('dti-tooltip-element')
        const dateEnter = page.getByTestId("dti-date")
        const colorPicker = page.getByTestId("dti-color")
        

        Act:
        await buttonelement.click();
        await expect(expectResult).toHaveText("You clicked the button!")
        await checkboxelement.check();
        await expect(checkboxelement).toBeChecked();
        await expect(expectResult).toHaveText("Checkbox is checked!")
        await inputelement.fill(inputMessage)
        await expect(inputelement).toHaveValue('input text');
        await textArea.fill(inputMessage)
        await expect(textArea).toHaveValue('input text');
        await dropdown.selectOption('option1')
        await expect(expectResult).toHaveText("Selected option: option1")
        await radioButton.check();
        await expect(radioButton).toBeChecked()
        await rangeBar.fill('50')
        await expect(expectResult).toHaveText("Range value changed to: 50");
        await hooverMouse.hover()
        await expect(expectResult).toHaveText("Mouse over event occurred!");
        await dateEnter.fill('1999-01-31')
        await expect(expectResult).toHaveText("Selected date: 1999-01-31");
        await colorPicker.click()
        for (let index = 0; index < 3 ; index++) {
            await colorPicker.press("Tab")
             
        }
        
        // Assert:
        await expect(labelelement).toHaveText("Some text for label");
        
        
    });

});