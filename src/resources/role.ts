// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as RoleAPI from './role';
import { ListObjects, type ListObjectsParams } from '../pagination';

export class RoleResource extends APIResource {
  /**
   * Create a new role. If there is an existing role with the same name as the one
   * specified in the request, will return the existing role unmodified
   */
  create(body: RoleCreateParams, options?: Core.RequestOptions): Core.APIPromise<Role> {
    return this._client.post('/v1/role', { body, ...options });
  }

  /**
   * Get a role object by its id
   */
  retrieve(roleId: string, options?: Core.RequestOptions): Core.APIPromise<Role> {
    return this._client.get(`/v1/role/${roleId}`, options);
  }

  /**
   * Partially update a role object. Specify the fields to update in the payload. Any
   * object-type fields will be deep-merged with existing content. Currently we do
   * not support removing fields or setting them to null.
   */
  update(roleId: string, body?: RoleUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Role>;
  update(roleId: string, options?: Core.RequestOptions): Core.APIPromise<Role>;
  update(
    roleId: string,
    body: RoleUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Role> {
    if (isRequestOptions(body)) {
      return this.update(roleId, {}, body);
    }
    return this._client.patch(`/v1/role/${roleId}`, { body, ...options });
  }

  /**
   * List out all roles. The roles are sorted by creation date, with the most
   * recently-created roles coming first
   */
  list(query?: RoleListParams, options?: Core.RequestOptions): Core.PagePromise<RolesListObjects, Role>;
  list(options?: Core.RequestOptions): Core.PagePromise<RolesListObjects, Role>;
  list(
    query: RoleListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<RolesListObjects, Role> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/role', RolesListObjects, { query, ...options });
  }

  /**
   * Delete a role object by its id
   */
  delete(roleId: string, options?: Core.RequestOptions): Core.APIPromise<Role> {
    return this._client.delete(`/v1/role/${roleId}`, options);
  }

  /**
   * NOTE: This operation is deprecated and will be removed in a future revision of
   * the API. Create or replace a new role. If there is an existing role with the
   * same name as the one specified in the request, will return the existing role
   * unmodified, will replace the existing role with the provided fields
   */
  replace(body: RoleReplaceParams, options?: Core.RequestOptions): Core.APIPromise<Role> {
    return this._client.put('/v1/role', { body, ...options });
  }
}

/**
 * Pagination for endpoints which list data objects
 */
export class RolesListObjects extends ListObjects<Role> {}

/**
 * A role is a collection of permissions which can be granted as part of an ACL
 *
 * Roles can consist of individual permissions, as well as a set of roles they
 * inherit from
 */
export interface Role {
  /**
   * Unique identifier for the role
   */
  id: string;

  /**
   * Name of the role
   */
  name: string;

  /**
   * Date of role creation
   */
  created?: string | null;

  /**
   * Date of role deletion, or null if the role is still active
   */
  deleted_at?: string | null;

  /**
   * Textual description of the role
   */
  description?: string | null;

  /**
   * Permissions which belong to this role
   */
  member_permissions?: Array<
    | 'create'
    | 'read'
    | 'update'
    | 'delete'
    | 'create_acls'
    | 'read_acls'
    | 'update_acls'
    | 'delete_acls'
    | null
  > | null;

  /**
   * Ids of the roles this role inherits from
   *
   * An inheriting role has all the permissions contained in its member roles, as
   * well as all of their inherited permissions
   */
  member_roles?: Array<string> | null;

  /**
   * Unique id for the organization that the role belongs under
   *
   * A null org_id indicates a system role, which may be assigned to anybody and
   * inherited by any other role, but cannot be edited.
   *
   * It is forbidden to change the org after creating a role
   */
  org_id?: string | null;

  /**
   * Identifies the user who created the role
   */
  user_id?: string | null;
}

export interface RoleCreateParams {
  /**
   * Name of the role
   */
  name: string;

  /**
   * Textual description of the role
   */
  description?: string | null;

  /**
   * Permissions which belong to this role
   */
  member_permissions?: Array<
    | 'create'
    | 'read'
    | 'update'
    | 'delete'
    | 'create_acls'
    | 'read_acls'
    | 'update_acls'
    | 'delete_acls'
    | null
  > | null;

  /**
   * Ids of the roles this role inherits from
   *
   * An inheriting role has all the permissions contained in its member roles, as
   * well as all of their inherited permissions
   */
  member_roles?: Array<string> | null;

  /**
   * For nearly all users, this parameter should be unnecessary. But in the rare case
   * that your API key belongs to multiple organizations, you may specify the name of
   * the organization the role belongs in.
   */
  org_name?: string | null;
}

export interface RoleUpdateParams {
  /**
   * Textual description of the role
   */
  description?: string | null;

  /**
   * Permissions which belong to this role
   */
  member_permissions?: Array<
    | 'create'
    | 'read'
    | 'update'
    | 'delete'
    | 'create_acls'
    | 'read_acls'
    | 'update_acls'
    | 'delete_acls'
    | null
  > | null;

  /**
   * Ids of the roles this role inherits from
   *
   * An inheriting role has all the permissions contained in its member roles, as
   * well as all of their inherited permissions
   */
  member_roles?: Array<string> | null;

  /**
   * Name of the role
   */
  name?: string | null;
}

export interface RoleListParams extends ListObjectsParams {
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
   * Name of the role to search for
   */
  role_name?: string;
}

export interface RoleReplaceParams {
  /**
   * Name of the role
   */
  name: string;

  /**
   * Textual description of the role
   */
  description?: string | null;

  /**
   * Permissions which belong to this role
   */
  member_permissions?: Array<
    | 'create'
    | 'read'
    | 'update'
    | 'delete'
    | 'create_acls'
    | 'read_acls'
    | 'update_acls'
    | 'delete_acls'
    | null
  > | null;

  /**
   * Ids of the roles this role inherits from
   *
   * An inheriting role has all the permissions contained in its member roles, as
   * well as all of their inherited permissions
   */
  member_roles?: Array<string> | null;

  /**
   * For nearly all users, this parameter should be unnecessary. But in the rare case
   * that your API key belongs to multiple organizations, you may specify the name of
   * the organization the role belongs in.
   */
  org_name?: string | null;
}

export namespace RoleResource {
  export import Role = RoleAPI.Role;
  export import RolesListObjects = RoleAPI.RolesListObjects;
  export import RoleCreateParams = RoleAPI.RoleCreateParams;
  export import RoleUpdateParams = RoleAPI.RoleUpdateParams;
  export import RoleListParams = RoleAPI.RoleListParams;
  export import RoleReplaceParams = RoleAPI.RoleReplaceParams;
}
