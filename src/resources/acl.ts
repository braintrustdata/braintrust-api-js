// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'braintrust/core';
import { APIResource } from 'braintrust/resource';
import * as ACLAPI from 'braintrust/resources/acl';
import { ListObjects, type ListObjectsParams } from 'braintrust/pagination';

export class ACLResource extends APIResource {
  /**
   * Create a new acl. If there is an existing acl with the same contents as the one
   * specified in the request, will return the existing acl unmodified
   */
  create(body: ACLCreateParams, options?: Core.RequestOptions): Core.APIPromise<ACL> {
    return this._client.post('/v1/acl', { body, ...options });
  }

  /**
   * Get an acl object by its id
   */
  retrieve(aclId: string, options?: Core.RequestOptions): Core.APIPromise<ACL> {
    return this._client.get(`/v1/acl/${aclId}`, options);
  }

  /**
   * List out all acls. The acls are sorted by creation date, with the most
   * recently-created acls coming first
   */
  list(query: ACLListParams, options?: Core.RequestOptions): Core.PagePromise<ACLsListObjects, ACL> {
    return this._client.getAPIList('/v1/acl', ACLsListObjects, { query, ...options });
  }

  /**
   * Delete an acl object by its id
   */
  delete(aclId: string, options?: Core.RequestOptions): Core.APIPromise<ACL> {
    return this._client.delete(`/v1/acl/${aclId}`, options);
  }

  /**
   * NOTE: This operation is deprecated and will be removed in a future revision of
   * the API. Create or replace a new acl. If there is an existing acl with the same
   * contents as the one specified in the request, will return the existing acl
   * unmodified, will replace the existing acl with the provided fields
   */
  replace(body: ACLReplaceParams, options?: Core.RequestOptions): Core.APIPromise<ACL> {
    return this._client.put('/v1/acl', { body, ...options });
  }
}

/**
 * Pagination for endpoints which list data objects
 */
export class ACLsListObjects extends ListObjects<ACL> {}

/**
 * An ACL grants a certain permission or role to a certain user or group on an
 * object.
 *
 * ACLs are inherited across the object hierarchy. So for example, if a user has
 * read permissions on a project, they will also have read permissions on any
 * experiment, dataset, etc. created within that project.
 *
 * To restrict a grant to a particular sub-object, you may specify
 * `restrict_object_type` in the ACL.
 */
export type ACL = ACL.UserPermissionACL | ACL.UserRoleACL | ACL.GroupPermissionACL | ACL.GroupRoleACL;

export namespace ACL {
  export interface UserPermissionACL {
    /**
     * Unique identifier for the acl
     */
    id: string;

    /**
     * The organization the ACL's referred object belongs to
     */
    _object_org_id: string;

    /**
     * The id of the object the ACL applies to
     */
    object_id: string;

    /**
     * The object type that the ACL applies to
     */
    object_type:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'project_score'
      | 'project_tag'
      | 'group'
      | 'role';

    /**
     * Permission the ACL grants
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
     * Id of the user the ACL applies to
     */
    user_id: string;

    /**
     * Date of acl creation
     */
    created?: string | null;

    /**
     * Optionally restricts the permission grant to just the specified object type
     */
    restrict_object_type?:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'project_score'
      | 'project_tag'
      | 'group'
      | 'role'
      | UserPermissionACL._ReservedOnlyAllowNull
      | null;
  }

  export namespace UserPermissionACL {
    export interface _ReservedOnlyAllowNull {
      /**
       * This is just a placeholder nullable object. Only pass null, not the object
       * itself
       */
      __reserved_only_allow_null: unknown;
    }
  }

  export interface UserRoleACL {
    /**
     * Unique identifier for the acl
     */
    id: string;

    /**
     * The organization the ACL's referred object belongs to
     */
    _object_org_id: string;

    /**
     * The id of the object the ACL applies to
     */
    object_id: string;

    /**
     * The object type that the ACL applies to
     */
    object_type:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'project_score'
      | 'project_tag'
      | 'group'
      | 'role';

