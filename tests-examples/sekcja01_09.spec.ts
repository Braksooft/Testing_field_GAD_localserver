import { test, expect } from '@playwright/test';


test.describe("GAD example test", () => {

test.beforeEach(async ({ page }) => {
  await page.goto('/practice/simple-multiple-elements-no-ids.html');

});


test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/🦎 GAD - Multiple elements without any ID or data-testid attributes/);
});

test("", async ({ page }) => {
  // test from
  // https://jaktestowac.pl/lesson/pw5s01l09/

  // Arrange:
  const checkBoxCount = await page.locator('[type="checkbox"]').count()
  const results = page.getByTestId("dti-results-container")
  const checkbox = page.locator('[type="checkbox"]')
  const checkboxOne = page.locator('[type="checkbox"]').first()
  const checkboxTwo = page.locator('[type="checkbox"]').nth(1)
  const checkboxThree = page.locator(`[onclick="checkBoxOnClick('(Opt 3!)', this)"]`)
  const checkboxfour = page.locator('[value="checkbox"]').nth(3)
  const checkboxfive = page.locator('[value="checkbox"]').last()

  // Act:
  console.log(`all checkbox element on side ${checkBoxCount}`)

  await checkboxOne.check()
  let isChecked = await checkboxOne.isChecked()
  console.log(`is checkbox is selected ${isChecked}`)
  await expect.soft(results).toContainText("Checkbox is checked! (Opt 1!)")

  await checkboxTwo.setChecked(true)
  isChecked = await checkboxTwo.isChecked()
  console.log(`is checkbox is selected ${isChecked}`)
  await expect.soft(results).toContainText("Checkbox is checked! (Opt 2!)")

  await checkboxThree.press("Enter")//false 
  isChecked = await checkboxThree.isChecked()
  console.log(`is checkbox is selected ${isChecked}`)
  await expect.soft(results).toContainText("Checkbox is checked! (Opt 3!)")

  await checkboxfour.click()
  isChecked = await checkboxfour.isChecked()
  console.log(`is checkbox is selected ${isChecked}`)
  await expect.soft(results).toContainText("Checkbox is checked! (Opt 4!)")

  await checkboxfive.dblclick() //false
  isChecked = await checkboxfive.isChecked()
  console.log(`is checkbox is selected ${isChecked}`)
  await expect.soft(results).toContainText("Checkbox is checked! (Opt 5!)")
 
  // case from jaktestować.pl 
  // const numberOfCheckbox = checkBoxCount

  // const expectedMessages = {
  //   0: `Checkbox is checked! (Opt 1!)`,
  //   1: `Checkbox is checked! (Opt 2!)`,
  //   2: `Checkbox is checked! (Opt 3!)`,
  //   3: `Checkbox is checked! (Opt 4!)`,
  //   4: `Checkbox is checked! (Opt 5!)`,
  // };
 
  // for (let index = 0; index < numberOfCheckbox; index++) {
  //   await checkbox.nth(index).check()
  //   console.log(await results.innerText())
  //   // Assert:
  //   await expect.soft(results).toHaveText(expectedMessages[index])
  // }

});
});

