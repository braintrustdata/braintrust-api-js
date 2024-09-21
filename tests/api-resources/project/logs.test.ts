// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Braintrust, { toFile } from '@braintrust/api';
import { Response } from 'node-fetch';

const client = new Braintrust({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource logs', () => {
  test('feedback: only required params', async () => {
    const responsePromise = client.project.logs.feedback('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { feedback: [{ id: 'id' }, { id: 'id' }, { id: 'id' }] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('feedback: required and optional params', async () => {
    const response = await client.project.logs.feedback('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { feedback: [{ id: 'id', scores: { foo: 0 }, expected: {}, comment: 'comment', metadata: { foo: {} }, source: 'app' }, { id: 'id', scores: { foo: 0 }, expected: {}, comment: 'comment', metadata: { foo: {} }, source: 'app' }, { id: 'id', scores: { foo: 0 }, expected: {}, comment: 'comment', metadata: { foo: {} }, source: 'app' }] });
  });

  test('fetch', async () => {
    const responsePromise = client.project.logs.fetch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
    await expect(client.project.logs.fetch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Braintrust.NotFoundError);
  });

  test('fetch: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.project.logs.fetch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { limit: 0, max_root_span_id: 'max_root_span_id', max_xact_id: 'max_xact_id', version: 'version' }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Braintrust.NotFoundError);
  });

  test('fetchPost', async () => {
    const responsePromise = client.project.logs.fetchPost('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('fetchPost: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.project.logs.fetchPost('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Braintrust.NotFoundError);
  });

  test('fetchPost: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.project.logs.fetchPost('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { cursor: 'cursor', filters: [{ type: 'path_lookup', path: ['string', 'string', 'string'], value: {} }, { type: 'path_lookup', path: ['string', 'string', 'string'], value: {} }, { type: 'path_lookup', path: ['string', 'string', 'string'], value: {} }], limit: 0, max_root_span_id: 'max_root_span_id', max_xact_id: 'max_xact_id', version: 'version' }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Braintrust.NotFoundError);
  });

  test('insert: only required params', async () => {
    const responsePromise = client.project.logs.insert('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { events: [{}, {}, {}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('insert: required and optional params', async () => {
    const response = await client.project.logs.insert('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { events: [{ input: {}, output: {}, expected: {}, error: {}, scores: { foo: 0 }, metadata: { foo: {} }, tags: ['string', 'string', 'string'], metrics: { start: 0, end: 0, prompt_tokens: 0, completion_tokens: 0, tokens: 0 }, context: { caller_functionname: 'caller_functionname', caller_filename: 'caller_filename', caller_lineno: 0 }, span_attributes: { name: 'name', type: 'llm' }, id: 'id', created: '2019-12-27T18:11:19.117Z', _object_delete: true, _is_merge: true, _parent_id: '_parent_id' }, { input: {}, output: {}, expected: {}, error: {}, scores: { foo: 0 }, metadata: { foo: {} }, tags: ['string', 'string', 'string'], metrics: { start: 0, end: 0, prompt_tokens: 0, completion_tokens: 0, tokens: 0 }, context: { caller_functionname: 'caller_functionname', caller_filename: 'caller_filename', caller_lineno: 0 }, span_attributes: { name: 'name', type: 'llm' }, id: 'id', created: '2019-12-27T18:11:19.117Z', _object_delete: true, _is_merge: true, _parent_id: '_parent_id' }, { input: {}, output: {}, expected: {}, error: {}, scores: { foo: 0 }, metadata: { foo: {} }, tags: ['string', 'string', 'string'], metrics: { start: 0, end: 0, prompt_tokens: 0, completion_tokens: 0, tokens: 0 }, context: { caller_functionname: 'caller_functionname', caller_filename: 'caller_filename', caller_lineno: 0 }, span_attributes: { name: 'name', type: 'llm' }, id: 'id', created: '2019-12-27T18:11:19.117Z', _object_delete: true, _is_merge: true, _parent_id: '_parent_id' }] });
  });
});
