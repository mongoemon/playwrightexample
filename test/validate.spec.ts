import { test, expect } from '@playwright/test';

test('Validate first post object structure', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts');

  // Ensure the request was successful
  expect(response.ok()).toBeTruthy();

  const data = await response.json();

  // Confirm response is an array
  expect(Array.isArray(data)).toBeTruthy();
  expect(data.length).toBeGreaterThan(0);

  // Check the first object
  const post = data[0];

  expect(typeof post.userId).toBe('number');
  expect(typeof post.id).toBe('number');
  expect(typeof post.title).toBe('string');
  expect(typeof post.body).toBe('string');
});
