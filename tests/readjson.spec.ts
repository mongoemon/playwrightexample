import { test } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

test('Read from jsontext.json and write to output.json', async () => {
  const inputPath = path.resolve(__dirname, '../data/jsontext.json');
  const outputPath = path.resolve(__dirname, '../data/output.json');

  const rawData = fs.readFileSync(inputPath, 'utf-8');
  const jsonData = JSON.parse(rawData);

  // Modify or use data as needed
  const outputData = {
    originalMessage: jsonData.message,
    doubledCount: jsonData.count * 2,
    status: 'success'
  };

  fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf-8');
});
