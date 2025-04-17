const { test, expect } = require('@playwright/test');

test('Update an existing post', async ({ request }) => {
  const updatedPost = {
    id: 1,
    title: 'Updated Post Title',
    body: 'This is an updated post body.',
    userId: 1,
  };

  const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
    data: updatedPost,
  });

  expect(response.status()).toBe(200);

  const responseData = await response.json();
  expect(responseData.title).toBe(updatedPost.title);
  expect(responseData.body).toBe(updatedPost.body);
});
