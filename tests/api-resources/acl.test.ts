// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Braintrust from 'braintrust';
import { Response } from 'node-fetch';

const braintrust = new Braintrust({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource acl', () => {
  test('create: only required params', async () => {
    const responsePromise = braintrust.acl.create({
      object_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      object_type: 'organization',
      permission: 'create',
      user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await braintrust.acl.create({
      object_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      object_type: 'organization',
      permission: 'create',
      user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      restrict_object_type: 'organization',
    });
  });

  test('retrieve', async () => {
    const responsePromise = braintrust.acl.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
    await expect(
      braintrust.acl.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('list: only required params', async () => {
    const responsePromise = braintrust.acl.list({
      object_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      object_type: 'organization',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await braintrust.acl.list({
      object_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      object_type: 'organization',
      ending_before: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      limit: 0,
      starting_after: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('delete', async () => {
    const responsePromise = braintrust.acl.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
    await expect(
      braintrust.acl.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('replace: only required params', async () => {
    const responsePromise = braintrust.acl.replace({
      object_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      object_type: 'organization',
      permission: 'create',
      user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('replace: required and optional params', async () => {
    const response = await braintrust.acl.replace({
      object_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      object_type: 'organization',
      permission: 'create',
      user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      restrict_object_type: 'organization',
    });
  });
});
