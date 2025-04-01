import { test, expect } from "@playwright/test"
import { RegisterUser } from "../../pages/registerPage"
import { faker } from "@faker-js/faker";

const fs = require('fs');
const path = require('path');


test.describe("Login to Gad system ", () => {
    let registerUser: RegisterUser;

    test.beforeEach(async ({ page }) => {
        registerUser = new RegisterUser(page);
        await page.goto("/articles.html");
        await expect(page).toHaveTitle("🦎 GAD | Articles");
        await page.getByRole("alert", { name: "Login" });
        
    });

    test("Register to Gad - required field", async ({ page }) => {
        // Arrange:
        const loginIcon = page.getByTestId("btn-dropdown");
        const registerDropdown = page.locator("#registerBtn")
        const registerButton = page.getByTestId('register-button')
        const alertmeassage = page.getByText("This field is required")

        // Act:
        await loginIcon.hover() 
        await registerDropdown.click() 
        await registerButton.click()    
        // Assert:
        await expect(page).toHaveURL("/register.html");
        await expect(alertmeassage).toHaveCount(4)
    });

    test('Register User whit the same data', async ({page}) => {
        // Arrange:
        const assertpopup = page.getByTestId("alert-popup")
        const assertmessage = "User not created! Email not unique"
        // Act:
        // First use after reset database could be failed
        await registerUser.registerToGad("Jan","Kowalski","test@test.ts", "1999-01-31", "123456")
        // Assert:
        await expect(assertpopup).toHaveText(assertmessage)
    });

    test('Register New User', async ({page}) => {
        // Arrange:
        let email = faker.internet.email({ provider: 'example.fakerjs.dev' })
        let firstName = faker.person.firstName()
        let lastName =faker.person.lastName()
        // Act:
        await registerUser.registerToGad(firstName, lastName, email , "1999-01-31", "123456")
        let data = email
        fs.writeFileSync('register_user.ts', data);
        // Assert:
        await expect(page).toHaveURL("/login/");
    
    });
    test('Login User - valid', async ({page}) => {
        // Arrange:
        const password = "123456"
        const regUserFilePath = path.join(__dirname,'../../register_user.ts');
        const email = fs.readFileSync(regUserFilePath,'utf-8').trim();
        const assertLocator = page.getByTestId("hello")
        const assertmessage = `Hi ${email}`
        // Act:
        await registerUser.loginToApp(email, password)
        // console.log('Email z pliku:', email);
        // Assert:
        await expect(assertLocator).toContainText(assertmessage)
        
    });
    test('Login User - invalid', async ({page}) => {
        // Arrange:
        const password = "123456"
        const login = "test@test"
        const assertLocator = page.getByTestId("login-error")
        const assertmessage = "Invalid username or password"
        // Act:
        await registerUser.loginToApp(login, password)
        
        // Assert:
        await expect(assertLocator).toContainText(assertmessage)
        
    });

});