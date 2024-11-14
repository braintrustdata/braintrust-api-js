// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';
import { SpanIFramesListObjects } from './shared';
import { type ListObjectsParams } from '../pagination';

export class SpanIframes extends APIResource {
  /**
   * Create a new span_iframe. If there is an existing span_iframe with the same name
   * as the one specified in the request, will return the existing span_iframe
   * unmodified
   */
  create(body: SpanIframeCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.SpanIFrame> {
    return this._client.post('/v1/span_iframe', { body, ...options });
  }

  /**
   * Get a span_iframe object by its id
   */
  retrieve(spanIframeId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.SpanIFrame> {
    return this._client.get(`/v1/span_iframe/${spanIframeId}`, options);
  }

  /**
   * Partially update a span_iframe object. Specify the fields to update in the
   * payload. Any object-type fields will be deep-merged with existing content.
   * Currently we do not support removing fields or setting them to null.
   */
  update(
    spanIframeId: string,
    body?: SpanIframeUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.SpanIFrame>;
  update(spanIframeId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.SpanIFrame>;
  update(
    spanIframeId: string,
    body: SpanIframeUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.SpanIFrame> {
    if (isRequestOptions(body)) {
      return this.update(spanIframeId, {}, body);
    }
    return this._client.patch(`/v1/span_iframe/${spanIframeId}`, { body, ...options });
  }

  /**
   * List out all span_iframes. The span_iframes are sorted by creation date, with
   * the most recently-created span_iframes coming first
   */
  list(
    query?: SpanIframeListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SpanIFramesListObjects, Shared.SpanIFrame>;
  list(options?: Core.RequestOptions): Core.PagePromise<SpanIFramesListObjects, Shared.SpanIFrame>;
  list(
    query: SpanIframeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<SpanIFramesListObjects, Shared.SpanIFrame> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/span_iframe', SpanIFramesListObjects, { query, ...options });
  }

  /**
   * Delete a span_iframe object by its id
   */
  delete(spanIframeId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.SpanIFrame> {
    return this._client.delete(`/v1/span_iframe/${spanIframeId}`, options);
  }

  /**
   * Create or replace span_iframe. If there is an existing span_iframe with the same
   * name as the one specified in the request, will replace the existing span_iframe
   * with the provided fields
   */
  replace(body: SpanIframeReplaceParams, options?: Core.RequestOptions): Core.APIPromise<Shared.SpanIFrame> {
    return this._client.put('/v1/span_iframe', { body, ...options });
  }
}

export interface SpanIframeCreateParams {
  /**
   * Name of the span iframe
   */
  name: string;

  /**
   * Unique identifier for the project that the span iframe belongs under
   */
  project_id: string;

  /**
   * URL to embed the project viewer in an iframe
   */
  url: string;

  /**
   * Textual description of the span iframe
   */
  description?: string | null;

  /**
   * Whether to post messages to the iframe containing the span's data. This is
   * useful when you want to render more data than fits in the URL.
   */
  post_message?: boolean | null;
}

export interface SpanIframeUpdateParams {
  /**
   * Name of the span iframe
   */
  name?: string | null;

  /**
   * Whether to post messages to the iframe containing the span's data. This is
   * useful when you want to render more data than fits in the URL.
   */
  post_message?: boolean | null;

  /**
   * URL to embed the project viewer in an iframe
   */
  url?: string | null;
}

export interface SpanIframeListParams extends ListObjectsParams {
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
   * Name of the span_iframe to search for
   */
  span_iframe_name?: string;
}

export interface SpanIframeReplaceParams {
  /**
   * Name of the span iframe
   */
  name: string;

  /**
   * Unique identifier for the project that the span iframe belongs under
   */
  project_id: string;

  /**
   * URL to embed the project viewer in an iframe
   */
  url: string;

  /**
   * Textual description of the span iframe
   */
  description?: string | null;

  /**
   * Whether to post messages to the iframe containing the span's data. This is
   * useful when you want to render more data than fits in the URL.
   */
  post_message?: boolean | null;
}

export declare namespace SpanIframes {
  export {
    type SpanIframeCreateParams as SpanIframeCreateParams,
    type SpanIframeUpdateParams as SpanIframeUpdateParams,
    type SpanIframeListParams as SpanIframeListParams,
    type SpanIframeReplaceParams as SpanIframeReplaceParams,
  };
}

export { SpanIFramesListObjects };
