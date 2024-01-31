// File generated from our OpenAPI spec by Stainless.

import * as Core from './core';
import * as Errors from './error';
import { type Agent } from './_shims/index';
import * as Uploads from './uploads';
import * as API from 'braintrust-sdk-kotlin/resources/index';

export interface ClientOptions {
  /**
   * Defaults to process.env['BRAINTRUST_SDK_KOTLIN_API_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['BRAINTRUST_SDK_KOTLIN_BASE_URL'].
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

/** API Client for interfacing with the Braintrust Sdk Kotlin API. */
export class BraintrustSdkKotlin extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Braintrust Sdk Kotlin API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['BRAINTRUST_SDK_KOTLIN_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['BRAINTRUST_SDK_KOTLIN_BASE_URL'] ?? https://api.braintrustdata.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('BRAINTRUST_SDK_KOTLIN_BASE_URL'),
    apiKey = Core.readEnv('BRAINTRUST_SDK_KOTLIN_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.BraintrustSdkKotlinError(
        "The BRAINTRUST_SDK_KOTLIN_API_KEY environment variable is missing or empty; either provide it, or instantiate the BraintrustSdkKotlin client with an apiKey option, like new BraintrustSdkKotlin({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://api.braintrustdata.com`,
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

  project: API.ProjectResource = new API.ProjectResource(this);
  projectLogs: API.ProjectLogs = new API.ProjectLogs(this);
  experiment: API.ExperimentResource = new API.ExperimentResource(this);
  experiments: API.Experiments = new API.Experiments(this);
  datasets: API.Datasets = new API.Datasets(this);
  topLevel: API.TopLevel = new API.TopLevel(this);
  v1: API.V1 = new API.V1(this);

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

  static BraintrustSdkKotlin = this;

  static BraintrustSdkKotlinError = Errors.BraintrustSdkKotlinError;
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
}

export const {
  BraintrustSdkKotlinError,
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

export namespace BraintrustSdkKotlin {
  // Helper functions
  export import toFile = Uploads.toFile;
  export import fileFromPath = Uploads.fileFromPath;

  export import RequestOptions = Core.RequestOptions;

  export import ProjectResource = API.ProjectResource;
  export import Project = API.Project;
  export import ProjectListResponse = API.ProjectListResponse;
  export import ProjectCreateParams = API.ProjectCreateParams;
  export import ProjectUpdateParams = API.ProjectUpdateParams;
  export import ProjectListParams = API.ProjectListParams;
  export import ProjectCreateOrReplaceParams = API.ProjectCreateOrReplaceParams;

  export import ProjectLogs = API.ProjectLogs;
  export import ProjectLogFetchResponse = API.ProjectLogFetchResponse;
  export import ProjectLogInsertResponse = API.ProjectLogInsertResponse;
  export import ProjectLogInsertFetchResponse = API.ProjectLogInsertFetchResponse;
  export import ProjectLogFetchParams = API.ProjectLogFetchParams;
  export import ProjectLogInsertParams = API.ProjectLogInsertParams;
  export import ProjectLogInsertFetchParams = API.ProjectLogInsertFetchParams;
  export import ProjectLogLogFeedbackParams = API.ProjectLogLogFeedbackParams;

  export import ExperimentResource = API.ExperimentResource;
  export import Experiment = API.Experiment;
  export import ExperimentFetchEventsResponse = API.ExperimentFetchEventsResponse;
  export import ExperimentInsertResponse = API.ExperimentInsertResponse;
  export import ExperimentCreateParams = API.ExperimentCreateParams;
  export import ExperimentUpdateParams = API.ExperimentUpdateParams;
  export import ExperimentFeedbackParams = API.ExperimentFeedbackParams;
  export import ExperimentFetchEventsParams = API.ExperimentFetchEventsParams;
  export import ExperimentInsertParams = API.ExperimentInsertParams;
  export import ExperimentUpdatePartialParams = API.ExperimentUpdatePartialParams;

  export import Experiments = API.Experiments;
  export import ExperimentListResponse = API.ExperimentListResponse;
  export import ExperimentListParams = API.ExperimentListParams;

  export import Datasets = API.Datasets;
  export import Dataset = API.Dataset;
  export import DatasetListResponse = API.DatasetListResponse;
  export import DatasetFetchResponse = API.DatasetFetchResponse;
  export import DatasetInsertResponse = API.DatasetInsertResponse;
  export import DatasetCreateParams = API.DatasetCreateParams;
  export import DatasetUpdateParams = API.DatasetUpdateParams;
  export import DatasetListParams = API.DatasetListParams;
  export import DatasetFeedbackParams = API.DatasetFeedbackParams;
  export import DatasetFetchParams = API.DatasetFetchParams;
  export import DatasetInsertParams = API.DatasetInsertParams;

  export import TopLevel = API.TopLevel;

  export import V1 = API.V1;
  export import V1HelloWorldResponse = API.V1HelloWorldResponse;
}

export default BraintrustSdkKotlin;
