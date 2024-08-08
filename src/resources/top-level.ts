// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import { APIPromise } from '../core';
import * as Core from '../core';
import * as TopLevelAPI from './top-level';

export class TopLevel extends APIResource {
  /**
   * Default endpoint. Simply replies with 'Hello, World!'. Authorization is not
   * required
   */
  helloWorld(options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/v1', { ...options, headers: { Accept: 'text/plain', ...options?.headers } });
  }
}

export type TopLevelHelloWorldResponse = string

export namespace TopLevel {
  export import TopLevelHelloWorldResponse = TopLevelAPI.TopLevelHelloWorldResponse;
}
