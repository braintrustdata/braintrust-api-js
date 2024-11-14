// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import { type ListObjectsParams, ListObjectsResponse } from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  ACLBatchUpdateParams,
  ACLCreateParams,
  ACLFindAndDeleteParams,
  ACLListParams,
  ACLs,
} from './resources/acls';
import {
  AISecretCreateParams,
  AISecretFindAndDeleteParams,
  AISecretListParams,
  AISecretReplaceParams,
  AISecretUpdateParams,
  AISecrets,
} from './resources/ai-secrets';
import { APIKeyCreateParams, APIKeyListParams, APIKeys } from './resources/api-keys';
import {
  DatasetCreateParams,
  DatasetFeedbackParams,
  DatasetFetchParams,
  DatasetFetchPostParams,
  DatasetInsertParams,
  DatasetListParams,
  DatasetSummarizeParams,
  DatasetUpdateParams,
  Datasets,
} from './resources/datasets';
import {
  EnvVarCreateParams,
  EnvVarListParams,
  EnvVarListResponse,
  EnvVarReplaceParams,
  EnvVarUpdateParams,
  EnvVars,
} from './resources/env-vars';
import { EvalCreateParams, Evals } from './resources/evals';
import {
  ExperimentCreateParams,
  ExperimentFeedbackParams,
  ExperimentFetchParams,
  ExperimentFetchPostParams,
  ExperimentInsertParams,
  ExperimentInsertResponse,
  ExperimentListParams,
  ExperimentSummarizeParams,
  ExperimentUpdateParams,
  Experiments,
} from './resources/experiments';
import {
  FunctionCreateParams,
  FunctionInvokeParams,
  FunctionInvokeResponse,
  FunctionListParams,
  FunctionReplaceParams,
  FunctionUpdateParams,
  Functions,
} from './resources/functions';
import {
  GroupCreateParams,
  GroupListParams,
  GroupReplaceParams,
  GroupUpdateParams,
  Groups,
} from './resources/groups';
import {
  ProjectScoreCreateParams,
  ProjectScoreListParams,
  ProjectScoreReplaceParams,
  ProjectScoreUpdateParams,
  ProjectScores,
} from './resources/project-scores';
import {
  ProjectTagCreateParams,
  ProjectTagListParams,
  ProjectTagReplaceParams,
  ProjectTagUpdateParams,
  ProjectTags,
} from './resources/project-tags';
import {
  PromptCreateParams,
  PromptListParams,
  PromptReplaceParams,
  PromptUpdateParams,
  Prompts,
} from './resources/prompts';
import {
  RoleCreateParams,
  RoleListParams,
  RoleReplaceParams,
  RoleUpdateParams,
  Roles,
} from './resources/roles';
import {
  SpanIframeCreateParams,
  SpanIframeListParams,
  SpanIframeReplaceParams,
  SpanIframeUpdateParams,
  SpanIframes,
} from './resources/span-iframes';
import { TopLevel, TopLevelHelloWorldResponse } from './resources/top-level';
import { UserListParams, Users } from './resources/users';
import {
  ViewCreateParams,
  ViewDeleteParams,
  ViewListParams,
  ViewReplaceParams,
  ViewRetrieveParams,
  ViewUpdateParams,
  Views,
} from './resources/views';
import {
  OrganizationListParams,
  OrganizationUpdateParams,
  Organizations,
} from './resources/organizations/organizations';
import {
  ProjectCreateParams,
  ProjectListParams,
  ProjectUpdateParams,
  Projects,
} from './resources/projects/projects';

