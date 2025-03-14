// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Evals extends APIResource {
  /**
   * Launch an evaluation. This is the API-equivalent of the `Eval` function that is
   * built into the Braintrust SDK. In the Eval API, you provide pointers to a
   * dataset, task function, and scoring functions. The API will then run the
   * evaluation, create an experiment, and return the results along with a link to
   * the experiment. To learn more about evals, see the
   * [Evals guide](https://www.braintrust.dev/docs/guides/evals).
   */
  create(
    body: EvalCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.SummarizeExperimentResponse> {
    return this._client.post('/v1/eval', { body, ...options });
  }
}

export interface EvalCreateParams {
  /**
   * The dataset to use
   */
  data: EvalCreateParams.DatasetID | EvalCreateParams.ProjectDatasetName | EvalCreateParams.DatasetRows;

  /**
   * Unique identifier for the project to run the eval in
   */
  project_id: string;

  /**
   * The functions to score the eval on
   */
  scores: Array<
    | EvalCreateParams.FunctionID
    | EvalCreateParams.ProjectSlug
    | EvalCreateParams.GlobalFunction
    | EvalCreateParams.PromptSessionID
    | EvalCreateParams.InlineCode
    | EvalCreateParams.InlinePrompt
  >;

  /**
   * The function to evaluate
   */
  task:
    | EvalCreateParams.FunctionID
    | EvalCreateParams.ProjectSlug
    | EvalCreateParams.GlobalFunction
    | EvalCreateParams.PromptSessionID
    | EvalCreateParams.InlineCode
    | EvalCreateParams.InlinePrompt;

  /**
   * An optional experiment id to use as a base. If specified, the new experiment
   * will be summarized and compared to this experiment.
   */
  base_experiment_id?: string | null;

  /**
   * An optional experiment name to use as a base. If specified, the new experiment
   * will be summarized and compared to this experiment.
   */
  base_experiment_name?: string | null;

  /**
   * An optional name for the experiment created by this eval. If it conflicts with
   * an existing experiment, it will be suffixed with a unique identifier.
   */
  experiment_name?: string;

  /**
   * Optional settings for collecting git metadata. By default, will collect all git
   * metadata fields allowed in org-level settings.
   */
  git_metadata_settings?: EvalCreateParams.GitMetadataSettings | null;

  /**
   * Whether the experiment should be public. Defaults to false.
   */
  is_public?: boolean | null;

  /**
   * The maximum number of tasks/scorers that will be run concurrently. Defaults to
   * undefined, in which case there is no max concurrency.
   */
  max_concurrency?: number | null;

  /**
   * Optional experiment-level metadata to store about the evaluation. You can later
   * use this to slice & dice across experiments.
   */
  metadata?: Record<string, unknown>;

  /**
   * Options for tracing the evaluation
   */
  parent?: EvalCreateParams.SpanParentStruct | string;

  /**
   * Metadata about the state of the repo when the experiment was created
   */
  repo_info?: Shared.RepoInfo | null;

  /**
   * Whether to stream the results of the eval. If true, the request will return two
   * events: one to indicate the experiment has started, and another upon completion.
   * If false, the request will return the evaluation's summary upon completion.
   */
  stream?: boolean;

  /**
   * The maximum duration, in milliseconds, to run the evaluation. Defaults to
   * undefined, in which case there is no timeout.
   */
  timeout?: number | null;

  /**
   * The number of times to run the evaluator per input. This is useful for
   * evaluating applications that have non-deterministic behavior and gives you both
   * a stronger aggregate measure and a sense of the variance in the results.
   */
  trial_count?: number | null;
}

export namespace EvalCreateParams {
  /**
   * Dataset id
   */
  export interface DatasetID {
    dataset_id: string;

    _internal_btql?: Record<string, unknown> | null;
  }

  /**
   * Project and dataset name
   */
  export interface ProjectDatasetName {
    dataset_name: string;

    project_name: string;

    _internal_btql?: Record<string, unknown> | null;
  }

