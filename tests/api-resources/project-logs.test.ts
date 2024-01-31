// File generated from our OpenAPI spec by Stainless.

import BraintrustSdkKotlin from 'braintrust-sdk-kotlin';
import { Response } from 'node-fetch';

const braintrustSdkKotlin = new BraintrustSdkKotlin({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource projectLogs', () => {
  test('fetch', async () => {
    const responsePromise = braintrustSdkKotlin.projectLogs.fetch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      braintrustSdkKotlin.projectLogs.fetch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(BraintrustSdkKotlin.NotFoundError);
  });

  test('fetch: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      braintrustSdkKotlin.projectLogs.fetch(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { limit: 0, max_root_span_id: 'string', max_xact_id: 0, version: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(BraintrustSdkKotlin.NotFoundError);
  });

  test('insert: only required params', async () => {
    const responsePromise = braintrustSdkKotlin.projectLogs.insert('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
    const response = await braintrustSdkKotlin.projectLogs.insert('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      events: [
        {
          input: {},
          output: {},
          expected: {},
          scores: { foo: 0 },
          metadata: { foo: {} },
          metrics: { start: 0, end: 0 },
          context: { caller_functionname: 'string', caller_filename: 'string', caller_lineno: 0 },
          span_attributes: { name: 'string', type: 'llm' },
          id: 'string',
          _object_delete: true,
          _is_merge: true,
          _parent_id: 'string',
        },
        {
          input: {},
          output: {},
          expected: {},
          scores: { foo: 0 },
          metadata: { foo: {} },
          metrics: { start: 0, end: 0 },
          context: { caller_functionname: 'string', caller_filename: 'string', caller_lineno: 0 },
          span_attributes: { name: 'string', type: 'llm' },
          id: 'string',
          _object_delete: true,
          _is_merge: true,
          _parent_id: 'string',
        },
        {
          input: {},
          output: {},
          expected: {},
          scores: { foo: 0 },
          metadata: { foo: {} },
          metrics: { start: 0, end: 0 },
          context: { caller_functionname: 'string', caller_filename: 'string', caller_lineno: 0 },
          span_attributes: { name: 'string', type: 'llm' },
          id: 'string',
          _object_delete: true,
          _is_merge: true,
          _parent_id: 'string',
        },
      ],
    });
  });

  test('insertFetch', async () => {
    const responsePromise = braintrustSdkKotlin.projectLogs.insertFetch(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('insertFetch: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      braintrustSdkKotlin.projectLogs.insertFetch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(BraintrustSdkKotlin.NotFoundError);
  });

  test('insertFetch: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      braintrustSdkKotlin.projectLogs.insertFetch(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          filters: [
            { type: 'path_lookup', path: ['string', 'string', 'string'], value: {} },
            { type: 'path_lookup', path: ['string', 'string', 'string'], value: {} },
            { type: 'path_lookup', path: ['string', 'string', 'string'], value: {} },
          ],
          limit: 0,
          max_root_span_id: 'string',
          max_xact_id: 0,
          version: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(BraintrustSdkKotlin.NotFoundError);
  });

  test('logFeedback: only required params', async () => {
    const responsePromise = braintrustSdkKotlin.projectLogs.logFeedback(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { feedback: [{ id: 'string' }, { id: 'string' }, { id: 'string' }] },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('logFeedback: required and optional params', async () => {
    const response = await braintrustSdkKotlin.projectLogs.logFeedback(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        feedback: [
          {
            id: 'string',
            scores: { foo: 0 },
            expected: {},
            comment: 'string',
            metadata: { foo: {} },
            source: 'app',
          },
          {
            id: 'string',
            scores: { foo: 0 },
            expected: {},
            comment: 'string',
            metadata: { foo: {} },
            source: 'app',
          },
          {
            id: 'string',
            scores: { foo: 0 },
            expected: {},
            comment: 'string',
            metadata: { foo: {} },
            source: 'app',
          },
        ],
      },
    );
  });
});