export interface ClientOptions {
  /**
   * Defaults to process.env['BRAINTRUST_API_KEY'].
   */
  apiKey?: string | null | undefined;

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
  apiKey: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Braintrust API.
   *
   * @param {string | null | undefined} [opts.apiKey=process.env['BRAINTRUST_API_KEY'] ?? null]
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
    apiKey = Core.readEnv('BRAINTRUST_API_KEY') ?? null,
    ...opts
  }: ClientOptions = {}) {
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
  spanIframes: API.SpanIframes = new API.SpanIframes(this);
  functions: API.Functions = new API.Functions(this);
  views: API.Views = new API.Views(this);
  organizations: API.Organizations = new API.Organizations(this);
  apiKeys: API.APIKeys = new API.APIKeys(this);
  aiSecrets: API.AISecrets = new API.AISecrets(this);
  envVars: API.EnvVars = new API.EnvVars(this);
  evals: API.Evals = new API.Evals(this);

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
    if (this.apiKey == null) {
      return {};
    }
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

Braintrust.TopLevel = TopLevel;
Braintrust.Projects = Projects;
Braintrust.Experiments = Experiments;
Braintrust.Datasets = Datasets;
Braintrust.Prompts = Prompts;
Braintrust.Roles = Roles;
Braintrust.Groups = Groups;
Braintrust.ACLs = ACLs;
Braintrust.Users = Users;
Braintrust.ProjectScores = ProjectScores;
Braintrust.ProjectTags = ProjectTags;
Braintrust.SpanIframes = SpanIframes;
Braintrust.Functions = Functions;
Braintrust.Views = Views;
Braintrust.Organizations = Organizations;
Braintrust.APIKeys = APIKeys;
Braintrust.AISecrets = AISecrets;
Braintrust.EnvVars = EnvVars;
Braintrust.Evals = Evals;
export declare namespace Braintrust {
  export type RequestOptions = Core.RequestOptions;

  export import ListObjects = Pagination.ListObjects;
  export { type ListObjectsParams as ListObjectsParams, type ListObjectsResponse as ListObjectsResponse };

  export { TopLevel as TopLevel, type TopLevelHelloWorldResponse as TopLevelHelloWorldResponse };

  export {
    Projects as Projects,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectListParams as ProjectListParams,
  };

  export {
    Experiments as Experiments,
    type ExperimentInsertResponse as ExperimentInsertResponse,
    type ExperimentCreateParams as ExperimentCreateParams,
    type ExperimentUpdateParams as ExperimentUpdateParams,
    type ExperimentListParams as ExperimentListParams,
    type ExperimentFeedbackParams as ExperimentFeedbackParams,
    type ExperimentFetchParams as ExperimentFetchParams,
    type ExperimentFetchPostParams as ExperimentFetchPostParams,
    type ExperimentInsertParams as ExperimentInsertParams,
    type ExperimentSummarizeParams as ExperimentSummarizeParams,
  };

  export {
    Datasets as Datasets,
    type DatasetCreateParams as DatasetCreateParams,
    type DatasetUpdateParams as DatasetUpdateParams,
    type DatasetListParams as DatasetListParams,
    type DatasetFeedbackParams as DatasetFeedbackParams,
    type DatasetFetchParams as DatasetFetchParams,
    type DatasetFetchPostParams as DatasetFetchPostParams,
    type DatasetInsertParams as DatasetInsertParams,
    type DatasetSummarizeParams as DatasetSummarizeParams,
  };

  export {
    Prompts as Prompts,
    type PromptCreateParams as PromptCreateParams,
    type PromptUpdateParams as PromptUpdateParams,
    type PromptListParams as PromptListParams,
    type PromptReplaceParams as PromptReplaceParams,
  };

  export {
    Roles as Roles,
    type RoleCreateParams as RoleCreateParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleListParams as RoleListParams,
    type RoleReplaceParams as RoleReplaceParams,
  };

  export {
    Groups as Groups,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
    type GroupReplaceParams as GroupReplaceParams,
  };

  export {
    ACLs as ACLs,
    type ACLCreateParams as ACLCreateParams,
    type ACLListParams as ACLListParams,
    type ACLBatchUpdateParams as ACLBatchUpdateParams,
    type ACLFindAndDeleteParams as ACLFindAndDeleteParams,
  };

  export { Users as Users, type UserListParams as UserListParams };

  export {
    ProjectScores as ProjectScores,
    type ProjectScoreCreateParams as ProjectScoreCreateParams,
    type ProjectScoreUpdateParams as ProjectScoreUpdateParams,
    type ProjectScoreListParams as ProjectScoreListParams,
    type ProjectScoreReplaceParams as ProjectScoreReplaceParams,
  };

  export {
    ProjectTags as ProjectTags,
    type ProjectTagCreateParams as ProjectTagCreateParams,
    type ProjectTagUpdateParams as ProjectTagUpdateParams,
    type ProjectTagListParams as ProjectTagListParams,
    type ProjectTagReplaceParams as ProjectTagReplaceParams,
  };

  export {
    SpanIframes as SpanIframes,
    type SpanIframeCreateParams as SpanIframeCreateParams,
    type SpanIframeUpdateParams as SpanIframeUpdateParams,
    type SpanIframeListParams as SpanIframeListParams,
    type SpanIframeReplaceParams as SpanIframeReplaceParams,
  };

  export {
    Functions as Functions,
    type FunctionInvokeResponse as FunctionInvokeResponse,
    type FunctionCreateParams as FunctionCreateParams,
    type FunctionUpdateParams as FunctionUpdateParams,
    type FunctionListParams as FunctionListParams,
    type FunctionInvokeParams as FunctionInvokeParams,
    type FunctionReplaceParams as FunctionReplaceParams,
  };

  export {
    Views as Views,
    type ViewCreateParams as ViewCreateParams,
    type ViewRetrieveParams as ViewRetrieveParams,
    type ViewUpdateParams as ViewUpdateParams,
    type ViewListParams as ViewListParams,
    type ViewDeleteParams as ViewDeleteParams,
    type ViewReplaceParams as ViewReplaceParams,
  };

  export {
    Organizations as Organizations,
    type OrganizationUpdateParams as OrganizationUpdateParams,
    type OrganizationListParams as OrganizationListParams,
  };

  export {
    APIKeys as APIKeys,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyListParams as APIKeyListParams,
  };

  export {
    AISecrets as AISecrets,
    type AISecretCreateParams as AISecretCreateParams,
    type AISecretUpdateParams as AISecretUpdateParams,
    type AISecretListParams as AISecretListParams,
    type AISecretFindAndDeleteParams as AISecretFindAndDeleteParams,
    type AISecretReplaceParams as AISecretReplaceParams,
  };

  export {
    EnvVars as EnvVars,
    type EnvVarListResponse as EnvVarListResponse,
    type EnvVarCreateParams as EnvVarCreateParams,
    type EnvVarUpdateParams as EnvVarUpdateParams,
    type EnvVarListParams as EnvVarListParams,
    type EnvVarReplaceParams as EnvVarReplaceParams,
  };

  export { Evals as Evals, type EvalCreateParams as EvalCreateParams };

  export type AISecret = API.AISecret;
  export type ACL = API.ACL;
  export type ACLBatchUpdateResponse = API.ACLBatchUpdateResponse;
  export type APIKey = API.APIKey;
  export type ChatCompletionContentPartImage = API.ChatCompletionContentPartImage;
  export type ChatCompletionContentPartText = API.ChatCompletionContentPartText;
  export type ChatCompletionMessageToolCall = API.ChatCompletionMessageToolCall;
  export type CodeBundle = API.CodeBundle;
  export type CreateAPIKeyOutput = API.CreateAPIKeyOutput;
  export type CrossObjectInsertResponse = API.CrossObjectInsertResponse;
  export type DataSummary = API.DataSummary;
  export type Dataset = API.Dataset;
  export type DatasetEvent = API.DatasetEvent;
  export type EnvVar = API.EnvVar;
  export type Experiment = API.Experiment;
  export type ExperimentEvent = API.ExperimentEvent;
  export type FeedbackDatasetItem = API.FeedbackDatasetItem;
  export type FeedbackExperimentItem = API.FeedbackExperimentItem;
  export type FeedbackProjectLogsItem = API.FeedbackProjectLogsItem;
  export type FeedbackResponseSchema = API.FeedbackResponseSchema;
  export type FetchDatasetEventsResponse = API.FetchDatasetEventsResponse;
  export type FetchExperimentEventsResponse = API.FetchExperimentEventsResponse;
  export type FetchProjectLogsEventsResponse = API.FetchProjectLogsEventsResponse;
  export type Function = API.Function;
  export type Group = API.Group;
  export type InsertDatasetEventMerge = API.InsertDatasetEventMerge;
  export type InsertDatasetEventReplace = API.InsertDatasetEventReplace;
  export type InsertEventsResponse = API.InsertEventsResponse;
  export type InsertExperimentEventMerge = API.InsertExperimentEventMerge;
  export type InsertExperimentEventReplace = API.InsertExperimentEventReplace;
  export type InsertProjectLogsEventMerge = API.InsertProjectLogsEventMerge;
  export type InsertProjectLogsEventReplace = API.InsertProjectLogsEventReplace;
  export type MetricSummary = API.MetricSummary;
  export type OnlineScoreConfig = API.OnlineScoreConfig;
  export type Organization = API.Organization;
  export type PatchOrganizationMembersOutput = API.PatchOrganizationMembersOutput;
  export type PathLookupFilter = API.PathLookupFilter;
  export type Project = API.Project;
  export type ProjectLogsEvent = API.ProjectLogsEvent;
  export type ProjectScore = API.ProjectScore;
  export type ProjectScoreCategory = API.ProjectScoreCategory;
  export type ProjectScoreConfig = API.ProjectScoreConfig;
  export type ProjectSettings = API.ProjectSettings;
  export type ProjectTag = API.ProjectTag;
  export type Prompt = API.Prompt;
  export type PromptData = API.PromptData;
  export type RepoInfo = API.RepoInfo;
  export type Role = API.Role;
  export type ScoreSummary = API.ScoreSummary;
  export type SpanIFrame = API.SpanIFrame;
  export type SummarizeDatasetResponse = API.SummarizeDatasetResponse;
  export type SummarizeExperimentResponse = API.SummarizeExperimentResponse;
  export type User = API.User;
  export type View = API.View;
  export type ViewData = API.ViewData;
  export type ViewDataSearch = API.ViewDataSearch;
  export type ViewOptions = API.ViewOptions;
}

export { toFile, fileFromPath } from '@braintrust/api/uploads';
export {
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
} from '@braintrust/api/error';

export default Braintrust;
