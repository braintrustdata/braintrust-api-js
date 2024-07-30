// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as PromptsAPI from './prompts';
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
  update(promptId: string, body?: PromptUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Prompt>;
  update(promptId: string, options?: Core.RequestOptions): Core.APIPromise<Prompt>;
  update(
    promptId: string,
    body: PromptUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Prompt> {
    if (isRequestOptions(body)) {
      return this.update(promptId, {}, body);
    }
    return this._client.patch(`/v1/prompt/${promptId}`, { body, ...options });
  }

  /**
   * List out all prompts. The prompts are sorted by creation date, with the most
   * recently-created prompts coming first
   */
  list(query?: PromptListParams, options?: Core.RequestOptions): Core.PagePromise<PromptsListObjects, Prompt>;
  list(options?: Core.RequestOptions): Core.PagePromise<PromptsListObjects, Prompt>;
  list(
    query: PromptListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PromptsListObjects, Prompt> {
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
   * Log feedback for a set of prompt events
   */
  feedback(
    promptId: string,
    body: PromptFeedbackParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/v1/prompt/${promptId}/feedback`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
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
export class PromptsListObjects extends ListObjects<Prompt> {}

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
  prompt_data?: Prompt.PromptData | null;

  /**
   * A list of tags for the prompt
   */
  tags?: Array<string> | null;
}

export namespace Prompt {
  /**
   * The prompt, model, and its parameters
   */
  export interface PromptData {
    options?: PromptData.Options | null;

    origin?: PromptData.Origin | null;

    prompt?: PromptData.Completion | PromptData.Chat | PromptData.NullVariant | null;
  }

  export namespace PromptData {
    export interface Options {
      model?: string;

      params?:
        | Options.UnionMember0
        | Options.UnionMember1
        | Options.UnionMember2
        | Options.UnionMember3
        | Options.UseCache;

      position?: string;
    }

    export namespace Options {
      export interface UnionMember0 {
        frequency_penalty?: number;

        function_call?: 'auto' | 'none' | UnionMember0.Name;

        max_tokens?: number;

        n?: number;

        presence_penalty?: number;

        response_format?: UnionMember0.ResponseFormat | null;

        stop?: Array<string>;

        temperature?: number;

        tool_choice?: 'auto' | 'none' | UnionMember0.UnionMember2;

        top_p?: number;

        use_cache?: boolean;
      }

      export namespace UnionMember0 {
        export interface Name {
          name: string;
        }

        export interface ResponseFormat {
          type: 'json_object';
        }

        export interface UnionMember2 {
          function: UnionMember2.Function;

          type: 'function';
        }

        export namespace UnionMember2 {
          export interface Function {
            name: string;
          }
        }
      }

      export interface UnionMember1 {
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

      export interface UnionMember2 {
        maxOutputTokens?: number;

        temperature?: number;

        topK?: number;

        topP?: number;

        use_cache?: boolean;
      }

      export interface UnionMember3 {
        temperature?: number;

        topK?: number;

        use_cache?: boolean;
      }

      export interface UseCache {
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
      messages: Array<
        | Chat.UnionMember0
        | Chat.UnionMember1
        | Chat.UnionMember2
        | Chat.UnionMember3
        | Chat.UnionMember4
        | Chat.UnionMember5
      >;

      type: 'chat';

      tools?: string;
    }

    export namespace Chat {
      export interface UnionMember0 {
        role: 'system';

        content?: string;

        name?: string;
      }

      export interface UnionMember1 {
        role: 'user';

        content?: string | Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

        name?: string;
      }

      export namespace UnionMember1 {
        export interface UnionMember0 {
          type: 'text';

          text?: string;
        }

        export interface UnionMember1 {
          image_url: UnionMember1.ImageURL;

          type: 'image_url';
        }

        export namespace UnionMember1 {
          export interface ImageURL {
            url: string;

            detail?: 'auto' | 'low' | 'high';
          }
        }
      }

      export interface UnionMember2 {
        role: 'assistant';

        content?: string | null;

        function_call?: UnionMember2.FunctionCall;

        name?: string;

        tool_calls?: Array<UnionMember2.ToolCall>;
      }

      export namespace UnionMember2 {
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

      export interface UnionMember3 {
        role: 'tool';

        content?: string;

        tool_call_id?: string;
      }

      export interface UnionMember4 {
        name: string;

        role: 'function';

        content?: string;
      }

      export interface UnionMember5 {
        role: 'model';

        content?: string | null;
      }
    }

    export interface NullVariant {}
  }
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
  prompt_data?: PromptCreateParams.PromptData | null;

  /**
   * A list of tags for the prompt
   */
  tags?: Array<string> | null;
}

export namespace PromptCreateParams {
  /**
   * The prompt, model, and its parameters
   */
  export interface PromptData {
    options?: PromptData.Options | null;

    origin?: PromptData.Origin | null;

    prompt?: PromptData.Completion | PromptData.Chat | PromptData.NullVariant | null;
  }

  export namespace PromptData {
    export interface Options {
      model?: string;

      params?:
        | Options.UnionMember0
        | Options.UnionMember1
        | Options.UnionMember2
        | Options.UnionMember3
        | Options.UseCache;

      position?: string;
    }

    export namespace Options {
      export interface UnionMember0 {
        frequency_penalty?: number;

        function_call?: 'auto' | 'none' | UnionMember0.Name;

        max_tokens?: number;

        n?: number;

        presence_penalty?: number;

        response_format?: UnionMember0.ResponseFormat | null;

        stop?: Array<string>;

        temperature?: number;

        tool_choice?: 'auto' | 'none' | UnionMember0.UnionMember2;

        top_p?: number;

        use_cache?: boolean;
      }

      export namespace UnionMember0 {
        export interface Name {
          name: string;
        }

        export interface ResponseFormat {
          type: 'json_object';
        }

        export interface UnionMember2 {
          function: UnionMember2.Function;

          type: 'function';
        }

        export namespace UnionMember2 {
          export interface Function {
            name: string;
          }
        }
      }

      export interface UnionMember1 {
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

      export interface UnionMember2 {
        maxOutputTokens?: number;

        temperature?: number;

        topK?: number;

        topP?: number;

        use_cache?: boolean;
      }

      export interface UnionMember3 {
        temperature?: number;

        topK?: number;

        use_cache?: boolean;
      }

      export interface UseCache {
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
      messages: Array<
        | Chat.UnionMember0
        | Chat.UnionMember1
        | Chat.UnionMember2
        | Chat.UnionMember3
        | Chat.UnionMember4
        | Chat.UnionMember5
      >;

      type: 'chat';

      tools?: string;
    }

    export namespace Chat {
      export interface UnionMember0 {
        role: 'system';

        content?: string;

        name?: string;
      }

      export interface UnionMember1 {
        role: 'user';

        content?: string | Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

        name?: string;
      }

      export namespace UnionMember1 {
        export interface UnionMember0 {
          type: 'text';

          text?: string;
        }

        export interface UnionMember1 {
          image_url: UnionMember1.ImageURL;

          type: 'image_url';
        }

        export namespace UnionMember1 {
          export interface ImageURL {
            url: string;

            detail?: 'auto' | 'low' | 'high';
          }
        }
      }

      export interface UnionMember2 {
        role: 'assistant';

        content?: string | null;

        function_call?: UnionMember2.FunctionCall;

        name?: string;

        tool_calls?: Array<UnionMember2.ToolCall>;
      }

      export namespace UnionMember2 {
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

      export interface UnionMember3 {
        role: 'tool';

        content?: string;

        tool_call_id?: string;
      }

      export interface UnionMember4 {
        name: string;

        role: 'function';

        content?: string;
      }

      export interface UnionMember5 {
        role: 'model';

        content?: string | null;
      }
    }

    export interface NullVariant {}
  }
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
  prompt_data?: PromptUpdateParams.PromptData | null;

  /**
   * A list of tags for the prompt
   */
  tags?: Array<string> | null;
}

export namespace PromptUpdateParams {
  /**
   * The prompt, model, and its parameters
   */
  export interface PromptData {
    options?: PromptData.Options | null;

    origin?: PromptData.Origin | null;

    prompt?: PromptData.Completion | PromptData.Chat | PromptData.NullVariant | null;
  }

  export namespace PromptData {
    export interface Options {
      model?: string;

      params?:
        | Options.UnionMember0
        | Options.UnionMember1
        | Options.UnionMember2
        | Options.UnionMember3
        | Options.UseCache;

      position?: string;
    }

    export namespace Options {
      export interface UnionMember0 {
        frequency_penalty?: number;

        function_call?: 'auto' | 'none' | UnionMember0.Name;

        max_tokens?: number;

        n?: number;

        presence_penalty?: number;

        response_format?: UnionMember0.ResponseFormat | null;

        stop?: Array<string>;

        temperature?: number;

        tool_choice?: 'auto' | 'none' | UnionMember0.UnionMember2;

        top_p?: number;

        use_cache?: boolean;
      }

      export namespace UnionMember0 {
        export interface Name {
          name: string;
        }

        export interface ResponseFormat {
          type: 'json_object';
        }

        export interface UnionMember2 {
          function: UnionMember2.Function;

          type: 'function';
        }

        export namespace UnionMember2 {
          export interface Function {
            name: string;
          }
        }
      }

      export interface UnionMember1 {
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

      export interface UnionMember2 {
        maxOutputTokens?: number;

        temperature?: number;

        topK?: number;

        topP?: number;

        use_cache?: boolean;
      }

      export interface UnionMember3 {
        temperature?: number;

        topK?: number;

        use_cache?: boolean;
      }

      export interface UseCache {
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
      messages: Array<
        | Chat.UnionMember0
        | Chat.UnionMember1
        | Chat.UnionMember2
        | Chat.UnionMember3
        | Chat.UnionMember4
        | Chat.UnionMember5
      >;

      type: 'chat';

      tools?: string;
    }

    export namespace Chat {
      export interface UnionMember0 {
        role: 'system';

        content?: string;

        name?: string;
      }

      export interface UnionMember1 {
        role: 'user';

        content?: string | Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

        name?: string;
      }

      export namespace UnionMember1 {
        export interface UnionMember0 {
          type: 'text';

          text?: string;
        }

        export interface UnionMember1 {
          image_url: UnionMember1.ImageURL;

          type: 'image_url';
        }

        export namespace UnionMember1 {
          export interface ImageURL {
            url: string;

            detail?: 'auto' | 'low' | 'high';
          }
        }
      }

      export interface UnionMember2 {
        role: 'assistant';

        content?: string | null;

        function_call?: UnionMember2.FunctionCall;

        name?: string;

        tool_calls?: Array<UnionMember2.ToolCall>;
      }

      export namespace UnionMember2 {
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

      export interface UnionMember3 {
        role: 'tool';

        content?: string;

        tool_call_id?: string;
      }

      export interface UnionMember4 {
        name: string;

        role: 'function';

        content?: string;
      }

      export interface UnionMember5 {
        role: 'model';

        content?: string | null;
      }
    }

    export interface NullVariant {}
  }
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

export interface PromptFeedbackParams {
  /**
   * A list of prompt feedback items
   */
  feedback: Array<PromptFeedbackParams.Feedback>;
}

export namespace PromptFeedbackParams {
  export interface Feedback {
    /**
     * The id of the prompt event to log feedback for. This is the row `id` returned by
     * `POST /v1/prompt/{prompt_id}/insert`
     */
    id: string;

    /**
     * An optional comment string to log about the prompt event
     */
    comment?: string | null;

    /**
     * A dictionary with additional data about the feedback. If you have a `user_id`,
     * you can log it here and access it in the Braintrust UI.
     */
    metadata?: Record<string, unknown> | null;

    /**
     * The source of the feedback. Must be one of "external" (default), "app", or "api"
     */
    source?: 'app' | 'api' | 'external' | null;
  }
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
  prompt_data?: PromptReplaceParams.PromptData | null;

  /**
   * A list of tags for the prompt
   */
  tags?: Array<string> | null;
}

export namespace PromptReplaceParams {
  /**
   * The prompt, model, and its parameters
   */
  export interface PromptData {
    options?: PromptData.Options | null;

    origin?: PromptData.Origin | null;

    prompt?: PromptData.Completion | PromptData.Chat | PromptData.NullVariant | null;
  }

  export namespace PromptData {
    export interface Options {
      model?: string;

      params?:
        | Options.UnionMember0
        | Options.UnionMember1
        | Options.UnionMember2
        | Options.UnionMember3
        | Options.UseCache;

      position?: string;
    }

    export namespace Options {
      export interface UnionMember0 {
        frequency_penalty?: number;

        function_call?: 'auto' | 'none' | UnionMember0.Name;

        max_tokens?: number;

        n?: number;

        presence_penalty?: number;

        response_format?: UnionMember0.ResponseFormat | null;

        stop?: Array<string>;

        temperature?: number;

        tool_choice?: 'auto' | 'none' | UnionMember0.UnionMember2;

        top_p?: number;

        use_cache?: boolean;
      }

      export namespace UnionMember0 {
        export interface Name {
          name: string;
        }

        export interface ResponseFormat {
          type: 'json_object';
        }

        export interface UnionMember2 {
          function: UnionMember2.Function;

          type: 'function';
        }

        export namespace UnionMember2 {
          export interface Function {
            name: string;
          }
        }
      }

      export interface UnionMember1 {
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

      export interface UnionMember2 {
        maxOutputTokens?: number;

        temperature?: number;

        topK?: number;

        topP?: number;

        use_cache?: boolean;
      }

      export interface UnionMember3 {
        temperature?: number;

        topK?: number;

        use_cache?: boolean;
      }

      export interface UseCache {
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
      messages: Array<
        | Chat.UnionMember0
        | Chat.UnionMember1
        | Chat.UnionMember2
        | Chat.UnionMember3
        | Chat.UnionMember4
        | Chat.UnionMember5
      >;

      type: 'chat';

      tools?: string;
    }

    export namespace Chat {
      export interface UnionMember0 {
        role: 'system';

        content?: string;

        name?: string;
      }

      export interface UnionMember1 {
        role: 'user';

        content?: string | Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

        name?: string;
      }

      export namespace UnionMember1 {
        export interface UnionMember0 {
          type: 'text';

          text?: string;
        }

        export interface UnionMember1 {
          image_url: UnionMember1.ImageURL;

          type: 'image_url';
        }

        export namespace UnionMember1 {
          export interface ImageURL {
            url: string;

            detail?: 'auto' | 'low' | 'high';
          }
        }
      }

      export interface UnionMember2 {
        role: 'assistant';

        content?: string | null;

        function_call?: UnionMember2.FunctionCall;

        name?: string;

        tool_calls?: Array<UnionMember2.ToolCall>;
      }

      export namespace UnionMember2 {
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

      export interface UnionMember3 {
        role: 'tool';

        content?: string;

        tool_call_id?: string;
      }

      export interface UnionMember4 {
        name: string;

        role: 'function';

        content?: string;
      }

      export interface UnionMember5 {
        role: 'model';

        content?: string | null;
      }
    }

    export interface NullVariant {}
  }
}

export namespace Prompts {
  export import Prompt = PromptsAPI.Prompt;
  export import PromptsListObjects = PromptsAPI.PromptsListObjects;
  export import PromptCreateParams = PromptsAPI.PromptCreateParams;
  export import PromptUpdateParams = PromptsAPI.PromptUpdateParams;
  export import PromptListParams = PromptsAPI.PromptListParams;
  export import PromptFeedbackParams = PromptsAPI.PromptFeedbackParams;
  export import PromptReplaceParams = PromptsAPI.PromptReplaceParams;
}
