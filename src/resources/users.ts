// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@braintrust/api/resource';
import { isRequestOptions } from '@braintrust/api/core';
import * as Core from '@braintrust/api/core';
import * as UsersAPI from '@braintrust/api/resources/users';
import { ListObjects, type ListObjectsParams } from '@braintrust/api/pagination';

export class Users extends APIResource {
  /**
   * Get a user object by its id
   */
  retrieve(userId: string, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.get(`/v1/user/${userId}`, options);
  }

  /**
   * List out all users. The users are sorted by creation date, with the most
   * recently-created users coming first
   */
  list(query?: UserListParams, options?: Core.RequestOptions): Core.PagePromise<UsersListObjects, User>;
  list(options?: Core.RequestOptions): Core.PagePromise<UsersListObjects, User>;
  list(
    query: UserListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<UsersListObjects, User> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/user', UsersListObjects, { query, ...options });
  }
}

/**
 * Pagination for endpoints which list data objects
 */
export class UsersListObjects extends ListObjects<User> {}

export interface User {
  /**
   * Unique identifier for the user
   */
  id: string;

  /**
   * URL of the user's Avatar image
   */
  avatar_url?: string | null;

  /**
   * Date of user creation
   */
  created?: string | null;

  /**
   * The user's email
   */
  email?: string | null;

  /**
   * Family name of the user
   */
  family_name?: string | null;

  /**
   * Given name of the user
   */
  given_name?: string | null;
}

export interface UserListParams extends ListObjectsParams {
  /**
   * Email of the user to search for
   */
  email?: string;

  /**
   * Family name of the user to search for
   */
  family_name?: string;

  /**
   * Given name of the user to search for
   */
  given_name?: string;

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
  export import User = UsersAPI.User;
  export import UsersListObjects = UsersAPI.UsersListObjects;
  export import UserListParams = UsersAPI.UserListParams;
}
