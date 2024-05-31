const {test, expect} = require ('@playwright/test');


test('My first demo', async ({page}) => {

    await page.goto('https://www.google.com/search?q=playwright&oq=playwright&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCTEyNTkxajBqMqgCALACAQ&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('link', { name: 'Generating tests' }).click();
  await expect(page.getByRole('heading', { name: 'Generating tests'})).toBeVisible();

});