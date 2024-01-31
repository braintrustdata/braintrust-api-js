// File generated from our OpenAPI spec by Stainless.

import BraintrustSdkKotlin from 'braintrust-sdk-kotlin';
import { Response } from 'node-fetch';

const braintrustSdkKotlin = new BraintrustSdkKotlin({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v1', () => {
  test('helloWorld', async () => {
    const responsePromise = braintrustSdkKotlin.v1.helloWorld();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('helloWorld: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(braintrustSdkKotlin.v1.helloWorld({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      BraintrustSdkKotlin.NotFoundError,
    );
  });
});
