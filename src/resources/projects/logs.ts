// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as LogsAPI from './logs';
import * as Shared from '../shared';

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
  ): Core.APIPromise<Shared.FetchProjectLogsEventsResponse>;
  fetch(
    projectId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.FetchProjectLogsEventsResponse>;
  fetch(
    projectId: string,
    query: LogFetchParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.FetchProjectLogsEventsResponse> {
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
  ): Core.APIPromise<Shared.FetchProjectLogsEventsResponse>;
  fetchPost(
    projectId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.FetchProjectLogsEventsResponse>;
  fetchPost(
    projectId: string,
    body: LogFetchPostParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.FetchProjectLogsEventsResponse> {
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
  ): Core.APIPromise<Shared.InsertEventsResponse> {
    return this._client.post(`/v1/project_logs/${projectId}/insert`, { body, ...options });
  }
}

export interface LogFeedbackParams {
  /**
   * A list of project logs feedback items
   */
  feedback: Array<Shared.FeedbackProjectLogsItem>;
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

export interface LogInsertParams {
  /**
   * A list of project logs events to insert
   */
  events: Array<Shared.InsertProjectLogsEventReplace | Shared.InsertProjectLogsEventMerge>;
}

export namespace Logs {
  export import LogFeedbackParams = LogsAPI.LogFeedbackParams;
  export import LogFetchParams = LogsAPI.LogFetchParams;
  export import LogFetchPostParams = LogsAPI.LogFetchPostParams;
  export import LogInsertParams = LogsAPI.LogInsertParams;
}
