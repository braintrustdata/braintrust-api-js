// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import { APIPromise } from '../core';
import * as Core from '../core';
import * as ProjectTagAPI from './project-tag';
import * as Shared from './shared';
import { ProjectTagsListObjects } from './shared';
import { ListObjects, type ListObjectsParams } from '../pagination';

export class ProjectTag extends APIResource {
  /**
   * Create a new project_tag. If there is an existing project_tag in the project
   * with the same name as the one specified in the request, will return the existing
   * project_tag unmodified
   */
  create(body: ProjectTagCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.ProjectTag> {
    return this._client.post('/v1/project_tag', { body, ...options });
  }

  /**
   * Get a project_tag object by its id
   */
  retrieve(projectTagId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.ProjectTag> {
    return this._client.get(`/v1/project_tag/${projectTagId}`, options);
  }

  /**
   * Partially update a project_tag object. Specify the fields to update in the
   * payload. Any object-type fields will be deep-merged with existing content.
   * Currently we do not support removing fields or setting them to null.
   */
  update(projectTagId: string, body?: ProjectTagUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.ProjectTag>
  update(projectTagId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.ProjectTag>
  update(projectTagId: string, body: ProjectTagUpdateParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<Shared.ProjectTag> {
    if (isRequestOptions(body)) {
      return this.update(projectTagId, {}, body);
    }
    return this._client.patch(`/v1/project_tag/${projectTagId}`, { body, ...options });
  }

  /**
   * List out all project_tags. The project_tags are sorted by creation date, with
   * the most recently-created project_tags coming first
   */
  list(query?: ProjectTagListParams, options?: Core.RequestOptions): Core.PagePromise<ProjectTagsListObjects, Shared.ProjectTag>
  list(options?: Core.RequestOptions): Core.PagePromise<ProjectTagsListObjects, Shared.ProjectTag>
  list(query: ProjectTagListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.PagePromise<ProjectTagsListObjects, Shared.ProjectTag> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/project_tag', ProjectTagsListObjects, { query, ...options });
  }

  /**
   * Delete a project_tag object by its id
   */
  delete(projectTagId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.ProjectTag> {
    return this._client.delete(`/v1/project_tag/${projectTagId}`, options);
  }

  /**
   * Create or replace project_tag. If there is an existing project_tag in the
   * project with the same name as the one specified in the request, will replace the
   * existing project_tag with the provided fields
   */
  replace(body: ProjectTagReplaceParams, options?: Core.RequestOptions): Core.APIPromise<Shared.ProjectTag> {
    return this._client.put('/v1/project_tag', { body, ...options });
  }
}

export interface ProjectTagCreateParams {
  /**
   * Name of the project tag
   */
  name: string;

  /**
   * Unique identifier for the project that the project tag belongs under
   */
  project_id: string;

  /**
   * Color of the tag for the UI
   */
  color?: string | null;

  /**
   * Textual description of the project tag
   */
  description?: string | null;
}

export interface ProjectTagUpdateParams {
  /**
   * Color of the tag for the UI
   */
  color?: string | null;

  /**
   * Textual description of the project tag
   */
  description?: string | null;

  /**
   * Name of the project tag
   */
  name?: string | null;
}

export interface ProjectTagListParams extends ListObjectsParams {
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
   * Project id
   */
  project_id?: string;

  /**
   * Name of the project to search for
   */
  project_name?: string;

  /**
   * Name of the project_tag to search for
   */
  project_tag_name?: string;
}

export interface ProjectTagReplaceParams {
  /**
   * Name of the project tag
   */
  name: string;

  /**
   * Unique identifier for the project that the project tag belongs under
   */
  project_id: string;

  /**
   * Color of the tag for the UI
   */
  color?: string | null;

  /**
   * Textual description of the project tag
   */
  description?: string | null;
}

export namespace ProjectTag {
  export import ProjectTagCreateParams = ProjectTagAPI.ProjectTagCreateParams;
  export import ProjectTagUpdateParams = ProjectTagAPI.ProjectTagUpdateParams;
  export import ProjectTagListParams = ProjectTagAPI.ProjectTagListParams;
  export import ProjectTagReplaceParams = ProjectTagAPI.ProjectTagReplaceParams;
}

export { ProjectTagsListObjects }
