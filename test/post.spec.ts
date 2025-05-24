import { test, expect } from '@playwright/test';

test('test posts', async ({ request }) => {
    // Create a new post
    const newPost = {
        title: 'New Post Title',
        body: 'This is the body of the new post.',
        userId: 1000,
    };
    
    const createResponse = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: newPost,
    });
    
    expect(createResponse.status()).toBe(201);
    
    const createdPost = await createResponse.json();
    expect(createdPost).toHaveProperty('id');
    expect(createdPost.title).toBe(newPost.title);
    expect(createdPost.body).toBe(newPost.body);

    // Note: Skipping the GET request as the API does not persist data
});