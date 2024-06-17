import { test, expect } from '@playwright/test';



test('Practice Page', async({ page }) => {

  await page.goto('https://www.google.com/search?q=youtube&oq=youtube&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDE0OTFqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'YouTube: Home YouTube https' }).click();

  await page.waitForTimeout(6000);

  await expect(page.getByLabel('Try searching to get started')).toBeVisible();

  await page.waitForTimeout(6000);

  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('Playwright Automation');
  await page.getByPlaceholder('Search').press('Enter');

  await expect(page.getByRole('link', { name: 'Playwright Beginner Tutorials Automation Step by Step · Playlist Verified' })).toBeVisible();
  await  page.locator('a').filter({ hasText: '14 videos Now playing' }).click();

  // await page.getByText('videos Now playing Play alls').click();

  await page.waitForTimeout(3000);
  await expect(page.getByRole('heading', { name: 'Playwright Beginner Tutorial 1 | What is Playwright', exact: true }).locator('yt-formatted-string')).toBeVisible();

  // await page.waitForTimeout(6000);

  await expect(page.getByRole('heading', { name: 'Playwright Beginner Tutorials' }).getByRole('link')).toBeVisible();
  await page.getByRole('link', { name: '▶ Playwright Beginner' }).click();

  // NAvigate to part 2 video
  await expect(page.getByRole('link', { name: 'Playwright Beginner Tutorial 2 | How to install by Automation Step by Step 25 minutes Automation Step by Step' })).toBeVisible();
  await page.getByRole('link', { name: 'Playwright Beginner Tutorial 2 | How to install by Automation Step by Step 25 minutes Automation Step by Step' }).click();

  
  // Navigate to part 3 video
  await page.getByRole('link', { name: '3 Playwright Beginner' }).click();
  await expect(page.getByRole('heading', { name: 'Playwright Beginner Tutorial 3 | How to run tests', exact: true }).locator('yt-formatted-string')).toBeVisible();

});