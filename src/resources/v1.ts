// File generated from our OpenAPI spec by Stainless.

import * as Core from 'braintrust-sdk-kotlin/core';
import { APIResource } from 'braintrust-sdk-kotlin/resource';
import * as V1API from 'braintrust-sdk-kotlin/resources/v1';

export class V1 extends APIResource {
  /**
   * Default endpoint. Simply replies with 'Hello, World!'. Authorization is not
   * required
   */
  helloWorld(options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/v1', { ...options, headers: { Accept: 'text/plain', ...options?.headers } });
  }
}

export type V1HelloWorldResponse = string;

export namespace V1 {
  export import V1HelloWorldResponse = V1API.V1HelloWorldResponse;
}
