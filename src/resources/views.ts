// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ViewsAPI from './views';
import { ListObjects, type ListObjectsParams } from '../pagination';

export class Views extends APIResource {
  /**
   * Create a new view. If there is an existing view in the project with the same
   * name as the one specified in the request, will return the existing view
   * unmodified
   */
  create(body: ViewCreateParams, options?: Core.RequestOptions): Core.APIPromise<View> {
    return this._client.post('/v1/view', { body, ...options });
  }

  /**
   * Get a view object by its id
   */
  retrieve(viewId: string, query: ViewRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<View> {
    return this._client.get(`/v1/view/${viewId}`, { query, ...options });
  }

  /**
   * Partially update a view object. Specify the fields to update in the payload. Any
   * object-type fields will be deep-merged with existing content. Currently we do
   * not support removing fields or setting them to null.
   */
  update(viewId: string, body: ViewUpdateParams, options?: Core.RequestOptions): Core.APIPromise<View> {
    return this._client.patch(`/v1/view/${viewId}`, { body, ...options });
  }

  /**
   * List out all views. The views are sorted by creation date, with the most
   * recently-created views coming first
   */
  list(query: ViewListParams, options?: Core.RequestOptions): Core.PagePromise<ViewsListObjects, View> {
    return this._client.getAPIList('/v1/view', ViewsListObjects, { query, ...options });
  }

  /**
   * Delete a view object by its id
   */
  delete(viewId: string, body: ViewDeleteParams, options?: Core.RequestOptions): Core.APIPromise<View> {
    return this._client.delete(`/v1/view/${viewId}`, { body, ...options });
  }

  /**
   * Create or replace view. If there is an existing view in the project with the
   * same name as the one specified in the request, will replace the existing view
   * with the provided fields
   */
  replace(body: ViewReplaceParams, options?: Core.RequestOptions): Core.APIPromise<View> {
    return this._client.put('/v1/view', { body, ...options });
  }
}

/**
 * Pagination for endpoints which list data objects
 */
export class ViewsListObjects extends ListObjects<View> {}

export interface View {
  /**
   * Unique identifier for the view
   */
  id: string;

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
  object_type:
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

  /**
   * Type of table that the view corresponds to.
   */
  view_type:
    | 'projects'
    | 'logs'
    | 'experiments'
    | 'datasets'
    | 'prompts'
    | 'playgrounds'
    | 'experiment'
    | 'dataset'
    | null;

  /**
   * Date of view creation
   */
  created?: string | null;

  /**
   * Date of role deletion, or null if the role is still active
   */
  deleted_at?: string | null;

  /**
   * Options for the view in the app
   */
  options?: View.Options | null;

  /**
   * Identifies the user who created the view
   */
  user_id?: string | null;

  /**
   * The view definition
   */
  view_data?: View.ViewData | null;
}

export namespace View {
  /**
   * Options for the view in the app
   */
  export interface Options {
    columnOrder?: Array<string> | null;

    columnSizing?: Record<string, number> | null;

    columnVisibility?: Record<string, boolean> | null;
  }

  /**
   * The view definition
   */
  export interface ViewData {
    search?: ViewData.Search | null;
  }

  export namespace ViewData {
    export interface Search {
      filter?: Array<unknown> | null;

      match?: Array<unknown> | null;

      sort?: Array<unknown> | null;

      tag?: Array<unknown> | null;
    }
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
  object_type:
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

  /**
   * Type of table that the view corresponds to.
   */
  view_type:
    | 'projects'
    | 'logs'
    | 'experiments'
    | 'datasets'
    | 'prompts'
    | 'playgrounds'
    | 'experiment'
    | 'dataset'
    | null;

  /**
   * Date of role deletion, or null if the role is still active
   */
  deleted_at?: string | null;

  /**
   * Options for the view in the app
   */
  options?: ViewCreateParams.Options | null;

  /**
   * Identifies the user who created the view
   */
  user_id?: string | null;

  /**
   * The view definition
   */
  view_data?: ViewCreateParams.ViewData | null;
}

export namespace ViewCreateParams {
  /**
   * Options for the view in the app
   */
  export interface Options {
    columnOrder?: Array<string> | null;

    columnSizing?: Record<string, number> | null;

    columnVisibility?: Record<string, boolean> | null;
  }

  /**
   * The view definition
   */
  export interface ViewData {
    search?: ViewData.Search | null;
  }

  export namespace ViewData {
    export interface Search {
      filter?: Array<unknown> | null;

