// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import { APIPromise } from '../core';
import * as Core from '../core';
import * as ViewAPI from './view';
import * as Shared from './shared';
import { ViewsListObjects } from './shared';
import { ListObjects, type ListObjectsParams } from '../pagination';

export class View extends APIResource {
  /**
   * Create a new view. If there is an existing view with the same name as the one
   * specified in the request, will return the existing view unmodified
   */
  create(body: ViewCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.View> {
    return this._client.post('/v1/view', { body, ...options });
  }

  /**
   * Get a view object by its id
   */
  retrieve(viewId: string, query: ViewRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Shared.View> {
    return this._client.get(`/v1/view/${viewId}`, { query, ...options });
  }

  /**
   * Partially update a view object. Specify the fields to update in the payload. Any
   * object-type fields will be deep-merged with existing content. Currently we do
   * not support removing fields or setting them to null.
   */
  update(viewId: string, body: ViewUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.View> {
    return this._client.patch(`/v1/view/${viewId}`, { body, ...options });
  }

  /**
   * List out all views. The views are sorted by creation date, with the most
   * recently-created views coming first
   */
  list(query: ViewListParams, options?: Core.RequestOptions): Core.PagePromise<ViewsListObjects, Shared.View> {
    return this._client.getAPIList('/v1/view', ViewsListObjects, { query, ...options });
  }

  /**
   * Delete a view object by its id
   */
  delete(viewId: string, body: ViewDeleteParams, options?: Core.RequestOptions): Core.APIPromise<Shared.View> {
    return this._client.delete(`/v1/view/${viewId}`, { body, ...options });
  }

  /**
   * Create or replace view. If there is an existing view with the same name as the
   * one specified in the request, will replace the existing view with the provided
   * fields
   */
  replace(body: ViewReplaceParams, options?: Core.RequestOptions): Core.APIPromise<Shared.View> {
    return this._client.put('/v1/view', { body, ...options });
  }
}

export interface ViewCreateParams {
  /**
   * Name of the view
   */
  name: string;

  /**
   * The id of the object the view applies to
   */
  object_id: string;

  /**
   * The object type that the ACL applies to
   */
  object_type: 'organization' | 'project' | 'experiment' | 'dataset' | 'prompt' | 'prompt_session' | 'group' | 'role' | 'org_member' | 'project_log' | 'org_project' | null;

  /**
   * Type of table that the view corresponds to.
   */
  view_type: 'projects' | 'logs' | 'experiments' | 'datasets' | 'prompts' | 'playgrounds' | 'experiment' | 'dataset' | null;

  /**
   * Date of role deletion, or null if the role is still active
   */
  deleted_at?: string | null;

  /**
   * Options for the view in the app
   */
  options?: Shared.ViewOptions | null;

  /**
   * Identifies the user who created the view
   */
  user_id?: string | null;

  /**
   * The view definition
   */
  view_data?: Shared.ViewData | null;
}

export interface ViewRetrieveParams {
  /**
   * The id of the object the ACL applies to
   */
  object_id: string;

  /**
   * The object type that the ACL applies to
   */
  object_type: 'organization' | 'project' | 'experiment' | 'dataset' | 'prompt' | 'prompt_session' | 'group' | 'role' | 'org_member' | 'project_log' | 'org_project' | null;
}

export interface ViewUpdateParams {
  /**
   * The id of the object the view applies to
   */
  object_id: string;

  /**
   * The object type that the ACL applies to
   */
  object_type: 'organization' | 'project' | 'experiment' | 'dataset' | 'prompt' | 'prompt_session' | 'group' | 'role' | 'org_member' | 'project_log' | 'org_project' | null;

  /**
   * Name of the view
   */
  name?: string | null;

  /**
   * Options for the view in the app
   */
  options?: Shared.ViewOptions | null;

  /**
   * Identifies the user who created the view
   */
  user_id?: string | null;

  /**
   * The view definition
   */
  view_data?: Shared.ViewData | null;

  /**
   * Type of table that the view corresponds to.
   */
  view_type?: 'projects' | 'logs' | 'experiments' | 'datasets' | 'prompts' | 'playgrounds' | 'experiment' | 'dataset' | null;
}

export interface ViewListParams extends ListObjectsParams {
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

  /**
   * Name of the view to search for
   */
  view_name?: string;

  /**
   * Type of table that the view corresponds to.
   */
  view_type?: 'projects' | 'logs' | 'experiments' | 'datasets' | 'prompts' | 'playgrounds' | 'experiment' | 'dataset' | null;
}

export interface ViewDeleteParams {
  /**
   * The id of the object the view applies to
   */
  object_id: string;

  /**
   * The object type that the ACL applies to
   */
  object_type: 'organization' | 'project' | 'experiment' | 'dataset' | 'prompt' | 'prompt_session' | 'group' | 'role' | 'org_member' | 'project_log' | 'org_project' | null;
}

export interface ViewReplaceParams {
  /**
   * Name of the view
   */
  name: string;

  /**
   * The id of the object the view applies to
   */
  object_id: string;

  /**
   * The object type that the ACL applies to
   */
  object_type: 'organization' | 'project' | 'experiment' | 'dataset' | 'prompt' | 'prompt_session' | 'group' | 'role' | 'org_member' | 'project_log' | 'org_project' | null;

  /**
   * Type of table that the view corresponds to.
   */
  view_type: 'projects' | 'logs' | 'experiments' | 'datasets' | 'prompts' | 'playgrounds' | 'experiment' | 'dataset' | null;

  /**
   * Date of role deletion, or null if the role is still active
   */
  deleted_at?: string | null;

  /**
   * Options for the view in the app
   */
  options?: Shared.ViewOptions | null;

  /**
   * Identifies the user who created the view
   */
  user_id?: string | null;

  /**
   * The view definition
   */
  view_data?: Shared.ViewData | null;
}

export namespace View {
  export import ViewCreateParams = ViewAPI.ViewCreateParams;
  export import ViewRetrieveParams = ViewAPI.ViewRetrieveParams;
  export import ViewUpdateParams = ViewAPI.ViewUpdateParams;
  export import ViewListParams = ViewAPI.ViewListParams;
  export import ViewDeleteParams = ViewAPI.ViewDeleteParams;
  export import ViewReplaceParams = ViewAPI.ViewReplaceParams;
}

export { ViewsListObjects }
