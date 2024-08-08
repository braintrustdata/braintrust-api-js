// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core'

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

    params?: Options.OpenAIModelParams | Options.AnthropicModelParams | Options.GoogleModelParams | Options.WindowAIModelParams | Options.JsCompletionParams;

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

  export interface NullableVariant {
  }
}
