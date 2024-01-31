// File generated from our OpenAPI spec by Stainless.

import * as Core from 'braintrust-sdk-kotlin/core';
import { APIResource } from 'braintrust-sdk-kotlin/resource';
import { isRequestOptions } from 'braintrust-sdk-kotlin/core';
import * as ExperimentsAPI from 'braintrust-sdk-kotlin/resources/experiments';
import * as ExperimentAPI from 'braintrust-sdk-kotlin/resources/experiment';

export class Experiments extends APIResource {
  /**
   * List out all experiments. The experiments are sorted by creation date, with the
   * most recently-created experiments coming first
   */
  list(query?: ExperimentListParams, options?: Core.RequestOptions): Core.APIPromise<ExperimentListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ExperimentListResponse>;
  list(
    query: ExperimentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExperimentListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/experiment', { query, ...options });
  }
}

export interface ExperimentListResponse {
  /**
   * A list of experiment objects
   */
  objects: Array<ExperimentAPI.Experiment>;
}

export interface ExperimentListParams {
  /**
   * A cursor for pagination. For example, if the initial item in the last page you
   * fetched had an id of `foo`, pass `ending_before=foo` to fetch the previous page.
   * Note: you may only pass one of `starting_after` and `ending_before`
   */
  ending_before?: string;

  /**
   * Name of the experiment to search for
   */
  experiment_name?: string;

  /**
   * Limit the number of objects to return
   */
  limit?: number;

  /**
   * Filter search results to within a particular organization
   */
  org_name?: string;

  /**
   * Name of the project to search for
   */
  project_name?: string;

  /**
   * A cursor for pagination. For example, if the final item in the last page you
   * fetched had an id of `foo`, pass `starting_after=foo` to fetch the next page.
   * Note: you may only pass one of `starting_after` and `ending_before`
   */
  starting_after?: string;
}

export namespace Experiments {
  export import ExperimentListResponse = ExperimentsAPI.ExperimentListResponse;
  export import ExperimentListParams = ExperimentsAPI.ExperimentListParams;
}
