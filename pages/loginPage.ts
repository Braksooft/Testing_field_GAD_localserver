import {Page, Locator} from '@playwright/test'

export class LoginPage {
    readonly page: Page
    readonly loginInput: Locator
    readonly passwordInput: Locator

    constructor
    (page: Page) {
        this.page = page
        this.loginInput = page.locator('#login')
        this.passwordInput = page.locator('#password')
    }
    
    async userData(login: string, password: string) {
        await this.loginInput.fill(login)
        await this.passwordInput.fill(password)
        await this.page.locator('button').click()
    }
}


