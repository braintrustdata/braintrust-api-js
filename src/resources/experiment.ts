// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@braintrust/api/resource';
import { isRequestOptions } from '@braintrust/api/core';
import * as Core from '@braintrust/api/core';
import * as ExperimentAPI from '@braintrust/api/resources/experiment';
import { ListObjects, type ListObjectsParams } from '@braintrust/api/pagination';

export class ExperimentResource extends APIResource {
  /**
   * Create a new experiment. If there is an existing experiment in the project with
   * the same name as the one specified in the request, will return the existing
   * experiment unmodified
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
   * Partially update an experiment object. Specify the fields to update in the
   * payload. Any object-type fields will be deep-merged with existing content.
   * Currently we do not support removing fields or setting them to null.
   */
  update(
    experimentId: string,
    body?: ExperimentUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Experiment>;
  update(experimentId: string, options?: Core.RequestOptions): Core.APIPromise<Experiment>;
  update(
    experimentId: string,
    body: ExperimentUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Experiment> {
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
  ): Core.PagePromise<ExperimentsListObjects, Experiment>;
  list(options?: Core.RequestOptions): Core.PagePromise<ExperimentsListObjects, Experiment>;
  list(
    query: ExperimentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExperimentsListObjects, Experiment> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/experiment', ExperimentsListObjects, { query, ...options });
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
   * NOTE: This operation is deprecated and will be removed in a future revision of
   * the API. Create or replace a new experiment. If there is an existing experiment
   * in the project with the same name as the one specified in the request, will
   * return the existing experiment unmodified, will replace the existing experiment
   * with the provided fields
   */
  replace(body: ExperimentReplaceParams, options?: Core.RequestOptions): Core.APIPromise<Experiment> {
    return this._client.put('/v1/experiment', { body, ...options });
  }

  /**
   * Summarize experiment
   */
  summarize(
    experimentId: string,
    query?: ExperimentSummarizeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExperimentSummarizeResponse>;
  summarize(
    experimentId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExperimentSummarizeResponse>;
  summarize(
    experimentId: string,
    query: ExperimentSummarizeParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExperimentSummarizeResponse> {
    if (isRequestOptions(query)) {
      return this.summarize(experimentId, {}, query);
    }
    return this._client.get(`/v1/experiment/${experimentId}/summarize`, { query, ...options });
  }
}

/**
 * Pagination for endpoints which list data objects
 */
export class ExperimentsListObjects extends ListObjects<Experiment> {}

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

  /**
   * Pagination cursor
   *
   * Pass this string directly as the `cursor` param to your next fetch request to
   * get the next page of results. Not provided if the returned result set is empty.
   */
  cursor?: string | null;
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
    _xact_id: string;

    /**
     * The timestamp the experiment event was created
     */
    created: string;

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

    /**
     * A list of tags to log
     */
    tags?: Array<string> | null;
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
       * The number of tokens in the completion generated by the model (only set if this
       * is an LLM span)
       */
      completion_tokens?: number | null;

      /**
       * A unix timestamp recording when the section of code which produced the
       * experiment event finished
       */
      end?: number | null;

      /**
       * The number of tokens in the prompt used to generate the experiment event (only
       * set if this is an LLM span)
       */
      prompt_tokens?: number | null;

      /**
       * A unix timestamp recording when the section of code which produced the
       * experiment event started
       */
      start?: number | null;

      /**
       * The total number of tokens in the input and output of the experiment event.
       */
      tokens?: number | null;
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

  /**
   * Pagination cursor
   *
   * Pass this string directly as the `cursor` param to your next fetch request to
   * get the next page of results. Not provided if the returned result set is empty.
   */
  cursor?: string | null;
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
    _xact_id: string;

    /**
     * The timestamp the experiment event was created
     */
    created: string;

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

    /**
     * A list of tags to log
     */
    tags?: Array<string> | null;
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
       * The number of tokens in the completion generated by the model (only set if this
       * is an LLM span)
       */
      completion_tokens?: number | null;

      /**
       * A unix timestamp recording when the section of code which produced the
       * experiment event finished
       */
      end?: number | null;

      /**
       * The number of tokens in the prompt used to generate the experiment event (only
       * set if this is an LLM span)
       */
      prompt_tokens?: number | null;

      /**
       * A unix timestamp recording when the section of code which produced the
       * experiment event started
       */
      start?: number | null;

      /**
       * The total number of tokens in the input and output of the experiment event.
       */
      tokens?: number | null;
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

/**
 * Summary of an experiment
 */
export interface ExperimentSummarizeResponse {
  /**
   * Name of the experiment
   */
  experiment_name: string;

  /**
   * URL to the experiment's page in the Braintrust app
   */
  experiment_url: string;

  /**
   * Name of the project that the experiment belongs to
   */
  project_name: string;

  /**
   * URL to the project's page in the Braintrust app
   */
  project_url: string;

  /**
   * The experiment which scores are baselined against
   */
  comparison_experiment_name?: string | null;

  /**
   * Summary of the experiment's metrics
   */
  metrics?: Record<string, ExperimentSummarizeResponse.Metrics> | null;

  /**
   * Summary of the experiment's scores
   */
  scores?: Record<string, ExperimentSummarizeResponse.Scores> | null;
}

export namespace ExperimentSummarizeResponse {
  /**
   * Summary of a metric's performance
   */
  export interface Metrics {
    /**
     * Number of improvements in the metric
     */
    improvements: number;

    /**
     * Average metric across all examples
     */
    metric: number;

    /**
     * Name of the metric
     */
    name: string;

    /**
     * Number of regressions in the metric
     */
    regressions: number;

    /**
     * Unit label for the metric
     */
    unit: string;

    /**
     * Difference in metric between the current and comparison experiment
     */
    diff?: number;
  }

  /**
   * Summary of a score's performance
   */
  export interface Scores {
    /**
     * Number of improvements in the score
     */
    improvements: number;

    /**
     * Name of the score
     */
    name: string;

    /**
     * Number of regressions in the score
     */
    regressions: number;

    /**
     * Average score across all examples
     */
    score: number;

    /**
     * Difference in score between the current and comparison experiment
     */
    diff?: number;
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
   * Name of the project to search for
   */
  project_name?: string;
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
   * A list of filters on the events to fetch. Currently, only path-lookup type
   * filters are supported, but we may add more in the future
   */
  filters?: Array<ExperimentFetchPostParams.Filter> | null;

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
    _is_merge?: boolean | null;

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

    /**
     * A list of tags to log
     */
    tags?: Array<string> | null;
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
       * The number of tokens in the completion generated by the model (only set if this
       * is an LLM span)
       */
      completion_tokens?: number | null;

      /**
       * A unix timestamp recording when the section of code which produced the
       * experiment event finished
       */
      end?: number | null;

      /**
       * The number of tokens in the prompt used to generate the experiment event (only
       * set if this is an LLM span)
       */
      prompt_tokens?: number | null;

      /**
       * A unix timestamp recording when the section of code which produced the
       * experiment event started
       */
      start?: number | null;

      /**
       * The total number of tokens in the input and output of the experiment event.
       */
      tokens?: number | null;
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
    _is_merge: boolean;

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

    /**
     * A list of tags to log
     */
    tags?: Array<string> | null;
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
       * The number of tokens in the completion generated by the model (only set if this
       * is an LLM span)
       */
      completion_tokens?: number | null;

      /**
       * A unix timestamp recording when the section of code which produced the
       * experiment event finished
       */
      end?: number | null;

      /**
       * The number of tokens in the prompt used to generate the experiment event (only
       * set if this is an LLM span)
       */
      prompt_tokens?: number | null;

      /**
       * A unix timestamp recording when the section of code which produced the
       * experiment event started
       */
      start?: number | null;

      /**
       * The total number of tokens in the input and output of the experiment event.
       */
      tokens?: number | null;
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

export interface ExperimentReplaceParams {
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
  repo_info?: ExperimentReplaceParams.RepoInfo | null;
}

export namespace ExperimentReplaceParams {
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

export namespace ExperimentResource {
  export import Experiment = ExperimentAPI.Experiment;
  export import ExperimentFetchResponse = ExperimentAPI.ExperimentFetchResponse;
  export import ExperimentFetchPostResponse = ExperimentAPI.ExperimentFetchPostResponse;
  export import ExperimentInsertResponse = ExperimentAPI.ExperimentInsertResponse;
  export import ExperimentSummarizeResponse = ExperimentAPI.ExperimentSummarizeResponse;
  export import ExperimentsListObjects = ExperimentAPI.ExperimentsListObjects;
  export import ExperimentCreateParams = ExperimentAPI.ExperimentCreateParams;
  export import ExperimentUpdateParams = ExperimentAPI.ExperimentUpdateParams;
  export import ExperimentListParams = ExperimentAPI.ExperimentListParams;
  export import ExperimentFeedbackParams = ExperimentAPI.ExperimentFeedbackParams;
  export import ExperimentFetchParams = ExperimentAPI.ExperimentFetchParams;
  export import ExperimentFetchPostParams = ExperimentAPI.ExperimentFetchPostParams;
  export import ExperimentInsertParams = ExperimentAPI.ExperimentInsertParams;
  export import ExperimentReplaceParams = ExperimentAPI.ExperimentReplaceParams;
  export import ExperimentSummarizeParams = ExperimentAPI.ExperimentSummarizeParams;
}
