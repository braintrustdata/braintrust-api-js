// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import { ProjectsListObjects } from '../shared';
import * as LogsAPI from './logs';
import {
  LogFeedbackParams,
  LogFetchParams,
  LogFetchPostParams,
  LogInsertParams,
  LogInsertResponse,
  Logs,
} from './logs';
import { type ListObjectsParams } from '../../pagination';

export class Projects extends APIResource {
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);

  /**
   * Create a new project. If there is an existing project with the same name as the
   * one specified in the request, will return the existing project unmodified
   */
  create(body: ProjectCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Project> {
    return this._client.post('/v1/project', { body, ...options });
  }

  /**
   * Get a project object by its id
   */
  retrieve(projectId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Project> {
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
  ): Core.APIPromise<Shared.Project>;
  update(projectId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Project>;
  update(
    projectId: string,
    body: ProjectUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Project> {
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
  ): Core.PagePromise<ProjectsListObjects, Shared.Project>;
  list(options?: Core.RequestOptions): Core.PagePromise<ProjectsListObjects, Shared.Project>;
  list(
    query: ProjectListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProjectsListObjects, Shared.Project> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/project', ProjectsListObjects, { query, ...options });
  }

  /**
   * Delete a project object by its id
   */
  delete(projectId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Project> {
    return this._client.delete(`/v1/project/${projectId}`, options);
  }
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

  /**
   * Project settings. Patch operations replace all settings, so make sure you
   * include all settings you want to keep.
   */
  settings?: Shared.ProjectSettings | null;
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

Projects.Logs = Logs;

export declare namespace Projects {
  export {
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectListParams as ProjectListParams,
  };

  export {
    Logs as Logs,
    type LogInsertResponse as LogInsertResponse,
    type LogFeedbackParams as LogFeedbackParams,
    type LogFetchParams as LogFetchParams,
    type LogFetchPostParams as LogFetchPostParams,
    type LogInsertParams as LogInsertParams,
  };
}

export { ProjectsListObjects };
