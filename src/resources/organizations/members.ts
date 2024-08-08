// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as MembersAPI from './members';

export class Members extends APIResource {
  /**
   * Modify organization membership
   */
  update(body?: MemberUpdateParams, options?: Core.RequestOptions): Core.APIPromise<MemberUpdateResponse>
  update(options?: Core.RequestOptions): Core.APIPromise<MemberUpdateResponse>
  update(body: MemberUpdateParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<MemberUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update({}, body);
    }
    return this._client.patch('/v1/organization/members', { body, ...options });
  }
}

export interface MemberUpdateResponse {
  status: 'success';

  /**
   * If invite emails failed to send for some reason, the patch operation will still
   * complete, but we will return an error message here
   */
  send_email_error?: string | null;
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
     * Optional id of a group to add newly-invited users to. Cannot specify both a
     * group id and a group name.
     */
    group_id?: string | null;

    /**
     * Optional name of a group to add newly-invited users to. Cannot specify both a
     * group id and a group name.
     */
    group_name?: string | null;

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

export namespace Members {
  export import MemberUpdateResponse = MembersAPI.MemberUpdateResponse;
  export import MemberUpdateParams = MembersAPI.MemberUpdateParams;
}
