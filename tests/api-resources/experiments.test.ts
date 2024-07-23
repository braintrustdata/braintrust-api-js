// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Braintrust from '@braintrust/api';
import { Response } from 'node-fetch';

const braintrust = new Braintrust({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource experiments', () => {
  test('create: only required params', async () => {
    const responsePromise = braintrust.experiments.create({
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
    const response = await braintrust.experiments.create({
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      base_exp_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      dataset_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      dataset_version: 'dataset_version',
      description: 'description',
      ensure_new: true,
      metadata: { foo: {} },
      name: 'name',
      public: true,
      repo_info: {
        commit: 'commit',
        branch: 'branch',
        tag: 'tag',
        dirty: true,
        author_name: 'author_name',
        author_email: 'author_email',
        commit_message: 'commit_message',
        commit_time: 'commit_time',
        git_diff: 'git_diff',
      },
    });
  });

  test('retrieve', async () => {
    const responsePromise = braintrust.experiments.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      braintrust.experiments.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = braintrust.experiments.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      braintrust.experiments.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      braintrust.experiments.update(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          base_exp_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          dataset_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          dataset_version: 'dataset_version',
          description: 'description',
          metadata: { foo: {} },
          name: 'name',
          public: true,
          repo_info: {
            commit: 'commit',
            branch: 'branch',
            tag: 'tag',
            dirty: true,
            author_name: 'author_name',
            author_email: 'author_email',
            commit_message: 'commit_message',
            commit_time: 'commit_time',
            git_diff: 'git_diff',
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = braintrust.experiments.list();
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
    await expect(braintrust.experiments.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Braintrust.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      braintrust.experiments.list(
        {
          ending_before: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          experiment_name: 'experiment_name',
          ids: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          limit: 0,
          org_name: 'org_name',
          project_name: 'project_name',
          starting_after: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = braintrust.experiments.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      braintrust.experiments.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('feedback: only required params', async () => {
    const responsePromise = braintrust.experiments.feedback('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      feedback: [{ id: 'id' }, { id: 'id' }, { id: 'id' }],
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
    const response = await braintrust.experiments.feedback('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      feedback: [
        {
          id: 'id',
          scores: { foo: 0 },
          expected: {},
          comment: 'comment',
          metadata: { foo: {} },
          source: 'app',
        },
        {
          id: 'id',
          scores: { foo: 0 },
          expected: {},
          comment: 'comment',
          metadata: { foo: {} },
          source: 'app',
        },
        {
          id: 'id',
          scores: { foo: 0 },
          expected: {},
          comment: 'comment',
          metadata: { foo: {} },
          source: 'app',
        },
      ],
    });
  });

  test('fetch', async () => {
    const responsePromise = braintrust.experiments.fetch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      braintrust.experiments.fetch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('fetch: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      braintrust.experiments.fetch(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { limit: 0, max_root_span_id: 'max_root_span_id', max_xact_id: 'max_xact_id', version: 'version' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('fetchPost', async () => {
    const responsePromise = braintrust.experiments.fetchPost('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      braintrust.experiments.fetchPost('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('fetchPost: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      braintrust.experiments.fetchPost(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          cursor: 'cursor',
          filters: [
            { type: 'path_lookup', path: ['string', 'string', 'string'], value: {} },
            { type: 'path_lookup', path: ['string', 'string', 'string'], value: {} },
            { type: 'path_lookup', path: ['string', 'string', 'string'], value: {} },
          ],
          limit: 0,
          max_root_span_id: 'max_root_span_id',
          max_xact_id: 'max_xact_id',
          version: 'version',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('insert: only required params', async () => {
    const responsePromise = braintrust.experiments.insert('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
    const response = await braintrust.experiments.insert('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      events: [
        {
          input: {},
          output: {},
          expected: {},
          scores: { foo: 0 },
          metadata: { foo: {} },
          tags: ['string', 'string', 'string'],
          metrics: { start: 0, end: 0, prompt_tokens: 0, completion_tokens: 0, tokens: 0 },
          context: {
            caller_functionname: 'caller_functionname',
            caller_filename: 'caller_filename',
            caller_lineno: 0,
          },
          span_attributes: { name: 'name', type: 'llm' },
          id: 'id',
          dataset_record_id: 'dataset_record_id',
          created: '2019-12-27T18:11:19.117Z',
          _object_delete: true,
          _is_merge: true,
          _parent_id: '_parent_id',
        },
        {
          input: {},
          output: {},
          expected: {},
          scores: { foo: 0 },
          metadata: { foo: {} },
          tags: ['string', 'string', 'string'],
          metrics: { start: 0, end: 0, prompt_tokens: 0, completion_tokens: 0, tokens: 0 },
          context: {
            caller_functionname: 'caller_functionname',
            caller_filename: 'caller_filename',
            caller_lineno: 0,
          },
          span_attributes: { name: 'name', type: 'llm' },
          id: 'id',
          dataset_record_id: 'dataset_record_id',
          created: '2019-12-27T18:11:19.117Z',
          _object_delete: true,
          _is_merge: true,
          _parent_id: '_parent_id',
        },
        {
          input: {},
          output: {},
          expected: {},
          scores: { foo: 0 },
          metadata: { foo: {} },
          tags: ['string', 'string', 'string'],
          metrics: { start: 0, end: 0, prompt_tokens: 0, completion_tokens: 0, tokens: 0 },
          context: {
            caller_functionname: 'caller_functionname',
            caller_filename: 'caller_filename',
            caller_lineno: 0,
          },
          span_attributes: { name: 'name', type: 'llm' },
          id: 'id',
          dataset_record_id: 'dataset_record_id',
          created: '2019-12-27T18:11:19.117Z',
          _object_delete: true,
          _is_merge: true,
          _parent_id: '_parent_id',
        },
      ],
    });
  });

  test('summarize', async () => {
    const responsePromise = braintrust.experiments.summarize('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('summarize: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      braintrust.experiments.summarize('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('summarize: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      braintrust.experiments.summarize(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { comparison_experiment_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', summarize_scores: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });
});
