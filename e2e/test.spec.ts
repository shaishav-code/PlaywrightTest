import { test, expect } from '@playwright/test';

test('Practice Page', async({ page }) => {


    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    await page.locator('input[value="radio1"]').isVisible();

    await page.locator('input[value="radio1"]').click();

    // await page.pause();
    await page.locator('input[id="autocomplete"]').isVisible();
    await page.locator('input[id="autocomplete"]').fill('India');
    // await page.pause();
    await page.keyboard.press('ArrowDown');
    // await page.locator('input[id="autocomplete"]').isVisible();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    // await page.pause();
    await page.locator('select[id="dropdown-class-example"]').click();
    await page.locator('select[id="dropdown-class-example"]').selectOption({value :"option1"});

    // await page.pause();
    await page.locator('input[id="checkBoxOption1"]').click();

    // await page.pause();


})