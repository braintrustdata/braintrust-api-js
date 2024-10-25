// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as RolesAPI from './roles';
import * as Shared from './shared';
import { RolesListObjects } from './shared';
import { type ListObjectsParams } from '../pagination';

export class Roles extends APIResource {
  /**
   * Create a new role. If there is an existing role with the same name as the one
   * specified in the request, will return the existing role unmodified
   */
  create(body: RoleCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Role> {
    return this._client.post('/v1/role', { body, ...options });
  }

  /**
   * Get a role object by its id
   */
  retrieve(roleId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Role> {
    return this._client.get(`/v1/role/${roleId}`, options);
  }

  /**
   * Partially update a role object. Specify the fields to update in the payload. Any
   * object-type fields will be deep-merged with existing content. Currently we do
   * not support removing fields or setting them to null.
   */
  update(
    roleId: string,
    body?: RoleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Role>;
  update(roleId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Role>;
  update(
    roleId: string,
    body: RoleUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Role> {
    if (isRequestOptions(body)) {
      return this.update(roleId, {}, body);
    }
    return this._client.patch(`/v1/role/${roleId}`, { body, ...options });
  }

  /**
   * List out all roles. The roles are sorted by creation date, with the most
   * recently-created roles coming first
   */
  list(
    query?: RoleListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RolesListObjects, Shared.Role>;
  list(options?: Core.RequestOptions): Core.PagePromise<RolesListObjects, Shared.Role>;
  list(
    query: RoleListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<RolesListObjects, Shared.Role> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/role', RolesListObjects, { query, ...options });
  }

  /**
   * Delete a role object by its id
   */
  delete(roleId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Role> {
    return this._client.delete(`/v1/role/${roleId}`, options);
  }

  /**
   * Create or replace role. If there is an existing role with the same name as the
   * one specified in the request, will replace the existing role with the provided
   * fields
   */
  replace(body: RoleReplaceParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Role> {
    return this._client.put('/v1/role', { body, ...options });
  }
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
   * (permission, restrict_object_type) tuples which belong to this role
   */
  member_permissions?: Array<RoleCreateParams.MemberPermission> | null;

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

export namespace RoleCreateParams {
  export interface MemberPermission {
    /**
     * Each permission permits a certain type of operation on an object in the system
     *
     * Permissions can be assigned to to objects on an individual basis, or grouped
     * into roles
     */
    permission:
      | 'create'
      | 'read'
      | 'update'
      | 'delete'
      | 'create_acls'
      | 'read_acls'
      | 'update_acls'
      | 'delete_acls';

    /**
     * The object type that the ACL applies to
     */
    restrict_object_type?:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'group'
      | 'role'
      | 'org_member'
      | 'project_log'
      | 'org_project'
      | null;
  }
}

export interface RoleUpdateParams {
  /**
   * A list of permissions to add to the role
   */
  add_member_permissions?: Array<RoleUpdateParams.AddMemberPermission> | null;

  /**
   * A list of role IDs to add to the role's inheriting-from set
   */
  add_member_roles?: Array<string> | null;

  /**
   * Textual description of the role
   */
  description?: string | null;

  /**
   * Name of the role
   */
  name?: string | null;

  /**
   * A list of permissions to remove from the role
   */
  remove_member_permissions?: Array<RoleUpdateParams.RemoveMemberPermission> | null;

  /**
   * A list of role IDs to remove from the role's inheriting-from set
   */
  remove_member_roles?: Array<string> | null;
}

export namespace RoleUpdateParams {
  export interface AddMemberPermission {
    /**
     * Each permission permits a certain type of operation on an object in the system
     *
     * Permissions can be assigned to to objects on an individual basis, or grouped
     * into roles
     */
    permission:
      | 'create'
      | 'read'
      | 'update'
      | 'delete'
      | 'create_acls'
      | 'read_acls'
      | 'update_acls'
      | 'delete_acls';

    /**
     * The object type that the ACL applies to
     */
    restrict_object_type?:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'group'
      | 'role'
      | 'org_member'
      | 'project_log'
      | 'org_project'
      | null;
  }

  export interface RemoveMemberPermission {
    /**
     * Each permission permits a certain type of operation on an object in the system
     *
     * Permissions can be assigned to to objects on an individual basis, or grouped
     * into roles
     */
    permission:
      | 'create'
      | 'read'
      | 'update'
      | 'delete'
      | 'create_acls'
      | 'read_acls'
      | 'update_acls'
      | 'delete_acls';

    /**
     * The object type that the ACL applies to
     */
    restrict_object_type?:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'group'
      | 'role'
      | 'org_member'
      | 'project_log'
      | 'org_project'
      | null;
  }
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
   * (permission, restrict_object_type) tuples which belong to this role
   */
  member_permissions?: Array<RoleReplaceParams.MemberPermission> | null;

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

export namespace RoleReplaceParams {
  export interface MemberPermission {
    /**
     * Each permission permits a certain type of operation on an object in the system
     *
     * Permissions can be assigned to to objects on an individual basis, or grouped
     * into roles
     */
    permission:
      | 'create'
      | 'read'
      | 'update'
      | 'delete'
      | 'create_acls'
      | 'read_acls'
      | 'update_acls'
      | 'delete_acls';

    /**
     * The object type that the ACL applies to
     */
    restrict_object_type?:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'group'
      | 'role'
      | 'org_member'
      | 'project_log'
      | 'org_project'
      | null;
  }
}

export namespace Roles {
  export import RoleCreateParams = RolesAPI.RoleCreateParams;
  export import RoleUpdateParams = RolesAPI.RoleUpdateParams;
  export import RoleListParams = RolesAPI.RoleListParams;
  export import RoleReplaceParams = RolesAPI.RoleReplaceParams;
}

export { RolesListObjects };
