// File generated from our OpenAPI spec by Stainless.

import BraintrustSdkKotlin from 'braintrust-sdk-kotlin';
import { Response } from 'node-fetch';

const braintrustSdkKotlin = new BraintrustSdkKotlin({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource topLevel', () => {
  test('datasets', async () => {
    const responsePromise = braintrustSdkKotlin.topLevel.datasets('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('datasets: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      braintrustSdkKotlin.topLevel.datasets('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(BraintrustSdkKotlin.NotFoundError);
  });
});
