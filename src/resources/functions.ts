// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as FunctionsAPI from './functions';
import { ListObjects, type ListObjectsParams } from '../pagination';

export class Functions extends APIResource {
  /**
   * Create a new function. If there is an existing function in the project with the
   * same slug as the one specified in the request, will return the existing function
   * unmodified
   */
  create(body: FunctionCreateParams, options?: Core.RequestOptions): Core.APIPromise<Function> {
    return this._client.post('/v1/function', { body, ...options });
  }

  /**
   * Get a function object by its id
   */
  retrieve(functionId: string, options?: Core.RequestOptions): Core.APIPromise<Function> {
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
  ): Core.APIPromise<Function>;
  update(functionId: string, options?: Core.RequestOptions): Core.APIPromise<Function>;
  update(
    functionId: string,
    body: FunctionUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Function> {
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
  ): Core.PagePromise<FunctionsListObjects, Function>;
  list(options?: Core.RequestOptions): Core.PagePromise<FunctionsListObjects, Function>;
  list(
    query: FunctionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<FunctionsListObjects, Function> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/function', FunctionsListObjects, { query, ...options });
  }

  /**
   * Delete a function object by its id
   */
  delete(functionId: string, options?: Core.RequestOptions): Core.APIPromise<Function> {
    return this._client.delete(`/v1/function/${functionId}`, options);
  }

  /**
   * Create or replace function. If there is an existing function in the project with
   * the same slug as the one specified in the request, will replace the existing
   * function with the provided fields
   */
  replace(body: FunctionReplaceParams, options?: Core.RequestOptions): Core.APIPromise<Function> {
    return this._client.put('/v1/function', { body, ...options });
  }
}

/**
 * Pagination for endpoints which list data objects
 */
export class FunctionsListObjects extends ListObjects<Function> {}

export interface Function {
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

  function_data: Function.Prompt | Function.Code | Function.Global;

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
  prompt_data?: Function.PromptData | null;

  /**
   * A list of tags for the prompt
   */
  tags?: Array<string> | null;
}

export namespace Function {
  export interface Prompt {
    type: 'prompt';
  }

  export interface Code {
    data: Code.Data;

    type: 'code';
  }

  export namespace Code {
    export interface Data {
      bundle_id: string;

      location: Data.Location;

      runtime_context: Data.RuntimeContext;
    }

    export namespace Data {
      export interface Location {
        eval_name: string;

        position: 'task' | Location.Score;

        type: 'experiment';
      }

      export namespace Location {
        export interface Score {
          score: number;
        }
      }

      export interface RuntimeContext {
        runtime: 'node';

        version: string;
      }
    }
  }

  export interface Global {
    name: string;

    type: 'global';
  }

  /**
   * The prompt, model, and its parameters
   */
  export interface PromptData {
    options?: PromptData.Options | null;

    origin?: PromptData.Origin | null;

    prompt?: PromptData.Completion | PromptData.Chat | PromptData.NullableVariant | null;
  }

  export namespace PromptData {
    export interface Options {
      model?: string;

      params?:
        | Options.OpenAIModelParams
        | Options.AnthropicModelParams
        | Options.GoogleModelParams
        | Options.WindowAIModelParams
        | Options.JsCompletionParams;

      position?: string;
    }

    export namespace Options {
      export interface OpenAIModelParams {
        frequency_penalty?: number;

        function_call?: 'auto' | 'none' | OpenAIModelParams.Function;

        max_tokens?: number;

        n?: number;

        presence_penalty?: number;

        response_format?: OpenAIModelParams.ResponseFormat | null;

        stop?: Array<string>;

        temperature?: number;

        tool_choice?: 'auto' | 'none' | OpenAIModelParams.Function;

        top_p?: number;

        use_cache?: boolean;
      }

      export namespace OpenAIModelParams {
        export interface Function {
          name: string;
        }

        export interface ResponseFormat {
          type: 'json_object';
        }

