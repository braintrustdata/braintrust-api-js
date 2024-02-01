// File generated from our OpenAPI spec by Stainless.

import Braintrustdata from 'braintrust';
import { Response } from 'node-fetch';

const braintrustdata = new Braintrustdata({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource experiment', () => {
  test('create: only required params', async () => {
    const responsePromise = braintrustdata.experiment.create({
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await braintrustdata.experiment.create({
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      base_exp_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      dataset_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      dataset_version: 'string',
      description: 'string',
      metadata: { foo: {} },
      name: 'string',
      public: true,
      repo_info: {
        commit: 'string',
        branch: 'string',
        tag: 'string',
        dirty: true,
        author_name: 'string',
        author_email: 'string',
        commit_message: 'string',
        commit_time: 'string',
        git_diff: 'string',
      },
    });
  });

  test('retrieve', async () => {
    const responsePromise = braintrustdata.experiment.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      braintrustdata.experiment.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Braintrustdata.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = braintrustdata.experiment.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
    await expect(
      braintrustdata.experiment.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Braintrustdata.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      braintrustdata.experiment.update(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          base_exp_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          dataset_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          dataset_version: 'string',
          description: 'string',
          metadata: { foo: {} },
          name: 'string',
          public: true,
          repo_info: {
            commit: 'string',
            branch: 'string',
            tag: 'string',
            dirty: true,
            author_name: 'string',
            author_email: 'string',
            commit_message: 'string',
            commit_time: 'string',
            git_diff: 'string',
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Braintrustdata.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = braintrustdata.experiment.list();
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
    await expect(braintrustdata.experiment.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Braintrustdata.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      braintrustdata.experiment.list(
        {
          ending_before: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          experiment_name: 'string',
          limit: 0,
          org_name: 'string',
          project_name: 'string',
          starting_after: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Braintrustdata.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = braintrustdata.experiment.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      braintrustdata.experiment.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Braintrustdata.NotFoundError);
  });

  test('feedback: only required params', async () => {
    const responsePromise = braintrustdata.experiment.feedback('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
    const response = await braintrustdata.experiment.feedback('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
    });
  });

  test('fetch', async () => {
    const responsePromise = braintrustdata.experiment.fetch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      braintrustdata.experiment.fetch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Braintrustdata.NotFoundError);
  });

  test('fetch: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      braintrustdata.experiment.fetch(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { limit: 0, max_root_span_id: 'string', max_xact_id: 0, version: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Braintrustdata.NotFoundError);
  });

  test('fetchPost', async () => {
    const responsePromise = braintrustdata.experiment.fetchPost('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
    await expect(
      braintrustdata.experiment.fetchPost('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Braintrustdata.NotFoundError);
  });

  test('fetchPost: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      braintrustdata.experiment.fetchPost(
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
    ).rejects.toThrow(Braintrustdata.NotFoundError);
  });

  test('insert: only required params', async () => {
    const responsePromise = braintrustdata.experiment.insert('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
    const response = await braintrustdata.experiment.insert('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
          dataset_record_id: 'string',
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
          dataset_record_id: 'string',
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
          dataset_record_id: 'string',
          _object_delete: true,
          _is_merge: true,
          _parent_id: 'string',
        },
      ],
    });
  });

  test('replace: only required params', async () => {
    const responsePromise = braintrustdata.experiment.replace({
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await braintrustdata.experiment.replace({
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      base_exp_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      dataset_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      dataset_version: 'string',
      description: 'string',
      metadata: { foo: {} },
      name: 'string',
      public: true,
      repo_info: {
        commit: 'string',
        branch: 'string',
        tag: 'string',
        dirty: true,
        author_name: 'string',
        author_email: 'string',
        commit_message: 'string',
        commit_time: 'string',
        git_diff: 'string',
      },
    });
  });
});
