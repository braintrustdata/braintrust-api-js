// File generated from our OpenAPI spec by Stainless.

import * as Core from 'braintrust-sdk-kotlin/core';
import { APIResource } from 'braintrust-sdk-kotlin/resource';
import { isRequestOptions } from 'braintrust-sdk-kotlin/core';
import * as ExperimentAPI from 'braintrust-sdk-kotlin/resources/experiment';

export class ExperimentResource extends APIResource {
  /**
   * Create a new experiment. If there is an existing experiment in the project with
   * the same name as the one specified in the request, will create a new experiment
   * from `name`, suffixed with a unique identifier
   */
  create(body: ExperimentCreateParams, options?: Core.RequestOptions): Core.APIPromise<Experiment> {
    return this._client.post('/v1/experiment', { body, ...options });
  }

  /**
   * Get an experiment object by its id
   */
  retrieve(experimentId: string, options?: Core.RequestOptions): Core.APIPromise<Experiment> {
    return this._client.get(`/v1/experiment/${experimentId}`, options);
  }

  /**
   * Create or replace a new experiment. If there is an existing experiment in the
   * project with the same name as the one specified in the request, will replace the
   * existing experiment with the provided fields
   */
  update(body: ExperimentUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Experiment> {
    return this._client.put('/v1/experiment', { body, ...options });
  }

  /**
   * Delete an experiment object by its id
   */
  delete(experimentId: string, options?: Core.RequestOptions): Core.APIPromise<Experiment> {
    return this._client.delete(`/v1/experiment/${experimentId}`, options);
  }

  /**
   * Log feedback for a set of experiment events
   */
  feedback(
    experimentId: string,
    body: ExperimentFeedbackParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/v1/experiment/${experimentId}/feedback`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Fetch the events in an experiment. Equivalent to the POST form of the same path,
   * but with the parameters in the URL query rather than in the request body
   */
  fetch(
    experimentId: string,
    query?: ExperimentFetchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExperimentFetchResponse>;
  fetch(experimentId: string, options?: Core.RequestOptions): Core.APIPromise<ExperimentFetchResponse>;
  fetch(
    experimentId: string,
    query: ExperimentFetchParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExperimentFetchResponse> {
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
  ): Core.APIPromise<ExperimentFetchPostResponse>;
  fetchPost(
    experimentId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExperimentFetchPostResponse>;
  fetchPost(
    experimentId: string,
    body: ExperimentFetchPostParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExperimentFetchPostResponse> {
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
  ): Core.APIPromise<ExperimentInsertResponse> {
    return this._client.post(`/v1/experiment/${experimentId}/insert`, { body, ...options });
  }

  /**
   * Partially update an experiment object. Specify the fields to update in the
   * payload. Any object-type fields will be deep-merged with existing content.
   * Currently we do not support removing fields or setting them to null. As a
   * workaround, you may retrieve the full object with `GET /experiment/{id}` and
   * then replace it with `PUT /experiment`.
   */
  updatePartial(
    experimentId: string,
    body?: ExperimentUpdatePartialParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Experiment>;
  updatePartial(experimentId: string, options?: Core.RequestOptions): Core.APIPromise<Experiment>;
  updatePartial(
    experimentId: string,
    body: ExperimentUpdatePartialParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Experiment> {
    if (isRequestOptions(body)) {
      return this.updatePartial(experimentId, {}, body);
    }
    return this._client.patch(`/v1/experiment/${experimentId}`, { body, ...options });
  }
}

export interface Experiment {
  /**
   * Unique identifier for the experiment
   */
  id: string;

  /**
   * Name of the experiment. Within a project, experiment names are unique
   */
  name: string;

  /**
   * Unique identifier for the project that the experiment belongs under
   */
  project_id: string;

  /**
   * Whether or not the experiment is public. Public experiments can be viewed by
   * anybody inside or outside the organization
   */
  public: boolean;

  /**
   * Id of default base experiment to compare against when viewing this experiment
   */
  base_exp_id?: string | null;

  /**
   * Commit, taken directly from `repo_info.commit`
   */
  commit?: string | null;

  /**
   * Date of experiment creation
   */
  created?: string | null;

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
   * Date of experiment deletion, or null if the experiment is still active
   */
  deleted_at?: string | null;

  /**
   * Textual description of the experiment
   */
  description?: string | null;

  /**
   * User-controlled metadata about the experiment
   */
  metadata?: Record<string, unknown> | null;

  /**
   * Metadata about the state of the repo when the experiment was created
   */
  repo_info?: Experiment.RepoInfo | null;

  /**
   * Identifies the user who created the experiment
   */
  user_id?: string | null;
}

export namespace Experiment {
  /**
   * Metadata about the state of the repo when the experiment was created
   */
  export interface RepoInfo {
    /**
     * Email of the author of the most recent commit
     */
    author_email?: string | null;

    /**
     * Name of the author of the most recent commit
     */
    author_name?: string | null;

    /**
     * Name of the branch the most recent commit belongs to
     */
    branch?: string | null;

    /**
     * SHA of most recent commit
     */
    commit?: string | null;

    /**
     * Most recent commit message
     */
    commit_message?: string | null;

    /**
     * Time of the most recent commit
     */
    commit_time?: string | null;

    /**
     * Whether or not the repo had uncommitted changes when snapshotted
     */
    dirty?: boolean | null;

    /**
     * If the repo was dirty when run, this includes the diff between the current state
     * of the repo and the most recent commit.
     */
    git_diff?: string | null;

    /**
     * Name of the tag on the most recent commit
     */
    tag?: string | null;
  }
}

export interface ExperimentFetchResponse {
  /**
   * A list of fetched events
   */
  events: Array<ExperimentFetchResponse.Event>;
}

export namespace ExperimentFetchResponse {
  export interface Event {
    /**
     * A unique identifier for the experiment event. If you don't provide one,
     * BrainTrust will generate one for you
     */
    id: string;

    /**
     * The transaction id of an event is unique to the network operation that processed
     * the event insertion. Transaction ids are monotonically increasing over time and
     * can be used to retrieve a versioned snapshot of the experiment (see the
     * `version` parameter)
     */
    _xact_id: number;

    /**
     * Unique identifier for the experiment
     */
    experiment_id: string;

    /**
     * Unique identifier for the project that the experiment belongs under
     */
    project_id: string;

    /**
     * The `span_id` of the root of the trace this experiment event belongs to
     */
    root_span_id: string;

    /**
     * A unique identifier used to link different experiment events together as part of
     * a full trace. See the
     * [tracing guide](https://www.braintrustdata.com/docs/guides/tracing) for full
     * details on tracing
     */
    span_id: string;

    /**
     * Context is additional information about the code that produced the experiment
     * event. It is essentially the textual counterpart to `metrics`. Use the
     * `caller_*` attributes to track the location in code which produced the
     * experiment event
     */
    context?: Event.Context | null;

    /**
     * The timestamp the experiment event was created
     */
    created?: string | null;

    /**
     * If the experiment is associated to a dataset, this is the event-level dataset id
     * this experiment event is tied to
     */
    dataset_record_id?: string | null;

    /**
     * The ground truth value (an arbitrary, JSON serializable object) that you'd
     * compare to `output` to determine if your `output` value is correct or not.
     * Braintrust currently does not compare `output` to `expected` for you, since
     * there are so many different ways to do that correctly. Instead, these values are
     * just used to help you navigate your experiments while digging into analyses.
     * However, we may later use these values to re-score outputs or fine-tune your
     * models
     */
    expected?: unknown;

    /**
     * The arguments that uniquely define a test case (an arbitrary, JSON serializable
     * object). Later on, Braintrust will use the `input` to know whether two test
     * cases are the same between experiments, so they should not contain
     * experiment-specific state. A simple rule of thumb is that if you run the same
     * experiment twice, the `input` should be identical
     */
    input?: unknown;

    /**
     * A dictionary with additional data about the test example, model outputs, or just
     * about anything else that's relevant, that you can use to help find and analyze
     * examples later. For example, you could log the `prompt`, example's `id`, or
     * anything else that would be useful to slice/dice later. The values in `metadata`
     * can be any JSON-serializable type, but its keys must be strings
     */
    metadata?: Record<string, unknown> | null;

    /**
     * Metrics are numerical measurements tracking the execution of the code that
     * produced the experiment event. Use "start" and "end" to track the time span over
     * which the experiment event was produced
     */
    metrics?: Event.Metrics | null;

    /**
     * The output of your application, including post-processing (an arbitrary, JSON
     * serializable object), that allows you to determine whether the result is correct
     * or not. For example, in an app that generates SQL queries, the `output` should
     * be the _result_ of the SQL query generated by the model, not the query itself,
     * because there may be multiple valid queries that answer a single question
     */
    output?: unknown;

    /**
     * A dictionary of numeric values (between 0 and 1) to log. The scores should give
     * you a variety of signals that help you determine how accurate the outputs are
     * compared to what you expect and diagnose failures. For example, a summarization
     * app might have one score that tells you how accurate the summary is, and another
     * that measures the word similarity between the generated and grouth truth
     * summary. The word similarity score could help you determine whether the
     * summarization was covering similar concepts or not. You can use these scores to
     * help you sort, filter, and compare experiments
     */
    scores?: Record<string, number | null> | null;

    /**
     * Human-identifying attributes of the span, such as name, type, etc.
     */
    span_attributes?: Event.SpanAttributes | null;

    /**
     * An array of the parent `span_ids` of this experiment event. This should be empty
     * for the root span of a trace, and should most often contain just one parent
     * element for subspans
     */
    span_parents?: Array<string> | null;
  }

  export namespace Event {
    /**
     * Context is additional information about the code that produced the experiment
     * event. It is essentially the textual counterpart to `metrics`. Use the
     * `caller_*` attributes to track the location in code which produced the
     * experiment event
     */
    export interface Context {
      /**
       * Name of the file in code where the experiment event was created
       */
      caller_filename?: string | null;

      /**
       * The function in code which created the experiment event
       */
      caller_functionname?: string | null;

      /**
       * Line of code where the experiment event was created
       */
      caller_lineno?: number | null;
      [k: string]: unknown;
    }

    /**
     * Metrics are numerical measurements tracking the execution of the code that
     * produced the experiment event. Use "start" and "end" to track the time span over
     * which the experiment event was produced
     */
    export interface Metrics {
      /**
       * A unix timestamp recording when the section of code which produced the
       * experiment event finished
       */
      end?: number | null;

      /**
       * A unix timestamp recording when the section of code which produced the
       * experiment event started
       */
      start?: number | null;
      [k: string]: unknown;
    }

    /**
     * Human-identifying attributes of the span, such as name, type, etc.
     */
    export interface SpanAttributes {
      /**
       * Name of the span, for display purposes only
       */
      name?: string | null;

      /**
       * Type of the span, for display purposes only
       */
      type?: 'llm' | 'score' | 'function' | 'eval' | 'task' | 'tool' | null;
      [k: string]: unknown;
    }
  }
}

export interface ExperimentFetchPostResponse {
  /**
   * A list of fetched events
   */
  events: Array<ExperimentFetchPostResponse.Event>;
}

export namespace ExperimentFetchPostResponse {
  export interface Event {
    /**
     * A unique identifier for the experiment event. If you don't provide one,
     * BrainTrust will generate one for you
     */
    id: string;

    /**
     * The transaction id of an event is unique to the network operation that processed
     * the event insertion. Transaction ids are monotonically increasing over time and
     * can be used to retrieve a versioned snapshot of the experiment (see the
     * `version` parameter)
     */
    _xact_id: number;

    /**
     * Unique identifier for the experiment
     */
    experiment_id: string;

    /**
     * Unique identifier for the project that the experiment belongs under
     */
    project_id: string;

    /**
     * The `span_id` of the root of the trace this experiment event belongs to
     */
    root_span_id: string;

    /**
     * A unique identifier used to link different experiment events together as part of
     * a full trace. See the
     * [tracing guide](https://www.braintrustdata.com/docs/guides/tracing) for full
     * details on tracing
     */
    span_id: string;

    /**
     * Context is additional information about the code that produced the experiment
     * event. It is essentially the textual counterpart to `metrics`. Use the
     * `caller_*` attributes to track the location in code which produced the
     * experiment event
     */
    context?: Event.Context | null;

    /**
     * The timestamp the experiment event was created
     */
    created?: string | null;

    /**
     * If the experiment is associated to a dataset, this is the event-level dataset id
     * this experiment event is tied to
     */
    dataset_record_id?: string | null;

    /**
     * The ground truth value (an arbitrary, JSON serializable object) that you'd
     * compare to `output` to determine if your `output` value is correct or not.
     * Braintrust currently does not compare `output` to `expected` for you, since
     * there are so many different ways to do that correctly. Instead, these values are
     * just used to help you navigate your experiments while digging into analyses.
     * However, we may later use these values to re-score outputs or fine-tune your
     * models
     */
    expected?: unknown;

    /**
     * The arguments that uniquely define a test case (an arbitrary, JSON serializable
     * object). Later on, Braintrust will use the `input` to know whether two test
     * cases are the same between experiments, so they should not contain
     * experiment-specific state. A simple rule of thumb is that if you run the same
     * experiment twice, the `input` should be identical
     */
    input?: unknown;

    /**
     * A dictionary with additional data about the test example, model outputs, or just
     * about anything else that's relevant, that you can use to help find and analyze
     * examples later. For example, you could log the `prompt`, example's `id`, or
     * anything else that would be useful to slice/dice later. The values in `metadata`
     * can be any JSON-serializable type, but its keys must be strings
     */
    metadata?: Record<string, unknown> | null;

    /**
     * Metrics are numerical measurements tracking the execution of the code that
     * produced the experiment event. Use "start" and "end" to track the time span over
     * which the experiment event was produced
     */
    metrics?: Event.Metrics | null;

    /**
     * The output of your application, including post-processing (an arbitrary, JSON
     * serializable object), that allows you to determine whether the result is correct
     * or not. For example, in an app that generates SQL queries, the `output` should
     * be the _result_ of the SQL query generated by the model, not the query itself,
     * because there may be multiple valid queries that answer a single question
     */
    output?: unknown;

    /**
     * A dictionary of numeric values (between 0 and 1) to log. The scores should give
     * you a variety of signals that help you determine how accurate the outputs are
     * compared to what you expect and diagnose failures. For example, a summarization
     * app might have one score that tells you how accurate the summary is, and another
     * that measures the word similarity between the generated and grouth truth
     * summary. The word similarity score could help you determine whether the
     * summarization was covering similar concepts or not. You can use these scores to
     * help you sort, filter, and compare experiments
     */
    scores?: Record<string, number | null> | null;

    /**
     * Human-identifying attributes of the span, such as name, type, etc.
     */
    span_attributes?: Event.SpanAttributes | null;

    /**
     * An array of the parent `span_ids` of this experiment event. This should be empty
     * for the root span of a trace, and should most often contain just one parent
     * element for subspans
     */
    span_parents?: Array<string> | null;
  }

  export namespace Event {
    /**
     * Context is additional information about the code that produced the experiment
     * event. It is essentially the textual counterpart to `metrics`. Use the
     * `caller_*` attributes to track the location in code which produced the
     * experiment event
     */
    export interface Context {
      /**
       * Name of the file in code where the experiment event was created
       */
      caller_filename?: string | null;

      /**
       * The function in code which created the experiment event
       */
      caller_functionname?: string | null;

      /**
       * Line of code where the experiment event was created
       */
      caller_lineno?: number | null;
      [k: string]: unknown;
    }

    /**
     * Metrics are numerical measurements tracking the execution of the code that
     * produced the experiment event. Use "start" and "end" to track the time span over
     * which the experiment event was produced
     */
    export interface Metrics {
      /**
       * A unix timestamp recording when the section of code which produced the
       * experiment event finished
       */
      end?: number | null;

      /**
       * A unix timestamp recording when the section of code which produced the
       * experiment event started
       */
      start?: number | null;
      [k: string]: unknown;
    }

    /**
     * Human-identifying attributes of the span, such as name, type, etc.
     */
    export interface SpanAttributes {
      /**
       * Name of the span, for display purposes only
       */
      name?: string | null;

      /**
       * Type of the span, for display purposes only
       */
      type?: 'llm' | 'score' | 'function' | 'eval' | 'task' | 'tool' | null;
      [k: string]: unknown;
    }
  }
}

export interface ExperimentInsertResponse {
  /**
   * The ids of all rows that were inserted, aligning one-to-one with the rows
   * provided as input
   */
  row_ids: Array<string>;
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
  repo_info?: ExperimentCreateParams.RepoInfo | null;
}

export namespace ExperimentCreateParams {
  /**
   * Metadata about the state of the repo when the experiment was created
   */
  export interface RepoInfo {
    /**
     * Email of the author of the most recent commit
     */
    author_email?: string | null;

    /**
     * Name of the author of the most recent commit
     */
    author_name?: string | null;

    /**
     * Name of the branch the most recent commit belongs to
     */
    branch?: string | null;

    /**
     * SHA of most recent commit
     */
    commit?: string | null;

    /**
     * Most recent commit message
     */
    commit_message?: string | null;

    /**
     * Time of the most recent commit
     */
    commit_time?: string | null;

    /**
     * Whether or not the repo had uncommitted changes when snapshotted
     */
    dirty?: boolean | null;

    /**
     * If the repo was dirty when run, this includes the diff between the current state
     * of the repo and the most recent commit.
     */
    git_diff?: string | null;

    /**
     * Name of the tag on the most recent commit
     */
    tag?: string | null;
  }
}

export interface ExperimentUpdateParams {
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
  repo_info?: ExperimentUpdateParams.RepoInfo | null;
}

export namespace ExperimentUpdateParams {
  /**
   * Metadata about the state of the repo when the experiment was created
   */
  export interface RepoInfo {
    /**
     * Email of the author of the most recent commit
     */
    author_email?: string | null;

    /**
     * Name of the author of the most recent commit
     */
    author_name?: string | null;

    /**
     * Name of the branch the most recent commit belongs to
     */
    branch?: string | null;

    /**
     * SHA of most recent commit
     */
    commit?: string | null;

    /**
     * Most recent commit message
     */
    commit_message?: string | null;

    /**
     * Time of the most recent commit
     */
    commit_time?: string | null;

    /**
     * Whether or not the repo had uncommitted changes when snapshotted
     */
    dirty?: boolean | null;

    /**
     * If the repo was dirty when run, this includes the diff between the current state
     * of the repo and the most recent commit.
     */
    git_diff?: string | null;

    /**
     * Name of the tag on the most recent commit
     */
    tag?: string | null;
  }
}

export interface ExperimentFeedbackParams {
  /**
   * A list of experiment feedback items
   */
  feedback: Array<ExperimentFeedbackParams.Feedback>;
}

export namespace ExperimentFeedbackParams {
  export interface Feedback {
    /**
     * The id of the experiment event to log feedback for. This is the row `id`
     * returned by `POST /v1/experiment/{experiment_id}/insert`
     */
    id: string;

    /**
     * An optional comment string to log about the experiment event
     */
    comment?: string | null;

    /**
     * The ground truth value (an arbitrary, JSON serializable object) that you'd
     * compare to `output` to determine if your `output` value is correct or not
     */
    expected?: unknown;

    /**
     * A dictionary with additional data about the feedback. If you have a `user_id`,
     * you can log it here and access it in the Braintrust UI.
     */
    metadata?: Record<string, unknown> | null;

    /**
     * A dictionary of numeric values (between 0 and 1) to log. These scores will be
     * merged into the existing scores for the experiment event
     */
    scores?: Record<string, number | null> | null;

    /**
     * The source of the feedback. Must be one of "external" (default), "app", or "api"
     */
    source?: 'app' | 'api' | 'external' | null;
  }
}

export interface ExperimentFetchParams {
  /**
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
   * Together, `max_xact_id` and `max_root_span_id` form a cursor for paginating
   * event fetches. Given a previous fetch with a list of rows, you can determine
   * `max_root_span_id` as the maximum of the `root_span_id` field over all rows. See
   * the documentation for `limit` for an overview of paginating fetch queries.
   */
  max_root_span_id?: string;

  /**
   * Together, `max_xact_id` and `max_root_span_id` form a cursor for paginating
   * event fetches. Given a previous fetch with a list of rows, you can determine
   * `max_xact_id` as the maximum of the `_xact_id` field over all rows. See the
   * documentation for `limit` for an overview of paginating fetch queries.
   */
  max_xact_id?: number;

  /**
   * You may specify a version id to retrieve a snapshot of the events from a past
   * time. The version id is essentially a filter on the latest event transaction id.
   * You can use the `max_xact_id` returned by a past fetch as the version to
   * reproduce that exact fetch.
   */
  version?: number;
}

export interface ExperimentFetchPostParams {
  /**
   * A list of filters on the events to fetch. Currently, only path-lookup type
   * filters are supported, but we may add more in the future
   */
  filters?: Array<ExperimentFetchPostParams.Filter> | null;

  /**
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
   * Together, `max_xact_id` and `max_root_span_id` form a cursor for paginating
   * event fetches. Given a previous fetch with a list of rows, you can determine
   * `max_root_span_id` as the maximum of the `root_span_id` field over all rows. See
   * the documentation for `limit` for an overview of paginating fetch queries.
   */
  max_root_span_id?: string | null;

  /**
   * Together, `max_xact_id` and `max_root_span_id` form a cursor for paginating
   * event fetches. Given a previous fetch with a list of rows, you can determine
   * `max_xact_id` as the maximum of the `_xact_id` field over all rows. See the
   * documentation for `limit` for an overview of paginating fetch queries.
   */
  max_xact_id?: number | null;

  /**
   * You may specify a version id to retrieve a snapshot of the events from a past
   * time. The version id is essentially a filter on the latest event transaction id.
   * You can use the `max_xact_id` returned by a past fetch as the version to
   * reproduce that exact fetch.
   */
  version?: number | null;
}

export namespace ExperimentFetchPostParams {
  /**
   * A path-lookup filter describes an equality comparison against a specific
   * sub-field in the event row. For instance, if you wish to filter on the value of
   * `c` in `{"input": {"a": {"b": {"c": "hello"}}}}`, pass
   * `path=["input", "a", "b", "c"]` and `value="hello"`
   */
  export interface Filter {
    /**
     * List of fields describing the path to the value to be checked against. For
     * instance, if you wish to filter on the value of `c` in
     * `{"input": {"a": {"b": {"c": "hello"}}}}`, pass `path=["input", "a", "b", "c"]`
     */
    path: Array<string>;

    /**
     * Denotes the type of filter as a path-lookup filter
     */
    type: 'path_lookup';

    /**
     * The value to compare equality-wise against the event value at the specified
     * `path`. The value must be a "primitive", that is, any JSON-serializable object
     * except for objects and arrays. For instance, if you wish to filter on the value
     * of "input.a.b.c" in the object `{"input": {"a": {"b": {"c": "hello"}}}}`, pass
     * `value="hello"`
     */
    value?: unknown;
  }
}

export interface ExperimentInsertParams {
  /**
   * A list of experiment events to insert
   */
  events: Array<
    ExperimentInsertParams.InsertExperimentEventReplace | ExperimentInsertParams.InsertExperimentEventMerge
  >;
}

export namespace ExperimentInsertParams {
  export interface InsertExperimentEventReplace {
    /**
     * A unique identifier for the experiment event. If you don't provide one,
     * BrainTrust will generate one for you
     */
    id?: string | null;

    /**
     * The `_is_merge` field controls how the row is merged with any existing row with
     * the same id in the DB. By default (or when set to `false`), the existing row is
     * completely replaced by the new row. When set to `true`, the new row is
     * deep-merged into the existing row
     *
     * For example, say there is an existing row in the DB
     * `{"id": "foo", "input": {"a": 5, "b": 10}}`. If we merge a new row as
     * `{"_is_merge": true, "id": "foo", "input": {"b": 11, "c": 20}}`, the new row
     * will be `{"id": "foo", "input": {"a": 5, "b": 11, "c": 20}}`. If we replace the
     * new row as `{"id": "foo", "input": {"b": 11, "c": 20}}`, the new row will be
     * `{"id": "foo", "input": {"b": 11, "c": 20}}`
     */
    _is_merge?: false | unknown | null;

    /**
     * Pass `_object_delete=true` to mark the experiment event deleted. Deleted events
     * will not show up in subsequent fetches for this experiment
     */
    _object_delete?: boolean | null;

    /**
     * Use the `_parent_id` field to create this row as a subspan of an existing row.
     * It cannot be specified alongside `_is_merge=true`. Tracking hierarchical
     * relationships are important for tracing (see the
     * [guide](https://www.braintrustdata.com/docs/guides/tracing) for full details).
     *
     * For example, say we have logged a row
     * `{"id": "abc", "input": "foo", "output": "bar", "expected": "boo", "scores": {"correctness": 0.33}}`.
     * We can create a sub-span of the parent row by logging
     * `{"_parent_id": "abc", "id": "llm_call", "input": {"prompt": "What comes after foo?"}, "output": "bar", "metrics": {"tokens": 1}}`.
     * In the webapp, only the root span row `"abc"` will show up in the summary view.
     * You can view the full trace hierarchy (in this case, the `"llm_call"` row) by
     * clicking on the "abc" row.
     */
    _parent_id?: string | null;

    /**
     * Context is additional information about the code that produced the experiment
     * event. It is essentially the textual counterpart to `metrics`. Use the
     * `caller_*` attributes to track the location in code which produced the
     * experiment event
     */
    context?: InsertExperimentEventReplace.Context | null;

    /**
     * If the experiment is associated to a dataset, this is the event-level dataset id
     * this experiment event is tied to
     */
    dataset_record_id?: string | null;

    /**
     * The ground truth value (an arbitrary, JSON serializable object) that you'd
     * compare to `output` to determine if your `output` value is correct or not.
     * Braintrust currently does not compare `output` to `expected` for you, since
     * there are so many different ways to do that correctly. Instead, these values are
     * just used to help you navigate your experiments while digging into analyses.
     * However, we may later use these values to re-score outputs or fine-tune your
     * models
     */
    expected?: unknown;

    /**
     * The arguments that uniquely define a test case (an arbitrary, JSON serializable
     * object). Later on, Braintrust will use the `input` to know whether two test
     * cases are the same between experiments, so they should not contain
     * experiment-specific state. A simple rule of thumb is that if you run the same
     * experiment twice, the `input` should be identical
     */
    input?: unknown;

    /**
     * A dictionary with additional data about the test example, model outputs, or just
     * about anything else that's relevant, that you can use to help find and analyze
     * examples later. For example, you could log the `prompt`, example's `id`, or
     * anything else that would be useful to slice/dice later. The values in `metadata`
     * can be any JSON-serializable type, but its keys must be strings
     */
    metadata?: Record<string, unknown> | null;

    /**
     * Metrics are numerical measurements tracking the execution of the code that
     * produced the experiment event. Use "start" and "end" to track the time span over
     * which the experiment event was produced
     */
    metrics?: InsertExperimentEventReplace.Metrics | null;

    /**
     * The output of your application, including post-processing (an arbitrary, JSON
     * serializable object), that allows you to determine whether the result is correct
     * or not. For example, in an app that generates SQL queries, the `output` should
     * be the _result_ of the SQL query generated by the model, not the query itself,
     * because there may be multiple valid queries that answer a single question
     */
    output?: unknown;

    /**
     * A dictionary of numeric values (between 0 and 1) to log. The scores should give
     * you a variety of signals that help you determine how accurate the outputs are
     * compared to what you expect and diagnose failures. For example, a summarization
     * app might have one score that tells you how accurate the summary is, and another
     * that measures the word similarity between the generated and grouth truth
     * summary. The word similarity score could help you determine whether the
     * summarization was covering similar concepts or not. You can use these scores to
     * help you sort, filter, and compare experiments
     */
    scores?: Record<string, number | null> | null;

    /**
     * Human-identifying attributes of the span, such as name, type, etc.
     */
    span_attributes?: InsertExperimentEventReplace.SpanAttributes | null;
  }

  export namespace InsertExperimentEventReplace {
    /**
     * Context is additional information about the code that produced the experiment
     * event. It is essentially the textual counterpart to `metrics`. Use the
     * `caller_*` attributes to track the location in code which produced the
     * experiment event
     */
    export interface Context {
      /**
       * Name of the file in code where the experiment event was created
       */
      caller_filename?: string | null;

      /**
       * The function in code which created the experiment event
       */
      caller_functionname?: string | null;

      /**
       * Line of code where the experiment event was created
       */
      caller_lineno?: number | null;
      [k: string]: unknown;
    }

    /**
     * Metrics are numerical measurements tracking the execution of the code that
     * produced the experiment event. Use "start" and "end" to track the time span over
     * which the experiment event was produced
     */
    export interface Metrics {
      /**
       * A unix timestamp recording when the section of code which produced the
       * experiment event finished
       */
      end?: number | null;

      /**
       * A unix timestamp recording when the section of code which produced the
       * experiment event started
       */
      start?: number | null;
      [k: string]: unknown;
    }

    /**
     * Human-identifying attributes of the span, such as name, type, etc.
     */
    export interface SpanAttributes {
      /**
       * Name of the span, for display purposes only
       */
      name?: string | null;

      /**
       * Type of the span, for display purposes only
       */
      type?: 'llm' | 'score' | 'function' | 'eval' | 'task' | 'tool' | null;
      [k: string]: unknown;
    }
  }

  export interface InsertExperimentEventMerge {
    /**
     * The `_is_merge` field controls how the row is merged with any existing row with
     * the same id in the DB. By default (or when set to `false`), the existing row is
     * completely replaced by the new row. When set to `true`, the new row is
     * deep-merged into the existing row
     *
     * For example, say there is an existing row in the DB
     * `{"id": "foo", "input": {"a": 5, "b": 10}}`. If we merge a new row as
     * `{"_is_merge": true, "id": "foo", "input": {"b": 11, "c": 20}}`, the new row
     * will be `{"id": "foo", "input": {"a": 5, "b": 11, "c": 20}}`. If we replace the
     * new row as `{"id": "foo", "input": {"b": 11, "c": 20}}`, the new row will be
     * `{"id": "foo", "input": {"b": 11, "c": 20}}`
     */
    _is_merge: true;

    /**
     * A unique identifier for the experiment event. If you don't provide one,
     * BrainTrust will generate one for you
     */
    id?: string | null;

    /**
     * The `_merge_paths` field allows controlling the depth of the merge. It can only
     * be specified alongside `_is_merge=true`. `_merge_paths` is a list of paths,
     * where each path is a list of field names. The deep merge will not descend below
     * any of the specified merge paths.
     *
     * For example, say there is an existing row in the DB
     * `{"id": "foo", "input": {"a": {"b": 10}, "c": {"d": 20}}, "output": {"a": 20}}`.
     * If we merge a new row as
     * `{"_is_merge": true, "_merge_paths": [["input", "a"], ["output"]], "input": {"a": {"q": 30}, "c": {"e": 30}, "bar": "baz"}, "output": {"d": 40}}`,
     * the new row will be
     * `{"id": "foo": "input": {"a": {"q": 30}, "c": {"d": 20, "e": 30}, "bar": "baz"}, "output": {"d": 40}}`.
     * In this case, due to the merge paths, we have replaced `input.a` and `output`,
     * but have still deep-merged `input` and `input.c`.
     */
    _merge_paths?: Array<Array<string>> | null;

    /**
     * Pass `_object_delete=true` to mark the experiment event deleted. Deleted events
     * will not show up in subsequent fetches for this experiment
     */
    _object_delete?: boolean | null;

    /**
     * Context is additional information about the code that produced the experiment
     * event. It is essentially the textual counterpart to `metrics`. Use the
     * `caller_*` attributes to track the location in code which produced the
     * experiment event
     */
    context?: InsertExperimentEventMerge.Context | null;

    /**
     * If the experiment is associated to a dataset, this is the event-level dataset id
     * this experiment event is tied to
     */
    dataset_record_id?: string | null;

    /**
     * The ground truth value (an arbitrary, JSON serializable object) that you'd
     * compare to `output` to determine if your `output` value is correct or not.
     * Braintrust currently does not compare `output` to `expected` for you, since
     * there are so many different ways to do that correctly. Instead, these values are
     * just used to help you navigate your experiments while digging into analyses.
     * However, we may later use these values to re-score outputs or fine-tune your
     * models
     */
    expected?: unknown;

    /**
     * The arguments that uniquely define a test case (an arbitrary, JSON serializable
     * object). Later on, Braintrust will use the `input` to know whether two test
     * cases are the same between experiments, so they should not contain
     * experiment-specific state. A simple rule of thumb is that if you run the same
     * experiment twice, the `input` should be identical
     */
    input?: unknown;

    /**
     * A dictionary with additional data about the test example, model outputs, or just
     * about anything else that's relevant, that you can use to help find and analyze
     * examples later. For example, you could log the `prompt`, example's `id`, or
     * anything else that would be useful to slice/dice later. The values in `metadata`
     * can be any JSON-serializable type, but its keys must be strings
     */
    metadata?: Record<string, unknown> | null;

    /**
     * Metrics are numerical measurements tracking the execution of the code that
     * produced the experiment event. Use "start" and "end" to track the time span over
     * which the experiment event was produced
     */
    metrics?: InsertExperimentEventMerge.Metrics | null;

    /**
     * The output of your application, including post-processing (an arbitrary, JSON
     * serializable object), that allows you to determine whether the result is correct
     * or not. For example, in an app that generates SQL queries, the `output` should
     * be the _result_ of the SQL query generated by the model, not the query itself,
     * because there may be multiple valid queries that answer a single question
     */
    output?: unknown;

    /**
     * A dictionary of numeric values (between 0 and 1) to log. The scores should give
     * you a variety of signals that help you determine how accurate the outputs are
     * compared to what you expect and diagnose failures. For example, a summarization
     * app might have one score that tells you how accurate the summary is, and another
     * that measures the word similarity between the generated and grouth truth
     * summary. The word similarity score could help you determine whether the
     * summarization was covering similar concepts or not. You can use these scores to
     * help you sort, filter, and compare experiments
     */
    scores?: Record<string, number | null> | null;

    /**
     * Human-identifying attributes of the span, such as name, type, etc.
     */
    span_attributes?: InsertExperimentEventMerge.SpanAttributes | null;
  }

  export namespace InsertExperimentEventMerge {
    /**
     * Context is additional information about the code that produced the experiment
     * event. It is essentially the textual counterpart to `metrics`. Use the
     * `caller_*` attributes to track the location in code which produced the
     * experiment event
     */
    export interface Context {
      /**
       * Name of the file in code where the experiment event was created
       */
      caller_filename?: string | null;

      /**
       * The function in code which created the experiment event
       */
      caller_functionname?: string | null;

      /**
       * Line of code where the experiment event was created
       */
      caller_lineno?: number | null;
      [k: string]: unknown;
    }

    /**
     * Metrics are numerical measurements tracking the execution of the code that
     * produced the experiment event. Use "start" and "end" to track the time span over
     * which the experiment event was produced
     */
    export interface Metrics {
      /**
       * A unix timestamp recording when the section of code which produced the
       * experiment event finished
       */
      end?: number | null;

      /**
       * A unix timestamp recording when the section of code which produced the
       * experiment event started
       */
      start?: number | null;
      [k: string]: unknown;
    }

    /**
     * Human-identifying attributes of the span, such as name, type, etc.
     */
    export interface SpanAttributes {
      /**
       * Name of the span, for display purposes only
       */
      name?: string | null;

      /**
       * Type of the span, for display purposes only
       */
      type?: 'llm' | 'score' | 'function' | 'eval' | 'task' | 'tool' | null;
      [k: string]: unknown;
    }
  }
}

export interface ExperimentUpdatePartialParams {
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
  repo_info?: ExperimentUpdatePartialParams.RepoInfo | null;
}

export namespace ExperimentUpdatePartialParams {
  /**
   * Metadata about the state of the repo when the experiment was created
   */
  export interface RepoInfo {
    /**
     * Email of the author of the most recent commit
     */
    author_email?: string | null;

    /**
     * Name of the author of the most recent commit
     */
    author_name?: string | null;

    /**
     * Name of the branch the most recent commit belongs to
     */
    branch?: string | null;

    /**
     * SHA of most recent commit
     */
    commit?: string | null;

    /**
     * Most recent commit message
     */
    commit_message?: string | null;

    /**
     * Time of the most recent commit
     */
    commit_time?: string | null;

    /**
     * Whether or not the repo had uncommitted changes when snapshotted
     */
    dirty?: boolean | null;

    /**
     * If the repo was dirty when run, this includes the diff between the current state
     * of the repo and the most recent commit.
     */
    git_diff?: string | null;

    /**
     * Name of the tag on the most recent commit
     */
    tag?: string | null;
  }
}

export namespace ExperimentResource {
  export import Experiment = ExperimentAPI.Experiment;
  export import ExperimentFetchResponse = ExperimentAPI.ExperimentFetchResponse;
  export import ExperimentFetchPostResponse = ExperimentAPI.ExperimentFetchPostResponse;
  export import ExperimentInsertResponse = ExperimentAPI.ExperimentInsertResponse;
  export import ExperimentCreateParams = ExperimentAPI.ExperimentCreateParams;
  export import ExperimentUpdateParams = ExperimentAPI.ExperimentUpdateParams;
  export import ExperimentFeedbackParams = ExperimentAPI.ExperimentFeedbackParams;
  export import ExperimentFetchParams = ExperimentAPI.ExperimentFetchParams;
  export import ExperimentFetchPostParams = ExperimentAPI.ExperimentFetchPostParams;
  export import ExperimentInsertParams = ExperimentAPI.ExperimentInsertParams;
  export import ExperimentUpdatePartialParams = ExperimentAPI.ExperimentUpdatePartialParams;
}