    /**
     * Id of the role the ACL grants
     */
    role_id: string;

    /**
     * Id of the user the ACL applies to
     */
    user_id: string;

    /**
     * Date of acl creation
     */
    created?: string | null;

    /**
     * Optionally restricts the permission grant to just the specified object type
     */
    restrict_object_type?:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'project_score'
      | 'project_tag'
      | 'group'
      | 'role'
      | UserRoleACL._ReservedOnlyAllowNull
      | null;
  }

  export namespace UserRoleACL {
    export interface _ReservedOnlyAllowNull {
      /**
       * This is just a placeholder nullable object. Only pass null, not the object
       * itself
       */
      __reserved_only_allow_null: unknown;
    }
  }

  export interface GroupPermissionACL {
    /**
     * Unique identifier for the acl
     */
    id: string;

    /**
     * The organization the ACL's referred object belongs to
     */
    _object_org_id: string;

    /**
     * Id of the group the ACL applies to
     */
    group_id: string;

    /**
     * The id of the object the ACL applies to
     */
    object_id: string;

    /**
     * The object type that the ACL applies to
     */
    object_type:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'project_score'
      | 'project_tag'
      | 'group'
      | 'role';

    /**
     * Permission the ACL grants
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
     * Date of acl creation
     */
    created?: string | null;

    /**
     * Optionally restricts the permission grant to just the specified object type
     */
    restrict_object_type?:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'project_score'
      | 'project_tag'
      | 'group'
      | 'role'
      | GroupPermissionACL._ReservedOnlyAllowNull
      | null;
  }

  export namespace GroupPermissionACL {
    export interface _ReservedOnlyAllowNull {
      /**
       * This is just a placeholder nullable object. Only pass null, not the object
       * itself
       */
      __reserved_only_allow_null: unknown;
    }
  }

  export interface GroupRoleACL {
    /**
     * Unique identifier for the acl
     */
    id: string;

    /**
     * The organization the ACL's referred object belongs to
     */
    _object_org_id: string;

    /**
     * Id of the group the ACL applies to
     */
    group_id: string;

    /**
     * The id of the object the ACL applies to
     */
    object_id: string;

    /**
     * The object type that the ACL applies to
     */
    object_type:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'project_score'
      | 'project_tag'
      | 'group'
      | 'role';

    /**
     * Id of the role the ACL grants
     */
    role_id: string;

    /**
     * Date of acl creation
     */
    created?: string | null;

    /**
     * Optionally restricts the permission grant to just the specified object type
     */
    restrict_object_type?:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'project_score'
      | 'project_tag'
      | 'group'
      | 'role'
      | GroupRoleACL._ReservedOnlyAllowNull
      | null;
  }

  export namespace GroupRoleACL {
    export interface _ReservedOnlyAllowNull {
      /**
       * This is just a placeholder nullable object. Only pass null, not the object
       * itself
       */
      __reserved_only_allow_null: unknown;
    }
  }
}

export type ACLCreateParams =
  | ACLCreateParams.CreateUserPermissionACL
  | ACLCreateParams.CreateUserRoleACL
  | ACLCreateParams.CreateGroupPermissionACL
  | ACLCreateParams.CreateGroupRoleACL;

export namespace ACLCreateParams {
  export interface CreateUserPermissionACL {
    /**
     * The id of the object the ACL applies to
     */
    object_id: string;

    /**
     * The object type that the ACL applies to
     */
    object_type:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'project_score'
      | 'project_tag'
      | 'group'
      | 'role';

    /**
     * Permission the ACL grants
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
     * Id of the user the ACL applies to
     */
    user_id: string;

    /**
     * Optionally restricts the permission grant to just the specified object type
     */
    restrict_object_type?:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'project_score'
      | 'project_tag'
      | 'group'
      | 'role'
      | ACLCreateParams.CreateUserPermissionACL._ReservedOnlyAllowNull
      | null;
  }

