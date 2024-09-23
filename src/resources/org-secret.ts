// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as OrgSecretAPI from './org-secret';
import * as Shared from './shared';
import { OrgSecretsListObjects } from './shared';
import { type ListObjectsParams } from '../pagination';

export class OrgSecret extends APIResource {
  /**
   * Create a new org_secret. If there is an existing org_secret with the same name
   * as the one specified in the request, will return the existing org_secret
   * unmodified
   */
  create(body: OrgSecretCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.OrgSecret> {
    return this._client.post('/v1/org_secret', { body, ...options });
  }

  /**
   * Get an org_secret object by its id
   */
  retrieve(orgSecretId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.OrgSecret> {
    return this._client.get(`/v1/org_secret/${orgSecretId}`, options);
  }

  /**
   * Partially update an org_secret object. Specify the fields to update in the
   * payload. Any object-type fields will be deep-merged with existing content.
   * Currently we do not support removing fields or setting them to null.
   */
  update(
    orgSecretId: string,
    body?: OrgSecretUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.OrgSecret>;
  update(orgSecretId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.OrgSecret>;
  update(
    orgSecretId: string,
    body: OrgSecretUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.OrgSecret> {
    if (isRequestOptions(body)) {
      return this.update(orgSecretId, {}, body);
    }
    return this._client.patch(`/v1/org_secret/${orgSecretId}`, { body, ...options });
  }

  /**
   * List out all org_secrets. The org_secrets are sorted by creation date, with the
   * most recently-created org_secrets coming first
   */
  list(
    query?: OrgSecretListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<OrgSecretsListObjects, Shared.OrgSecret>;
  list(options?: Core.RequestOptions): Core.PagePromise<OrgSecretsListObjects, Shared.OrgSecret>;
  list(
    query: OrgSecretListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<OrgSecretsListObjects, Shared.OrgSecret> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/org_secret', OrgSecretsListObjects, { query, ...options });
  }

  /**
   * Delete an org_secret object by its id
   */
  delete(orgSecretId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.OrgSecret> {
    return this._client.delete(`/v1/org_secret/${orgSecretId}`, options);
  }

  /**
   * Create or replace org_secret. If there is an existing org_secret with the same
   * name as the one specified in the request, will replace the existing org_secret
   * with the provided fields
   */
  replace(body: OrgSecretReplaceParams, options?: Core.RequestOptions): Core.APIPromise<Shared.OrgSecret> {
    return this._client.put('/v1/org_secret', { body, ...options });
  }
}

export interface OrgSecretCreateParams {
  /**
   * Name of the org secret
   */
  name: string;

  metadata?: Record<string, unknown> | null;

  /**
   * For nearly all users, this parameter should be unnecessary. But in the rare case
   * that your API key belongs to multiple organizations, you may specify the name of
   * the organization the Org Secret belongs in.
   */
  org_name?: string | null;

  /**
   * Secret value. If omitted in a PUT request, the existing secret value will be
   * left intact, not replaced with null.
   */
  secret?: string | null;

  type?: string | null;
}

export interface OrgSecretUpdateParams {
  metadata?: Record<string, unknown> | null;

  /**
   * Name of the org secret
   */
  name?: string | null;

  secret?: string | null;

  type?: string | null;
}

export interface OrgSecretListParams extends ListObjectsParams {
  /**
   * Filter search results to a particular set of object IDs. To specify a list of
   * IDs, include the query param multiple times
   */
  ids?: string | Array<string>;

  /**
   * Filter search results to within a particular organization
   */
  org_name?: string;

  /**
   * Name of the org_secret to search for
   */
  org_secret_name?: string;

  org_secret_type?: string | Array<string>;
}

export interface OrgSecretReplaceParams {
  /**
   * Name of the org secret
   */
  name: string;

  metadata?: Record<string, unknown> | null;

  /**
   * For nearly all users, this parameter should be unnecessary. But in the rare case
   * that your API key belongs to multiple organizations, you may specify the name of
   * the organization the Org Secret belongs in.
   */
  org_name?: string | null;

  /**
   * Secret value. If omitted in a PUT request, the existing secret value will be
   * left intact, not replaced with null.
   */
  secret?: string | null;

  type?: string | null;
}

export namespace OrgSecret {
  export import OrgSecretCreateParams = OrgSecretAPI.OrgSecretCreateParams;
  export import OrgSecretUpdateParams = OrgSecretAPI.OrgSecretUpdateParams;
  export import OrgSecretListParams = OrgSecretAPI.OrgSecretListParams;
  export import OrgSecretReplaceParams = OrgSecretAPI.OrgSecretReplaceParams;
}

export { OrgSecretsListObjects };
