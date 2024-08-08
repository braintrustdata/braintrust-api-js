// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import { APIPromise } from '../core';
import * as Core from '../core';
import * as PromptsAPI from './prompts';
import * as Shared from './shared';
import { ListObjects, type ListObjectsParams } from '../pagination';

export class Prompts extends APIResource {
  /**
   * Create a new prompt. If there is an existing prompt in the project with the same
   * slug as the one specified in the request, will return the existing prompt
   * unmodified
   */
  create(body: PromptCreateParams, options?: Core.RequestOptions): Core.APIPromise<Prompt> {
    return this._client.post('/v1/prompt', { body, ...options });
  }

  /**
   * Get a prompt object by its id
   */
  retrieve(promptId: string, options?: Core.RequestOptions): Core.APIPromise<Prompt> {
    return this._client.get(`/v1/prompt/${promptId}`, options);
  }

  /**
   * Partially update a prompt object. Specify the fields to update in the payload.
   * Any object-type fields will be deep-merged with existing content. Currently we
   * do not support removing fields or setting them to null.
   */
  update(promptId: string, body?: PromptUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Prompt>
  update(promptId: string, options?: Core.RequestOptions): Core.APIPromise<Prompt>
  update(promptId: string, body: PromptUpdateParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<Prompt> {
    if (isRequestOptions(body)) {
      return this.update(promptId, {}, body);
    }
    return this._client.patch(`/v1/prompt/${promptId}`, { body, ...options });
  }

  /**
   * List out all prompts. The prompts are sorted by creation date, with the most
   * recently-created prompts coming first
   */
  list(query?: PromptListParams, options?: Core.RequestOptions): Core.PagePromise<PromptsListObjects, Prompt>
  list(options?: Core.RequestOptions): Core.PagePromise<PromptsListObjects, Prompt>
  list(query: PromptListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.PagePromise<PromptsListObjects, Prompt> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/prompt', PromptsListObjects, { query, ...options });
  }

  /**
   * Delete a prompt object by its id
   */
  delete(promptId: string, options?: Core.RequestOptions): Core.APIPromise<Prompt> {
    return this._client.delete(`/v1/prompt/${promptId}`, options);
  }

  /**
   * Create or replace prompt. If there is an existing prompt in the project with the
   * same slug as the one specified in the request, will replace the existing prompt
   * with the provided fields
   */
  replace(body: PromptReplaceParams, options?: Core.RequestOptions): Core.APIPromise<Prompt> {
    return this._client.put('/v1/prompt', { body, ...options });
  }
}

/**
 * Pagination for endpoints which list data objects
 */
export class PromptsListObjects extends ListObjects<Prompt> {
}

export interface Prompt {
  /**
   * Unique identifier for the prompt
   */
  id: string;

  /**
   * The transaction id of an event is unique to the network operation that processed
   * the event insertion. Transaction ids are monotonically increasing over time and
   * can be used to retrieve a versioned snapshot of the prompt (see the `version`
   * parameter)
   */
  _xact_id: string;

  /**
   * A literal 'p' which identifies the object as a project prompt
   */
  log_id: 'p';

  /**
   * Name of the prompt
   */
  name: string;

  /**
   * Unique identifier for the organization
   */
  org_id: string;

  /**
   * Unique identifier for the project that the prompt belongs under
   */
  project_id: string;

  /**
   * Unique identifier for the prompt
   */
  slug: string;

  /**
   * Date of prompt creation
   */
  created?: string | null;

  /**
   * Textual description of the prompt
   */
  description?: string | null;

  /**
   * User-controlled metadata about the prompt
   */
  metadata?: Record<string, unknown> | null;

  /**
   * The prompt, model, and its parameters
   */
  prompt_data?: Shared.PromptData | null;

  /**
   * A list of tags for the prompt
   */
  tags?: Array<string> | null;
}

export interface PromptCreateParams {
  /**
   * Name of the prompt
   */
  name: string;

  /**
   * Unique identifier for the project that the prompt belongs under
   */
  project_id: string;

  /**
   * Unique identifier for the prompt
   */
  slug: string;

  /**
   * Textual description of the prompt
   */
  description?: string | null;

  /**
   * The prompt, model, and its parameters
   */
  prompt_data?: Shared.PromptData | null;

  /**
   * A list of tags for the prompt
   */
  tags?: Array<string> | null;
}

export interface PromptUpdateParams {
  /**
   * Textual description of the prompt
   */
  description?: string | null;

  /**
   * Name of the prompt
   */
  name?: string | null;

  /**
   * The prompt, model, and its parameters
   */
  prompt_data?: Shared.PromptData | null;

  /**
   * A list of tags for the prompt
   */
  tags?: Array<string> | null;
}

export interface PromptListParams extends ListObjectsParams {
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
   * Name of the project to search for
   */
  project_name?: string;

  /**
   * Name of the prompt to search for
   */
  prompt_name?: string;

  /**
   * Retrieve prompt with a specific slug
   */
  slug?: string;

  /**
   * Retrieve prompt at a specific version.
   *
   * The version id can either be a transaction id (e.g. '1000192656880881099') or a
   * version identifier (e.g. '81cd05ee665fdfb3').
   */
  version?: string;
}

export interface PromptReplaceParams {
  /**
   * Name of the prompt
   */
  name: string;

  /**
   * Unique identifier for the project that the prompt belongs under
   */
  project_id: string;

  /**
   * Unique identifier for the prompt
   */
  slug: string;

  /**
   * Textual description of the prompt
   */
  description?: string | null;

  /**
   * The prompt, model, and its parameters
   */
  prompt_data?: Shared.PromptData | null;

  /**
   * A list of tags for the prompt
   */
  tags?: Array<string> | null;
}

export namespace Prompts {
  export import Prompt = PromptsAPI.Prompt;
  export import PromptsListObjects = PromptsAPI.PromptsListObjects;
  export import PromptCreateParams = PromptsAPI.PromptCreateParams;
  export import PromptUpdateParams = PromptsAPI.PromptUpdateParams;
  export import PromptListParams = PromptsAPI.PromptListParams;
  export import PromptReplaceParams = PromptsAPI.PromptReplaceParams;
}
