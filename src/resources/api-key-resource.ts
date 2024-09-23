// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as APIKeyResourceAPI from './api-key-resource';
import * as Shared from './shared';
import { APIKeysListObjects } from './shared';
import { type ListObjectsParams } from '../pagination';

export class APIKeyResource extends APIResource {
  /**
   * Create a new api_key. It is possible to have multiple API keys with the same
   * name. There is no de-duplication
   */
  create(
    body: APIKeyResourceCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.CreateAPIKeyOutput> {
    return this._client.post('/v1/api_key', { body, ...options });
  }

  /**
   * Get an api_key object by its id
   */
  retrieve(apiKeyId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.APIKey> {
    return this._client.get(`/v1/api_key/${apiKeyId}`, options);
  }

  /**
   * List out all api_keys. The api_keys are sorted by creation date, with the most
   * recently-created api_keys coming first
   */
  list(
    query?: APIKeyResourceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<APIKeysListObjects, Shared.APIKey>;
  list(options?: Core.RequestOptions): Core.PagePromise<APIKeysListObjects, Shared.APIKey>;
  list(
    query: APIKeyResourceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<APIKeysListObjects, Shared.APIKey> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/api_key', APIKeysListObjects, { query, ...options });
  }

  /**
   * Delete an api_key object by its id
   */
  delete(apiKeyId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.APIKey> {
    return this._client.delete(`/v1/api_key/${apiKeyId}`, options);
  }
}

export interface APIKeyResourceCreateParams {
  /**
   * Name of the api key. Does not have to be unique
   */
  name: string;

  /**
   * For nearly all users, this parameter should be unnecessary. But in the rare case
   * that your API key belongs to multiple organizations, you may specify the name of
   * the organization the API key belongs in.
   */
  org_name?: string | null;
}

export interface APIKeyResourceListParams extends ListObjectsParams {
  /**
   * Name of the api_key to search for
   */
  api_key_name?: string;

  /**
   * Filter search results to a particular set of object IDs. To specify a list of
   * IDs, include the query param multiple times
   */
  ids?: string | Array<string>;

  /**
   * Filter search results to within a particular organization
   */
  org_name?: string;
}

export namespace APIKeyResource {
  export import APIKeyResourceCreateParams = APIKeyResourceAPI.APIKeyResourceCreateParams;
  export import APIKeyResourceListParams = APIKeyResourceAPI.APIKeyResourceListParams;
}

export { APIKeysListObjects };
