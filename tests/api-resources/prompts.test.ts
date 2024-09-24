// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Braintrust from '@braintrust/api';
import { Response } from 'node-fetch';

const client = new Braintrust({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource prompts', () => {
  test('create: only required params', async () => {
    const responsePromise = client.prompts.create({
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
    const response = await client.prompts.create({
      name: 'name',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      slug: 'slug',
      description: 'description',
      function_type: 'llm',
      prompt_data: {
        options: {
          model: 'model',
          params: {
            frequency_penalty: 0,
            function_call: 'auto',
            max_tokens: 0,
            n: 0,
            presence_penalty: 0,
            response_format: { type: 'json_object' },
            stop: ['string', 'string', 'string'],
            temperature: 0,
            tool_choice: 'auto',
            top_p: 0,
            use_cache: true,
          },
          position: 'position',
        },
        origin: { project_id: 'project_id', prompt_id: 'prompt_id', prompt_version: 'prompt_version' },
        parser: { choice_scores: { foo: 0 }, type: 'llm_classifier', use_cot: true },
        prompt: { content: 'content', type: 'completion' },
        tool_functions: [
          { id: 'id', type: 'function' },
          { id: 'id', type: 'function' },
          { id: 'id', type: 'function' },
        ],
      },
      tags: ['string', 'string', 'string'],
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.prompts.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.prompts.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.prompts.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.prompts.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.prompts.update(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          description: 'description',
          name: 'name',
          prompt_data: {
            options: {
              model: 'model',
              params: {
                frequency_penalty: 0,
                function_call: 'auto',
                max_tokens: 0,
                n: 0,
                presence_penalty: 0,
                response_format: { type: 'json_object' },
                stop: ['string', 'string', 'string'],
                temperature: 0,
                tool_choice: 'auto',
                top_p: 0,
                use_cache: true,
              },
              position: 'position',
            },
            origin: { project_id: 'project_id', prompt_id: 'prompt_id', prompt_version: 'prompt_version' },
            parser: { choice_scores: { foo: 0 }, type: 'llm_classifier', use_cot: true },
            prompt: { content: 'content', type: 'completion' },
            tool_functions: [
              { id: 'id', type: 'function' },
              { id: 'id', type: 'function' },
              { id: 'id', type: 'function' },
            ],
          },
          slug: 'slug',
          tags: ['string', 'string', 'string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.prompts.list();
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
    await expect(client.prompts.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Braintrust.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.prompts.list(
        {
          ending_before: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ids: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          limit: 0,
          org_name: 'org_name',
          project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          project_name: 'project_name',
          prompt_name: 'prompt_name',
          slug: 'slug',
          starting_after: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          version: 'version',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.prompts.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.prompts.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('replace: only required params', async () => {
    const responsePromise = client.prompts.replace({
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
    const response = await client.prompts.replace({
      name: 'name',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      slug: 'slug',
      description: 'description',
      function_type: 'llm',
      prompt_data: {
        options: {
          model: 'model',
          params: {
            frequency_penalty: 0,
            function_call: 'auto',
            max_tokens: 0,
            n: 0,
            presence_penalty: 0,
            response_format: { type: 'json_object' },
            stop: ['string', 'string', 'string'],
            temperature: 0,
            tool_choice: 'auto',
            top_p: 0,
            use_cache: true,
          },
          position: 'position',
        },
        origin: { project_id: 'project_id', prompt_id: 'prompt_id', prompt_version: 'prompt_version' },
        parser: { choice_scores: { foo: 0 }, type: 'llm_classifier', use_cot: true },
        prompt: { content: 'content', type: 'completion' },
        tool_functions: [
          { id: 'id', type: 'function' },
          { id: 'id', type: 'function' },
          { id: 'id', type: 'function' },
        ],
      },
      tags: ['string', 'string', 'string'],
    });
  });
});
