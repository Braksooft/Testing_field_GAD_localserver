import { test, expect } from '@playwright/test';
import { userGenerator, userOne } from '../pages/login.page';
import { text } from 'stream/consumers';


test.describe("Different elements disabled", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/register.html")
    });
    test("Checking required field", async ({ page }) => {
        // Arrange:
        const register_button = page.getByTestId("register-button")
        const required_field_message = ("This field is required")
        const elementLocator = page.locator('#octavalidate_firstname')
        
        // Act:
        await register_button.click()
       
        // Assert:

        await expect(elementLocator).toHaveText(required_field_message);
    })

    test("Valid login", async ({ page }) => {

        // Arrange:
        const firstNameField = page.getByTestId('firstname-input')
        const lastNameField = page.getByTestId('lastname-input')
        const userEmail = page.getByTestId('email-input')
        const birthDate = page.getByTestId('birthdate-input')
        const datePicker =page.getByRole("button",{name :"Done"})
        const password = page.getByTestId('password-input')
        const register_button = page.getByTestId("register-button")
        const user = new userGenerator();
        
        // Act:
        // obiekt user
        await firstNameField.fill(userOne.first_name)
        await lastNameField.fill(userOne.last_name)
        await userEmail.fill(userOne.email)
        await birthDate.fill(userOne.birth_date)
        await datePicker.click()
        await password.fill(userOne.password)

        //Generator nazw 
        // await firstNameField.fill(user.first_name)
        // await lastNameField.fill(user.last_name)
        // await userEmail.fill(user.mail)
        // await birthDate.fill(user.getBirthdateString())
        // await password.fill(user.password)
        
        await register_button.click()
       
        // Assert:
    })

    test("The same user login", async ({ page }) => {

        // Arrange:
        const firstNameField = page.getByTestId('firstname-input')
        const lastNameField = page.getByTestId('lastname-input')
        const userEmail = page.getByTestId('email-input')
        const birthDate = page.getByTestId('birthdate-input')
        const datePicker =page.getByRole("button",{name :"Done"})
        const password = page.getByTestId('password-input')
        const register_button = page.getByTestId("register-button")
        const popupField =page.getByTestId('alert-popup')
        const popupMessage = ('User not created! Email not unique')
        const user = new userGenerator();
        
        // Act:
        await firstNameField.fill(userOne.first_name)
        await lastNameField.fill(userOne.last_name)
        await userEmail.fill(userOne.email)
        await birthDate.fill(userOne.birth_date)
        await datePicker.click()
        await password.fill(userOne.password)

        await register_button.click()
       
        // Assert:
        await expect(popupField).toHaveText(popupMessage)
    })
});