  export namespace CreateUserPermissionACL {
    export interface _ReservedOnlyAllowNull {
      /**
       * This is just a placeholder nullable object. Only pass null, not the object
       * itself
       */
      __reserved_only_allow_null: unknown;
    }
  }

  export interface CreateUserRoleACL {
    /**
     * The id of the object the ACL applies to
     */
    object_id: string;

    /**
     * The object type that the ACL applies to
     */
    object_type:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'project_score'
      | 'project_tag'
      | 'group'
      | 'role';

    /**
     * Id of the role the ACL grants
     */
    role_id: string;

    /**
     * Id of the user the ACL applies to
     */
    user_id: string;

    /**
     * Optionally restricts the permission grant to just the specified object type
     */
    restrict_object_type?:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'project_score'
      | 'project_tag'
      | 'group'
      | 'role'
      | ACLCreateParams.CreateUserRoleACL._ReservedOnlyAllowNull
      | null;
  }

  export namespace CreateUserRoleACL {
    export interface _ReservedOnlyAllowNull {
      /**
       * This is just a placeholder nullable object. Only pass null, not the object
       * itself
       */
      __reserved_only_allow_null: unknown;
    }
  }

  export interface CreateGroupPermissionACL {
    /**
     * Id of the group the ACL applies to
     */
    group_id: string;

    /**
     * The id of the object the ACL applies to
     */
    object_id: string;

    /**
     * The object type that the ACL applies to
     */
    object_type:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'project_score'
      | 'project_tag'
      | 'group'
      | 'role';

    /**
     * Permission the ACL grants
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
     * Optionally restricts the permission grant to just the specified object type
     */
    restrict_object_type?:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'project_score'
      | 'project_tag'
      | 'group'
      | 'role'
      | ACLCreateParams.CreateGroupPermissionACL._ReservedOnlyAllowNull
      | null;
  }

  export namespace CreateGroupPermissionACL {
    export interface _ReservedOnlyAllowNull {
      /**
       * This is just a placeholder nullable object. Only pass null, not the object
       * itself
       */
      __reserved_only_allow_null: unknown;
    }
  }

  export interface CreateGroupRoleACL {
    /**
     * Id of the group the ACL applies to
     */
    group_id: string;

    /**
     * The id of the object the ACL applies to
     */
    object_id: string;

    /**
     * The object type that the ACL applies to
     */
    object_type:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'project_score'
      | 'project_tag'
      | 'group'
      | 'role';

    /**
     * Id of the role the ACL grants
     */
    role_id: string;

    /**
     * Optionally restricts the permission grant to just the specified object type
     */
    restrict_object_type?:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'project_score'
      | 'project_tag'
      | 'group'
      | 'role'
      | ACLCreateParams.CreateGroupRoleACL._ReservedOnlyAllowNull
      | null;
  }

  export namespace CreateGroupRoleACL {
    export interface _ReservedOnlyAllowNull {
      /**
       * This is just a placeholder nullable object. Only pass null, not the object
       * itself
       */
      __reserved_only_allow_null: unknown;
    }
  }
}

export interface ACLListParams extends ListObjectsParams {
  /**
   * The id of the object the ACL applies to
   */
  object_id: string;

  /**
   * The object type that the ACL applies to
   */
  object_type:
    | 'organization'
    | 'project'
    | 'experiment'
    | 'dataset'
    | 'prompt'
    | 'prompt_session'
    | 'project_score'
    | 'project_tag'
    | 'group'
    | 'role';
}

export type ACLReplaceParams =
  | ACLReplaceParams.CreateUserPermissionACL
  | ACLReplaceParams.CreateUserRoleACL
  | ACLReplaceParams.CreateGroupPermissionACL
  | ACLReplaceParams.CreateGroupRoleACL;

export namespace ACLReplaceParams {
  export interface CreateUserPermissionACL {
    /**
     * The id of the object the ACL applies to
     */
    object_id: string;

