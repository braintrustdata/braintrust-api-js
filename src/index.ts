// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as qs from 'qs';
import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources/index';

export interface ClientOptions {
  /**
   * Defaults to process.env['BRAINTRUST_API_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['BRAINTRUST_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Braintrust API.
 */
export class Braintrust extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Braintrust API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['BRAINTRUST_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['BRAINTRUST_BASE_URL'] ?? https://api.braintrust.dev] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('BRAINTRUST_BASE_URL'),
    apiKey = Core.readEnv('BRAINTRUST_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.BraintrustError(
        "The BRAINTRUST_API_KEY environment variable is missing or empty; either provide it, or instantiate the Braintrust client with an apiKey option, like new Braintrust({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://api.braintrust.dev`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  topLevel: API.TopLevel = new API.TopLevel(this);
  projects: API.Projects = new API.Projects(this);
  experiments: API.Experiments = new API.Experiments(this);
  datasets: API.Datasets = new API.Datasets(this);
  prompts: API.Prompts = new API.Prompts(this);
  roles: API.Roles = new API.Roles(this);
  groups: API.Groups = new API.Groups(this);
  acls: API.ACLs = new API.ACLs(this);
  users: API.Users = new API.Users(this);
  projectScores: API.ProjectScores = new API.ProjectScores(this);
  projectTags: API.ProjectTags = new API.ProjectTags(this);
  functions: API.Functions = new API.Functions(this);
  views: API.Views = new API.Views(this);
  organizations: API.Organizations = new API.Organizations(this);
  apiKeys: API.APIKeys = new API.APIKeys(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.apiKey}` };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static Braintrust = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static BraintrustError = Errors.BraintrustError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  BraintrustError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Braintrust {
  export import RequestOptions = Core.RequestOptions;

  export import ListObjects = Pagination.ListObjects;
  export import ListObjectsParams = Pagination.ListObjectsParams;
  export import ListObjectsResponse = Pagination.ListObjectsResponse;

  export import TopLevel = API.TopLevel;
  export import TopLevelHelloWorldResponse = API.TopLevelHelloWorldResponse;

  export import Projects = API.Projects;
  export import Project = API.Project;
  export import ProjectsListObjects = API.ProjectsListObjects;
  export import ProjectCreateParams = API.ProjectCreateParams;
  export import ProjectUpdateParams = API.ProjectUpdateParams;
  export import ProjectListParams = API.ProjectListParams;

  export import Experiments = API.Experiments;
  export import Experiment = API.Experiment;
  export import RepoInfo = API.RepoInfo;
  export import ExperimentFetchResponse = API.ExperimentFetchResponse;
  export import ExperimentFetchPostResponse = API.ExperimentFetchPostResponse;
  export import ExperimentInsertResponse = API.ExperimentInsertResponse;
  export import ExperimentSummarizeResponse = API.ExperimentSummarizeResponse;
  export import ExperimentsListObjects = API.ExperimentsListObjects;
  export import ExperimentCreateParams = API.ExperimentCreateParams;
  export import ExperimentUpdateParams = API.ExperimentUpdateParams;
  export import ExperimentListParams = API.ExperimentListParams;
  export import ExperimentFeedbackParams = API.ExperimentFeedbackParams;
  export import ExperimentFetchParams = API.ExperimentFetchParams;
  export import ExperimentFetchPostParams = API.ExperimentFetchPostParams;
  export import ExperimentInsertParams = API.ExperimentInsertParams;
  export import ExperimentSummarizeParams = API.ExperimentSummarizeParams;

  export import Datasets = API.Datasets;
  export import Dataset = API.Dataset;
  export import DatasetFetchResponse = API.DatasetFetchResponse;
  export import DatasetFetchPostResponse = API.DatasetFetchPostResponse;
  export import DatasetInsertResponse = API.DatasetInsertResponse;
  export import DatasetSummarizeResponse = API.DatasetSummarizeResponse;
  export import DatasetsListObjects = API.DatasetsListObjects;
  export import DatasetCreateParams = API.DatasetCreateParams;
  export import DatasetUpdateParams = API.DatasetUpdateParams;
  export import DatasetListParams = API.DatasetListParams;
  export import DatasetFeedbackParams = API.DatasetFeedbackParams;
  export import DatasetFetchParams = API.DatasetFetchParams;
  export import DatasetFetchPostParams = API.DatasetFetchPostParams;
  export import DatasetInsertParams = API.DatasetInsertParams;
  export import DatasetSummarizeParams = API.DatasetSummarizeParams;

  export import Prompts = API.Prompts;
  export import Prompt = API.Prompt;
  export import PromptsListObjects = API.PromptsListObjects;
  export import PromptCreateParams = API.PromptCreateParams;
  export import PromptUpdateParams = API.PromptUpdateParams;
  export import PromptListParams = API.PromptListParams;
  export import PromptReplaceParams = API.PromptReplaceParams;

  export import Roles = API.Roles;
  export import Role = API.Role;
  export import RolesListObjects = API.RolesListObjects;
  export import RoleCreateParams = API.RoleCreateParams;
  export import RoleUpdateParams = API.RoleUpdateParams;
  export import RoleListParams = API.RoleListParams;
  export import RoleReplaceParams = API.RoleReplaceParams;

  export import Groups = API.Groups;
  export import Group = API.Group;
  export import GroupsListObjects = API.GroupsListObjects;
  export import GroupCreateParams = API.GroupCreateParams;
  export import GroupUpdateParams = API.GroupUpdateParams;
  export import GroupListParams = API.GroupListParams;
  export import GroupReplaceParams = API.GroupReplaceParams;

  export import ACLs = API.ACLs;
  export import ACL = API.ACL;
  export import ACLsListObjects = API.ACLsListObjects;
  export import ACLCreateParams = API.ACLCreateParams;
  export import ACLListParams = API.ACLListParams;

  export import Users = API.Users;
  export import User = API.User;
  export import UsersListObjects = API.UsersListObjects;
  export import UserListParams = API.UserListParams;

  export import ProjectScores = API.ProjectScores;
  export import ProjectScore = API.ProjectScore;
  export import ProjectScoreCategory = API.ProjectScoreCategory;
  export import ProjectScoresListObjects = API.ProjectScoresListObjects;
  export import ProjectScoreCreateParams = API.ProjectScoreCreateParams;
  export import ProjectScoreUpdateParams = API.ProjectScoreUpdateParams;
  export import ProjectScoreListParams = API.ProjectScoreListParams;
  export import ProjectScoreReplaceParams = API.ProjectScoreReplaceParams;

  export import ProjectTags = API.ProjectTags;
  export import ProjectTag = API.ProjectTag;
  export import ProjectTagsListObjects = API.ProjectTagsListObjects;
  export import ProjectTagCreateParams = API.ProjectTagCreateParams;
  export import ProjectTagUpdateParams = API.ProjectTagUpdateParams;
  export import ProjectTagListParams = API.ProjectTagListParams;
  export import ProjectTagReplaceParams = API.ProjectTagReplaceParams;

  export import Functions = API.Functions;
  export import Function = API.Function;
  export import FunctionsListObjects = API.FunctionsListObjects;
  export import FunctionCreateParams = API.FunctionCreateParams;
  export import FunctionUpdateParams = API.FunctionUpdateParams;
  export import FunctionListParams = API.FunctionListParams;
  export import FunctionReplaceParams = API.FunctionReplaceParams;

  export import Views = API.Views;
  export import View = API.View;
  export import ViewData = API.ViewData;
  export import ViewDataSearch = API.ViewDataSearch;
  export import ViewOptions = API.ViewOptions;
  export import ViewsListObjects = API.ViewsListObjects;
  export import ViewCreateParams = API.ViewCreateParams;
  export import ViewRetrieveParams = API.ViewRetrieveParams;
  export import ViewUpdateParams = API.ViewUpdateParams;
  export import ViewListParams = API.ViewListParams;
  export import ViewDeleteParams = API.ViewDeleteParams;
  export import ViewReplaceParams = API.ViewReplaceParams;

  export import Organizations = API.Organizations;
  export import Organization = API.Organization;
  export import OrganizationsListObjects = API.OrganizationsListObjects;
  export import OrganizationUpdateParams = API.OrganizationUpdateParams;
  export import OrganizationListParams = API.OrganizationListParams;

  export import APIKeys = API.APIKeys;
  export import APIKey = API.APIKey;
  export import APIKeyCreateResponse = API.APIKeyCreateResponse;
  export import APIKeysListObjects = API.APIKeysListObjects;
  export import APIKeyCreateParams = API.APIKeyCreateParams;
  export import APIKeyListParams = API.APIKeyListParams;

  export import PromptData = API.PromptData;
}

export default Braintrust;
