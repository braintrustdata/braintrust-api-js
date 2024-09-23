// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Braintrust from '@braintrust/api';
import { Response } from 'node-fetch';

const client = new Braintrust({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource acl', () => {
  test('create: only required params', async () => {
    const responsePromise = client.acl.create({
      object_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      object_type: 'organization',
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
    const response = await client.acl.create({
      object_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      object_type: 'organization',
      group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      permission: 'create',
      restrict_object_type: 'organization',
      role_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.acl.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.acl.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('list: only required params', async () => {
    const responsePromise = client.acl.list({
      object_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      object_type: 'organization',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.acl.list({
      object_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      object_type: 'organization',
      ending_before: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      ids: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      limit: 0,
      starting_after: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('delete', async () => {
    const responsePromise = client.acl.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.acl.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('batchUpdate', async () => {
    const responsePromise = client.acl.batchUpdate();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('batchUpdate: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.acl.batchUpdate({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Braintrust.NotFoundError,
    );
  });

  test('batchUpdate: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.acl.batchUpdate(
        {
          add_acls: [
            {
              object_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              object_type: 'organization',
              group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              permission: 'create',
              restrict_object_type: 'organization',
              role_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            },
            {
              object_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              object_type: 'organization',
              group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              permission: 'create',
              restrict_object_type: 'organization',
              role_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            },
            {
              object_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              object_type: 'organization',
              group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              permission: 'create',
              restrict_object_type: 'organization',
              role_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            },
          ],
          remove_acls: [
            {
              object_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              object_type: 'organization',
              group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              permission: 'create',
              restrict_object_type: 'organization',
              role_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            },
            {
              object_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              object_type: 'organization',
              group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              permission: 'create',
              restrict_object_type: 'organization',
              role_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            },
            {
              object_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              object_type: 'organization',
              group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              permission: 'create',
              restrict_object_type: 'organization',
              role_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            },
          ],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Braintrust.NotFoundError);
  });

  test('findAndDelete: only required params', async () => {
    const responsePromise = client.acl.findAndDelete({
      object_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      object_type: 'organization',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('findAndDelete: required and optional params', async () => {
    const response = await client.acl.findAndDelete({
      object_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      object_type: 'organization',
      group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      permission: 'create',
      restrict_object_type: 'organization',
      role_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
