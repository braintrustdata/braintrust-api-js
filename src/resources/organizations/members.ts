// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Members extends APIResource {
  /**
   * Modify organization membership
   */
  update(
    body?: MemberUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.PatchOrganizationMembersOutput>;
  update(options?: Core.RequestOptions): Core.APIPromise<Shared.PatchOrganizationMembersOutput>;
  update(
    body: MemberUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.PatchOrganizationMembersOutput> {
    if (isRequestOptions(body)) {
      return this.update({}, body);
    }
    return this._client.patch('/v1/organization/members', { body, ...options });
  }
}

export interface MemberUpdateParams {
  /**
   * Users to invite to the organization
   */
  invite_users?: MemberUpdateParams.InviteUsers | null;

  /**
   * For nearly all users, this parameter should be unnecessary. But in the rare case
   * that your API key belongs to multiple organizations, or in case you want to
   * explicitly assert the organization you are modifying, you may specify the id of
   * the organization.
   */
  org_id?: string | null;

  /**
   * For nearly all users, this parameter should be unnecessary. But in the rare case
   * that your API key belongs to multiple organizations, or in case you want to
   * explicitly assert the organization you are modifying, you may specify the name
   * of the organization.
   */
  org_name?: string | null;

  /**
   * Users to remove from the organization
   */
  remove_users?: MemberUpdateParams.RemoveUsers | null;
}

export namespace MemberUpdateParams {
  /**
   * Users to invite to the organization
   */
  export interface InviteUsers {
    /**
     * Emails of users to invite
     */
    emails?: Array<string> | null;

    /**
     * Singular form of group_ids
     */
    group_id?: string | null;

    /**
     * Optional list of group ids to add newly-invited users to.
     */
    group_ids?: Array<string> | null;

    /**
     * Singular form of group_names
     */
    group_name?: string | null;

    /**
     * Optional list of group names to add newly-invited users to.
     */
    group_names?: Array<string> | null;

    /**
     * Ids of existing users to invite
     */
    ids?: Array<string> | null;

    /**
     * If true, send invite emails to the users who wore actually added
     */
    send_invite_emails?: boolean | null;
  }

  /**
   * Users to remove from the organization
   */
  export interface RemoveUsers {
    /**
     * Emails of users to remove
     */
    emails?: Array<string> | null;

    /**
     * Ids of users to remove
     */
    ids?: Array<string> | null;
  }
}

export declare namespace Members {
  export { type MemberUpdateParams as MemberUpdateParams };
}