        export interface Function {
          function: Function.Function;

          type: 'function';
        }

        export namespace Function {
          export interface Function {
            name: string;
          }
        }
      }

      export interface AnthropicModelParams {
        max_tokens: number;

        temperature: number;

        /**
         * This is a legacy parameter that should not be used.
         */
        max_tokens_to_sample?: number;

        stop_sequences?: Array<string>;

        top_k?: number;

        top_p?: number;

        use_cache?: boolean;
      }

      export interface GoogleModelParams {
        maxOutputTokens?: number;

        temperature?: number;

        topK?: number;

        topP?: number;

        use_cache?: boolean;
      }

      export interface WindowAIModelParams {
        temperature?: number;

        topK?: number;

        use_cache?: boolean;
      }

      export interface JsCompletionParams {
        use_cache?: boolean;
      }
    }

    export interface Origin {
      project_id?: string;

      prompt_id?: string;

      prompt_version?: string;
    }

    export interface Completion {
      content: string;

      type: 'completion';
    }

    export interface Chat {
      messages: Array<Chat.System | Chat.User | Chat.Assistant | Chat.Tool | Chat.Function | Chat.Fallback>;

      type: 'chat';

      tools?: string;
    }

    export namespace Chat {
      export interface System {
        role: 'system';

        content?: string;

        name?: string;
      }

      export interface User {
        role: 'user';

        content?: string | Array<User.Text | User.ImageURL>;

        name?: string;
      }

      export namespace User {
        export interface Text {
          type: 'text';

          text?: string;
        }

        export interface ImageURL {
          image_url: ImageURL.ImageURL;

          type: 'image_url';
        }

        export namespace ImageURL {
          export interface ImageURL {
            url: string;

            detail?: 'auto' | 'low' | 'high';
          }
        }
      }

      export interface Assistant {
        role: 'assistant';

        content?: string | null;

        function_call?: Assistant.FunctionCall;

        name?: string;

        tool_calls?: Array<Assistant.ToolCall>;
      }

      export namespace Assistant {
        export interface FunctionCall {
          arguments: string;

          name: string;
        }

        export interface ToolCall {
          id: string;

          function: ToolCall.Function;

          type: 'function';
        }

        export namespace ToolCall {
          export interface Function {
            arguments: string;

            name: string;
          }
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
    }

    export interface NullableVariant {}
  }
}

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
   * The prompt, model, and its parameters
   */
  prompt_data?: FunctionCreateParams.PromptData | null;

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
    data: Code.Data;

    type: 'code';
  }

  export namespace Code {
    export interface Data {
      bundle_id: string;

      location: Data.Location;

      runtime_context: Data.RuntimeContext;
    }

    export namespace Data {
      export interface Location {
        eval_name: string;

        position: 'task' | Location.Score;

        type: 'experiment';
      }

      export namespace Location {
        export interface Score {
          score: number;
        }
      }

      export interface RuntimeContext {
        runtime: 'node';

        version: string;
      }
    }
  }

  export interface Global {
    name: string;

    type: 'global';
  }

  /**
   * The prompt, model, and its parameters
   */
  export interface PromptData {
    options?: PromptData.Options | null;

    origin?: PromptData.Origin | null;

    prompt?: PromptData.Completion | PromptData.Chat | PromptData.NullableVariant | null;
  }

  export namespace PromptData {
    export interface Options {
      model?: string;

      params?:
        | Options.OpenAIModelParams
        | Options.AnthropicModelParams
        | Options.GoogleModelParams
        | Options.WindowAIModelParams
        | Options.JsCompletionParams;

      position?: string;
    }

    export namespace Options {
      export interface OpenAIModelParams {
        frequency_penalty?: number;

        function_call?: 'auto' | 'none' | OpenAIModelParams.Function;

        max_tokens?: number;

        n?: number;

        presence_penalty?: number;

        response_format?: OpenAIModelParams.ResponseFormat | null;

