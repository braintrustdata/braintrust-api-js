// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@braintrust/api/resource';
import { isRequestOptions } from '@braintrust/api/core';
import * as Core from '@braintrust/api/core';
import * as APIKeysAPI from '@braintrust/api/resources/api-keys';
import { ListObjects, type ListObjectsParams } from '@braintrust/api/pagination';

export class APIKeys extends APIResource {
  /**
   * Create a new api_key. It is possible to have multiple API keys with the same
   * name. There is no de-duplication
   */
  create(body: APIKeyCreateParams, options?: Core.RequestOptions): Core.APIPromise<APIKeyCreateResponse> {
    return this._client.post('/v1/api_key', { body, ...options });
  }

  /**
   * Get an api_key object by its id
   */
  retrieve(apiKeyId: string, options?: Core.RequestOptions): Core.APIPromise<APIKey> {
    return this._client.get(`/v1/api_key/${apiKeyId}`, options);
  }

  /**
   * List out all api_keys. The api_keys are sorted by creation date, with the most
   * recently-created api_keys coming first
   */
  list(query?: APIKeyListParams, options?: Core.RequestOptions): Core.PagePromise<APIKeysListObjects, APIKey>;
  list(options?: Core.RequestOptions): Core.PagePromise<APIKeysListObjects, APIKey>;
  list(
    query: APIKeyListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<APIKeysListObjects, APIKey> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/api_key', APIKeysListObjects, { query, ...options });
  }

  /**
   * Delete an api_key object by its id
   */
  delete(apiKeyId: string, options?: Core.RequestOptions): Core.APIPromise<APIKey> {
    return this._client.delete(`/v1/api_key/${apiKeyId}`, options);
  }
}

/**
 * Pagination for endpoints which list data objects
 */
export class APIKeysListObjects extends ListObjects<APIKey> {}

export interface APIKey {
  /**
   * Unique identifier for the api key
   */
  id: string;

  /**
   * Name of the api key
   */
  name: string;

  preview_name: string;

  /**
   * Date of api key creation
   */
  created?: string | null;

  /**
   * Unique identifier for the organization
   */
  org_id?: string | null;

  /**
   * Unique identifier for the user
   */
  user_id?: string | null;
}

export interface APIKeyCreateResponse {
  /**
   * Unique identifier for the api key
   */
  id: string;

  /**
   * The raw API key. It will only be exposed this one time
   */
  key: string;

  /**
   * Name of the api key
   */
  name: string;

  preview_name: string;

  /**
   * Date of api key creation
   */
  created?: string | null;

  /**
   * Unique identifier for the organization
   */
  org_id?: string | null;

  /**
   * Unique identifier for the user
   */
  user_id?: string | null;
}

export interface APIKeyCreateParams {
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

export interface APIKeyListParams extends ListObjectsParams {
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

export namespace APIKeys {
  export import APIKey = APIKeysAPI.APIKey;
  export import APIKeyCreateResponse = APIKeysAPI.APIKeyCreateResponse;
  export import APIKeysListObjects = APIKeysAPI.APIKeysListObjects;
  export import APIKeyCreateParams = APIKeysAPI.APIKeyCreateParams;
  export import APIKeyListParams = APIKeysAPI.APIKeyListParams;
}