      match?: Array<unknown> | null;

      sort?: Array<unknown> | null;

      tag?: Array<unknown> | null;
    }
  }
}

export interface ViewRetrieveParams {
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
    | 'group'
    | 'role'
    | 'org_member'
    | 'project_log'
    | 'org_project'
    | null;
}

export interface ViewUpdateParams {
  /**
   * The id of the object the view applies to
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
    | 'group'
    | 'role'
    | 'org_member'
    | 'project_log'
    | 'org_project'
    | null;

  /**
   * Name of the view
   */
  name?: string | null;

  /**
   * Options for the view in the app
   */
  options?: ViewUpdateParams.Options | null;

  /**
   * Identifies the user who created the view
   */
  user_id?: string | null;

  /**
   * The view definition
   */
  view_data?: ViewUpdateParams.ViewData | null;

  /**
   * Type of table that the view corresponds to.
   */
  view_type?:
    | 'projects'
    | 'logs'
    | 'experiments'
    | 'datasets'
    | 'prompts'
    | 'playgrounds'
    | 'experiment'
    | 'dataset'
    | null;
}

export namespace ViewUpdateParams {
  /**
   * Options for the view in the app
   */
  export interface Options {
    columnOrder?: Array<string> | null;

    columnSizing?: Record<string, number> | null;

    columnVisibility?: Record<string, boolean> | null;
  }

  /**
   * The view definition
   */
  export interface ViewData {
    search?: ViewData.Search | null;
  }

  export namespace ViewData {
    export interface Search {
      filter?: Array<unknown> | null;

      match?: Array<unknown> | null;

      sort?: Array<unknown> | null;

      tag?: Array<unknown> | null;
    }
  }
}

export interface ViewListParams extends ListObjectsParams {
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
    | 'group'
    | 'role'
    | 'org_member'
    | 'project_log'
    | 'org_project'
    | null;

  /**
   * Filter search results to a particular set of object IDs. To specify a list of
   * IDs, include the query param multiple times
   */
  ids?: string | Array<string>;

  /**
   * Name of the project to search for
   */
  project_name?: string;

  /**
   * Name of the view to search for
   */
  view_name?: string;

  /**
   * Type of table that the view corresponds to.
   */
  view_type?:
    | 'projects'
    | 'logs'
    | 'experiments'
    | 'datasets'
    | 'prompts'
    | 'playgrounds'
    | 'experiment'
    | 'dataset'
    | null;
}

export interface ViewDeleteParams {
  /**
   * The id of the object the view applies to
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
    | 'group'
    | 'role'
    | 'org_member'
    | 'project_log'
    | 'org_project'
    | null;
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
  object_type:
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

  /**
   * Type of table that the view corresponds to.
   */
  view_type:
    | 'projects'
    | 'logs'
    | 'experiments'
    | 'datasets'
    | 'prompts'
    | 'playgrounds'
    | 'experiment'
    | 'dataset'
    | null;

  /**
   * Date of role deletion, or null if the role is still active
   */
  deleted_at?: string | null;

  /**
   * Options for the view in the app
   */
  options?: ViewReplaceParams.Options | null;

  /**
   * Identifies the user who created the view
   */
  user_id?: string | null;

  /**
   * The view definition
   */
  view_data?: ViewReplaceParams.ViewData | null;
}

export namespace ViewReplaceParams {
  /**
   * Options for the view in the app
   */
  export interface Options {
    columnOrder?: Array<string> | null;

    columnSizing?: Record<string, number> | null;

    columnVisibility?: Record<string, boolean> | null;
  }

  /**
   * The view definition
   */
  export interface ViewData {
    search?: ViewData.Search | null;
  }

  export namespace ViewData {
    export interface Search {
      filter?: Array<unknown> | null;

      match?: Array<unknown> | null;

      sort?: Array<unknown> | null;

      tag?: Array<unknown> | null;
    }
  }
}

export namespace Views {
  export import View = ViewsAPI.View;
  export import ViewsListObjects = ViewsAPI.ViewsListObjects;
  export import ViewCreateParams = ViewsAPI.ViewCreateParams;
  export import ViewRetrieveParams = ViewsAPI.ViewRetrieveParams;
  export import ViewUpdateParams = ViewsAPI.ViewUpdateParams;
  export import ViewListParams = ViewsAPI.ViewListParams;
  export import ViewDeleteParams = ViewsAPI.ViewDeleteParams;
  export import ViewReplaceParams = ViewsAPI.ViewReplaceParams;
}