        stop?: Array<string>;

        temperature?: number;

        tool_choice?: 'auto' | 'none' | OpenAIModelParams.Function;

        top_p?: number;

        use_cache?: boolean;
      }

      export namespace OpenAIModelParams {
        export interface Function {
          name: string;
        }

        export interface ResponseFormat {
          type: 'json_object';
        }

        export interface Function {
          function: Function.Function;

          type: 'function';
        }

        export namespace Function {
          export interface Function {
            name: string;
          }
        }
      }

      export interface AnthropicModelParams {
        max_tokens: number;

        temperature: number;

        /**
         * This is a legacy parameter that should not be used.
         */
        max_tokens_to_sample?: number;

        stop_sequences?: Array<string>;

        top_k?: number;

        top_p?: number;

        use_cache?: boolean;
      }

      export interface GoogleModelParams {
        maxOutputTokens?: number;

        temperature?: number;

        topK?: number;

        topP?: number;

        use_cache?: boolean;
      }

      export interface WindowAIModelParams {
        temperature?: number;

        topK?: number;

        use_cache?: boolean;
      }

      export interface JsCompletionParams {
        use_cache?: boolean;
      }
    }

    export interface Origin {
      project_id?: string;

      prompt_id?: string;

      prompt_version?: string;
    }

    export interface Completion {
      content: string;

      type: 'completion';
    }

    export interface Chat {
      messages: Array<Chat.System | Chat.User | Chat.Assistant | Chat.Tool | Chat.Function | Chat.Fallback>;

      type: 'chat';

      tools?: string;
    }

    export namespace Chat {
      export interface System {
        role: 'system';

        content?: string;

        name?: string;
      }

      export interface User {
        role: 'user';

        content?: string | Array<User.Text | User.ImageURL>;

        name?: string;
      }

      export namespace User {
        export interface Text {
          type: 'text';

          text?: string;
        }

        export interface ImageURL {
          image_url: ImageURL.ImageURL;

          type: 'image_url';
        }

        export namespace ImageURL {
          export interface ImageURL {
            url: string;

            detail?: 'auto' | 'low' | 'high';
          }
        }
      }

      export interface Assistant {
        role: 'assistant';

        content?: string | null;

        function_call?: Assistant.FunctionCall;

        name?: string;

        tool_calls?: Array<Assistant.ToolCall>;
      }

      export namespace Assistant {
        export interface FunctionCall {
          arguments: string;

          name: string;
        }

        export interface ToolCall {
          id: string;

          function: ToolCall.Function;

          type: 'function';
        }

        export namespace ToolCall {
          export interface Function {
            arguments: string;

            name: string;
          }
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
    }

    export interface NullableVariant {}
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
  prompt_data?: FunctionUpdateParams.PromptData | null;

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
    data: Code.Data;

    type: 'code';
  }

  export namespace Code {
    export interface Data {
      bundle_id: string;

      location: Data.Location;

      runtime_context: Data.RuntimeContext;
    }

    export namespace Data {
      export interface Location {
        eval_name: string;

        position: 'task' | Location.Score;

        type: 'experiment';
      }

      export namespace Location {
        export interface Score {
          score: number;
        }
      }

      export interface RuntimeContext {
        runtime: 'node';

        version: string;
      }
    }
  }

  export interface Global {
    name: string;

    type: 'global';
  }

  export interface NullableVariant {}

  /**
   * The prompt, model, and its parameters
   */
  export interface PromptData {
    options?: PromptData.Options | null;

    origin?: PromptData.Origin | null;

    prompt?: PromptData.Completion | PromptData.Chat | PromptData.NullableVariant | null;
  }

  export namespace PromptData {
    export interface Options {
      model?: string;

      params?:
        | Options.OpenAIModelParams
        | Options.AnthropicModelParams
        | Options.GoogleModelParams
        | Options.WindowAIModelParams
        | Options.JsCompletionParams;

