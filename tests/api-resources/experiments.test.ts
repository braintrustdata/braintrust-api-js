// File generated from our OpenAPI spec by Stainless.

import BraintrustSdkKotlin from 'braintrust-sdk-kotlin';
import { Response } from 'node-fetch';

const braintrustSdkKotlin = new BraintrustSdkKotlin({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource experiments', () => {
  test('list', async () => {
    const responsePromise = braintrustSdkKotlin.experiments.list();
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
    await expect(braintrustSdkKotlin.experiments.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      BraintrustSdkKotlin.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      braintrustSdkKotlin.experiments.list(
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
    ).rejects.toThrow(BraintrustSdkKotlin.NotFoundError);
  });
});
