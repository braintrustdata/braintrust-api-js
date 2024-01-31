// File generated from our OpenAPI spec by Stainless.

import * as Core from 'braintrust-sdk-kotlin/core';
import { APIResource } from 'braintrust-sdk-kotlin/resource';
import { isRequestOptions } from 'braintrust-sdk-kotlin/core';
import * as ProjectAPI from 'braintrust-sdk-kotlin/resources/project/project';
import * as ProjectLogsAPI from 'braintrust-sdk-kotlin/resources/project/project-logs';

export class ProjectResource extends APIResource {
  projectLogs: ProjectLogsAPI.ProjectLogs = new ProjectLogsAPI.ProjectLogs(this._client);

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
   * do not support removing fields or setting them to null. As a workaround, you may
   * retrieve the full object with `GET /project/{id}` and then replace it with
   * `PUT /project`.
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
  list(query?: ProjectListParams, options?: Core.RequestOptions): Core.APIPromise<ProjectListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ProjectListResponse>;
  list(
    query: ProjectListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/project', { query, ...options });
  }

  /**
   * Delete a project object by its id
   */
  delete(projectId: string, options?: Core.RequestOptions): Core.APIPromise<Project> {
    return this._client.delete(`/v1/project/${projectId}`, options);
  }

  /**
   * Create or replace a new project. If there is an existing project with the same
   * name as the one specified in the request, will replace the existing project with
   * the provided fields
   */
  createOrReplace(
    body: ProjectCreateOrReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Project> {
    return this._client.put('/v1/project', { body, ...options });
  }
}

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

export interface ProjectListResponse {
  /**
   * A list of project objects
   */
  objects: Array<Project>;
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

export interface ProjectListParams {
  /**
   * A cursor for pagination. For example, if the initial item in the last page you
   * fetched had an id of `foo`, pass `ending_before=foo` to fetch the previous page.
   * Note: you may only pass one of `starting_after` and `ending_before`
   */
  ending_before?: string;

  /**
   * Limit the number of objects to return
   */
  limit?: number;

  /**
   * Filter search results to within a particular organization
   */
  org_name?: string;

  /**
   * Name of the project to search for
   */
  project_name?: string;

  /**
   * A cursor for pagination. For example, if the final item in the last page you
   * fetched had an id of `foo`, pass `starting_after=foo` to fetch the next page.
   * Note: you may only pass one of `starting_after` and `ending_before`
   */
  starting_after?: string;
}

export interface ProjectCreateOrReplaceParams {
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
  export import ProjectListResponse = ProjectAPI.ProjectListResponse;
  export import ProjectCreateParams = ProjectAPI.ProjectCreateParams;
  export import ProjectUpdateParams = ProjectAPI.ProjectUpdateParams;
  export import ProjectListParams = ProjectAPI.ProjectListParams;
  export import ProjectCreateOrReplaceParams = ProjectAPI.ProjectCreateOrReplaceParams;
  export import ProjectLogs = ProjectLogsAPI.ProjectLogs;
}
