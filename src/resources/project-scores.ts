// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';
import { ProjectScoresListObjects } from './shared';
import { type ListObjectsParams } from '../pagination';

export class ProjectScores extends APIResource {
  /**
   * Create a new project_score. If there is an existing project_score in the project
   * with the same name as the one specified in the request, will return the existing
   * project_score unmodified
   */
  create(
    body: ProjectScoreCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ProjectScore> {
    return this._client.post('/v1/project_score', { body, ...options });
  }

  /**
   * Get a project_score object by its id
   */
  retrieve(projectScoreId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.ProjectScore> {
    return this._client.get(`/v1/project_score/${projectScoreId}`, options);
  }

  /**
   * Partially update a project_score object. Specify the fields to update in the
   * payload. Any object-type fields will be deep-merged with existing content.
   * Currently we do not support removing fields or setting them to null.
   */
  update(
    projectScoreId: string,
    body?: ProjectScoreUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ProjectScore>;
  update(projectScoreId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.ProjectScore>;
  update(
    projectScoreId: string,
    body: ProjectScoreUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ProjectScore> {
    if (isRequestOptions(body)) {
      return this.update(projectScoreId, {}, body);
    }
    return this._client.patch(`/v1/project_score/${projectScoreId}`, { body, ...options });
  }

  /**
   * List out all project_scores. The project_scores are sorted by creation date,
   * with the most recently-created project_scores coming first
   */
  list(
    query?: ProjectScoreListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProjectScoresListObjects, Shared.ProjectScore>;
  list(options?: Core.RequestOptions): Core.PagePromise<ProjectScoresListObjects, Shared.ProjectScore>;
  list(
    query: ProjectScoreListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProjectScoresListObjects, Shared.ProjectScore> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/project_score', ProjectScoresListObjects, { query, ...options });
  }

  /**
   * Delete a project_score object by its id
   */
  delete(projectScoreId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.ProjectScore> {
    return this._client.delete(`/v1/project_score/${projectScoreId}`, options);
  }

  /**
   * Create or replace project_score. If there is an existing project_score in the
   * project with the same name as the one specified in the request, will replace the
   * existing project_score with the provided fields
   */
  replace(
    body: ProjectScoreReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ProjectScore> {
    return this._client.put('/v1/project_score', { body, ...options });
  }
}

export interface ProjectScoreCreateParams {
  /**
   * Name of the project score
   */
  name: string;

  /**
   * Unique identifier for the project that the project score belongs under
   */
  project_id: string;

  /**
   * The type of the configured score
   */
  score_type: Shared.ProjectScoreType;

  /**
   * For categorical-type project scores, the list of all categories
   */
  categories?: Array<Shared.ProjectScoreCategory> | Record<string, number> | Array<string> | null;

  config?: Shared.ProjectScoreConfig | null;

  /**
   * Textual description of the project score
   */
  description?: string | null;
}

export interface ProjectScoreUpdateParams {
  /**
   * For categorical-type project scores, the list of all categories
   */
  categories?: Array<Shared.ProjectScoreCategory> | Record<string, number> | Array<string> | null;

  config?: Shared.ProjectScoreConfig | null;

  /**
   * Textual description of the project score
   */
  description?: string | null;

  /**
   * Name of the project score
   */
  name?: string | null;

  /**
   * The type of the configured score
   */
  score_type?: Shared.ProjectScoreType | null;
}

export interface ProjectScoreListParams extends ListObjectsParams {
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
   * Name of the project_score to search for
   */
  project_score_name?: string;

  /**
   * The type of the configured score
   */
  score_type?: Shared.ProjectScoreType | Array<Shared.ProjectScoreType>;
}

export interface ProjectScoreReplaceParams {
  /**
   * Name of the project score
   */
  name: string;

  /**
   * Unique identifier for the project that the project score belongs under
   */
  project_id: string;

  /**
   * The type of the configured score
   */
  score_type: Shared.ProjectScoreType;

  /**
   * For categorical-type project scores, the list of all categories
   */
  categories?: Array<Shared.ProjectScoreCategory> | Record<string, number> | Array<string> | null;

  config?: Shared.ProjectScoreConfig | null;

  /**
   * Textual description of the project score
   */
  description?: string | null;
}

export declare namespace ProjectScores {
  export {
    type ProjectScoreCreateParams as ProjectScoreCreateParams,
    type ProjectScoreUpdateParams as ProjectScoreUpdateParams,
    type ProjectScoreListParams as ProjectScoreListParams,
    type ProjectScoreReplaceParams as ProjectScoreReplaceParams,
  };
}

export { ProjectScoresListObjects };
