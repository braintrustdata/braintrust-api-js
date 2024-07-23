// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@braintrust/api/resource';
import { isRequestOptions } from '@braintrust/api/core';
import * as Core from '@braintrust/api/core';
import * as ProjectScoresAPI from '@braintrust/api/resources/project-scores';
import { ListObjects, type ListObjectsParams } from '@braintrust/api/pagination';

export class ProjectScores extends APIResource {
  /**
   * Create a new project_score. If there is an existing project_score in the project
   * with the same name as the one specified in the request, will return the existing
   * project_score unmodified
   */
  create(body: ProjectScoreCreateParams, options?: Core.RequestOptions): Core.APIPromise<ProjectScore> {
    return this._client.post('/v1/project_score', { body, ...options });
  }

  /**
   * Get a project_score object by its id
   */
  retrieve(projectScoreId: string, options?: Core.RequestOptions): Core.APIPromise<ProjectScore> {
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
  ): Core.APIPromise<ProjectScore>;
  update(projectScoreId: string, options?: Core.RequestOptions): Core.APIPromise<ProjectScore>;
  update(
    projectScoreId: string,
    body: ProjectScoreUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectScore> {
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
  ): Core.PagePromise<ProjectScoresListObjects, ProjectScore>;
  list(options?: Core.RequestOptions): Core.PagePromise<ProjectScoresListObjects, ProjectScore>;
  list(
    query: ProjectScoreListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProjectScoresListObjects, ProjectScore> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/project_score', ProjectScoresListObjects, { query, ...options });
  }

  /**
   * Delete a project_score object by its id
   */
  delete(projectScoreId: string, options?: Core.RequestOptions): Core.APIPromise<ProjectScore> {
    return this._client.delete(`/v1/project_score/${projectScoreId}`, options);
  }

  /**
   * Create or replace project_score. If there is an existing project_score in the
   * project with the same name as the one specified in the request, will replace the
   * existing project_score with the provided fields
   */
  replace(body: ProjectScoreReplaceParams, options?: Core.RequestOptions): Core.APIPromise<ProjectScore> {
    return this._client.put('/v1/project_score', { body, ...options });
  }
}

/**
 * Pagination for endpoints which list data objects
 */
export class ProjectScoresListObjects extends ListObjects<ProjectScore> {}

/**
 * A project score is a user-configured score, which can be manually-labeled
 * through the UI
 */
export interface ProjectScore {
  /**
   * Unique identifier for the project score
   */
  id: string;

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
  score_type: 'slider' | 'categorical' | 'weighted' | 'minimum' | null;

  user_id: string;

  /**
   * For categorical-type project scores, the list of all categories
   */
  categories?:
    | Array<ProjectScore.UnionMember0>
    | Record<string, number>
    | Array<string>
    | ProjectScore.UnionMember3
    | null;

  config?: ProjectScore.Config | null;

  /**
   * Date of project score creation
   */
  created?: string | null;

  /**
   * Textual description of the project score
   */
  description?: string | null;

  /**
   * An optional LexoRank-based string that sets the sort position for the score in
   * the UI
   */
  position?: string | null;
}

export namespace ProjectScore {
  /**
   * For categorical-type project scores, defines a single category
   */
  export interface UnionMember0 {
    /**
     * Name of the category
     */
    name: string;

    /**
     * Numerical value of the category. Must be between 0 and 1, inclusive
     */
    value: number;
  }

  export interface UnionMember3 {}

  export interface Config {
    destination?: 'expected' | null;

    multi_select?: boolean | null;
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
  score_type: 'slider' | 'categorical' | 'weighted' | 'minimum' | null;

  /**
   * For categorical-type project scores, the list of all categories
   */
  categories?:
    | Array<ProjectScoreCreateParams.UnionMember0>
    | Record<string, number>
    | Array<string>
    | ProjectScoreCreateParams.UnionMember3
    | null;

  /**
   * Textual description of the project score
   */
  description?: string | null;
}

export namespace ProjectScoreCreateParams {
  /**
   * For categorical-type project scores, defines a single category
   */
  export interface UnionMember0 {
    /**
     * Name of the category
     */
    name: string;

    /**
     * Numerical value of the category. Must be between 0 and 1, inclusive
     */
    value: number;
  }

  export interface UnionMember3 {}
}

export interface ProjectScoreUpdateParams {
  /**
   * For categorical-type project scores, the list of all categories
   */
  categories?:
    | Array<ProjectScoreUpdateParams.UnionMember0>
    | Record<string, number>
    | Array<string>
    | ProjectScoreUpdateParams.UnionMember3
    | null;

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
  score_type?: 'slider' | 'categorical' | 'weighted' | 'minimum' | null;
}

export namespace ProjectScoreUpdateParams {
  /**
   * For categorical-type project scores, defines a single category
   */
  export interface UnionMember0 {
    /**
     * Name of the category
     */
    name: string;

    /**
     * Numerical value of the category. Must be between 0 and 1, inclusive
     */
    value: number;
  }

  export interface UnionMember3 {}
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
   * Name of the project to search for
   */
  project_name?: string;

  /**
   * Name of the project_score to search for
   */
  project_score_name?: string;
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
  score_type: 'slider' | 'categorical' | 'weighted' | 'minimum' | null;

  /**
   * For categorical-type project scores, the list of all categories
   */
  categories?:
    | Array<ProjectScoreReplaceParams.UnionMember0>
    | Record<string, number>
    | Array<string>
    | ProjectScoreReplaceParams.UnionMember3
    | null;

  /**
   * Textual description of the project score
   */
  description?: string | null;
}

export namespace ProjectScoreReplaceParams {
  /**
   * For categorical-type project scores, defines a single category
   */
  export interface UnionMember0 {
    /**
     * Name of the category
     */
    name: string;

    /**
     * Numerical value of the category. Must be between 0 and 1, inclusive
     */
    value: number;
  }

  export interface UnionMember3 {}
}

export namespace ProjectScores {
  export import ProjectScore = ProjectScoresAPI.ProjectScore;
  export import ProjectScoresListObjects = ProjectScoresAPI.ProjectScoresListObjects;
  export import ProjectScoreCreateParams = ProjectScoresAPI.ProjectScoreCreateParams;
  export import ProjectScoreUpdateParams = ProjectScoresAPI.ProjectScoreUpdateParams;
  export import ProjectScoreListParams = ProjectScoresAPI.ProjectScoreListParams;
  export import ProjectScoreReplaceParams = ProjectScoresAPI.ProjectScoreReplaceParams;
}
