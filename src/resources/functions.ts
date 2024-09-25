// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as FunctionsAPI from './functions';
import * as Shared from './shared';
import { FunctionsListObjects } from './shared';
import { type ListObjectsParams } from '../pagination';

export class Functions extends APIResource {
  /**
   * Create a new function. If there is an existing function in the project with the
   * same slug as the one specified in the request, will return the existing function
   * unmodified
   */
  create(body: FunctionCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Function> {
    return this._client.post('/v1/function', { body, ...options });
  }

  /**
   * Get a function object by its id
   */
  retrieve(functionId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Function> {
    return this._client.get(`/v1/function/${functionId}`, options);
  }

  /**
   * Partially update a function object. Specify the fields to update in the payload.
   * Any object-type fields will be deep-merged with existing content. Currently we
   * do not support removing fields or setting them to null.
   */
  update(
    functionId: string,
    body?: FunctionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Function>;
  update(functionId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Function>;
  update(
    functionId: string,
    body: FunctionUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Function> {
    if (isRequestOptions(body)) {
      return this.update(functionId, {}, body);
    }
    return this._client.patch(`/v1/function/${functionId}`, { body, ...options });
  }

  /**
   * List out all functions. The functions are sorted by creation date, with the most
   * recently-created functions coming first
   */
  list(
    query?: FunctionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FunctionsListObjects, Shared.Function>;
  list(options?: Core.RequestOptions): Core.PagePromise<FunctionsListObjects, Shared.Function>;
  list(
    query: FunctionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<FunctionsListObjects, Shared.Function> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/function', FunctionsListObjects, { query, ...options });
  }

  /**
   * Delete a function object by its id
   */
  delete(functionId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Function> {
    return this._client.delete(`/v1/function/${functionId}`, options);
  }

  /**
   * Invoke a function.
   */
  invoke(
    functionId: string,
    body?: FunctionInvokeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown>;
  invoke(functionId: string, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  invoke(
    functionId: string,
    body: FunctionInvokeParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(body)) {
      return this.invoke(functionId, {}, body);
    }
    return this._client.post(`/v1/function/${functionId}/invoke`, { body, ...options });
  }

  /**
   * Create or replace function. If there is an existing function in the project with
   * the same slug as the one specified in the request, will replace the existing
   * function with the provided fields
   */
  replace(body: FunctionReplaceParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Function> {
    return this._client.put('/v1/function', { body, ...options });
  }
}

export type FunctionInvokeResponse = unknown;

export interface FunctionCreateParams {
  function_data: FunctionCreateParams.Prompt | FunctionCreateParams.Code | FunctionCreateParams.Global;

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
   * JSON schema for the function's parameters and return type
   */
  function_schema?: FunctionCreateParams.FunctionSchema | null;

  function_type?: 'llm' | 'scorer' | 'task' | 'tool' | null;

  origin?: FunctionCreateParams.Origin | null;

  /**
   * The prompt, model, and its parameters
   */
  prompt_data?: Shared.PromptData | null;

  /**
   * A list of tags for the prompt
   */
  tags?: Array<string> | null;
}

export namespace FunctionCreateParams {
  export interface Prompt {
    type: 'prompt';
  }

  export interface Code {
    data: Code.Bundle | Code.Inline;

    type: 'code';
  }

  export namespace Code {
    export interface Bundle extends Shared.CodeBundle {
      type: 'bundle';
    }

    export interface Inline {
      code: string;

      runtime_context: Inline.RuntimeContext;

      type: 'inline';
    }

    export namespace Inline {
      export interface RuntimeContext {
        runtime: 'node' | 'python';

        version: string;
      }
    }
  }

  export interface Global {
    name: string;

    type: 'global';
  }

  /**
   * JSON schema for the function's parameters and return type
   */
  export interface FunctionSchema {
    parameters?: unknown;

    returns?: unknown;
  }

  export interface Origin {
    /**
     * Id of the object the function is originating from
     */
    object_id: string;

    /**
     * The object type that the ACL applies to
     */
    object_type:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'group'
      | 'role'
      | 'org_member'
      | 'project_log'
      | 'org_project';

    /**
     * The function exists for internal purposes and should not be displayed in the
     * list of functions.
     */
    internal?: boolean | null;
  }
}

export interface FunctionUpdateParams {
  /**
   * Textual description of the prompt
   */
  description?: string | null;

  function_data?:
    | FunctionUpdateParams.Prompt
    | FunctionUpdateParams.Code
    | FunctionUpdateParams.Global
    | FunctionUpdateParams.NullableVariant
    | null;

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

export namespace FunctionUpdateParams {
  export interface Prompt {
    type: 'prompt';
  }

  export interface Code {
    data: Code.Bundle | Code.Inline;

    type: 'code';
  }

  export namespace Code {
    export interface Bundle extends Shared.CodeBundle {
      type: 'bundle';
    }

    export interface Inline {
      code: string;

      runtime_context: Inline.RuntimeContext;

      type: 'inline';
    }

    export namespace Inline {
      export interface RuntimeContext {
        runtime: 'node' | 'python';

        version: string;
      }
    }
  }

  export interface Global {
    name: string;

    type: 'global';
  }

  export interface NullableVariant {}
}

export interface FunctionListParams extends ListObjectsParams {
  /**
   * Name of the function to search for
   */
  function_name?: string;

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
   * Project id
   */
  project_id?: string;

  /**
   * Name of the project to search for
   */
  project_name?: string;

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

export interface FunctionInvokeParams {
  /**
   * Argument to the function, which can be any JSON serializable value
   */
  input?: unknown;

  /**
   * If the function is an LLM, additional messages to pass along to it
   */
  messages?: Array<
    | FunctionInvokeParams.System
    | FunctionInvokeParams.User
    | FunctionInvokeParams.Assistant
    | FunctionInvokeParams.Tool
    | FunctionInvokeParams.Function
    | FunctionInvokeParams.Fallback
  >;

  /**
   * The mode format of the returned value (defaults to 'auto')
   */
  mode?: 'auto' | 'parallel' | null;

  /**
   * Options for tracing the function call
   */
  parent?: FunctionInvokeParams.SpanParentStruct | string;

  /**
   * Whether to stream the response. If true, results will be returned in the
   * Braintrust SSE format.
   */
  stream?: boolean | null;

  /**
   * The version of the function
   */
  version?: string;
}

export namespace FunctionInvokeParams {
  export interface System {
    role: 'system';

    content?: string;

    name?: string;
  }

  export interface User {
    role: 'user';

    content?: string | Array<Shared.ChatCompletionContentPartText | Shared.ChatCompletionContentPartImage>;

    name?: string;
  }

  export interface Assistant {
    role: 'assistant';

    content?: string | null;

    function_call?: Assistant.FunctionCall | null;

    name?: string | null;

    tool_calls?: Array<Shared.ChatCompletionMessageToolCall> | null;
  }

  export namespace Assistant {
    export interface FunctionCall {
      arguments: string;

      name: string;
    }
  }

  export interface Tool {
    role: 'tool';

    content?: string;

    tool_call_id?: string;
  }

  export interface Function {
    name: string;

    role: 'function';

    content?: string;
  }

  export interface Fallback {
    role: 'model';

    content?: string | null;
  }

  /**
   * Span parent properties
   */
  export interface SpanParentStruct {
    /**
     * The id of the container object you are logging to
     */
    object_id: string;

    object_type: 'project_logs' | 'experiment';

    /**
     * Include these properties in every span created under this parent
     */
    propagated_event?: Record<string, unknown> | null;

    /**
     * Identifiers for the row to to log a subspan under
     */
    row_ids?: SpanParentStruct.RowIDs | null;
  }

  export namespace SpanParentStruct {
    /**
     * Identifiers for the row to to log a subspan under
     */
    export interface RowIDs {
      /**
       * The id of the row
       */
      id: string;

      /**
       * The root_span_id of the row
       */
      root_span_id: string;

      /**
       * The span_id of the row
       */
      span_id: string;
    }
  }
}

export interface FunctionReplaceParams {
  function_data: FunctionReplaceParams.Prompt | FunctionReplaceParams.Code | FunctionReplaceParams.Global;

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
   * JSON schema for the function's parameters and return type
   */
  function_schema?: FunctionReplaceParams.FunctionSchema | null;

  function_type?: 'llm' | 'scorer' | 'task' | 'tool' | null;

  origin?: FunctionReplaceParams.Origin | null;

  /**
   * The prompt, model, and its parameters
   */
  prompt_data?: Shared.PromptData | null;

  /**
   * A list of tags for the prompt
   */
  tags?: Array<string> | null;
}

export namespace FunctionReplaceParams {
  export interface Prompt {
    type: 'prompt';
  }

  export interface Code {
    data: Code.Bundle | Code.Inline;

    type: 'code';
  }

  export namespace Code {
    export interface Bundle extends Shared.CodeBundle {
      type: 'bundle';
    }

    export interface Inline {
      code: string;

      runtime_context: Inline.RuntimeContext;

      type: 'inline';
    }

    export namespace Inline {
      export interface RuntimeContext {
        runtime: 'node' | 'python';

        version: string;
      }
    }
  }

  export interface Global {
    name: string;

    type: 'global';
  }

  /**
   * JSON schema for the function's parameters and return type
   */
  export interface FunctionSchema {
    parameters?: unknown;

    returns?: unknown;
  }

  export interface Origin {
    /**
     * Id of the object the function is originating from
     */
    object_id: string;

    /**
     * The object type that the ACL applies to
     */
    object_type:
      | 'organization'
      | 'project'
      | 'experiment'
      | 'dataset'
      | 'prompt'
      | 'prompt_session'
      | 'group'
      | 'role'
      | 'org_member'
      | 'project_log'
      | 'org_project';

    /**
     * The function exists for internal purposes and should not be displayed in the
     * list of functions.
     */
    internal?: boolean | null;
  }
}

export namespace Functions {
  export import FunctionInvokeResponse = FunctionsAPI.FunctionInvokeResponse;
  export import FunctionCreateParams = FunctionsAPI.FunctionCreateParams;
  export import FunctionUpdateParams = FunctionsAPI.FunctionUpdateParams;
  export import FunctionListParams = FunctionsAPI.FunctionListParams;
  export import FunctionInvokeParams = FunctionsAPI.FunctionInvokeParams;
  export import FunctionReplaceParams = FunctionsAPI.FunctionReplaceParams;
}

export { FunctionsListObjects };
