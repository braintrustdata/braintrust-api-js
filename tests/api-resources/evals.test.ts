// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Braintrust from '@braintrust/api';
import { Response } from 'node-fetch';

const client = new Braintrust({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource evals', () => {
  test('create: only required params', async () => {
    const responsePromise = client.evals.create({
      data: { dataset_id: 'dataset_id' },
      project_id: 'project_id',
      scores: [
        { function_id: 'function_id' },
        { function_id: 'function_id' },
        { function_id: 'function_id' },
      ],
      task: { function_id: 'function_id' },
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
    const response = await client.evals.create({
      data: { dataset_id: 'dataset_id' },
      project_id: 'project_id',
      scores: [
        { function_id: 'function_id', version: 'version' },
        { function_id: 'function_id', version: 'version' },
        { function_id: 'function_id', version: 'version' },
      ],
      task: { function_id: 'function_id', version: 'version' },
      experiment_name: 'experiment_name',
      metadata: { foo: 'bar' },
      stream: true,
    });
  });
});
