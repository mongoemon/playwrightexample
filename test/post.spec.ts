const { test, expect } = require('@playwright/test');

test('Fetch all posts', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts');
  
  // Expect response status to be 200
  expect(response.status()).toBe(200);
  
  // Parse JSON response
  const posts = await response.json();

  // Validate data structure
  expect(Array.isArray(posts)).toBeTruthy();
  expect(posts.length).toBeGreaterThan(0);
  expect(posts[0]).toHaveProperty('id');
});
