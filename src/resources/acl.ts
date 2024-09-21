// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import { APIPromise } from '../core';
import * as Core from '../core';
import * as ACLAPI from './acl';
import * as Shared from './shared';
import { ACLsListObjects } from './shared';
import { ListObjects, type ListObjectsParams } from '../pagination';

export class ACL extends APIResource {
  /**
   * Create a new acl. If there is an existing acl with the same contents as the one
   * specified in the request, will return the existing acl unmodified
   */
  create(body: ACLCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.ACL> {
    return this._client.post('/v1/acl', { body, ...options });
  }

  /**
   * Get an acl object by its id
   */
  retrieve(aclId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.ACL> {
    return this._client.get(`/v1/acl/${aclId}`, options);
  }

  /**
   * List out all acls. The acls are sorted by creation date, with the most
   * recently-created acls coming first
   */
  list(query: ACLListParams, options?: Core.RequestOptions): Core.PagePromise<ACLsListObjects, Shared.ACL> {
    return this._client.getAPIList('/v1/acl', ACLsListObjects, { query, ...options });
  }

  /**
   * Delete an acl object by its id
   */
  delete(aclId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.ACL> {
    return this._client.delete(`/v1/acl/${aclId}`, options);
  }
}

export interface ACLCreateParams {
  /**
   * The id of the object the ACL applies to
   */
  object_id: string;

  /**
   * The object type that the ACL applies to
   */
  object_type: 'organization' | 'project' | 'experiment' | 'dataset' | 'prompt' | 'prompt_session' | 'group' | 'role' | 'org_member' | 'project_log' | 'org_project' | null;

  /**
   * Id of the group the ACL applies to. Exactly one of `user_id` and `group_id` will
   * be provided
   */
  group_id?: string | null;

  /**
   * Permission the ACL grants. Exactly one of `permission` and `role_id` will be
   * provided
   */
  permission?: 'create' | 'read' | 'update' | 'delete' | 'create_acls' | 'read_acls' | 'update_acls' | 'delete_acls' | null;

  /**
   * When setting a permission directly, optionally restricts the permission grant to
   * just the specified object type. Cannot be set alongside a `role_id`.
   */
  restrict_object_type?: 'organization' | 'project' | 'experiment' | 'dataset' | 'prompt' | 'prompt_session' | 'group' | 'role' | 'org_member' | 'project_log' | 'org_project' | null;

  /**
   * Id of the role the ACL grants. Exactly one of `permission` and `role_id` will be
   * provided
   */
  role_id?: string | null;

  /**
   * Id of the user the ACL applies to. Exactly one of `user_id` and `group_id` will
   * be provided
   */
  user_id?: string | null;
}

export interface ACLListParams extends ListObjectsParams {
  /**
   * The id of the object the ACL applies to
   */
  object_id: string;

  /**
   * The object type that the ACL applies to
   */
  object_type: 'organization' | 'project' | 'experiment' | 'dataset' | 'prompt' | 'prompt_session' | 'group' | 'role' | 'org_member' | 'project_log' | 'org_project' | null;

  /**
   * Filter search results to a particular set of object IDs. To specify a list of
   * IDs, include the query param multiple times
   */
  ids?: string | Array<string>;
}

export namespace ACL {
  export import ACLCreateParams = ACLAPI.ACLCreateParams;
  export import ACLListParams = ACLAPI.ACLListParams;
}

export { ACLsListObjects }
