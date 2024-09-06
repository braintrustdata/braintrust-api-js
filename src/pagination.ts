// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface ListObjectsResponse<Item> {
  objects: Array<Item>;
}

export interface ListObjectsParams {
  starting_after?: string;

  ending_before?: string;

  limit?: number;
}

/**
 * Pagination for endpoints which list data objects
 */
export class ListObjects<Item extends { id: string }>
  extends AbstractPage<Item>
  implements ListObjectsResponse<Item>
{
  objects: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: ListObjectsResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.objects = body.objects || [];
  }

  getPaginatedItems(): Item[] {
    return this.objects ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<ListObjectsParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const objects = this.getPaginatedItems();
    if (!objects.length) {
      return null;
    }

    const isForwards = !(
      typeof this.options.query === 'object' && 'ending_before' in (this.options.query || {})
    );
    if (isForwards) {
      const id = objects[objects.length - 1]?.id;
      if (!id) {
        return null;
      }

      return { params: { starting_after: id } };
    }

    const id = objects[0]?.id;
    if (!id) {
      return null;
    }

    return { params: { ending_before: id } };
  }
}
