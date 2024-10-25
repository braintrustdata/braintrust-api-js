// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as EnvVarsAPI from './env-vars';
import * as Shared from './shared';

export class EnvVars extends APIResource {
  /**
   * Create a new env_var. If there is an existing env_var with the same name as the
   * one specified in the request, will return the existing env_var unmodified
   */
  create(body: EnvVarCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.EnvVar> {
    return this._client.post('/v1/env_var', { body, ...options });
  }

  /**
   * Get an env_var object by its id
   */
  retrieve(envVarId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.EnvVar> {
    return this._client.get(`/v1/env_var/${envVarId}`, options);
  }

  /**
   * Partially update an env_var object. Specify the fields to update in the payload.
   * Any object-type fields will be deep-merged with existing content. Currently we
   * do not support removing fields or setting them to null.
   */
  update(
    envVarId: string,
    body: EnvVarUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.EnvVar> {
    return this._client.patch(`/v1/env_var/${envVarId}`, { body, ...options });
  }

  /**
   * List out all env_vars. The env_vars are sorted by creation date, with the most
   * recently-created env_vars coming first
   */
  list(query?: EnvVarListParams, options?: Core.RequestOptions): Core.APIPromise<EnvVarListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<EnvVarListResponse>;
  list(
    query: EnvVarListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EnvVarListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/env_var', { query, ...options });
  }

  /**
   * Delete an env_var object by its id
   */
  delete(envVarId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.EnvVar> {
    return this._client.delete(`/v1/env_var/${envVarId}`, options);
  }

  /**
   * Create or replace env_var. If there is an existing env_var with the same name as
   * the one specified in the request, will replace the existing env_var with the
   * provided fields
   */
  replace(body: EnvVarReplaceParams, options?: Core.RequestOptions): Core.APIPromise<Shared.EnvVar> {
    return this._client.put('/v1/env_var', { body, ...options });
  }
}

export interface EnvVarListResponse {
  /**
   * A list of env_var objects
   */
  objects: Array<Shared.EnvVar>;
}

export interface EnvVarCreateParams {
  /**
   * The name of the environment variable
   */
  name: string;

  /**
   * The id of the object the environment variable is scoped for
   */
  object_id: string;

  /**
   * The type of the object the environment variable is scoped for
   */
  object_type: 'organization' | 'project' | 'function';

  /**
   * The value of the environment variable. Will be encrypted at rest.
   */
  value?: string | null;
}

export interface EnvVarUpdateParams {
  /**
   * The name of the environment variable
   */
  name: string;

  /**
   * The value of the environment variable. Will be encrypted at rest.
   */
  value?: string | null;
}

export interface EnvVarListParams {
  /**
   * Name of the env_var to search for
   */
  env_var_name?: string;

  /**
   * Filter search results to a particular set of object IDs. To specify a list of
   * IDs, include the query param multiple times
   */
  ids?: string | Array<string>;

  /**
   * Limit the number of objects to return
   */
  limit?: number | null;

  /**
   * The id of the object the environment variable is scoped for
   */
  object_id?: string;

  /**
   * The type of the object the environment variable is scoped for
   */
  object_type?: 'organization' | 'project' | 'function';
}

export interface EnvVarReplaceParams {
  /**
   * The name of the environment variable
   */
  name: string;

  /**
   * The id of the object the environment variable is scoped for
   */
  object_id: string;

  /**
   * The type of the object the environment variable is scoped for
   */
  object_type: 'organization' | 'project' | 'function';

  /**
   * The value of the environment variable. Will be encrypted at rest.
   */
  value?: string | null;
}

export namespace EnvVars {
  export type EnvVarListResponse = EnvVarsAPI.EnvVarListResponse;
  export type EnvVarCreateParams = EnvVarsAPI.EnvVarCreateParams;
  export type EnvVarUpdateParams = EnvVarsAPI.EnvVarUpdateParams;
  export type EnvVarListParams = EnvVarsAPI.EnvVarListParams;
  export type EnvVarReplaceParams = EnvVarsAPI.EnvVarReplaceParams;
}
