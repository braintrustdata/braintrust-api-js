// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Braintrust from '@braintrust/api';
import { Response } from 'node-fetch';

const client = new Braintrust({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource views', () => {
  test('create: only required params', async () => {
    const responsePromise = client.views.create({
      name: 'name',
      object_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      object_type: 'organization',
      view_type: 'projects',
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
    const response = await client.views.create({
      name: 'name',
      object_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      object_type: 'organization',
      view_type: 'projects',
      deleted_at: '2019-12-27T18:11:19.117Z',
      options: {
        columnOrder: ['string'],
        columnSizing: { foo: 0 },
        columnVisibility: { foo: true },
        grouping: 'grouping',
        layout: 'layout',
        rowHeight: 'rowHeight',
      },
      user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      view_data: { search: { filter: [{}], match: [{}], sort: [{}], tag: [{}] } },
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.views.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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

  test('retrieve: required and optional params', async () => {
    const response = await client.views.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      object_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      object_type: 'organization',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.views.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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

  test('update: required and optional params', async () => {
    const response = await client.views.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      object_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      object_type: 'organization',
      name: 'name',
      options: {
        columnOrder: ['string'],
        columnSizing: { foo: 0 },
        columnVisibility: { foo: true },
        grouping: 'grouping',
        layout: 'layout',
        rowHeight: 'rowHeight',
      },
      user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      view_data: { search: { filter: [{}], match: [{}], sort: [{}], tag: [{}] } },
      view_type: 'projects',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.views.list({
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
    const response = await client.views.list({
      object_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      object_type: 'organization',
      ending_before: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      ids: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      limit: 0,
      starting_after: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      view_name: 'view_name',
      view_type: 'projects',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.views.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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

  test('delete: required and optional params', async () => {
    const response = await client.views.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      object_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      object_type: 'organization',
    });
  });

  test('replace: only required params', async () => {
    const responsePromise = client.views.replace({
      name: 'name',
      object_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      object_type: 'organization',
      view_type: 'projects',
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
    const response = await client.views.replace({
      name: 'name',
      object_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      object_type: 'organization',
      view_type: 'projects',
      deleted_at: '2019-12-27T18:11:19.117Z',
      options: {
        columnOrder: ['string'],
        columnSizing: { foo: 0 },
        columnVisibility: { foo: true },
        grouping: 'grouping',
        layout: 'layout',
        rowHeight: 'rowHeight',
      },
      user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      view_data: { search: { filter: [{}], match: [{}], sort: [{}], tag: [{}] } },
    });
  });
});
