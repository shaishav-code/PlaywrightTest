import { test, expect } from '@playwright/test';
import { isDataView } from 'util/types';

// test('test', async ({ page }) => {
//   await page.goto('https://www.google.com/search?q=playwright&oq=playwright&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCTEyNTkxajBqMqgCALACAQ&sourceid=chrome&ie=UTF-8');
//   await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
//   await page.getByRole('link', { name: 'Get started' }).click();
//   await page.getByRole('link', { name: 'Generating tests' }).click();
//   await expect(page.getByRole('heading', { name: 'Generating tests'})).toBeVisible();
// });

test('Green RFP', async ({ page }) => {
  
  // test.setTimeout(10000);

  await page.goto('https://uat.thegreenrfp.com/login');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('shd.narola@mailinator.com');

  await page.getByLabel('Email').press('Enter');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('Dev@1234');
  // await page.pause();
  await page.locator("button[type='submit']").isVisible;
  await page.getByLabel('LOG IN', { exact: true }).click();
  // await page.pause();
  await page.locator("div[class='ph-24 border-bottom ng-scope layout-align-space-between-center layout-row']").isVisible;
  await page.getByRole('link', { name: ' RFP\'s/Bids' }).click();
  await page.locator('div[ng-if="vm.slides.length > 0 && !vm.placeholder_loader"]').isVisible;
  await page.getByRole('button', { name: 'Create' }).click();
  //  await page.pause();
   await page.locator("md-radio-button[ng-disabled='(kis_is_must_for_all == 1 && !vm.add_all_or_group_permission)']").isVisible;
  //  await page.pause();
  await page.locator("button[class='md-raised md-accent md-button md-default-theme md-ink-ripple']").isVisible;
  await page.getByLabel('Start From Scratch').click();
  page.waitForSelector("button[class='md-raised md-accent md-button md-default-theme md-ink-ripple']");
  await page.getByRole('button', { name: 'Continue' }).click();
  //  await page.pause();
  await page.locator('span[class="cke_top cke_reset_all"]').isVisible;
  await page.locator("input[ng-model='vm.name']").isVisible;
  await page.getByLabel('RFP/Bid Name').fill('Demo test rfp 00121');
  // await page.pause();
  // await page.locator('iframe[title="Rich Text Editor\\, editor1"]').isVisible;
  // await page.frameLocator('iframe[title="Rich Text Editor\\, editor1"]').locator('html').click();
  // await page.frameLocator('iframe[title="Rich Text Editor\\, editor1"]').locator('body').fill('test description.');
  // await page.pause();
  await page.locator("input[ng-model='vm.reference_number']").isVisible;
  await page.getByLabel('BID Number').click();
  await page.getByLabel('BID Number').fill('1234');
  // await page.pause();
  await page.locator('input[class="md-datepicker-input md-input"]').isVisible;
  await page.locator('md-input-container').filter({ hasText: 'Release Date' }).getByLabel('Open calendar').click();
  await page.getByLabel('Friday May 31').getByText('31').click();
  // await page.pause();
  await page.locator('md-select[class="md-underline mr-25 ng-pristine ng-untouched md-default-theme ng-empty ng-invalid ng-invalid-required"]').isVisible;
  await page.locator('#select_263').click();
  // await page.pause();
  await page.locator('div[class="md-text ng-binding"]').isVisible;
  await page.getByRole('option', { name: '12:00 AM' }).locator('div').click();
  await page.locator('#select_268').isVisible();
  await page.locator('#select_268').click();
  await page.getByRole('option', { name: '12:15 AM' }).locator('div').click();
  // await page.pause();
  await page.locator('button[class="md-raised md-accent md-button md-default-theme md-ink-ripple"]').isEnabled;
  await page.getByRole('button', { name: 'Continue' }).click();

})

// test('delete unwanted rfp', async ({ page }) => {

// await page.goto('https://uat.thegreenrfp.com/login');
// await page.getByLabel('Email').click();
// await page.getByLabel('Email').fill('shd.narola@mailinator.com');
// await page.getByLabel('Email').press('Enter');
// await page.getByLabel('Email').press('Enter');
// await page.getByLabel('Email').press('Enter');
// await page.getByLabel('Email').press('Enter');
// await page.getByLabel('Password', { exact: true }).click();
// await page.getByLabel('Password', { exact: true }).fill('Dev@1234');
// await page.getByLabel('LOG IN', { exact: true }).click();
// await page.locator('ms-widget-front').filter({ hasText: 'Active RFP\'s/BidsSearch Per' }).getByLabel('icon-magnify').click();
// await page.locator('class="search-box-button md-default-theme md-font material-icons icon-magnify"').click();
// await page.locator('#input_60').fill('Demo test rfp 00121');
// await page.getByRole('link', { name: ' RFP\'s/Bids' }).click();
// await page.getByLabel('icon-magnify').click();
// await page.getByLabel('Search').click();
// await page.getByLabel('Search').fill('demo test rfp 00121');
// await page.getByLabel('checkbox', { exact: true }).first().click();
// await page.getByLabel('Delete').click();
// await page.getByRole('button', { name: 'Yes' }).click();

// })