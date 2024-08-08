// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as DatasetsAPI from './datasets';
import * as Shared from './shared';
import { DatasetsListObjects } from './shared';
import { type ListObjectsParams } from '../pagination';

export class Datasets extends APIResource {
  /**
   * Create a new dataset. If there is an existing dataset in the project with the
   * same name as the one specified in the request, will return the existing dataset
   * unmodified
   */
  create(body: DatasetCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Dataset> {
    return this._client.post('/v1/dataset', { body, ...options });
  }

  /**
   * Get a dataset object by its id
   */
  retrieve(datasetId: Shared.DatasetID, options?: Core.RequestOptions): Core.APIPromise<Shared.Dataset> {
    return this._client.get(`/v1/dataset/${datasetId}`, options);
  }

  /**
   * Partially update a dataset object. Specify the fields to update in the payload.
   * Any object-type fields will be deep-merged with existing content. Currently we
   * do not support removing fields or setting them to null.
   */
  update(
    datasetId: Shared.DatasetID,
    body?: DatasetUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Dataset>;
  update(datasetId: Shared.DatasetID, options?: Core.RequestOptions): Core.APIPromise<Shared.Dataset>;
  update(
    datasetId: Shared.DatasetID,
    body: DatasetUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Dataset> {
    if (isRequestOptions(body)) {
      return this.update(datasetId, {}, body);
    }
    return this._client.patch(`/v1/dataset/${datasetId}`, { body, ...options });
  }

  /**
   * List out all datasets. The datasets are sorted by creation date, with the most
   * recently-created datasets coming first
   */
  list(
    query?: DatasetListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DatasetsListObjects, Shared.Dataset>;
  list(options?: Core.RequestOptions): Core.PagePromise<DatasetsListObjects, Shared.Dataset>;
  list(
    query: DatasetListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DatasetsListObjects, Shared.Dataset> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/dataset', DatasetsListObjects, { query, ...options });
  }

  /**
   * Delete a dataset object by its id
   */
  delete(datasetId: Shared.DatasetID, options?: Core.RequestOptions): Core.APIPromise<Shared.Dataset> {
    return this._client.delete(`/v1/dataset/${datasetId}`, options);
  }

  /**
   * Log feedback for a set of dataset events
   */
  feedback(
    datasetId: Shared.DatasetID,
    body: DatasetFeedbackParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/v1/dataset/${datasetId}/feedback`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Fetch the events in a dataset. Equivalent to the POST form of the same path, but
   * with the parameters in the URL query rather than in the request body
   */
  fetch(
    datasetId: Shared.DatasetID,
    query?: DatasetFetchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.FetchDatasetEventsResponse>;
  fetch(
    datasetId: Shared.DatasetID,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.FetchDatasetEventsResponse>;
  fetch(
    datasetId: Shared.DatasetID,
    query: DatasetFetchParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.FetchDatasetEventsResponse> {
    if (isRequestOptions(query)) {
      return this.fetch(datasetId, {}, query);
    }
    return this._client.get(`/v1/dataset/${datasetId}/fetch`, { query, ...options });
  }

  /**
   * Fetch the events in a dataset. Equivalent to the GET form of the same path, but
   * with the parameters in the request body rather than in the URL query
   */
  fetchPost(
    datasetId: Shared.DatasetID,
    body?: DatasetFetchPostParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.FetchDatasetEventsResponse>;
  fetchPost(
    datasetId: Shared.DatasetID,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.FetchDatasetEventsResponse>;
  fetchPost(
    datasetId: Shared.DatasetID,
    body: DatasetFetchPostParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.FetchDatasetEventsResponse> {
    if (isRequestOptions(body)) {
      return this.fetchPost(datasetId, {}, body);
    }
    return this._client.post(`/v1/dataset/${datasetId}/fetch`, { body, ...options });
  }

  /**
   * Insert a set of events into the dataset
   */
  insert(
    datasetId: Shared.DatasetID,
    body: DatasetInsertParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.InsertEventsResponse> {
    return this._client.post(`/v1/dataset/${datasetId}/insert`, { body, ...options });
  }

  /**
   * Summarize dataset
   */
  summarize(
    datasetId: Shared.DatasetID,
    query?: DatasetSummarizeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.SummarizeDatasetResponse>;
  summarize(
    datasetId: Shared.DatasetID,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.SummarizeDatasetResponse>;
  summarize(
    datasetId: Shared.DatasetID,
    query: DatasetSummarizeParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.SummarizeDatasetResponse> {
    if (isRequestOptions(query)) {
      return this.summarize(datasetId, {}, query);
    }
    return this._client.get(`/v1/dataset/${datasetId}/summarize`, { query, ...options });
  }
}

export interface DatasetCreateParams {
  /**
   * Name of the dataset. Within a project, dataset names are unique
   */
  name: string;

  /**
   * Textual description of the dataset
   */
  description?: string | null;

  /**
   * Unique identifier for the project that the dataset belongs under
   */
  project_id?: string | null;
}

export interface DatasetUpdateParams {
  /**
   * Textual description of the dataset
   */
  description?: string | null;

  /**
   * User-controlled metadata about the dataset
   */
  metadata?: Record<string, unknown> | null;

  /**
   * Name of the dataset. Within a project, dataset names are unique
   */
  name?: string | null;
}

export interface DatasetListParams extends ListObjectsParams {
  /**
   * Name of the dataset to search for
   */
  dataset_name?: Shared.DatasetName;

  /**
   * Filter search results to a particular set of object IDs. To specify a list of
   * IDs, include the query param multiple times
   */
  ids?: Shared.IDs;

  /**
   * Filter search results to within a particular organization
   */
  org_name?: Shared.OrgName;

  /**
   * Project id
   */
  project_id?: Shared.ProjectIDQuery;

  /**
   * Name of the project to search for
   */
  project_name?: Shared.ProjectName;
}

export interface DatasetFeedbackParams {
  /**
   * A list of dataset feedback items
   */
  feedback: Array<Shared.FeedbackDatasetItem>;
}

export interface DatasetFetchParams {
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
  limit?: Shared.FetchLimitParam;

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
  max_root_span_id?: Shared.MaxRootSpanID;

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
  max_xact_id?: Shared.MaxXactID;

  /**
   * Retrieve a snapshot of events from a past time
   *
   * The version id is essentially a filter on the latest event transaction id. You
   * can use the `max_xact_id` returned by a past fetch as the version to reproduce
   * that exact fetch.
   */
  version?: Shared.Version;
}

export interface DatasetFetchPostParams {
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
  filters?: Shared.FetchEventsFilters | null;

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

export interface DatasetInsertParams {
  /**
   * A list of dataset events to insert
   */
  events: Array<Shared.InsertDatasetEvent>;
}

export interface DatasetSummarizeParams {
  /**
   * Whether to summarize the data. If false (or omitted), only the metadata will be
   * returned.
   */
  summarize_data?: Shared.SummarizeData;
}

export namespace Datasets {
  export import DatasetCreateParams = DatasetsAPI.DatasetCreateParams;
  export import DatasetUpdateParams = DatasetsAPI.DatasetUpdateParams;
  export import DatasetListParams = DatasetsAPI.DatasetListParams;
  export import DatasetFeedbackParams = DatasetsAPI.DatasetFeedbackParams;
  export import DatasetFetchParams = DatasetsAPI.DatasetFetchParams;
  export import DatasetFetchPostParams = DatasetsAPI.DatasetFetchPostParams;
  export import DatasetInsertParams = DatasetsAPI.DatasetInsertParams;
  export import DatasetSummarizeParams = DatasetsAPI.DatasetSummarizeParams;
}

export { DatasetsListObjects };
