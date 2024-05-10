// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Braintrust from 'braintrust';
import { Response } from 'node-fetch';

const braintrust = new Braintrust({
  apiKey: 'My API Key',
  baseURL: 'My Base URL',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource prompt', () => {
  test('create: only required params', async () => {
    const responsePromise = braintrust.prompt.create({
      name: 'string',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      slug: 'string',
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
    const response = await braintrust.prompt.create({
      name: 'string',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      slug: 'string',
      description: 'string',
      prompt_data: {
        prompt: { type: 'completion', content: 'string' },
        options: {
          model: 'string',
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
          position: 'string',
        },
        origin: { prompt_id: 'string', project_id: 'string', prompt_version: 'string' },
      },
      tags: ['string', 'string', 'string'],
    });
  });

  test('retrieve', async () => {
    const responsePromise = braintrust.prompt.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      braintrust.prompt.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = braintrust.prompt.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      braintrust.prompt.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      braintrust.prompt.update(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          description: 'string',
          name: 'string',
          prompt_data: {
            prompt: { type: 'completion', content: 'string' },
            options: {
              model: 'string',
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
              position: 'string',
            },
            origin: { prompt_id: 'string', project_id: 'string', prompt_version: 'string' },
          },
          tags: ['string', 'string', 'string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = braintrust.prompt.list();
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
    await expect(braintrust.prompt.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Braintrust.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      braintrust.prompt.list(
        {
          ending_before: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ids: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          limit: 0,
          org_name: 'string',
          project_name: 'string',
          prompt_name: 'string',
          slug: 'string',
          starting_after: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          version: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = braintrust.prompt.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      braintrust.prompt.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('feedback: only required params', async () => {
    const responsePromise = braintrust.prompt.feedback('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
    const response = await braintrust.prompt.feedback('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      feedback: [
        { id: 'string', comment: 'string', metadata: { foo: {} }, source: 'app' },
        { id: 'string', comment: 'string', metadata: { foo: {} }, source: 'app' },
        { id: 'string', comment: 'string', metadata: { foo: {} }, source: 'app' },
      ],
    });
  });

  test('replace: only required params', async () => {
    const responsePromise = braintrust.prompt.replace({
      name: 'string',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      slug: 'string',
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
    const response = await braintrust.prompt.replace({
      name: 'string',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      slug: 'string',
      description: 'string',
      prompt_data: {
        prompt: { type: 'completion', content: 'string' },
        options: {
          model: 'string',
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
          position: 'string',
        },
        origin: { prompt_id: 'string', project_id: 'string', prompt_version: 'string' },
      },
      tags: ['string', 'string', 'string'],
    });
  });
});
