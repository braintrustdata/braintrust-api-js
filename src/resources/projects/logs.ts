// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as LogsAPI from './logs';

export class Logs extends APIResource {
  /**
   * Log feedback for a set of project logs events
   */
  feedback(projectId: string, body: LogFeedbackParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/v1/project_logs/${projectId}/feedback`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Fetch the events in a project logs. Equivalent to the POST form of the same
   * path, but with the parameters in the URL query rather than in the request body
   */
  fetch(
    projectId: string,
    query?: LogFetchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LogFetchResponse>;
  fetch(projectId: string, options?: Core.RequestOptions): Core.APIPromise<LogFetchResponse>;
  fetch(
    projectId: string,
    query: LogFetchParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LogFetchResponse> {
    if (isRequestOptions(query)) {
      return this.fetch(projectId, {}, query);
    }
    return this._client.get(`/v1/project_logs/${projectId}/fetch`, { query, ...options });
  }

  /**
   * Fetch the events in a project logs. Equivalent to the GET form of the same path,
   * but with the parameters in the request body rather than in the URL query
   */
  fetchPost(
    projectId: string,
    body?: LogFetchPostParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LogFetchPostResponse>;
  fetchPost(projectId: string, options?: Core.RequestOptions): Core.APIPromise<LogFetchPostResponse>;
  fetchPost(
    projectId: string,
    body: LogFetchPostParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LogFetchPostResponse> {
    if (isRequestOptions(body)) {
      return this.fetchPost(projectId, {}, body);
    }
    return this._client.post(`/v1/project_logs/${projectId}/fetch`, { body, ...options });
  }

  /**
   * Insert a set of events into the project logs
   */
  insert(
    projectId: string,
    body: LogInsertParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LogInsertResponse> {
    return this._client.post(`/v1/project_logs/${projectId}/insert`, { body, ...options });
  }
}

export interface LogFetchResponse {
  /**
   * A list of fetched events
   */
  events: Array<LogFetchResponse.Event>;

  /**
   * Pagination cursor
   *
   * Pass this string directly as the `cursor` param to your next fetch request to
   * get the next page of results. Not provided if the returned result set is empty.
   */
  cursor?: string | null;
}

export namespace LogFetchResponse {
  export interface Event {
    /**
     * A unique identifier for the project logs event. If you don't provide one,
     * BrainTrust will generate one for you
     */
    id: string;

    /**
     * The transaction id of an event is unique to the network operation that processed
     * the event insertion. Transaction ids are monotonically increasing over time and
     * can be used to retrieve a versioned snapshot of the project logs (see the
     * `version` parameter)
     */
    _xact_id: string;

    /**
     * The timestamp the project logs event was created
     */
    created: string;

    /**
     * A literal 'g' which identifies the log as a project log
     */
    log_id: 'g';

    /**
     * Unique id for the organization that the project belongs under
     */
    org_id: string;

    /**
     * Unique identifier for the project
     */
    project_id: string;

    /**
     * The `span_id` of the root of the trace this project logs event belongs to
     */
    root_span_id: string;

    /**
     * A unique identifier used to link different project logs events together as part
     * of a full trace. See the
     * [tracing guide](https://www.braintrust.dev/docs/guides/tracing) for full details
     * on tracing
     */
    span_id: string;

    /**
     * Context is additional information about the code that produced the project logs
     * event. It is essentially the textual counterpart to `metrics`. Use the
     * `caller_*` attributes to track the location in code which produced the project
     * logs event
     */
    context?: Event.Context | null;

    /**
     * The ground truth value (an arbitrary, JSON serializable object) that you'd
     * compare to `output` to determine if your `output` value is correct or not.
     * Braintrust currently does not compare `output` to `expected` for you, since
     * there are so many different ways to do that correctly. Instead, these values are
     * just used to help you navigate while digging into analyses. However, we may
     * later use these values to re-score outputs or fine-tune your models.
     */
    expected?: unknown;

    /**
     * The arguments that uniquely define a user input (an arbitrary, JSON serializable
     * object).
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
     * produced the project logs event. Use "start" and "end" to track the time span
     * over which the project logs event was produced
     */
    metrics?: Event.Metrics | null;

    /**
     * The output of your application, including post-processing (an arbitrary, JSON
     * serializable object), that allows you to determine whether the result is correct
     * or not. For example, in an app that generates SQL queries, the `output` should
     * be the _result_ of the SQL query generated by the model, not the query itself,
     * because there may be multiple valid queries that answer a single question.
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
     * help you sort, filter, and compare logs.
     */
    scores?: Record<string, number | null> | null;

    /**
     * Human-identifying attributes of the span, such as name, type, etc.
     */
    span_attributes?: Event.SpanAttributes | null;

    /**
     * An array of the parent `span_ids` of this project logs event. This should be
     * empty for the root span of a trace, and should most often contain just one
     * parent element for subspans
     */
    span_parents?: Array<string> | null;

    /**
     * A list of tags to log
     */
    tags?: Array<string> | null;
  }

  export namespace Event {
    /**
     * Context is additional information about the code that produced the project logs
     * event. It is essentially the textual counterpart to `metrics`. Use the
     * `caller_*` attributes to track the location in code which produced the project
     * logs event
     */
    export interface Context {
      /**
       * Name of the file in code where the project logs event was created
       */
      caller_filename?: string | null;

      /**
       * The function in code which created the project logs event
       */
      caller_functionname?: string | null;

      /**
       * Line of code where the project logs event was created
       */
      caller_lineno?: number | null;
      [k: string]: unknown;
    }

    /**
     * Metrics are numerical measurements tracking the execution of the code that
     * produced the project logs event. Use "start" and "end" to track the time span
     * over which the project logs event was produced
     */
    export interface Metrics {
      /**
       * The number of tokens in the completion generated by the model (only set if this
       * is an LLM span)
       */
      completion_tokens?: number | null;

      /**
       * A unix timestamp recording when the section of code which produced the project
       * logs event finished
       */
      end?: number | null;

      /**
       * The number of tokens in the prompt used to generate the project logs event (only
       * set if this is an LLM span)
       */
      prompt_tokens?: number | null;

      /**
       * A unix timestamp recording when the section of code which produced the project
       * logs event started
       */
      start?: number | null;

      /**
       * The total number of tokens in the input and output of the project logs event.
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

export interface LogFetchPostResponse {
  /**
   * A list of fetched events
   */
  events: Array<LogFetchPostResponse.Event>;

  /**
   * Pagination cursor
   *
   * Pass this string directly as the `cursor` param to your next fetch request to
   * get the next page of results. Not provided if the returned result set is empty.
   */
  cursor?: string | null;
}

export namespace LogFetchPostResponse {
  export interface Event {
    /**
     * A unique identifier for the project logs event. If you don't provide one,
     * BrainTrust will generate one for you
     */
    id: string;

    /**
     * The transaction id of an event is unique to the network operation that processed
     * the event insertion. Transaction ids are monotonically increasing over time and
     * can be used to retrieve a versioned snapshot of the project logs (see the
     * `version` parameter)
     */
    _xact_id: string;

    /**
     * The timestamp the project logs event was created
     */
    created: string;

    /**
     * A literal 'g' which identifies the log as a project log
     */
    log_id: 'g';

    /**
     * Unique id for the organization that the project belongs under
     */
    org_id: string;

    /**
     * Unique identifier for the project
     */
    project_id: string;

    /**
     * The `span_id` of the root of the trace this project logs event belongs to
     */
    root_span_id: string;

    /**
     * A unique identifier used to link different project logs events together as part
     * of a full trace. See the
     * [tracing guide](https://www.braintrust.dev/docs/guides/tracing) for full details
     * on tracing
     */
    span_id: string;

    /**
     * Context is additional information about the code that produced the project logs
     * event. It is essentially the textual counterpart to `metrics`. Use the
     * `caller_*` attributes to track the location in code which produced the project
     * logs event
     */
    context?: Event.Context | null;

    /**
     * The ground truth value (an arbitrary, JSON serializable object) that you'd
     * compare to `output` to determine if your `output` value is correct or not.
     * Braintrust currently does not compare `output` to `expected` for you, since
     * there are so many different ways to do that correctly. Instead, these values are
     * just used to help you navigate while digging into analyses. However, we may
     * later use these values to re-score outputs or fine-tune your models.
     */
    expected?: unknown;

    /**
     * The arguments that uniquely define a user input (an arbitrary, JSON serializable
     * object).
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
     * produced the project logs event. Use "start" and "end" to track the time span
     * over which the project logs event was produced
     */
    metrics?: Event.Metrics | null;

    /**
     * The output of your application, including post-processing (an arbitrary, JSON
     * serializable object), that allows you to determine whether the result is correct
     * or not. For example, in an app that generates SQL queries, the `output` should
     * be the _result_ of the SQL query generated by the model, not the query itself,
     * because there may be multiple valid queries that answer a single question.
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
     * help you sort, filter, and compare logs.
     */
    scores?: Record<string, number | null> | null;

    /**
     * Human-identifying attributes of the span, such as name, type, etc.
     */
    span_attributes?: Event.SpanAttributes | null;

    /**
     * An array of the parent `span_ids` of this project logs event. This should be
     * empty for the root span of a trace, and should most often contain just one
     * parent element for subspans
     */
    span_parents?: Array<string> | null;

    /**
     * A list of tags to log
     */
    tags?: Array<string> | null;
  }

  export namespace Event {
    /**
     * Context is additional information about the code that produced the project logs
     * event. It is essentially the textual counterpart to `metrics`. Use the
     * `caller_*` attributes to track the location in code which produced the project
     * logs event
     */
    export interface Context {
      /**
       * Name of the file in code where the project logs event was created
       */
      caller_filename?: string | null;

      /**
       * The function in code which created the project logs event
       */
      caller_functionname?: string | null;

      /**
       * Line of code where the project logs event was created
       */
      caller_lineno?: number | null;
      [k: string]: unknown;
    }

    /**
     * Metrics are numerical measurements tracking the execution of the code that
     * produced the project logs event. Use "start" and "end" to track the time span
     * over which the project logs event was produced
     */
    export interface Metrics {
      /**
       * The number of tokens in the completion generated by the model (only set if this
       * is an LLM span)
       */
      completion_tokens?: number | null;

      /**
       * A unix timestamp recording when the section of code which produced the project
       * logs event finished
       */
      end?: number | null;

      /**
       * The number of tokens in the prompt used to generate the project logs event (only
       * set if this is an LLM span)
       */
      prompt_tokens?: number | null;

      /**
       * A unix timestamp recording when the section of code which produced the project
       * logs event started
       */
      start?: number | null;

      /**
       * The total number of tokens in the input and output of the project logs event.
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

export interface LogInsertResponse {
  /**
   * The ids of all rows that were inserted, aligning one-to-one with the rows
   * provided as input
   */
  row_ids: Array<string>;
}

export interface LogFeedbackParams {
  /**
   * A list of project logs feedback items
   */
  feedback: Array<LogFeedbackParams.Feedback>;
}

export namespace LogFeedbackParams {
  export interface Feedback {
    /**
     * The id of the project logs event to log feedback for. This is the row `id`
     * returned by `POST /v1/project_logs/{project_id}/insert`
     */
    id: string;

    /**
     * An optional comment string to log about the project logs event
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
     * merged into the existing scores for the project logs event
     */
    scores?: Record<string, number | null> | null;

    /**
     * The source of the feedback. Must be one of "external" (default), "app", or "api"
     */
    source?: 'app' | 'api' | 'external' | null;
  }
}

export interface LogFetchParams {
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

export interface LogFetchPostParams {
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
  filters?: Array<LogFetchPostParams.Filter> | null;

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

export namespace LogFetchPostParams {
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

export interface LogInsertParams {
  /**
   * A list of project logs events to insert
   */
  events: Array<LogInsertParams.InsertProjectLogsEventReplace | LogInsertParams.InsertProjectLogsEventMerge>;
}

export namespace LogInsertParams {
  export interface InsertProjectLogsEventReplace {
    /**
     * A unique identifier for the project logs event. If you don't provide one,
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
     * Pass `_object_delete=true` to mark the project logs event deleted. Deleted
     * events will not show up in subsequent fetches for this project logs
     */
    _object_delete?: boolean | null;

    /**
     * Use the `_parent_id` field to create this row as a subspan of an existing row.
     * It cannot be specified alongside `_is_merge=true`. Tracking hierarchical
     * relationships are important for tracing (see the
     * [guide](https://www.braintrust.dev/docs/guides/tracing) for full details).
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
     * Context is additional information about the code that produced the project logs
     * event. It is essentially the textual counterpart to `metrics`. Use the
     * `caller_*` attributes to track the location in code which produced the project
     * logs event
     */
    context?: InsertProjectLogsEventReplace.Context | null;

    /**
     * The timestamp the project logs event was created
     */
    created?: string | null;

    /**
     * The ground truth value (an arbitrary, JSON serializable object) that you'd
     * compare to `output` to determine if your `output` value is correct or not.
     * Braintrust currently does not compare `output` to `expected` for you, since
     * there are so many different ways to do that correctly. Instead, these values are
     * just used to help you navigate while digging into analyses. However, we may
     * later use these values to re-score outputs or fine-tune your models.
     */
    expected?: unknown;

    /**
     * The arguments that uniquely define a user input (an arbitrary, JSON serializable
     * object).
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
     * produced the project logs event. Use "start" and "end" to track the time span
     * over which the project logs event was produced
     */
    metrics?: InsertProjectLogsEventReplace.Metrics | null;

    /**
     * The output of your application, including post-processing (an arbitrary, JSON
     * serializable object), that allows you to determine whether the result is correct
     * or not. For example, in an app that generates SQL queries, the `output` should
     * be the _result_ of the SQL query generated by the model, not the query itself,
     * because there may be multiple valid queries that answer a single question.
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
     * help you sort, filter, and compare logs.
     */
    scores?: Record<string, number | null> | null;

    /**
     * Human-identifying attributes of the span, such as name, type, etc.
     */
    span_attributes?: InsertProjectLogsEventReplace.SpanAttributes | null;

    /**
     * A list of tags to log
     */
    tags?: Array<string> | null;
  }

  export namespace InsertProjectLogsEventReplace {
    /**
     * Context is additional information about the code that produced the project logs
     * event. It is essentially the textual counterpart to `metrics`. Use the
     * `caller_*` attributes to track the location in code which produced the project
     * logs event
     */
    export interface Context {
      /**
       * Name of the file in code where the project logs event was created
       */
      caller_filename?: string | null;

      /**
       * The function in code which created the project logs event
       */
      caller_functionname?: string | null;

      /**
       * Line of code where the project logs event was created
       */
      caller_lineno?: number | null;
      [k: string]: unknown;
    }

    /**
     * Metrics are numerical measurements tracking the execution of the code that
     * produced the project logs event. Use "start" and "end" to track the time span
     * over which the project logs event was produced
     */
    export interface Metrics {
      /**
       * The number of tokens in the completion generated by the model (only set if this
       * is an LLM span)
       */
      completion_tokens?: number | null;

      /**
       * A unix timestamp recording when the section of code which produced the project
       * logs event finished
       */
      end?: number | null;

      /**
       * The number of tokens in the prompt used to generate the project logs event (only
       * set if this is an LLM span)
       */
      prompt_tokens?: number | null;

      /**
       * A unix timestamp recording when the section of code which produced the project
       * logs event started
       */
      start?: number | null;

      /**
       * The total number of tokens in the input and output of the project logs event.
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

  export interface InsertProjectLogsEventMerge {
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
     * A unique identifier for the project logs event. If you don't provide one,
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
     * Pass `_object_delete=true` to mark the project logs event deleted. Deleted
     * events will not show up in subsequent fetches for this project logs
     */
    _object_delete?: boolean | null;

    /**
     * Context is additional information about the code that produced the project logs
     * event. It is essentially the textual counterpart to `metrics`. Use the
     * `caller_*` attributes to track the location in code which produced the project
     * logs event
     */
    context?: InsertProjectLogsEventMerge.Context | null;

    /**
     * The timestamp the project logs event was created
     */
    created?: string | null;

    /**
     * The ground truth value (an arbitrary, JSON serializable object) that you'd
     * compare to `output` to determine if your `output` value is correct or not.
     * Braintrust currently does not compare `output` to `expected` for you, since
     * there are so many different ways to do that correctly. Instead, these values are
     * just used to help you navigate while digging into analyses. However, we may
     * later use these values to re-score outputs or fine-tune your models.
     */
    expected?: unknown;

    /**
     * The arguments that uniquely define a user input (an arbitrary, JSON serializable
     * object).
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
     * produced the project logs event. Use "start" and "end" to track the time span
     * over which the project logs event was produced
     */
    metrics?: InsertProjectLogsEventMerge.Metrics | null;

    /**
     * The output of your application, including post-processing (an arbitrary, JSON
     * serializable object), that allows you to determine whether the result is correct
     * or not. For example, in an app that generates SQL queries, the `output` should
     * be the _result_ of the SQL query generated by the model, not the query itself,
     * because there may be multiple valid queries that answer a single question.
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
     * help you sort, filter, and compare logs.
     */
    scores?: Record<string, number | null> | null;

    /**
     * Human-identifying attributes of the span, such as name, type, etc.
     */
    span_attributes?: InsertProjectLogsEventMerge.SpanAttributes | null;

    /**
     * A list of tags to log
     */
    tags?: Array<string> | null;
  }

  export namespace InsertProjectLogsEventMerge {
    /**
     * Context is additional information about the code that produced the project logs
     * event. It is essentially the textual counterpart to `metrics`. Use the
     * `caller_*` attributes to track the location in code which produced the project
     * logs event
     */
    export interface Context {
      /**
       * Name of the file in code where the project logs event was created
       */
      caller_filename?: string | null;

      /**
       * The function in code which created the project logs event
       */
      caller_functionname?: string | null;

      /**
       * Line of code where the project logs event was created
       */
      caller_lineno?: number | null;
      [k: string]: unknown;
    }

    /**
     * Metrics are numerical measurements tracking the execution of the code that
     * produced the project logs event. Use "start" and "end" to track the time span
     * over which the project logs event was produced
     */
    export interface Metrics {
      /**
       * The number of tokens in the completion generated by the model (only set if this
       * is an LLM span)
       */
      completion_tokens?: number | null;

      /**
       * A unix timestamp recording when the section of code which produced the project
       * logs event finished
       */
      end?: number | null;

      /**
       * The number of tokens in the prompt used to generate the project logs event (only
       * set if this is an LLM span)
       */
      prompt_tokens?: number | null;

      /**
       * A unix timestamp recording when the section of code which produced the project
       * logs event started
       */
      start?: number | null;

      /**
       * The total number of tokens in the input and output of the project logs event.
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

export namespace Logs {
  export import LogFetchResponse = LogsAPI.LogFetchResponse;
  export import LogFetchPostResponse = LogsAPI.LogFetchPostResponse;
  export import LogInsertResponse = LogsAPI.LogInsertResponse;
  export import LogFeedbackParams = LogsAPI.LogFeedbackParams;
  export import LogFetchParams = LogsAPI.LogFetchParams;
  export import LogFetchPostParams = LogsAPI.LogFetchPostParams;
  export import LogInsertParams = LogsAPI.LogInsertParams;
}
