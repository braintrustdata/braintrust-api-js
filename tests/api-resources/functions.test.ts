// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Braintrust from '@braintrust/api';
import { Response } from 'node-fetch';

const braintrust = new Braintrust({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource functions', () => {
  test('create: only required params', async () => {
    const responsePromise = braintrust.functions.create({
      function_data: { type: 'prompt' },
      name: 'name',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      slug: 'slug',
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
    const response = await braintrust.functions.create({
      function_data: { type: 'prompt' },
      name: 'name',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      slug: 'slug',
      description: 'description',
      prompt_data: {
        prompt: { type: 'completion', content: 'content' },
        options: {
          model: 'model',
          params: {
            use_cache: true,
            temperature: 0,
            top_p: 0,
            max_tokens: 0,
            frequency_penalty: 0,
            presence_penalty: 0,
            response_format: { type: 'json_object' },
            tool_choice: 'auto',
            function_call: 'auto',
            n: 0,
            stop: ['string', 'string', 'string'],
          },
          position: 'position',
        },
        origin: { prompt_id: 'prompt_id', project_id: 'project_id', prompt_version: 'prompt_version' },
      },
      tags: ['string', 'string', 'string'],
    });
  });

  test('retrieve', async () => {
    const responsePromise = braintrust.functions.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      braintrust.functions.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = braintrust.functions.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      braintrust.functions.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      braintrust.functions.update(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          description: 'description',
          function_data: { type: 'prompt' },
          name: 'name',
          prompt_data: {
            prompt: { type: 'completion', content: 'content' },
            options: {
              model: 'model',
              params: {
                use_cache: true,
                temperature: 0,
                top_p: 0,
                max_tokens: 0,
                frequency_penalty: 0,
                presence_penalty: 0,
                response_format: { type: 'json_object' },
                tool_choice: 'auto',
                function_call: 'auto',
                n: 0,
                stop: ['string', 'string', 'string'],
              },
              position: 'position',
            },
            origin: { prompt_id: 'prompt_id', project_id: 'project_id', prompt_version: 'prompt_version' },
          },
          tags: ['string', 'string', 'string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = braintrust.functions.list();
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
    await expect(braintrust.functions.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Braintrust.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      braintrust.functions.list(
        {
          ending_before: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          function_name: 'function_name',
          ids: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          limit: 0,
          org_name: 'org_name',
          project_name: 'project_name',
          slug: 'slug',
          starting_after: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          version: 'version',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = braintrust.functions.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      braintrust.functions.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('feedback: only required params', async () => {
    const responsePromise = braintrust.functions.feedback('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
    const response = await braintrust.functions.feedback('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      feedback: [
        { id: 'id', comment: 'comment', metadata: { foo: {} }, source: 'app' },
        { id: 'id', comment: 'comment', metadata: { foo: {} }, source: 'app' },
        { id: 'id', comment: 'comment', metadata: { foo: {} }, source: 'app' },
      ],
    });
  });

  test('replace: only required params', async () => {
    const responsePromise = braintrust.functions.replace({
      function_data: { type: 'prompt' },
      name: 'name',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      slug: 'slug',
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
    const response = await braintrust.functions.replace({
      function_data: { type: 'prompt' },
      name: 'name',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      slug: 'slug',
      description: 'description',
      prompt_data: {
        prompt: { type: 'completion', content: 'content' },
        options: {
          model: 'model',
          params: {
            use_cache: true,
            temperature: 0,
            top_p: 0,
            max_tokens: 0,
            frequency_penalty: 0,
            presence_penalty: 0,
            response_format: { type: 'json_object' },
            tool_choice: 'auto',
            function_call: 'auto',
            n: 0,
            stop: ['string', 'string', 'string'],
          },
          position: 'position',
        },
        origin: { prompt_id: 'prompt_id', project_id: 'project_id', prompt_version: 'prompt_version' },
      },
      tags: ['string', 'string', 'string'],
    });
  });
});
