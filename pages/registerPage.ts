import { faker } from '@faker-js/faker'
import {Page, Locator} from '@playwright/test'

export class RegisterUser {
    readonly page: Page
    readonly loginIcon: Locator
    readonly registerDropdown: Locator
    readonly loginDropdown: Locator
    readonly firstName: Locator
    readonly lastName: Locator
    readonly email: Locator
    readonly birthDate: Locator
    readonly doneButton: Locator
    readonly password: Locator
    readonly registerButton: Locator
    readonly loginButton: Locator
    readonly username: Locator
    

    constructor(page: Page) {
        this.page = page
        this.loginIcon = page.getByTestId("btn-dropdown")
        this.registerDropdown = page.locator("#registerBtn")
        //login
        this.loginDropdown = page.locator('#loginBtn')
        this.firstName = page.locator("#firstName")
        this.lastName = page.locator("#lastName")
        this.email = page.locator("#email")
        this.birthDate = page.getByTestId("birthdate-input")
        this.doneButton = page.getByRole("button", {name: "Done"})
        this.password = page.locator("#password")
        this.registerButton = page.getByTestId('register-button')
        //login
        this.loginButton = page.locator('#loginButton')
        this.username = page.locator('.input-field').locator('#username')
        this.password = page.locator('#password')

    }
    async registerToGad(firstName: string, lastName: string, email: string, birthDate: string, password: string) {
        await this.loginIcon.hover()
        await this.registerDropdown.click()
        await this.firstName.fill(firstName)
        await this.lastName.fill(lastName)
        await this.email.fill(email)
        await this.birthDate.fill(birthDate)
        await this.doneButton.click()
        await this.password.fill(password)
        await this.registerButton.click()
            }
    async loginToApp(email: string, password: string) {
        await this.loginIcon.hover()
        await this.loginDropdown.click()
        await this.username.fill(email)
        await this.password.fill(password)
        await this.loginButton.click()
    }
}
