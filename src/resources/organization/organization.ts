// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { Members } from './members';
import * as OrganizationAPI from './organization';
import * as Shared from '../shared';
import { OrganizationsListObjects } from '../shared';
import * as MembersAPI from './members';
import { ListObjects, type ListObjectsParams } from '../../pagination';

export class Organization extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);

  /**
   * Get an organization object by its id
   */
  retrieve(organizationId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Organization> {
    return this._client.get(`/v1/organization/${organizationId}`, options);
  }

  /**
   * Partially update an organization object. Specify the fields to update in the
   * payload. Any object-type fields will be deep-merged with existing content.
   * Currently we do not support removing fields or setting them to null.
   */
  update(organizationId: string, body?: OrganizationUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Organization>
  update(organizationId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Organization>
  update(organizationId: string, body: OrganizationUpdateParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<Shared.Organization> {
    if (isRequestOptions(body)) {
      return this.update(organizationId, {}, body);
    }
    return this._client.patch(`/v1/organization/${organizationId}`, { body, ...options });
  }

  /**
   * List out all organizations. The organizations are sorted by creation date, with
   * the most recently-created organizations coming first
   */
  list(query?: OrganizationListParams, options?: Core.RequestOptions): Core.PagePromise<OrganizationsListObjects, Shared.Organization>
  list(options?: Core.RequestOptions): Core.PagePromise<OrganizationsListObjects, Shared.Organization>
  list(query: OrganizationListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.PagePromise<OrganizationsListObjects, Shared.Organization> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/organization', OrganizationsListObjects, { query, ...options });
  }

  /**
   * Delete an organization object by its id
   */
  delete(organizationId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Organization> {
    return this._client.delete(`/v1/organization/${organizationId}`, options);
  }
}

export interface OrganizationUpdateParams {
  api_url?: string | null;

  is_universal_api?: boolean | null;

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
}

export namespace Organization {
  export import OrganizationUpdateParams = OrganizationAPI.OrganizationUpdateParams;
  export import OrganizationListParams = OrganizationAPI.OrganizationListParams;
  export import Members = MembersAPI.Members;
  export import MemberUpdateResponse = MembersAPI.MemberUpdateResponse;
  export import MemberUpdateParams = MembersAPI.MemberUpdateParams;
}

export { OrganizationsListObjects }