  /**
   * Dataset rows
   */
  export interface DatasetRows {
    data: Array<unknown>;
  }

  /**
   * Function id
   */
  export interface FunctionID {
    /**
     * The ID of the function
     */
    function_id: string;

    /**
     * The version of the function
     */
    version?: string;
  }

  /**
   * Project name and slug
   */
  export interface ProjectSlug {
    /**
     * The name of the project containing the function
     */
    project_name: string;

    /**
     * The slug of the function
     */
    slug: string;

    /**
     * The version of the function
     */
    version?: string;
  }

  /**
   * Global function name
   */
  export interface GlobalFunction {
    /**
     * The name of the global function. Currently, the global namespace includes the
     * functions in autoevals
     */
    global_function: string;
  }

  /**
   * Prompt session id
   */
  export interface PromptSessionID {
    /**
     * The ID of the function in the prompt session
     */
    prompt_session_function_id: string;

    /**
     * The ID of the prompt session
     */
    prompt_session_id: string;

    /**
     * The version of the function
     */
    version?: string;
  }

  /**
   * Inline code function
   */
  export interface InlineCode {
    /**
     * The inline code to execute
     */
    code: string;

    inline_context: InlineCode.InlineContext;

    /**
     * The name of the inline code function
     */
    name?: string | null;
  }

  export namespace InlineCode {
    export interface InlineContext {
      runtime: 'node' | 'python';

      version: string;
    }
  }

  /**
   * Inline prompt definition
   */
  export interface InlinePrompt {
    /**
     * The prompt, model, and its parameters
     */
    inline_prompt: Shared.PromptData | null;

    /**
     * The name of the inline prompt
     */
    name?: string | null;
  }

  /**
   * Function id
   */
  export interface FunctionID {
    /**
     * The ID of the function
     */
    function_id: string;

    /**
     * The version of the function
     */
    version?: string;
  }

  /**
   * Project name and slug
   */
  export interface ProjectSlug {
    /**
     * The name of the project containing the function
     */
    project_name: string;

    /**
     * The slug of the function
     */
    slug: string;

    /**
     * The version of the function
     */
    version?: string;
  }

  /**
   * Global function name
   */
  export interface GlobalFunction {
    /**
     * The name of the global function. Currently, the global namespace includes the
     * functions in autoevals
     */
    global_function: string;
  }

  /**
   * Prompt session id
   */
  export interface PromptSessionID {
    /**
     * The ID of the function in the prompt session
     */
    prompt_session_function_id: string;

    /**
     * The ID of the prompt session
     */
    prompt_session_id: string;

    /**
     * The version of the function
     */
    version?: string;
  }

  /**
   * Inline code function
   */
  export interface InlineCode {
    /**
     * The inline code to execute
     */
    code: string;

    inline_context: InlineCode.InlineContext;

    /**
     * The name of the inline code function
     */
    name?: string | null;
  }

  export namespace InlineCode {
    export interface InlineContext {
      runtime: 'node' | 'python';

      version: string;
    }
  }

  /**
   * Inline prompt definition
   */
  export interface InlinePrompt {
    /**
     * The prompt, model, and its parameters
     */
    inline_prompt: Shared.PromptData | null;

    /**
     * The name of the inline prompt
     */
    name?: string | null;
  }

  /**
   * Optional settings for collecting git metadata. By default, will collect all git
   * metadata fields allowed in org-level settings.
   */
  export interface GitMetadataSettings {
    collect: 'all' | 'none' | 'some';

    fields?: Array<
      | 'commit'
      | 'branch'
      | 'tag'
      | 'dirty'
      | 'author_name'
      | 'author_email'
      | 'commit_message'
      | 'commit_time'
      | 'git_diff'
    >;
  }

  /**
   * Span parent properties
   */
  export interface SpanParentStruct {
    /**
     * The id of the container object you are logging to
     */
    object_id: string;

    object_type: 'project_logs' | 'experiment' | 'playground_logs';

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

export declare namespace Evals {
  export { type EvalCreateParams as EvalCreateParams };
}
