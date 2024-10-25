// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as UsersAPI from './users';
import * as Shared from './shared';
import { UsersListObjects } from './shared';
import { type ListObjectsParams } from '../pagination';

export class Users extends APIResource {
  /**
   * Get a user object by its id
   */
  retrieve(userId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.User> {
    return this._client.get(`/v1/user/${userId}`, options);
  }

  /**
   * List out all users. The users are sorted by creation date, with the most
   * recently-created users coming first
   */
  list(
    query?: UserListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<UsersListObjects, Shared.User>;
  list(options?: Core.RequestOptions): Core.PagePromise<UsersListObjects, Shared.User>;
  list(
    query: UserListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<UsersListObjects, Shared.User> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/user', UsersListObjects, { query, ...options });
  }
}

export interface UserListParams extends ListObjectsParams {
  /**
   * Email of the user to search for. You may pass the param multiple times to filter
   * for more than one email
   */
  email?: string | Array<string>;

  /**
   * Family name of the user to search for. You may pass the param multiple times to
   * filter for more than one family name
   */
  family_name?: string | Array<string>;

  /**
   * Given name of the user to search for. You may pass the param multiple times to
   * filter for more than one given name
   */
  given_name?: string | Array<string>;

  /**
   * Filter search results to a particular set of object IDs. To specify a list of
   * IDs, include the query param multiple times
   */
  ids?: string | Array<string>;

  /**
   * Filter search results to within a particular organization
   */
  org_name?: string;
}

export namespace Users {
  export type UserListParams = UsersAPI.UserListParams;
}

export { UsersListObjects };
