export async function login_helpers(login, password, page) {
    // const login = "username"
    // const password = "password"

    await page.locator("#user_login").fill(login)
    await page.locator("#user_password").fill(password)
    await page.locator(".btn-primary").click()
}
