import request from 'supertest';
import app from '../../app.js';
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('API Tests with ES Modules', () => {
  it('GET / should return success message', async () => {
    const response = await request(app).get('/');
    expect(response.status).to.equal(200);
    expect(response.body.message).to.equal('Testing environment ready!');
    expect(response.body.moduleType).to.equal('ES modules');
  });

  it('GET /health should return health status', async () => {
    const response = await request(app).get('/health');
    expect(response.status).to.equal(200);
    expect(response.body.status).to.equal('healthy');
    expect(response.body.clear).to.not.be.undefined;
  });
});