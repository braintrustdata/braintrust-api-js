// File generated from our OpenAPI spec by Stainless.

import * as Core from 'braintrust-sdk-kotlin/core';
import { APIResource } from 'braintrust-sdk-kotlin/resource';
import * as DatasetsAPI from 'braintrust-sdk-kotlin/resources/datasets';

export class TopLevel extends APIResource {
  /**
   * Delete a dataset object by its id
   */
  datasets(datasetId: string, options?: Core.RequestOptions): Core.APIPromise<DatasetsAPI.Dataset> {
    return this._client.delete(`/v1/dataset/${datasetId}`, options);
  }
}
