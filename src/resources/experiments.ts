// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as ExperimentsAPI from './experiments';
import * as Shared from './shared';
import { ExperimentsListObjects } from './shared';
import { type ListObjectsParams } from '../pagination';

export class Experiments extends APIResource {
  /**
   * Create a new experiment. If there is an existing experiment in the project with
   * the same name as the one specified in the request, will return the existing
   * experiment unmodified
   */
  create(body: ExperimentCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Experiment> {
    return this._client.post('/v1/experiment', { body, ...options });
  }

  /**
   * Get an experiment object by its id
   */
  retrieve(experimentId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Experiment> {
    return this._client.get(`/v1/experiment/${experimentId}`, options);
  }

  /**
   * Partially update an experiment object. Specify the fields to update in the
   * payload. Any object-type fields will be deep-merged with existing content.
   * Currently we do not support removing fields or setting them to null.
   */
  update(
    experimentId: string,
    body?: ExperimentUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Experiment>;
  update(experimentId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Experiment>;
  update(
    experimentId: string,
    body: ExperimentUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Experiment> {
    if (isRequestOptions(body)) {
      return this.update(experimentId, {}, body);
    }
    return this._client.patch(`/v1/experiment/${experimentId}`, { body, ...options });
  }

  /**
   * List out all experiments. The experiments are sorted by creation date, with the
   * most recently-created experiments coming first
   */
  list(
    query?: ExperimentListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExperimentsListObjects, Shared.Experiment>;
  list(options?: Core.RequestOptions): Core.PagePromise<ExperimentsListObjects, Shared.Experiment>;
  list(
    query: ExperimentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExperimentsListObjects, Shared.Experiment> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/experiment', ExperimentsListObjects, { query, ...options });
  }

  /**
   * Delete an experiment object by its id
   */
  delete(experimentId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Experiment> {
    return this._client.delete(`/v1/experiment/${experimentId}`, options);
  }

  /**
   * Log feedback for a set of experiment events
   */
  feedback(
    experimentId: string,
    body: ExperimentFeedbackParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.FeedbackResponseSchema> {
    return this._client.post(`/v1/experiment/${experimentId}/feedback`, { body, ...options });
  }

  /**
   * Fetch the events in an experiment. Equivalent to the POST form of the same path,
   * but with the parameters in the URL query rather than in the request body
   */
  fetch(
    experimentId: string,
    query?: ExperimentFetchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.FetchExperimentEventsResponse>;
  fetch(
    experimentId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.FetchExperimentEventsResponse>;
  fetch(
    experimentId: string,
    query: ExperimentFetchParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.FetchExperimentEventsResponse> {
    if (isRequestOptions(query)) {
      return this.fetch(experimentId, {}, query);
    }
    return this._client.get(`/v1/experiment/${experimentId}/fetch`, { query, ...options });
  }

  /**
   * Fetch the events in an experiment. Equivalent to the GET form of the same path,
   * but with the parameters in the request body rather than in the URL query
   */
  fetchPost(
    experimentId: string,
    body?: ExperimentFetchPostParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.FetchExperimentEventsResponse>;
  fetchPost(
    experimentId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.FetchExperimentEventsResponse>;
  fetchPost(
    experimentId: string,
    body: ExperimentFetchPostParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.FetchExperimentEventsResponse> {
    if (isRequestOptions(body)) {
      return this.fetchPost(experimentId, {}, body);
    }
    return this._client.post(`/v1/experiment/${experimentId}/fetch`, { body, ...options });
  }

  /**
   * Insert a set of events into the experiment
   */
  insert(
    experimentId: string,
    body: ExperimentInsertParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.InsertEventsResponse> {
    return this._client.post(`/v1/experiment/${experimentId}/insert`, { body, ...options });
  }

  /**
   * Summarize experiment
   */
  summarize(
    experimentId: string,
    query?: ExperimentSummarizeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.SummarizeExperimentResponse>;
  summarize(
    experimentId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.SummarizeExperimentResponse>;
  summarize(
    experimentId: string,
    query: ExperimentSummarizeParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.SummarizeExperimentResponse> {
    if (isRequestOptions(query)) {
      return this.summarize(experimentId, {}, query);
    }
    return this._client.get(`/v1/experiment/${experimentId}/summarize`, { query, ...options });
  }
}

export interface ExperimentCreateParams {
  /**
   * Unique identifier for the project that the experiment belongs under
   */
  project_id: string;

  /**
   * Id of default base experiment to compare against when viewing this experiment
   */
  base_exp_id?: string | null;

  /**
   * Identifier of the linked dataset, or null if the experiment is not linked to a
   * dataset
   */
  dataset_id?: string | null;

  /**
   * Version number of the linked dataset the experiment was run against. This can be
   * used to reproduce the experiment after the dataset has been modified.
   */
  dataset_version?: string | null;

  /**
   * Textual description of the experiment
   */
  description?: string | null;

  /**
   * Normally, creating an experiment with the same name as an existing experiment
   * will return the existing one un-modified. But if `ensure_new` is true,
   * registration will generate a new experiment with a unique name in case of a
   * conflict.
   */
  ensure_new?: boolean | null;

  /**
   * User-controlled metadata about the experiment
   */
  metadata?: Record<string, unknown> | null;

  /**
   * Name of the experiment. Within a project, experiment names are unique
   */
  name?: string | null;

  /**
   * Whether or not the experiment is public. Public experiments can be viewed by
   * anybody inside or outside the organization
   */
  public?: boolean | null;

  /**
   * Metadata about the state of the repo when the experiment was created
   */
  repo_info?: Shared.RepoInfo | null;
}

export interface ExperimentUpdateParams {
  /**
   * Id of default base experiment to compare against when viewing this experiment
   */
  base_exp_id?: string | null;

  /**
   * Identifier of the linked dataset, or null if the experiment is not linked to a
   * dataset
   */
  dataset_id?: string | null;

  /**
   * Version number of the linked dataset the experiment was run against. This can be
   * used to reproduce the experiment after the dataset has been modified.
   */
  dataset_version?: string | null;

  /**
   * Textual description of the experiment
   */
  description?: string | null;

  /**
   * User-controlled metadata about the experiment
   */
  metadata?: Record<string, unknown> | null;

  /**
   * Name of the experiment. Within a project, experiment names are unique
   */
  name?: string | null;

  /**
   * Whether or not the experiment is public. Public experiments can be viewed by
   * anybody inside or outside the organization
   */
  public?: boolean | null;

  /**
   * Metadata about the state of the repo when the experiment was created
   */
  repo_info?: Shared.RepoInfo | null;
}

export interface ExperimentListParams extends ListObjectsParams {
  /**
   * Name of the experiment to search for
   */
  experiment_name?: string;

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
}

export interface ExperimentFeedbackParams {
  /**
   * A list of experiment feedback items
   */
  feedback: Array<Shared.FeedbackExperimentItem>;
}

export interface ExperimentFetchParams {
  /**
   * limit the number of traces fetched
   *
   * Fetch queries may be paginated if the total result size is expected to be large
   * (e.g. project_logs which accumulate over a long time). Note that fetch queries
   * only support pagination in descending time order (from latest to earliest
   * `_xact_id`. Furthermore, later pages may return rows which showed up in earlier
   * pages, except with an earlier `_xact_id`. This happens because pagination occurs
   * over the whole version history of the event log. You will most likely want to
   * exclude any such duplicate, outdated rows (by `id`) from your combined result
   * set.
   *
   * The `limit` parameter controls the number of full traces to return. So you may
   * end up with more individual rows than the specified limit if you are fetching
   * events containing traces.
   */
  limit?: number;

  /**
   * DEPRECATION NOTICE: The manually-constructed pagination cursor is deprecated in
   * favor of the explicit 'cursor' returned by object fetch requests. Please prefer
   * the 'cursor' argument going forwards.
   *
   * Together, `max_xact_id` and `max_root_span_id` form a pagination cursor
   *
   * Since a paginated fetch query returns results in order from latest to earliest,
   * the cursor for the next page can be found as the row with the minimum (earliest)
   * value of the tuple `(_xact_id, root_span_id)`. See the documentation of `limit`
   * for an overview of paginating fetch queries.
   */
  max_root_span_id?: string;

  /**
   * DEPRECATION NOTICE: The manually-constructed pagination cursor is deprecated in
   * favor of the explicit 'cursor' returned by object fetch requests. Please prefer
   * the 'cursor' argument going forwards.
   *
   * Together, `max_xact_id` and `max_root_span_id` form a pagination cursor
   *
   * Since a paginated fetch query returns results in order from latest to earliest,
   * the cursor for the next page can be found as the row with the minimum (earliest)
   * value of the tuple `(_xact_id, root_span_id)`. See the documentation of `limit`
   * for an overview of paginating fetch queries.
   */
  max_xact_id?: string;

  /**
   * Retrieve a snapshot of events from a past time
   *
   * The version id is essentially a filter on the latest event transaction id. You
   * can use the `max_xact_id` returned by a past fetch as the version to reproduce
   * that exact fetch.
   */
  version?: string;
}

export interface ExperimentFetchPostParams {
  /**
   * An opaque string to be used as a cursor for the next page of results, in order
   * from latest to earliest.
   *
   * The string can be obtained directly from the `cursor` property of the previous
   * fetch query
   */
  cursor?: string | null;

  /**
   * NOTE: This parameter is deprecated and will be removed in a future revision.
   * Consider using the `/btql` endpoint
   * (https://www.braintrust.dev/docs/reference/btql) for more advanced filtering.
   *
   * A list of filters on the events to fetch. Currently, only path-lookup type
   * filters are supported.
   */
  filters?: Array<Shared.PathLookupFilter> | null;

  /**
   * limit the number of traces fetched
   *
   * Fetch queries may be paginated if the total result size is expected to be large
   * (e.g. project_logs which accumulate over a long time). Note that fetch queries
   * only support pagination in descending time order (from latest to earliest
   * `_xact_id`. Furthermore, later pages may return rows which showed up in earlier
   * pages, except with an earlier `_xact_id`. This happens because pagination occurs
   * over the whole version history of the event log. You will most likely want to
   * exclude any such duplicate, outdated rows (by `id`) from your combined result
   * set.
   *
   * The `limit` parameter controls the number of full traces to return. So you may
   * end up with more individual rows than the specified limit if you are fetching
   * events containing traces.
   */
  limit?: number | null;

  /**
   * DEPRECATION NOTICE: The manually-constructed pagination cursor is deprecated in
   * favor of the explicit 'cursor' returned by object fetch requests. Please prefer
   * the 'cursor' argument going forwards.
   *
   * Together, `max_xact_id` and `max_root_span_id` form a pagination cursor
   *
   * Since a paginated fetch query returns results in order from latest to earliest,
   * the cursor for the next page can be found as the row with the minimum (earliest)
   * value of the tuple `(_xact_id, root_span_id)`. See the documentation of `limit`
   * for an overview of paginating fetch queries.
   */
  max_root_span_id?: string | null;

  /**
   * DEPRECATION NOTICE: The manually-constructed pagination cursor is deprecated in
   * favor of the explicit 'cursor' returned by object fetch requests. Please prefer
   * the 'cursor' argument going forwards.
   *
   * Together, `max_xact_id` and `max_root_span_id` form a pagination cursor
   *
   * Since a paginated fetch query returns results in order from latest to earliest,
   * the cursor for the next page can be found as the row with the minimum (earliest)
   * value of the tuple `(_xact_id, root_span_id)`. See the documentation of `limit`
   * for an overview of paginating fetch queries.
   */
  max_xact_id?: string | null;

  /**
   * Retrieve a snapshot of events from a past time
   *
   * The version id is essentially a filter on the latest event transaction id. You
   * can use the `max_xact_id` returned by a past fetch as the version to reproduce
   * that exact fetch.
   */
  version?: string | null;
}

export interface ExperimentInsertParams {
  /**
   * A list of experiment events to insert
   */
  events: Array<Shared.InsertExperimentEventReplace | Shared.InsertExperimentEventMerge>;
}

export interface ExperimentSummarizeParams {
  /**
   * The experiment to compare against, if summarizing scores and metrics. If
   * omitted, will fall back to the `base_exp_id` stored in the experiment metadata,
   * and then to the most recent experiment run in the same project. Must pass
   * `summarize_scores=true` for this id to be used
   */
  comparison_experiment_id?: string;

  /**
   * Whether to summarize the scores and metrics. If false (or omitted), only the
   * metadata will be returned.
   */
  summarize_scores?: boolean;
}

export namespace Experiments {
  export import ExperimentCreateParams = ExperimentsAPI.ExperimentCreateParams;
  export import ExperimentUpdateParams = ExperimentsAPI.ExperimentUpdateParams;
  export import ExperimentListParams = ExperimentsAPI.ExperimentListParams;
  export import ExperimentFeedbackParams = ExperimentsAPI.ExperimentFeedbackParams;
  export import ExperimentFetchParams = ExperimentsAPI.ExperimentFetchParams;
  export import ExperimentFetchPostParams = ExperimentsAPI.ExperimentFetchPostParams;
  export import ExperimentInsertParams = ExperimentsAPI.ExperimentInsertParams;
  export import ExperimentSummarizeParams = ExperimentsAPI.ExperimentSummarizeParams;
}

export { ExperimentsListObjects };
