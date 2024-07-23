// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@braintrust/api/resource';
import { isRequestOptions } from '@braintrust/api/core';
import * as Core from '@braintrust/api/core';
import * as OrganizationAPI from '@braintrust/api/resources/organization';
import { ListObjects, type ListObjectsParams } from '@braintrust/api/pagination';

export class OrganizationResource extends APIResource {
  /**
   * Get a organization object by its id
   */
  retrieve(organizationId: string, options?: Core.RequestOptions): Core.APIPromise<Organization> {
    return this._client.get(`/v1/organization/${organizationId}`, options);
  }

  /**
   * Partially update a organization object. Specify the fields to update in the
   * payload. Any object-type fields will be deep-merged with existing content.
   * Currently we do not support removing fields or setting them to null.
   */
  update(
    organizationId: string,
    body?: OrganizationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Organization>;
  update(organizationId: string, options?: Core.RequestOptions): Core.APIPromise<Organization>;
  update(
    organizationId: string,
    body: OrganizationUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Organization> {
    if (isRequestOptions(body)) {
      return this.update(organizationId, {}, body);
    }
    return this._client.patch(`/v1/organization/${organizationId}`, { body, ...options });
  }

  /**
   * List out all organizations. The organizations are sorted by creation date, with
   * the most recently-created organizations coming first
   */
  list(
    query?: OrganizationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<OrganizationsListObjects, Organization>;
  list(options?: Core.RequestOptions): Core.PagePromise<OrganizationsListObjects, Organization>;
  list(
    query: OrganizationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<OrganizationsListObjects, Organization> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/organization', OrganizationsListObjects, { query, ...options });
  }

  /**
   * Delete a organization object by its id
   */
  delete(organizationId: string, options?: Core.RequestOptions): Core.APIPromise<Organization> {
    return this._client.delete(`/v1/organization/${organizationId}`, options);
  }
}

/**
 * Pagination for endpoints which list data objects
 */
export class OrganizationsListObjects extends ListObjects<Organization> {}

export interface Organization {
  /**
   * Unique identifier for the organization
   */
  id: string;

  /**
   * Name of the organization
   */
  name: string;

  api_url?: string | null;

  /**
   * Date of organization creation
   */
  created?: string | null;

  proxy_url?: string | null;

  realtime_url?: string | null;
}

export interface OrganizationUpdateParams {
  api_url?: string | null;

  /**
   * Name of the organization
   */
  name?: string | null;

  proxy_url?: string | null;

  realtime_url?: string | null;
}

export interface OrganizationListParams extends ListObjectsParams {
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
   * Name of the organization to search for
   */
  organization_name?: string;
}

export namespace OrganizationResource {
  export import Organization = OrganizationAPI.Organization;
  export import OrganizationsListObjects = OrganizationAPI.OrganizationsListObjects;
  export import OrganizationUpdateParams = OrganizationAPI.OrganizationUpdateParams;
  export import OrganizationListParams = OrganizationAPI.OrganizationListParams;
}
