// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Braintrust, { toFile } from '@braintrust/api';
import { Response } from 'node-fetch';

const client = new Braintrust({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource projectScore', () => {
  test('create: only required params', async () => {
    const responsePromise = client.projectScore.create({ name: 'name', project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', score_type: 'slider' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.projectScore.create({ name: 'name', project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', score_type: 'slider', categories: [{ name: 'name', value: 0 }, { name: 'name', value: 0 }, { name: 'name', value: 0 }], description: 'description' });
  });

  test('retrieve', async () => {
    const responsePromise = client.projectScore.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.projectScore.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Braintrust.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.projectScore.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.projectScore.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Braintrust.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.projectScore.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { categories: [{ name: 'name', value: 0 }, { name: 'name', value: 0 }, { name: 'name', value: 0 }], description: 'description', name: 'name', score_type: 'slider' }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Braintrust.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.projectScore.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.projectScore.list({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Braintrust.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.projectScore.list({ ending_before: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', ids: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', limit: 0, org_name: 'org_name', project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', project_name: 'project_name', project_score_name: 'project_score_name', score_type: 'slider', starting_after: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Braintrust.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.projectScore.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.projectScore.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Braintrust.NotFoundError);
  });

  test('replace: only required params', async () => {
    const responsePromise = client.projectScore.replace({ name: 'name', project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', score_type: 'slider' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('replace: required and optional params', async () => {
    const response = await client.projectScore.replace({ name: 'name', project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', score_type: 'slider', categories: [{ name: 'name', value: 0 }, { name: 'name', value: 0 }, { name: 'name', value: 0 }], description: 'description' });
  });
});
