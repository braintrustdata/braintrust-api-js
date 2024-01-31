// File generated from our OpenAPI spec by Stainless.

import BraintrustSdkKotlin from 'braintrust-sdk-kotlin';
import { Response } from 'node-fetch';

const braintrustSdkKotlin = new BraintrustSdkKotlin({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource datasets', () => {
  test('create: only required params', async () => {
    const responsePromise = braintrustSdkKotlin.datasets.create({ name: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await braintrustSdkKotlin.datasets.create({
      name: 'string',
      description: 'string',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('retrieve', async () => {
    const responsePromise = braintrustSdkKotlin.datasets.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      braintrustSdkKotlin.datasets.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(BraintrustSdkKotlin.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = braintrustSdkKotlin.datasets.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      name: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await braintrustSdkKotlin.datasets.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      name: 'string',
      description: 'string',
    });
  });

  test('list', async () => {
    const responsePromise = braintrustSdkKotlin.datasets.list();
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
    await expect(braintrustSdkKotlin.datasets.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      BraintrustSdkKotlin.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      braintrustSdkKotlin.datasets.list(
        {
          dataset_name: 'string',
          ending_before: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          limit: 0,
          org_name: 'string',
          project_name: 'string',
          starting_after: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(BraintrustSdkKotlin.NotFoundError);
  });

  test('feedback: only required params', async () => {
    const responsePromise = braintrustSdkKotlin.datasets.feedback('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      feedback: [{ id: 'string' }, { id: 'string' }, { id: 'string' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('feedback: required and optional params', async () => {
    const response = await braintrustSdkKotlin.datasets.feedback('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      feedback: [
        { id: 'string', comment: 'string', metadata: { foo: {} }, source: 'app' },
        { id: 'string', comment: 'string', metadata: { foo: {} }, source: 'app' },
        { id: 'string', comment: 'string', metadata: { foo: {} }, source: 'app' },
      ],
    });
  });

  test('fetch', async () => {
    const responsePromise = braintrustSdkKotlin.datasets.fetch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('fetch: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      braintrustSdkKotlin.datasets.fetch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(BraintrustSdkKotlin.NotFoundError);
  });

  test('fetch: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      braintrustSdkKotlin.datasets.fetch(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { limit: 0, max_root_span_id: 'string', max_xact_id: 0, version: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(BraintrustSdkKotlin.NotFoundError);
  });

  test('insert: only required params', async () => {
    const responsePromise = braintrustSdkKotlin.datasets.insert('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      events: [{}, {}, {}],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('insert: required and optional params', async () => {
    const response = await braintrustSdkKotlin.datasets.insert('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      events: [
        {
          input: {},
          output: {},
          metadata: { foo: {} },
          id: 'string',
          _object_delete: true,
          _is_merge: true,
          _parent_id: 'string',
        },
        {
          input: {},
          output: {},
          metadata: { foo: {} },
          id: 'string',
          _object_delete: true,
          _is_merge: true,
          _parent_id: 'string',
        },
        {
          input: {},
          output: {},
          metadata: { foo: {} },
          id: 'string',
          _object_delete: true,
          _is_merge: true,
          _parent_id: 'string',
        },
      ],
    });
  });
});
