// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@braintrust/api/resource';
import { isRequestOptions } from '@braintrust/api/core';
import * as Core from '@braintrust/api/core';
import * as GroupAPI from '@braintrust/api/resources/group';
import { ListObjects, type ListObjectsParams } from '@braintrust/api/pagination';

export class GroupResource extends APIResource {
  /**
   * Create a new group. If there is an existing group with the same name as the one
   * specified in the request, will return the existing group unmodified
   */
  create(body: GroupCreateParams, options?: Core.RequestOptions): Core.APIPromise<Group> {
    return this._client.post('/v1/group', { body, ...options });
  }

  /**
   * Get a group object by its id
   */
  retrieve(groupId: string, options?: Core.RequestOptions): Core.APIPromise<Group> {
    return this._client.get(`/v1/group/${groupId}`, options);
  }

  /**
   * Partially update a group object. Specify the fields to update in the payload.
   * Any object-type fields will be deep-merged with existing content. Currently we
   * do not support removing fields or setting them to null.
   */
  update(groupId: string, body?: GroupUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Group>;
  update(groupId: string, options?: Core.RequestOptions): Core.APIPromise<Group>;
  update(
    groupId: string,
    body: GroupUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Group> {
    if (isRequestOptions(body)) {
      return this.update(groupId, {}, body);
    }
    return this._client.patch(`/v1/group/${groupId}`, { body, ...options });
  }

  /**
   * List out all groups. The groups are sorted by creation date, with the most
   * recently-created groups coming first
   */
  list(query?: GroupListParams, options?: Core.RequestOptions): Core.PagePromise<GroupsListObjects, Group>;
  list(options?: Core.RequestOptions): Core.PagePromise<GroupsListObjects, Group>;
  list(
    query: GroupListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<GroupsListObjects, Group> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/group', GroupsListObjects, { query, ...options });
  }

  /**
   * Delete a group object by its id
   */
  delete(groupId: string, options?: Core.RequestOptions): Core.APIPromise<Group> {
    return this._client.delete(`/v1/group/${groupId}`, options);
  }

  /**
   * NOTE: This operation is deprecated and will be removed in a future revision of
   * the API. Create or replace a new group. If there is an existing group with the
   * same name as the one specified in the request, will return the existing group
   * unmodified, will replace the existing group with the provided fields
   */
  replace(body: GroupReplaceParams, options?: Core.RequestOptions): Core.APIPromise<Group> {
    return this._client.put('/v1/group', { body, ...options });
  }
}

/**
 * Pagination for endpoints which list data objects
 */
export class GroupsListObjects extends ListObjects<Group> {}

/**
 * A group is a collection of users which can be assigned an ACL
 *
 * Groups can consist of individual users, as well as a set of groups they inherit
 * from
 */
export interface Group {
  /**
   * Unique identifier for the group
   */
  id: string;

  /**
   * Name of the group
   */
  name: string;

  /**
   * Unique id for the organization that the group belongs under
   *
   * It is forbidden to change the org after creating a group
   */
  org_id: string;

  /**
   * Date of group creation
   */
  created?: string | null;

  /**
   * Date of group deletion, or null if the group is still active
   */
  deleted_at?: string | null;

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
   * Identifies the user who created the group
   */
  user_id?: string | null;
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
   * Name of the group
   */
  name?: string | null;
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

export namespace GroupResource {
  export import Group = GroupAPI.Group;
  export import GroupsListObjects = GroupAPI.GroupsListObjects;
  export import GroupCreateParams = GroupAPI.GroupCreateParams;
  export import GroupUpdateParams = GroupAPI.GroupUpdateParams;
  export import GroupListParams = GroupAPI.GroupListParams;
  export import GroupReplaceParams = GroupAPI.GroupReplaceParams;
}
