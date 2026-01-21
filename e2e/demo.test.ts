import { MYVAR } from '$lib/example.js';
import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
	console.log(`got MYVAR ${MYVAR}`)
	await page.goto('/');
	await expect(page.locator('h1')).toBeVisible();
});
