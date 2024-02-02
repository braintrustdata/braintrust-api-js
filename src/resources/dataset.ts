// File generated from our OpenAPI spec by Stainless.

import * as Core from 'braintrust/core';
import { APIResource } from 'braintrust/resource';
import { isRequestOptions } from 'braintrust/core';
import * as DatasetAPI from 'braintrust/resources/dataset';
import { ListObjects, type ListObjectsParams } from 'braintrust/pagination';

export class DatasetResource extends APIResource {
  /**
   * Create a new dataset. If there is an existing dataset in the project with the
   * same name as the one specified in the request, will return the existing dataset
   * unmodified
   */
  create(body: DatasetCreateParams, options?: Core.RequestOptions): Core.APIPromise<Dataset> {
    return this._client.post('/v1/dataset', { body, ...options });
  }

  /**
   * Get a dataset object by its id
   */
  retrieve(datasetId: string, options?: Core.RequestOptions): Core.APIPromise<Dataset> {
    return this._client.get(`/v1/dataset/${datasetId}`, options);
  }

  /**
   * Partially update a dataset object. Specify the fields to update in the payload.
   * Any object-type fields will be deep-merged with existing content. Currently we
   * do not support removing fields or setting them to null. As a workaround, you may
   * retrieve the full object with `GET /dataset/{id}` and then replace it with
   * `PUT /dataset`.
   */
  update(
    datasetId: string,
    body: DatasetUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Dataset> {
    return this._client.patch(`/v1/dataset/${datasetId}`, { body, ...options });
  }

  /**
   * List out all datasets. The datasets are sorted by creation date, with the most
   * recently-created datasets coming first
   */
  list(
    query?: DatasetListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DatasetsListObjects, Dataset>;
  list(options?: Core.RequestOptions): Core.PagePromise<DatasetsListObjects, Dataset>;
  list(
    query: DatasetListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DatasetsListObjects, Dataset> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/dataset', DatasetsListObjects, { query, ...options });
  }

  /**
   * Delete a dataset object by its id
   */
  delete(datasetId: string, options?: Core.RequestOptions): Core.APIPromise<Dataset> {
    return this._client.delete(`/v1/dataset/${datasetId}`, options);
  }

  /**
   * Log feedback for a set of dataset events
   */
  feedback(
    datasetId: string,
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
    datasetId: string,
    query?: DatasetFetchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetFetchResponse>;
  fetch(datasetId: string, options?: Core.RequestOptions): Core.APIPromise<DatasetFetchResponse>;
  fetch(
    datasetId: string,
    query: DatasetFetchParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetFetchResponse> {
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
    datasetId: string,
    body?: DatasetFetchPostParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetFetchPostResponse>;
  fetchPost(datasetId: string, options?: Core.RequestOptions): Core.APIPromise<DatasetFetchPostResponse>;
  fetchPost(
    datasetId: string,
    body: DatasetFetchPostParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetFetchPostResponse> {
    if (isRequestOptions(body)) {
      return this.fetchPost(datasetId, {}, body);
    }
    return this._client.post(`/v1/dataset/${datasetId}/fetch`, { body, ...options });
  }

  /**
   * Insert a set of events into the dataset
   */
  insert(
    datasetId: string,
    body: DatasetInsertParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetInsertResponse> {
    return this._client.post(`/v1/dataset/${datasetId}/insert`, { body, ...options });
  }

  /**
   * Create or replace a new dataset. If there is an existing dataset in the project
   * with the same name as the one specified in the request, will replace the
   * existing dataset with the provided fields
   */
  replace(body: DatasetReplaceParams, options?: Core.RequestOptions): Core.APIPromise<Dataset> {
    return this._client.put('/v1/dataset', { body, ...options });
  }
}

/**
 * Pagination for endpoints which list data objects
 */
export class DatasetsListObjects extends ListObjects<Dataset> {}

export interface Dataset {
  /**
   * Unique identifier for the dataset
   */
  id: string;

  /**
   * Name of the dataset. Within a project, dataset names are unique
   */
  name: string;

  /**
   * Date of dataset creation
   */
  created?: string | null;

  /**
   * Date of dataset deletion, or null if the dataset is still active
   */
  deleted_at?: string | null;

  /**
   * Textual description of the dataset
   */
  description?: string | null;

  /**
   * Unique identifier for the project that the dataset belongs under
   */
  project_id?: string | null;

  /**
   * Identifies the user who created the dataset
   */
  user_id?: string | null;
}

export interface DatasetFetchResponse {
  /**
   * A list of fetched events
   */
  events: Array<DatasetFetchResponse.Event>;
}

export namespace DatasetFetchResponse {
  export interface Event {
    /**
     * A unique identifier for the dataset event. If you don't provide one, BrainTrust
     * will generate one for you
     */
    id: string;

    /**
     * The transaction id of an event is unique to the network operation that processed
     * the event insertion. Transaction ids are monotonically increasing over time and
     * can be used to retrieve a versioned snapshot of the dataset (see the `version`
     * parameter)
     */
    _xact_id: number;

    /**
     * Unique identifier for the dataset
     */
    dataset_id: string;

    /**
     * The `span_id` of the root of the trace this dataset event belongs to
     */
    root_span_id: string;

    /**
     * The timestamp the dataset event was created
     */
    created?: string | null;

    /**
     * The argument that uniquely define an input case (an arbitrary, JSON serializable
     * object)
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
     * The output of your application, including post-processing (an arbitrary, JSON
     * serializable object)
     */
    output?: unknown;

    /**
     * Unique identifier for the project that the dataset belongs under
     */
    project_id?: string | null;
  }
}

export interface DatasetFetchPostResponse {
  /**
   * A list of fetched events
   */
  events: Array<DatasetFetchPostResponse.Event>;
}

export namespace DatasetFetchPostResponse {
  export interface Event {
    /**
     * A unique identifier for the dataset event. If you don't provide one, BrainTrust
     * will generate one for you
     */
    id: string;

    /**
     * The transaction id of an event is unique to the network operation that processed
     * the event insertion. Transaction ids are monotonically increasing over time and
     * can be used to retrieve a versioned snapshot of the dataset (see the `version`
     * parameter)
     */
    _xact_id: number;

    /**
     * Unique identifier for the dataset
     */
    dataset_id: string;

    /**
     * The `span_id` of the root of the trace this dataset event belongs to
     */
    root_span_id: string;

    /**
     * The timestamp the dataset event was created
     */
    created?: string | null;

    /**
     * The argument that uniquely define an input case (an arbitrary, JSON serializable
     * object)
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
     * The output of your application, including post-processing (an arbitrary, JSON
     * serializable object)
     */
    output?: unknown;

    /**
     * Unique identifier for the project that the dataset belongs under
     */
    project_id?: string | null;
  }
}

export interface DatasetInsertResponse {
  /**
   * The ids of all rows that were inserted, aligning one-to-one with the rows
   * provided as input
   */
  row_ids: Array<string>;
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
   * Name of the dataset. Within a project, dataset names are unique
   */
  name: string;

  /**
   * Textual description of the dataset
   */
  description?: string | null;
}

export interface DatasetListParams extends ListObjectsParams {
  /**
   * Name of the dataset to search for
   */
  dataset_name?: string;

  /**
   * Filter search results to within a particular organization
   */
  org_name?: string;

  /**
   * Name of the project to search for
   */
  project_name?: string;
}

export interface DatasetFeedbackParams {
  /**
   * A list of dataset feedback items
   */
  feedback: Array<DatasetFeedbackParams.Feedback>;
}

export namespace DatasetFeedbackParams {
  export interface Feedback {
    /**
     * The id of the dataset event to log feedback for. This is the row `id` returned
     * by `POST /v1/dataset/{dataset_id}/insert`
     */
    id: string;

    /**
     * An optional comment string to log about the dataset event
     */
    comment?: string | null;

    /**
     * A dictionary with additional data about the feedback. If you have a `user_id`,
     * you can log it here and access it in the Braintrust UI.
     */
    metadata?: Record<string, unknown> | null;

    /**
     * The source of the feedback. Must be one of "external" (default), "app", or "api"
     */
    source?: 'app' | 'api' | 'external' | null;
  }
}

export interface DatasetFetchParams {
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

export interface DatasetFetchPostParams {
  /**
   * A list of filters on the events to fetch. Currently, only path-lookup type
   * filters are supported, but we may add more in the future
   */
  filters?: Array<DatasetFetchPostParams.Filter> | null;

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

export namespace DatasetFetchPostParams {
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

export interface DatasetInsertParams {
  /**
   * A list of dataset events to insert
   */
  events: Array<DatasetInsertParams.InsertDatasetEventReplace | DatasetInsertParams.InsertDatasetEventMerge>;
}

export namespace DatasetInsertParams {
  export interface InsertDatasetEventReplace {
    /**
     * A unique identifier for the dataset event. If you don't provide one, BrainTrust
     * will generate one for you
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
     * Pass `_object_delete=true` to mark the dataset event deleted. Deleted events
     * will not show up in subsequent fetches for this dataset
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
     * The argument that uniquely define an input case (an arbitrary, JSON serializable
     * object)
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
     * The output of your application, including post-processing (an arbitrary, JSON
     * serializable object)
     */
    output?: unknown;
  }

  export interface InsertDatasetEventMerge {
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
     * A unique identifier for the dataset event. If you don't provide one, BrainTrust
     * will generate one for you
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
     * Pass `_object_delete=true` to mark the dataset event deleted. Deleted events
     * will not show up in subsequent fetches for this dataset
     */
    _object_delete?: boolean | null;

    /**
     * The argument that uniquely define an input case (an arbitrary, JSON serializable
     * object)
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
     * The output of your application, including post-processing (an arbitrary, JSON
     * serializable object)
     */
    output?: unknown;
  }
}

export interface DatasetReplaceParams {
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

export namespace DatasetResource {
  export import Dataset = DatasetAPI.Dataset;
  export import DatasetFetchResponse = DatasetAPI.DatasetFetchResponse;
  export import DatasetFetchPostResponse = DatasetAPI.DatasetFetchPostResponse;
  export import DatasetInsertResponse = DatasetAPI.DatasetInsertResponse;
  export import DatasetsListObjects = DatasetAPI.DatasetsListObjects;
  export import DatasetCreateParams = DatasetAPI.DatasetCreateParams;
  export import DatasetUpdateParams = DatasetAPI.DatasetUpdateParams;
  export import DatasetListParams = DatasetAPI.DatasetListParams;
  export import DatasetFeedbackParams = DatasetAPI.DatasetFeedbackParams;
  export import DatasetFetchParams = DatasetAPI.DatasetFetchParams;
  export import DatasetFetchPostParams = DatasetAPI.DatasetFetchPostParams;
  export import DatasetInsertParams = DatasetAPI.DatasetInsertParams;
  export import DatasetReplaceParams = DatasetAPI.DatasetReplaceParams;
}
