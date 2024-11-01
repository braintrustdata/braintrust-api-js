// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';
import { AISecretsListObjects } from './shared';
import { type ListObjectsParams } from '../pagination';

export class AISecrets extends APIResource {
  /**
   * Create a new ai_secret. If there is an existing ai_secret with the same name as
   * the one specified in the request, will return the existing ai_secret unmodified
   */
  create(body: AISecretCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.AISecret> {
    return this._client.post('/v1/ai_secret', { body, ...options });
  }

  /**
   * Get an ai_secret object by its id
   */
  retrieve(aiSecretId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.AISecret> {
    return this._client.get(`/v1/ai_secret/${aiSecretId}`, options);
  }

  /**
   * Partially update an ai_secret object. Specify the fields to update in the
   * payload. Any object-type fields will be deep-merged with existing content.
   * Currently we do not support removing fields or setting them to null.
   */
  update(
    aiSecretId: string,
    body?: AISecretUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.AISecret>;
  update(aiSecretId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.AISecret>;
  update(
    aiSecretId: string,
    body: AISecretUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.AISecret> {
    if (isRequestOptions(body)) {
      return this.update(aiSecretId, {}, body);
    }
    return this._client.patch(`/v1/ai_secret/${aiSecretId}`, { body, ...options });
  }

  /**
   * List out all ai_secrets. The ai_secrets are sorted by creation date, with the
   * most recently-created ai_secrets coming first
   */
  list(
    query?: AISecretListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AISecretsListObjects, Shared.AISecret>;
  list(options?: Core.RequestOptions): Core.PagePromise<AISecretsListObjects, Shared.AISecret>;
  list(
    query: AISecretListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AISecretsListObjects, Shared.AISecret> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/ai_secret', AISecretsListObjects, { query, ...options });
  }

  /**
   * Delete an ai_secret object by its id
   */
  delete(aiSecretId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.AISecret> {
    return this._client.delete(`/v1/ai_secret/${aiSecretId}`, options);
  }

  /**
   * Delete a single ai_secret
   */
  findAndDelete(
    body: AISecretFindAndDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.AISecret> {
    return this._client.delete('/v1/ai_secret', { body, ...options });
  }

  /**
   * Create or replace ai_secret. If there is an existing ai_secret with the same
   * name as the one specified in the request, will replace the existing ai_secret
   * with the provided fields
   */
  replace(body: AISecretReplaceParams, options?: Core.RequestOptions): Core.APIPromise<Shared.AISecret> {
    return this._client.put('/v1/ai_secret', { body, ...options });
  }
}

export interface AISecretCreateParams {
  /**
   * Name of the AI secret
   */
  name: string;

  metadata?: Record<string, unknown> | null;

  /**
   * For nearly all users, this parameter should be unnecessary. But in the rare case
   * that your API key belongs to multiple organizations, you may specify the name of
   * the organization the AI Secret belongs in.
   */
  org_name?: string | null;

  /**
   * Secret value. If omitted in a PUT request, the existing secret value will be
   * left intact, not replaced with null.
   */
  secret?: string | null;

  type?: string | null;
}

export interface AISecretUpdateParams {
  metadata?: Record<string, unknown> | null;

  /**
   * Name of the AI secret
   */
  name?: string | null;

  secret?: string | null;

  type?: string | null;
}

export interface AISecretListParams extends ListObjectsParams {
  /**
   * Name of the ai_secret to search for
   */
  ai_secret_name?: string;

  ai_secret_type?: string | Array<string>;

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

export interface AISecretFindAndDeleteParams {
  /**
   * Name of the AI secret
   */
  name: string;

  /**
   * For nearly all users, this parameter should be unnecessary. But in the rare case
   * that your API key belongs to multiple organizations, you may specify the name of
   * the organization the AI Secret belongs in.
   */
  org_name?: string | null;
}

export interface AISecretReplaceParams {
  /**
   * Name of the AI secret
   */
  name: string;

  metadata?: Record<string, unknown> | null;

  /**
   * For nearly all users, this parameter should be unnecessary. But in the rare case
   * that your API key belongs to multiple organizations, you may specify the name of
   * the organization the AI Secret belongs in.
   */
  org_name?: string | null;

  /**
   * Secret value. If omitted in a PUT request, the existing secret value will be
   * left intact, not replaced with null.
   */
  secret?: string | null;

  type?: string | null;
}

export declare namespace AISecrets {
  export {
    type AISecretCreateParams as AISecretCreateParams,
    type AISecretUpdateParams as AISecretUpdateParams,
    type AISecretListParams as AISecretListParams,
    type AISecretFindAndDeleteParams as AISecretFindAndDeleteParams,
    type AISecretReplaceParams as AISecretReplaceParams,
  };
}

export { AISecretsListObjects };