      position?: string;
    }

    export namespace Options {
      export interface OpenAIModelParams {
        frequency_penalty?: number;

        function_call?: 'auto' | 'none' | OpenAIModelParams.Function;

        max_tokens?: number;

        n?: number;

        presence_penalty?: number;

        response_format?: OpenAIModelParams.ResponseFormat | null;

        stop?: Array<string>;

        temperature?: number;

        tool_choice?: 'auto' | 'none' | OpenAIModelParams.Function;

        top_p?: number;

        use_cache?: boolean;
      }

      export namespace OpenAIModelParams {
        export interface Function {
          name: string;
        }

        export interface ResponseFormat {
          type: 'json_object';
        }

        export interface Function {
          function: Function.Function;

          type: 'function';
        }

        export namespace Function {
          export interface Function {
            name: string;
          }
        }
      }

      export interface AnthropicModelParams {
        max_tokens: number;

        temperature: number;

        /**
         * This is a legacy parameter that should not be used.
         */
        max_tokens_to_sample?: number;

        stop_sequences?: Array<string>;

        top_k?: number;

        top_p?: number;

        use_cache?: boolean;
      }

      export interface GoogleModelParams {
        maxOutputTokens?: number;

        temperature?: number;

        topK?: number;

        topP?: number;

        use_cache?: boolean;
      }

      export interface WindowAIModelParams {
        temperature?: number;

        topK?: number;

        use_cache?: boolean;
      }

      export interface JsCompletionParams {
        use_cache?: boolean;
      }
    }

    export interface Origin {
      project_id?: string;

      prompt_id?: string;

      prompt_version?: string;
    }

    export interface Completion {
      content: string;

      type: 'completion';
    }

    export interface Chat {
      messages: Array<Chat.System | Chat.User | Chat.Assistant | Chat.Tool | Chat.Function | Chat.Fallback>;

      type: 'chat';

      tools?: string;
    }

    export namespace Chat {
      export interface System {
        role: 'system';

        content?: string;

        name?: string;
      }

      export interface User {
        role: 'user';

        content?: string | Array<User.Text | User.ImageURL>;

        name?: string;
      }

      export namespace User {
        export interface Text {
          type: 'text';

          text?: string;
        }

        export interface ImageURL {
          image_url: ImageURL.ImageURL;

          type: 'image_url';
        }

        export namespace ImageURL {
          export interface ImageURL {
            url: string;

            detail?: 'auto' | 'low' | 'high';
          }
        }
      }

      export interface Assistant {
        role: 'assistant';

        content?: string | null;

        function_call?: Assistant.FunctionCall;

        name?: string;

        tool_calls?: Array<Assistant.ToolCall>;
      }

      export namespace Assistant {
        export interface FunctionCall {
          arguments: string;

          name: string;
        }

        export interface ToolCall {
          id: string;

          function: ToolCall.Function;

          type: 'function';
        }

        export namespace ToolCall {
          export interface Function {
            arguments: string;

            name: string;
          }
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
    }

    export interface NullableVariant {}
  }
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
   * The prompt, model, and its parameters
   */
  prompt_data?: FunctionReplaceParams.PromptData | null;

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
    data: Code.Data;

    type: 'code';
  }

  export namespace Code {
    export interface Data {
      bundle_id: string;

      location: Data.Location;

      runtime_context: Data.RuntimeContext;
    }

    export namespace Data {
      export interface Location {
        eval_name: string;

        position: 'task' | Location.Score;

        type: 'experiment';
      }

      export namespace Location {
        export interface Score {
          score: number;
        }
      }

      export interface RuntimeContext {
        runtime: 'node';

        version: string;
      }
    }
  }

  export interface Global {
    name: string;

    type: 'global';
  }

  /**
   * The prompt, model, and its parameters
   */
  export interface PromptData {
    options?: PromptData.Options | null;

    origin?: PromptData.Origin | null;

