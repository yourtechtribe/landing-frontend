const request = require('supertest');
const { app, text } = require('../../index');

describe('GET /', () => {
  it('should return Hello World', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe(text);
  });
});
