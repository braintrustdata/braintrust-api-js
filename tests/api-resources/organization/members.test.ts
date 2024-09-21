// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Braintrust, { toFile } from '@braintrust/api';
import { Response } from 'node-fetch';

const client = new Braintrust({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource members', () => {
  test('update', async () => {
    const responsePromise = client.organization.members.update();
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
    await expect(client.organization.members.update({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Braintrust.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.organization.members.update({ invite_users: { emails: ['string', 'string', 'string'], group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', group_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'], group_name: 'group_name', group_names: ['string', 'string', 'string'], ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'], send_invite_emails: true }, org_id: 'org_id', org_name: 'org_name', remove_users: { emails: ['string', 'string', 'string'], ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'] } }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Braintrust.NotFoundError);
  });
});