    /**
     * The object type that the ACL applies to
     */
    object_type:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'project_score'
      | 'project_tag'
      | 'group'
      | 'role';

    /**
     * Permission the ACL grants
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
     * Id of the user the ACL applies to
     */
    user_id: string;

    /**
     * Optionally restricts the permission grant to just the specified object type
     */
    restrict_object_type?:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'project_score'
      | 'project_tag'
      | 'group'
      | 'role'
      | ACLReplaceParams.CreateUserPermissionACL._ReservedOnlyAllowNull
      | null;
  }

  export namespace CreateUserPermissionACL {
    export interface _ReservedOnlyAllowNull {
      /**
       * This is just a placeholder nullable object. Only pass null, not the object
       * itself
       */
      __reserved_only_allow_null: unknown;
    }
  }

  export interface CreateUserRoleACL {
    /**
     * The id of the object the ACL applies to
     */
    object_id: string;

    /**
     * The object type that the ACL applies to
     */
    object_type:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'project_score'
      | 'project_tag'
      | 'group'
      | 'role';

    /**
     * Id of the role the ACL grants
     */
    role_id: string;

    /**
     * Id of the user the ACL applies to
     */
    user_id: string;

    /**
     * Optionally restricts the permission grant to just the specified object type
     */
    restrict_object_type?:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'project_score'
      | 'project_tag'
      | 'group'
      | 'role'
      | ACLReplaceParams.CreateUserRoleACL._ReservedOnlyAllowNull
      | null;
  }

  export namespace CreateUserRoleACL {
    export interface _ReservedOnlyAllowNull {
      /**
       * This is just a placeholder nullable object. Only pass null, not the object
       * itself
       */
      __reserved_only_allow_null: unknown;
    }
  }

  export interface CreateGroupPermissionACL {
    /**
     * Id of the group the ACL applies to
     */
    group_id: string;

    /**
     * The id of the object the ACL applies to
     */
    object_id: string;

    /**
     * The object type that the ACL applies to
     */
    object_type:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'project_score'
      | 'project_tag'
      | 'group'
      | 'role';

    /**
     * Permission the ACL grants
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
     * Optionally restricts the permission grant to just the specified object type
     */
    restrict_object_type?:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'project_score'
      | 'project_tag'
      | 'group'
      | 'role'
      | ACLReplaceParams.CreateGroupPermissionACL._ReservedOnlyAllowNull
      | null;
  }

  export namespace CreateGroupPermissionACL {
    export interface _ReservedOnlyAllowNull {
      /**
       * This is just a placeholder nullable object. Only pass null, not the object
       * itself
       */
      __reserved_only_allow_null: unknown;
    }
  }

  export interface CreateGroupRoleACL {
    /**
     * Id of the group the ACL applies to
     */
    group_id: string;

    /**
     * The id of the object the ACL applies to
     */
    object_id: string;

    /**
     * The object type that the ACL applies to
     */
    object_type:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'project_score'
      | 'project_tag'
      | 'group'
      | 'role';

    /**
     * Id of the role the ACL grants
     */
    role_id: string;

    /**
     * Optionally restricts the permission grant to just the specified object type
     */
    restrict_object_type?:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'project_score'
      | 'project_tag'
      | 'group'
      | 'role'
      | ACLReplaceParams.CreateGroupRoleACL._ReservedOnlyAllowNull
      | null;
  }

  export namespace CreateGroupRoleACL {
    export interface _ReservedOnlyAllowNull {
      /**
       * This is just a placeholder nullable object. Only pass null, not the object
       * itself
       */
      __reserved_only_allow_null: unknown;
    }
  }
}

export namespace ACLResource {
  export import ACL = ACLAPI.ACL;
  export import ACLsListObjects = ACLAPI.ACLsListObjects;
  export import ACLCreateParams = ACLAPI.ACLCreateParams;
  export import ACLListParams = ACLAPI.ACLListParams;
  export import ACLReplaceParams = ACLAPI.ACLReplaceParams;
}