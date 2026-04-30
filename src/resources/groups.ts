// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';
import { GroupsListObjects } from './shared';
import { type ListObjectsParams } from '../pagination';

export class Groups extends APIResource {
  /**
   * Create a new group. If there is an existing group with the same name as the one
   * specified in the request, will return the existing group unmodified
   */
  create(body: GroupCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Group> {
    return this._client.post('/v1/group', { body, ...options });
  }

  /**
   * Get a group object by its id
   */
  retrieve(groupId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Group> {
    return this._client.get(`/v1/group/${groupId}`, options);
  }

  /**
   * Partially update a group object. Specify the fields to update in the payload.
   * Any object-type fields will be deep-merged with existing content. Currently we
   * do not support removing fields or setting them to null.
   */
  update(
    groupId: string,
    body?: GroupUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Group>;
  update(groupId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Group>;
  update(
    groupId: string,
    body: GroupUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Group> {
    if (isRequestOptions(body)) {
      return this.update(groupId, {}, body);
    }
    return this._client.patch(`/v1/group/${groupId}`, { body, ...options });
  }

  /**
   * List out all groups. The groups are sorted by creation date, with the most
   * recently-created groups coming first
   */
  list(
    query?: GroupListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<GroupsListObjects, Shared.Group>;
  list(options?: Core.RequestOptions): Core.PagePromise<GroupsListObjects, Shared.Group>;
  list(
    query: GroupListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<GroupsListObjects, Shared.Group> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/group', GroupsListObjects, { query, ...options });
  }

  /**
   * Delete a group object by its id
   */
  delete(groupId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Group> {
    return this._client.delete(`/v1/group/${groupId}`, options);
  }

  /**
   * Create or replace group. If there is an existing group with the same name as the
   * one specified in the request, will replace the existing group with the provided
   * fields
   */
  replace(body: GroupReplaceParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Group> {
    return this._client.put('/v1/group', { body, ...options });
  }
}

export interface GroupCreateParams {
  /**
   * Name of the group
   */
  name: string;

  /**
   * Textual description of the group
   */
  description?: string | null;

  /**
   * Ids of the groups this group inherits from
   *
   * An inheriting group has all the users contained in its member groups, as well as
   * all of their inherited users
   */
  member_groups?: Array<string> | null;

  /**
   * Ids of users which belong to this group
   */
  member_users?: Array<string> | null;

  /**
   * For nearly all users, this parameter should be unnecessary. But in the rare case
   * that your API key belongs to multiple organizations, you may specify the name of
   * the organization the group belongs in.
   */
  org_name?: string | null;
}

export interface GroupUpdateParams {
  /**
   * A list of group IDs to add to the group's inheriting-from set
   */
  add_member_groups?: Array<string> | null;

  /**
   * A list of user IDs to add to the group
   */
  add_member_users?: Array<string> | null;

  /**
   * Textual description of the group
   */
  description?: string | null;

  /**
   * Name of the group
   */
  name?: string | null;

  /**
   * A list of group IDs to remove from the group's inheriting-from set
   */
  remove_member_groups?: Array<string> | null;

  /**
   * A list of user IDs to remove from the group
   */
  remove_member_users?: Array<string> | null;
}

export interface GroupListParams extends ListObjectsParams {
  /**
   * Name of the group to search for
   */
  group_name?: string;

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

export interface GroupReplaceParams {
  /**
   * Name of the group
   */
  name: string;

  /**
   * Textual description of the group
   */
  description?: string | null;

  /**
   * Ids of the groups this group inherits from
   *
   * An inheriting group has all the users contained in its member groups, as well as
   * all of their inherited users
   */
  member_groups?: Array<string> | null;

  /**
   * Ids of users which belong to this group
   */
  member_users?: Array<string> | null;

  /**
   * For nearly all users, this parameter should be unnecessary. But in the rare case
   * that your API key belongs to multiple organizations, you may specify the name of
   * the organization the group belongs in.
   */
  org_name?: string | null;
}

export declare namespace Groups {
  export {
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
    type GroupReplaceParams as GroupReplaceParams,
  };
}

export { GroupsListObjects };
