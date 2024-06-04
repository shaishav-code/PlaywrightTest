import { test, expect } from '@playwright/test';

test('Practice Page', async({ page }) => {


    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    await page.locator('input[value="radio1"]').isVisible;

    await page.locator('input[value="radio1"]').click;

    await page.locator('input[id="autocomplete"]').isVisible;
    await page.locator('input[id="autocomplete"]').fill('India');

    await page.locator
})