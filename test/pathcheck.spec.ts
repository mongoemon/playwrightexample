import { test, expect } from '@playwright/test';
import path from 'path';

test('upload file from different folders', async ({ page }) => {
    const parentFile = path.join(__dirname, '../test2/file.txt');
    const sameLevelFile = path.join(__dirname, './file.txt');
    const subfolderFile = path.join(__dirname, 'subfolder/file.txt');
	
	// Log paths
	console.log('Parent Folder Path:', parentFile);
	console.log('Same Level Folder Path:', sameLevelFile);
	console.log('Subfolder Path:', subfolderFile);

    // await page.goto('https://example.com');

    // Upload files example
    // await page.setInputFiles('input[type="file"]', parentFile);
});
