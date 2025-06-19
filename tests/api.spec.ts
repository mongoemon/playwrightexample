import { test, expect, request } from '@playwright/test';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test.describe('API Request Examples', () => {
  test('GET request', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/posts/1`);
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data).toHaveProperty('id', 1);
  });

  test('POST request', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/posts`, {
      data: { title: 'foo', body: 'bar', userId: 1 },
    });
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data).toHaveProperty('title', 'foo');
  });

  test('PUT request', async ({ request }) => {
    const response = await request.put(`${BASE_URL}/posts/1`, {
      data: { id: 1, title: 'updated', body: 'bar', userId: 1 },
    });
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data).toHaveProperty('title', 'updated');
  });

  test('PATCH request', async ({ request }) => {
    const response = await request.patch(`${BASE_URL}/posts/1`, {
      data: { title: 'patched' },
    });
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data).toHaveProperty('title', 'patched');
  });

  test('DELETE request', async ({ request }) => {
    const response = await request.delete(`${BASE_URL}/posts/1`);
    expect(response.ok()).toBeTruthy();
  });
});