// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as ProjectAPI from './project';
import * as LogsAPI from './logs';
import { ListObjects, type ListObjectsParams } from '../../pagination';

export class ProjectResource extends APIResource {
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);

  /**
   * Create a new project. If there is an existing project with the same name as the
   * one specified in the request, will return the existing project unmodified
   */
  create(body: ProjectCreateParams, options?: Core.RequestOptions): Core.APIPromise<Project> {
    return this._client.post('/v1/project', { body, ...options });
  }

  /**
   * Get a project object by its id
   */
  retrieve(projectId: string, options?: Core.RequestOptions): Core.APIPromise<Project> {
    return this._client.get(`/v1/project/${projectId}`, options);
  }

  /**
   * Partially update a project object. Specify the fields to update in the payload.
   * Any object-type fields will be deep-merged with existing content. Currently we
   * do not support removing fields or setting them to null.
   */
  update(
    projectId: string,
    body?: ProjectUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Project>;
  update(projectId: string, options?: Core.RequestOptions): Core.APIPromise<Project>;
  update(
    projectId: string,
    body: ProjectUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Project> {
    if (isRequestOptions(body)) {
      return this.update(projectId, {}, body);
    }
    return this._client.patch(`/v1/project/${projectId}`, { body, ...options });
  }

  /**
   * List out all projects. The projects are sorted by creation date, with the most
   * recently-created projects coming first
   */
  list(
    query?: ProjectListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProjectsListObjects, Project>;
  list(options?: Core.RequestOptions): Core.PagePromise<ProjectsListObjects, Project>;
  list(
    query: ProjectListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProjectsListObjects, Project> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/project', ProjectsListObjects, { query, ...options });
  }

  /**
   * Delete a project object by its id
   */
  delete(projectId: string, options?: Core.RequestOptions): Core.APIPromise<Project> {
    return this._client.delete(`/v1/project/${projectId}`, options);
  }

  /**
   * NOTE: This operation is deprecated and will be removed in a future revision of
   * the API. Create or replace a new project. If there is an existing project with
   * the same name as the one specified in the request, will return the existing
   * project unmodified, will replace the existing project with the provided fields
   */
  replace(body: ProjectReplaceParams, options?: Core.RequestOptions): Core.APIPromise<Project> {
    return this._client.put('/v1/project', { body, ...options });
  }
}

/**
 * Pagination for endpoints which list data objects
 */
export class ProjectsListObjects extends ListObjects<Project> {}

export interface Project {
  /**
   * Unique identifier for the project
   */
  id: string;

  /**
   * Name of the project
   */
  name: string;

  /**
   * Unique id for the organization that the project belongs under
   */
  org_id: string;

  /**
   * Date of project creation
   */
  created?: string | null;

  /**
   * Date of project deletion, or null if the project is still active
   */
  deleted_at?: string | null;

  /**
   * Identifies the user who created the project
   */
  user_id?: string | null;
}

export interface ProjectCreateParams {
  /**
   * Name of the project
   */
  name: string;

  /**
   * For nearly all users, this parameter should be unnecessary. But in the rare case
   * that your API key belongs to multiple organizations, you may specify the name of
   * the organization the project belongs in.
   */
  org_name?: string | null;
}

export interface ProjectUpdateParams {
  /**
   * Name of the project
   */
  name?: string | null;
}

export interface ProjectListParams extends ListObjectsParams {
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
   * Name of the project to search for
   */
  project_name?: string;
}

export interface ProjectReplaceParams {
  /**
   * Name of the project
   */
  name: string;

  /**
   * For nearly all users, this parameter should be unnecessary. But in the rare case
   * that your API key belongs to multiple organizations, you may specify the name of
   * the organization the project belongs in.
   */
  org_name?: string | null;
}

export namespace ProjectResource {
  export import Project = ProjectAPI.Project;
  export import ProjectsListObjects = ProjectAPI.ProjectsListObjects;
  export import ProjectCreateParams = ProjectAPI.ProjectCreateParams;
  export import ProjectUpdateParams = ProjectAPI.ProjectUpdateParams;
  export import ProjectListParams = ProjectAPI.ProjectListParams;
  export import ProjectReplaceParams = ProjectAPI.ProjectReplaceParams;
  export import Logs = LogsAPI.Logs;
  export import LogFetchResponse = LogsAPI.LogFetchResponse;
  export import LogFetchPostResponse = LogsAPI.LogFetchPostResponse;
  export import LogInsertResponse = LogsAPI.LogInsertResponse;
  export import LogFeedbackParams = LogsAPI.LogFeedbackParams;
  export import LogFetchParams = LogsAPI.LogFetchParams;
  export import LogFetchPostParams = LogsAPI.LogFetchPostParams;
  export import LogInsertParams = LogsAPI.LogInsertParams;
}