    prompt?: PromptData.Completion | PromptData.Chat | PromptData.NullableVariant | null;
  }

  export namespace PromptData {
    export interface Options {
      model?: string;

      params?:
        | Options.OpenAIModelParams
        | Options.AnthropicModelParams
        | Options.GoogleModelParams
        | Options.WindowAIModelParams
        | Options.JsCompletionParams;

      position?: string;
    }

    export namespace Options {
      export interface OpenAIModelParams {
        frequency_penalty?: number;

        function_call?: 'auto' | 'none' | OpenAIModelParams.Function;

        max_tokens?: number;

        n?: number;

        presence_penalty?: number;

        response_format?: OpenAIModelParams.ResponseFormat | null;

        stop?: Array<string>;

        temperature?: number;

        tool_choice?: 'auto' | 'none' | OpenAIModelParams.Function;

        top_p?: number;

        use_cache?: boolean;
      }

      export namespace OpenAIModelParams {
        export interface Function {
          name: string;
        }

        export interface ResponseFormat {
          type: 'json_object';
        }

        export interface Function {
          function: Function.Function;

          type: 'function';
        }

        export namespace Function {
          export interface Function {
            name: string;
          }
        }
      }

      export interface AnthropicModelParams {
        max_tokens: number;

        temperature: number;

        /**
         * This is a legacy parameter that should not be used.
         */
        max_tokens_to_sample?: number;

        stop_sequences?: Array<string>;

        top_k?: number;

        top_p?: number;

        use_cache?: boolean;
      }

      export interface GoogleModelParams {
        maxOutputTokens?: number;

        temperature?: number;

        topK?: number;

        topP?: number;

        use_cache?: boolean;
      }

      export interface WindowAIModelParams {
        temperature?: number;

        topK?: number;

        use_cache?: boolean;
      }

      export interface JsCompletionParams {
        use_cache?: boolean;
      }
    }

    export interface Origin {
      project_id?: string;

      prompt_id?: string;

      prompt_version?: string;
    }

    export interface Completion {
      content: string;

      type: 'completion';
    }

    export interface Chat {
      messages: Array<Chat.System | Chat.User | Chat.Assistant | Chat.Tool | Chat.Function | Chat.Fallback>;

      type: 'chat';

      tools?: string;
    }

    export namespace Chat {
      export interface System {
        role: 'system';

        content?: string;

        name?: string;
      }

      export interface User {
        role: 'user';

        content?: string | Array<User.Text | User.ImageURL>;

        name?: string;
      }

      export namespace User {
        export interface Text {
          type: 'text';

          text?: string;
        }

        export interface ImageURL {
          image_url: ImageURL.ImageURL;

          type: 'image_url';
        }

        export namespace ImageURL {
          export interface ImageURL {
            url: string;

            detail?: 'auto' | 'low' | 'high';
          }
        }
      }

      export interface Assistant {
        role: 'assistant';

        content?: string | null;

        function_call?: Assistant.FunctionCall;

        name?: string;

        tool_calls?: Array<Assistant.ToolCall>;
      }

      export namespace Assistant {
        export interface FunctionCall {
          arguments: string;

          name: string;
        }

        export interface ToolCall {
          id: string;

          function: ToolCall.Function;

          type: 'function';
        }

        export namespace ToolCall {
          export interface Function {
            arguments: string;

            name: string;
          }
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
    }

    export interface NullableVariant {}
  }
}

export namespace Functions {
  export import Function = FunctionsAPI.Function;
  export import FunctionsListObjects = FunctionsAPI.FunctionsListObjects;
  export import FunctionCreateParams = FunctionsAPI.FunctionCreateParams;
  export import FunctionUpdateParams = FunctionsAPI.FunctionUpdateParams;
  export import FunctionListParams = FunctionsAPI.FunctionListParams;
  export import FunctionReplaceParams = FunctionsAPI.FunctionReplaceParams;
}
