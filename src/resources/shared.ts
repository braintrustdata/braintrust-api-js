// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Shared from './shared';
import { ListObjects } from '../pagination';

export interface AISecret {
  /**
   * Unique identifier for the AI secret
   */
  id: string;

  /**
   * Name of the AI secret
   */
  name: string;

  /**
   * Unique identifier for the organization
   */
  org_id: string;

  /**
   * Date of AI secret creation
   */
  created?: string | null;

  metadata?: Record<string, unknown> | null;

  preview_secret?: string | null;

  type?: string | null;

  /**
   * Date of last AI secret update
   */
  updated_at?: string | null;
}

/**
 * An ACL grants a certain permission or role to a certain user or group on an
 * object.
 *
 * ACLs are inherited across the object hierarchy. So for example, if a user has
 * read permissions on a project, they will also have read permissions on any
 * experiment, dataset, etc. created within that project.
 *
 * To restrict a grant to a particular sub-object, you may specify
 * `restrict_object_type` in the ACL, as part of a direct permission grant or as
 * part of a role.
 */
export interface ACL {
  /**
   * Unique identifier for the acl
   */
  id: string;

  /**
   * The organization the ACL's referred object belongs to
   */
  _object_org_id: string;

  /**
   * The id of the object the ACL applies to
   */
  object_id: string;

  /**
   * The object type that the ACL applies to
   */
  object_type: ACLObjectType;

  /**
   * Date of acl creation
   */
  created?: string | null;

  /**
   * Id of the group the ACL applies to. Exactly one of `user_id` and `group_id` will
   * be provided
   */
  group_id?: string | null;

  /**
   * Permission the ACL grants. Exactly one of `permission` and `role_id` will be
   * provided
   */
  permission?: Permission | null;

  /**
   * When setting a permission directly, optionally restricts the permission grant to
   * just the specified object type. Cannot be set alongside a `role_id`.
   */
  restrict_object_type?: ACLObjectType | null;

  /**
   * Id of the role the ACL grants. Exactly one of `permission` and `role_id` will be
   * provided
   */
  role_id?: string | null;

  /**
   * Id of the user the ACL applies to. Exactly one of `user_id` and `group_id` will
   * be provided
   */
  user_id?: string | null;
}

export interface ACLBatchUpdateResponse {
  /**
   * An ACL grants a certain permission or role to a certain user or group on an
   * object.
   *
   * ACLs are inherited across the object hierarchy. So for example, if a user has
   * read permissions on a project, they will also have read permissions on any
   * experiment, dataset, etc. created within that project.
   *
   * To restrict a grant to a particular sub-object, you may specify
   * `restrict_object_type` in the ACL, as part of a direct permission grant or as
   * part of a role.
   */
  added_acls: Array<ACL>;

  /**
   * An ACL grants a certain permission or role to a certain user or group on an
   * object.
   *
   * ACLs are inherited across the object hierarchy. So for example, if a user has
   * read permissions on a project, they will also have read permissions on any
   * experiment, dataset, etc. created within that project.
   *
   * To restrict a grant to a particular sub-object, you may specify
   * `restrict_object_type` in the ACL, as part of a direct permission grant or as
   * part of a role.
   */
  removed_acls: Array<ACL>;
}

/**
 * The object type that the ACL applies to
 */
export type ACLObjectType =
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

export interface APIKey {
  /**
   * Unique identifier for the api key
   */
  id: string;

  /**
   * Name of the api key
   */
  name: string;

  preview_name: string;

  /**
   * Date of api key creation
   */
  created?: string | null;

  /**
   * Unique identifier for the organization
   */
  org_id?: string | null;

  /**
   * Unique identifier for the user
   */
  user_id?: string | null;
}

export interface ChatCompletionContentPartImage {
  image_url: ChatCompletionContentPartImage.ImageURL;

  type: 'image_url';
}

export namespace ChatCompletionContentPartImage {
  export interface ImageURL {
    url: string;

    detail?: 'auto' | 'low' | 'high';
  }
}

export interface ChatCompletionContentPartText {
  type: 'text';

  text?: string;
}

export interface ChatCompletionMessageToolCall {
  id: string;

  function: ChatCompletionMessageToolCall.Function;

  type: 'function';
}

export namespace ChatCompletionMessageToolCall {
  export interface Function {
    arguments: string;

    name: string;
  }
}

export interface CodeBundle {
  bundle_id: string;

  location: CodeBundle.Experiment | CodeBundle.Function;

  runtime_context: CodeBundle.RuntimeContext;

  /**
   * A preview of the code
   */
  preview?: string | null;
}

export namespace CodeBundle {
  export interface Experiment {
    eval_name: string;

    position: Experiment.Type | Experiment.Scorer;

    type: 'experiment';
  }

  export namespace Experiment {
    export interface Type {
      type: 'task';
    }

    export interface Scorer {
      index: number;

      type: 'scorer';
    }
  }

  export interface Function {
    index: number;

    type: 'function';
  }

  export interface RuntimeContext {
    runtime: 'node' | 'python';

    version: string;
  }
}

export interface CreateAPIKeyOutput {
  /**
   * Unique identifier for the api key
   */
  id: string;

  /**
   * The raw API key. It will only be exposed this one time
   */
  key: string;

  /**
   * Name of the api key
   */
  name: string;

  preview_name: string;

  /**
   * Date of api key creation
   */
  created?: string | null;

  /**
   * Unique identifier for the organization
   */
  org_id?: string | null;

  /**
   * Unique identifier for the user
   */
  user_id?: string | null;
}

export interface CrossObjectInsertResponse {
  /**
   * A mapping from dataset id to row ids for inserted `events`
   */
  dataset?: Record<string, InsertEventsResponse> | null;

  /**
   * A mapping from experiment id to row ids for inserted `events`
   */
  experiment?: Record<string, InsertEventsResponse> | null;

  /**
   * A mapping from project id to row ids for inserted `events`
   */
  project_logs?: Record<string, InsertEventsResponse> | null;
}

/**
 * Summary of a dataset's data
 */
export interface DataSummary {
  /**
   * Total number of records in the dataset
   */
  total_records: number;
}

export interface Dataset {
  /**
   * Unique identifier for the dataset
   */
  id: string;

  /**
   * Name of the dataset. Within a project, dataset names are unique
   */
  name: string;

  /**
   * Unique identifier for the project that the dataset belongs under
   */
  project_id: string;

  /**
   * Date of dataset creation
   */
  created?: string | null;

  /**
   * Date of dataset deletion, or null if the dataset is still active
   */
  deleted_at?: string | null;

  /**
   * Textual description of the dataset
   */
  description?: string | null;

  /**
   * User-controlled metadata about the dataset
   */
  metadata?: Record<string, unknown> | null;

  /**
   * Identifies the user who created the dataset
   */
  user_id?: string | null;
}

export interface DatasetEvent {
  /**
   * A unique identifier for the dataset event. If you don't provide one, BrainTrust
   * will generate one for you
   */
  id: string;

  /**
   * The transaction id of an event is unique to the network operation that processed
   * the event insertion. Transaction ids are monotonically increasing over time and
   * can be used to retrieve a versioned snapshot of the dataset (see the `version`
   * parameter)
   */
  _xact_id: string;

  /**
   * The timestamp the dataset event was created
   */
  created: string;

  /**
   * Unique identifier for the dataset
   */
  dataset_id: string;

  /**
   * Unique identifier for the project that the dataset belongs under
   */
  project_id: string;

  /**
   * A unique identifier for the trace this dataset event belongs to
   */
  root_span_id: string;

  /**
   * A unique identifier used to link different dataset events together as part of a
   * full trace. See the
   * [tracing guide](https://www.braintrust.dev/docs/guides/tracing) for full details
   * on tracing
   */
  span_id: string;

  /**
   * The output of your application, including post-processing (an arbitrary, JSON
   * serializable object)
   */
  expected?: unknown;

  /**
   * The argument that uniquely define an input case (an arbitrary, JSON serializable
   * object)
   */
  input?: unknown;

  /**
   * Whether this span is a root span
   */
  is_root?: boolean | null;

  /**
   * A dictionary with additional data about the test example, model outputs, or just
   * about anything else that's relevant, that you can use to help find and analyze
   * examples later. For example, you could log the `prompt`, example's `id`, or
   * anything else that would be useful to slice/dice later. The values in `metadata`
   * can be any JSON-serializable type, but its keys must be strings
   */
  metadata?: DatasetEvent.Metadata | null;

  /**
   * Indicates the event was copied from another object.
   */
  origin?: ObjectReference | null;

  /**
   * A list of tags to log
   */
  tags?: Array<string> | null;
}

export namespace DatasetEvent {
  /**
   * A dictionary with additional data about the test example, model outputs, or just
   * about anything else that's relevant, that you can use to help find and analyze
   * examples later. For example, you could log the `prompt`, example's `id`, or
   * anything else that would be useful to slice/dice later. The values in `metadata`
   * can be any JSON-serializable type, but its keys must be strings
   */
  export interface Metadata {
    /**
     * The model used for this example
     */
    model?: string | null;
    [k: string]: unknown;
  }
}

export interface EnvVar {
  /**
   * Unique identifier for the environment variable
   */
  id: string;

  /**
   * The name of the environment variable
   */
  name: string;

  /**
   * The id of the object the environment variable is scoped for
   */
  object_id: string;

  /**
   * The type of the object the environment variable is scoped for
   */
  object_type: 'organization' | 'project' | 'function';

  /**
   * Date of environment variable creation
   */
  created?: string | null;

  /**
   * Date the environment variable was last used
   */
  used?: string | null;
}

/**
 * The type of the object the environment variable is scoped for
 */
export type EnvVarObjectType = 'organization' | 'project' | 'function';

export interface Experiment {
  /**
   * Unique identifier for the experiment
   */
  id: string;

  /**
   * Name of the experiment. Within a project, experiment names are unique
   */
  name: string;

  /**
   * Unique identifier for the project that the experiment belongs under
   */
  project_id: string;

  /**
   * Whether or not the experiment is public. Public experiments can be viewed by
   * anybody inside or outside the organization
   */
  public: boolean;

  /**
   * Id of default base experiment to compare against when viewing this experiment
   */
  base_exp_id?: string | null;

  /**
   * Commit, taken directly from `repo_info.commit`
   */
  commit?: string | null;

  /**
   * Date of experiment creation
   */
  created?: string | null;

  /**
   * Identifier of the linked dataset, or null if the experiment is not linked to a
   * dataset
   */
  dataset_id?: string | null;

  /**
   * Version number of the linked dataset the experiment was run against. This can be
   * used to reproduce the experiment after the dataset has been modified.
   */
  dataset_version?: string | null;

  /**
   * Date of experiment deletion, or null if the experiment is still active
   */
  deleted_at?: string | null;

  /**
   * Textual description of the experiment
   */
  description?: string | null;

  /**
   * User-controlled metadata about the experiment
   */
  metadata?: Record<string, unknown> | null;

  /**
   * Metadata about the state of the repo when the experiment was created
   */
  repo_info?: RepoInfo | null;

  /**
   * Identifies the user who created the experiment
   */
  user_id?: string | null;
}

export interface ExperimentEvent {
  /**
   * A unique identifier for the experiment event. If you don't provide one,
   * BrainTrust will generate one for you
   */
  id: string;

  /**
   * The transaction id of an event is unique to the network operation that processed
   * the event insertion. Transaction ids are monotonically increasing over time and
   * can be used to retrieve a versioned snapshot of the experiment (see the
   * `version` parameter)
   */
  _xact_id: string;

  /**
   * The timestamp the experiment event was created
   */
  created: string;

  /**
   * Unique identifier for the experiment
   */
  experiment_id: string;

  /**
   * Unique identifier for the project that the experiment belongs under
   */
  project_id: string;

  /**
   * A unique identifier for the trace this experiment event belongs to
   */
  root_span_id: string;

  /**
   * A unique identifier used to link different experiment events together as part of
   * a full trace. See the
   * [tracing guide](https://www.braintrust.dev/docs/guides/tracing) for full details
   * on tracing
   */
  span_id: string;

  /**
   * Context is additional information about the code that produced the experiment
   * event. It is essentially the textual counterpart to `metrics`. Use the
   * `caller_*` attributes to track the location in code which produced the
   * experiment event
   */
  context?: ExperimentEvent.Context | null;

  /**
   * The error that occurred, if any.
   */
  error?: unknown;

  /**
   * The ground truth value (an arbitrary, JSON serializable object) that you'd
   * compare to `output` to determine if your `output` value is correct or not.
   * Braintrust currently does not compare `output` to `expected` for you, since
   * there are so many different ways to do that correctly. Instead, these values are
   * just used to help you navigate your experiments while digging into analyses.
   * However, we may later use these values to re-score outputs or fine-tune your
   * models
   */
  expected?: unknown;

  /**
   * The arguments that uniquely define a test case (an arbitrary, JSON serializable
   * object). Later on, Braintrust will use the `input` to know whether two test
   * cases are the same between experiments, so they should not contain
   * experiment-specific state. A simple rule of thumb is that if you run the same
   * experiment twice, the `input` should be identical
   */
  input?: unknown;

  /**
   * Whether this span is a root span
   */
  is_root?: boolean | null;

  /**
   * A dictionary with additional data about the test example, model outputs, or just
   * about anything else that's relevant, that you can use to help find and analyze
   * examples later. For example, you could log the `prompt`, example's `id`, or
   * anything else that would be useful to slice/dice later. The values in `metadata`
   * can be any JSON-serializable type, but its keys must be strings
   */
  metadata?: ExperimentEvent.Metadata | null;

  /**
   * Metrics are numerical measurements tracking the execution of the code that
   * produced the experiment event. Use "start" and "end" to track the time span over
   * which the experiment event was produced
   */
  metrics?: ExperimentEvent.Metrics | null;

  /**
   * Indicates the event was copied from another object.
   */
  origin?: ObjectReference | null;

  /**
   * The output of your application, including post-processing (an arbitrary, JSON
   * serializable object), that allows you to determine whether the result is correct
   * or not. For example, in an app that generates SQL queries, the `output` should
   * be the _result_ of the SQL query generated by the model, not the query itself,
   * because there may be multiple valid queries that answer a single question
   */
  output?: unknown;

  /**
   * A dictionary of numeric values (between 0 and 1) to log. The scores should give
   * you a variety of signals that help you determine how accurate the outputs are
   * compared to what you expect and diagnose failures. For example, a summarization
   * app might have one score that tells you how accurate the summary is, and another
   * that measures the word similarity between the generated and grouth truth
   * summary. The word similarity score could help you determine whether the
   * summarization was covering similar concepts or not. You can use these scores to
   * help you sort, filter, and compare experiments
   */
  scores?: Record<string, number | null> | null;

  /**
   * Human-identifying attributes of the span, such as name, type, etc.
   */
  span_attributes?: SpanAttributes | null;

  /**
   * An array of the parent `span_ids` of this experiment event. This should be empty
   * for the root span of a trace, and should most often contain just one parent
   * element for subspans
   */
  span_parents?: Array<string> | null;

  /**
   * A list of tags to log
   */
  tags?: Array<string> | null;
}

export namespace ExperimentEvent {
  /**
   * Context is additional information about the code that produced the experiment
   * event. It is essentially the textual counterpart to `metrics`. Use the
   * `caller_*` attributes to track the location in code which produced the
   * experiment event
   */
  export interface Context {
    /**
     * Name of the file in code where the experiment event was created
     */
    caller_filename?: string | null;

    /**
     * The function in code which created the experiment event
     */
    caller_functionname?: string | null;

    /**
     * Line of code where the experiment event was created
     */
    caller_lineno?: number | null;
    [k: string]: unknown;
  }

  /**
   * A dictionary with additional data about the test example, model outputs, or just
   * about anything else that's relevant, that you can use to help find and analyze
   * examples later. For example, you could log the `prompt`, example's `id`, or
   * anything else that would be useful to slice/dice later. The values in `metadata`
   * can be any JSON-serializable type, but its keys must be strings
   */
  export interface Metadata {
    /**
     * The model used for this example
     */
    model?: string | null;
    [k: string]: unknown;
  }

  /**
   * Metrics are numerical measurements tracking the execution of the code that
   * produced the experiment event. Use "start" and "end" to track the time span over
   * which the experiment event was produced
   */
  export interface Metrics {
    /**
     * This metric is deprecated
     */
    caller_filename?: unknown;

    /**
     * This metric is deprecated
     */
    caller_functionname?: unknown;

    /**
     * This metric is deprecated
     */
    caller_lineno?: unknown;

    /**
     * The number of tokens in the completion generated by the model (only set if this
     * is an LLM span)
     */
    completion_tokens?: number | null;

    /**
     * A unix timestamp recording when the section of code which produced the
     * experiment event finished
     */
    end?: number | null;

    /**
     * The number of tokens in the prompt used to generate the experiment event (only
     * set if this is an LLM span)
     */
    prompt_tokens?: number | null;

    /**
     * A unix timestamp recording when the section of code which produced the
     * experiment event started
     */
    start?: number | null;

    /**
     * The total number of tokens in the input and output of the experiment event.
     */
    tokens?: number | null;
    [k: string]: number | unknown | number | null | undefined;
  }
}

export interface FeedbackDatasetItem {
  /**
   * The id of the dataset event to log feedback for. This is the row `id` returned
   * by `POST /v1/dataset/{dataset_id}/insert`
   */
  id: string;

  /**
   * An optional comment string to log about the dataset event
   */
  comment?: string | null;

  /**
   * A dictionary with additional data about the feedback. If you have a `user_id`,
   * you can log it here and access it in the Braintrust UI. Note, this metadata does
   * not correspond to the main event itself, but rather the audit log attached to
   * the event.
   */
  metadata?: Record<string, unknown> | null;

  /**
   * The source of the feedback. Must be one of "external" (default), "app", or "api"
   */
  source?: 'app' | 'api' | 'external' | null;

  /**
   * A list of tags to log
   */
  tags?: Array<string> | null;
}

export interface FeedbackExperimentItem {
  /**
   * The id of the experiment event to log feedback for. This is the row `id`
   * returned by `POST /v1/experiment/{experiment_id}/insert`
   */
  id: string;

  /**
   * An optional comment string to log about the experiment event
   */
  comment?: string | null;

  /**
   * The ground truth value (an arbitrary, JSON serializable object) that you'd
   * compare to `output` to determine if your `output` value is correct or not
   */
  expected?: unknown;

  /**
   * A dictionary with additional data about the feedback. If you have a `user_id`,
   * you can log it here and access it in the Braintrust UI. Note, this metadata does
   * not correspond to the main event itself, but rather the audit log attached to
   * the event.
   */
  metadata?: Record<string, unknown> | null;

  /**
   * A dictionary of numeric values (between 0 and 1) to log. These scores will be
   * merged into the existing scores for the experiment event
   */
  scores?: Record<string, number | null> | null;

  /**
   * The source of the feedback. Must be one of "external" (default), "app", or "api"
   */
  source?: 'app' | 'api' | 'external' | null;

  /**
   * A list of tags to log
   */
  tags?: Array<string> | null;
}

export interface FeedbackProjectLogsItem {
  /**
   * The id of the project logs event to log feedback for. This is the row `id`
   * returned by `POST /v1/project_logs/{project_id}/insert`
   */
  id: string;

  /**
   * An optional comment string to log about the project logs event
   */
  comment?: string | null;

  /**
   * The ground truth value (an arbitrary, JSON serializable object) that you'd
   * compare to `output` to determine if your `output` value is correct or not
   */
  expected?: unknown;

  /**
   * A dictionary with additional data about the feedback. If you have a `user_id`,
   * you can log it here and access it in the Braintrust UI. Note, this metadata does
   * not correspond to the main event itself, but rather the audit log attached to
   * the event.
   */
  metadata?: Record<string, unknown> | null;

  /**
   * A dictionary of numeric values (between 0 and 1) to log. These scores will be
   * merged into the existing scores for the project logs event
   */
  scores?: Record<string, number | null> | null;

  /**
   * The source of the feedback. Must be one of "external" (default), "app", or "api"
   */
  source?: 'app' | 'api' | 'external' | null;

  /**
   * A list of tags to log
   */
  tags?: Array<string> | null;
}

export interface FeedbackResponseSchema {
  status: 'success';
}

export interface FetchDatasetEventsResponse {
  /**
   * A list of fetched events
   */
  events: Array<DatasetEvent>;

  /**
   * Pagination cursor
   *
   * Pass this string directly as the `cursor` param to your next fetch request to
   * get the next page of results. Not provided if the returned result set is empty.
   */
  cursor?: string | null;
}

export interface FetchExperimentEventsResponse {
  /**
   * A list of fetched events
   */
  events: Array<ExperimentEvent>;

  /**
   * Pagination cursor
   *
   * Pass this string directly as the `cursor` param to your next fetch request to
   * get the next page of results. Not provided if the returned result set is empty.
   */
  cursor?: string | null;
}

export interface FetchProjectLogsEventsResponse {
  /**
   * A list of fetched events
   */
  events: Array<ProjectLogsEvent>;

  /**
   * Pagination cursor
   *
   * Pass this string directly as the `cursor` param to your next fetch request to
   * get the next page of results. Not provided if the returned result set is empty.
   */
  cursor?: string | null;
}

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
   * JSON schema for the function's parameters and return type
   */
  function_schema?: Function.FunctionSchema | null;

  function_type?: 'llm' | 'scorer' | 'task' | 'tool' | null;

  /**
   * User-controlled metadata about the prompt
   */
  metadata?: Record<string, unknown> | null;

  origin?: Function.Origin | null;

  /**
   * The prompt, model, and its parameters
   */
  prompt_data?: PromptData | null;

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
    object_type: Shared.ACLObjectType;

    /**
     * The function exists for internal purposes and should not be displayed in the
     * list of functions.
     */
    internal?: boolean | null;
  }
}

/**
 * A group is a collection of users which can be assigned an ACL
 *
 * Groups can consist of individual users, as well as a set of groups they inherit
 * from
 */
export interface Group {
  /**
   * Unique identifier for the group
   */
  id: string;

  /**
   * Name of the group
   */
  name: string;

  /**
   * Unique id for the organization that the group belongs under
   *
   * It is forbidden to change the org after creating a group
   */
  org_id: string;

  /**
   * Date of group creation
   */
  created?: string | null;

  /**
   * Date of group deletion, or null if the group is still active
   */
  deleted_at?: string | null;

  /**
   * Textual description of the group
   */
  description?: string | null;

  /**
   * Ids of the groups this group inherits from
   *
   * An inheriting group has all the users contained in its member groups, as well as
   * all of their inherited users
   */
  member_groups?: Array<string> | null;

  /**
   * Ids of users which belong to this group
   */
  member_users?: Array<string> | null;

  /**
   * Identifies the user who created the group
   */
  user_id?: string | null;
}

/**
 * A dataset event
 */
export interface InsertDatasetEvent {
  /**
   * A unique identifier for the dataset event. If you don't provide one, BrainTrust
   * will generate one for you
   */
  id?: string | null;

  /**
   * The `_is_merge` field controls how the row is merged with any existing row with
   * the same id in the DB. By default (or when set to `false`), the existing row is
   * completely replaced by the new row. When set to `true`, the new row is
   * deep-merged into the existing row, if one is found. If no existing row is found,
   * the new row is inserted as is.
   *
   * For example, say there is an existing row in the DB
   * `{"id": "foo", "input": {"a": 5, "b": 10}}`. If we merge a new row as
   * `{"_is_merge": true, "id": "foo", "input": {"b": 11, "c": 20}}`, the new row
   * will be `{"id": "foo", "input": {"a": 5, "b": 11, "c": 20}}`. If we replace the
   * new row as `{"id": "foo", "input": {"b": 11, "c": 20}}`, the new row will be
   * `{"id": "foo", "input": {"b": 11, "c": 20}}`
   */
  _is_merge?: boolean | null;

  /**
   * The `_merge_paths` field allows controlling the depth of the merge, when
   * `_is_merge=true`. `_merge_paths` is a list of paths, where each path is a list
   * of field names. The deep merge will not descend below any of the specified merge
   * paths.
   *
   * For example, say there is an existing row in the DB
   * `{"id": "foo", "input": {"a": {"b": 10}, "c": {"d": 20}}, "output": {"a": 20}}`.
   * If we merge a new row as
   * `{"_is_merge": true, "_merge_paths": [["input", "a"], ["output"]], "input": {"a": {"q": 30}, "c": {"e": 30}, "bar": "baz"}, "output": {"d": 40}}`,
   * the new row will be
   * `{"id": "foo": "input": {"a": {"q": 30}, "c": {"d": 20, "e": 30}, "bar": "baz"}, "output": {"d": 40}}`.
   * In this case, due to the merge paths, we have replaced `input.a` and `output`,
   * but have still deep-merged `input` and `input.c`.
   */
  _merge_paths?: Array<Array<string>> | null;

  /**
   * Pass `_object_delete=true` to mark the dataset event deleted. Deleted events
   * will not show up in subsequent fetches for this dataset
   */
  _object_delete?: boolean | null;

  /**
   * DEPRECATED: The `_parent_id` field is deprecated and should not be used. Support
   * for `_parent_id` will be dropped in a future version of Braintrust. Log
   * `span_id`, `root_span_id`, and `span_parents` explicitly instead.
   *
   * Use the `_parent_id` field to create this row as a subspan of an existing row.
   * Tracking hierarchical relationships are important for tracing (see the
   * [guide](https://www.braintrust.dev/docs/guides/tracing) for full details).
   *
   * For example, say we have logged a row
   * `{"id": "abc", "input": "foo", "output": "bar", "expected": "boo", "scores": {"correctness": 0.33}}`.
   * We can create a sub-span of the parent row by logging
   * `{"_parent_id": "abc", "id": "llm_call", "input": {"prompt": "What comes after foo?"}, "output": "bar", "metrics": {"tokens": 1}}`.
   * In the webapp, only the root span row `"abc"` will show up in the summary view.
   * You can view the full trace hierarchy (in this case, the `"llm_call"` row) by
   * clicking on the "abc" row.
   *
   * If the row is being merged into an existing row, this field will be ignored.
   */
  _parent_id?: string | null;

  /**
   * The timestamp the dataset event was created
   */
  created?: string | null;

  /**
   * The output of your application, including post-processing (an arbitrary, JSON
   * serializable object)
   */
  expected?: unknown;

  /**
   * The argument that uniquely define an input case (an arbitrary, JSON serializable
   * object)
   */
  input?: unknown;

  /**
   * A dictionary with additional data about the test example, model outputs, or just
   * about anything else that's relevant, that you can use to help find and analyze
   * examples later. For example, you could log the `prompt`, example's `id`, or
   * anything else that would be useful to slice/dice later. The values in `metadata`
   * can be any JSON-serializable type, but its keys must be strings
   */
  metadata?: InsertDatasetEvent.Metadata | null;

  /**
   * Indicates the event was copied from another object.
   */
  origin?: ObjectReference | null;

  /**
   * Use `span_id`, `root_span_id`, and `span_parents` instead of `_parent_id`, which
   * is now deprecated. The span_id is a unique identifier describing the row's place
   * in the a trace, and the root_span_id is a unique identifier for the whole trace.
   * See the [guide](https://www.braintrust.dev/docs/guides/tracing) for full
   * details.
   *
   * For example, say we have logged a row
   * `{"id": "abc", "span_id": "span0", "root_span_id": "root_span0", "input": "foo", "output": "bar", "expected": "boo", "scores": {"correctness": 0.33}}`.
   * We can create a sub-span of the parent row by logging
   * `{"id": "llm_call", "span_id": "span1", "root_span_id": "root_span0", "span_parents": ["span0"], "input": {"prompt": "What comes after foo?"}, "output": "bar", "metrics": {"tokens": 1}}`.
   * In the webapp, only the root span row `"abc"` will show up in the summary view.
   * You can view the full trace hierarchy (in this case, the `"llm_call"` row) by
   * clicking on the "abc" row.
   *
   * If the row is being merged into an existing row, this field will be ignored.
   */
  root_span_id?: string | null;

  /**
   * Use `span_id`, `root_span_id`, and `span_parents` instead of `_parent_id`, which
   * is now deprecated. The span_id is a unique identifier describing the row's place
   * in the a trace, and the root_span_id is a unique identifier for the whole trace.
   * See the [guide](https://www.braintrust.dev/docs/guides/tracing) for full
   * details.
   *
   * For example, say we have logged a row
   * `{"id": "abc", "span_id": "span0", "root_span_id": "root_span0", "input": "foo", "output": "bar", "expected": "boo", "scores": {"correctness": 0.33}}`.
   * We can create a sub-span of the parent row by logging
   * `{"id": "llm_call", "span_id": "span1", "root_span_id": "root_span0", "span_parents": ["span0"], "input": {"prompt": "What comes after foo?"}, "output": "bar", "metrics": {"tokens": 1}}`.
   * In the webapp, only the root span row `"abc"` will show up in the summary view.
   * You can view the full trace hierarchy (in this case, the `"llm_call"` row) by
   * clicking on the "abc" row.
   *
   * If the row is being merged into an existing row, this field will be ignored.
   */
  span_id?: string | null;

  /**
   * Use `span_id`, `root_span_id`, and `span_parents` instead of `_parent_id`, which
   * is now deprecated. The span_id is a unique identifier describing the row's place
   * in the a trace, and the root_span_id is a unique identifier for the whole trace.
   * See the [guide](https://www.braintrust.dev/docs/guides/tracing) for full
   * details.
   *
   * For example, say we have logged a row
   * `{"id": "abc", "span_id": "span0", "root_span_id": "root_span0", "input": "foo", "output": "bar", "expected": "boo", "scores": {"correctness": 0.33}}`.
   * We can create a sub-span of the parent row by logging
   * `{"id": "llm_call", "span_id": "span1", "root_span_id": "root_span0", "span_parents": ["span0"], "input": {"prompt": "What comes after foo?"}, "output": "bar", "metrics": {"tokens": 1}}`.
   * In the webapp, only the root span row `"abc"` will show up in the summary view.
   * You can view the full trace hierarchy (in this case, the `"llm_call"` row) by
   * clicking on the "abc" row.
   *
   * If the row is being merged into an existing row, this field will be ignored.
   */
  span_parents?: Array<string> | null;

  /**
   * A list of tags to log
   */
  tags?: Array<string> | null;
}

export namespace InsertDatasetEvent {
  /**
   * A dictionary with additional data about the test example, model outputs, or just
   * about anything else that's relevant, that you can use to help find and analyze
   * examples later. For example, you could log the `prompt`, example's `id`, or
   * anything else that would be useful to slice/dice later. The values in `metadata`
   * can be any JSON-serializable type, but its keys must be strings
   */
  export interface Metadata {
    /**
     * The model used for this example
     */
    model?: string | null;
    [k: string]: unknown;
  }
}

export interface InsertEventsResponse {
  /**
   * The ids of all rows that were inserted, aligning one-to-one with the rows
   * provided as input
   */
  row_ids: Array<string>;
}

/**
 * An experiment event
 */
export interface InsertExperimentEvent {
  /**
   * A unique identifier for the experiment event. If you don't provide one,
   * BrainTrust will generate one for you
   */
  id?: string | null;

  /**
   * The `_is_merge` field controls how the row is merged with any existing row with
   * the same id in the DB. By default (or when set to `false`), the existing row is
   * completely replaced by the new row. When set to `true`, the new row is
   * deep-merged into the existing row, if one is found. If no existing row is found,
   * the new row is inserted as is.
   *
   * For example, say there is an existing row in the DB
   * `{"id": "foo", "input": {"a": 5, "b": 10}}`. If we merge a new row as
   * `{"_is_merge": true, "id": "foo", "input": {"b": 11, "c": 20}}`, the new row
   * will be `{"id": "foo", "input": {"a": 5, "b": 11, "c": 20}}`. If we replace the
   * new row as `{"id": "foo", "input": {"b": 11, "c": 20}}`, the new row will be
   * `{"id": "foo", "input": {"b": 11, "c": 20}}`
   */
  _is_merge?: boolean | null;

  /**
   * The `_merge_paths` field allows controlling the depth of the merge, when
   * `_is_merge=true`. `_merge_paths` is a list of paths, where each path is a list
   * of field names. The deep merge will not descend below any of the specified merge
   * paths.
   *
   * For example, say there is an existing row in the DB
   * `{"id": "foo", "input": {"a": {"b": 10}, "c": {"d": 20}}, "output": {"a": 20}}`.
   * If we merge a new row as
   * `{"_is_merge": true, "_merge_paths": [["input", "a"], ["output"]], "input": {"a": {"q": 30}, "c": {"e": 30}, "bar": "baz"}, "output": {"d": 40}}`,
   * the new row will be
   * `{"id": "foo": "input": {"a": {"q": 30}, "c": {"d": 20, "e": 30}, "bar": "baz"}, "output": {"d": 40}}`.
   * In this case, due to the merge paths, we have replaced `input.a` and `output`,
   * but have still deep-merged `input` and `input.c`.
   */
  _merge_paths?: Array<Array<string>> | null;

  /**
   * Pass `_object_delete=true` to mark the experiment event deleted. Deleted events
   * will not show up in subsequent fetches for this experiment
   */
  _object_delete?: boolean | null;

  /**
   * DEPRECATED: The `_parent_id` field is deprecated and should not be used. Support
   * for `_parent_id` will be dropped in a future version of Braintrust. Log
   * `span_id`, `root_span_id`, and `span_parents` explicitly instead.
   *
   * Use the `_parent_id` field to create this row as a subspan of an existing row.
   * Tracking hierarchical relationships are important for tracing (see the
   * [guide](https://www.braintrust.dev/docs/guides/tracing) for full details).
   *
   * For example, say we have logged a row
   * `{"id": "abc", "input": "foo", "output": "bar", "expected": "boo", "scores": {"correctness": 0.33}}`.
   * We can create a sub-span of the parent row by logging
   * `{"_parent_id": "abc", "id": "llm_call", "input": {"prompt": "What comes after foo?"}, "output": "bar", "metrics": {"tokens": 1}}`.
   * In the webapp, only the root span row `"abc"` will show up in the summary view.
   * You can view the full trace hierarchy (in this case, the `"llm_call"` row) by
   * clicking on the "abc" row.
   *
   * If the row is being merged into an existing row, this field will be ignored.
   */
  _parent_id?: string | null;

  /**
   * Context is additional information about the code that produced the experiment
   * event. It is essentially the textual counterpart to `metrics`. Use the
   * `caller_*` attributes to track the location in code which produced the
   * experiment event
   */
  context?: InsertExperimentEvent.Context | null;

  /**
   * The timestamp the experiment event was created
   */
  created?: string | null;

  /**
   * The error that occurred, if any.
   */
  error?: unknown;

  /**
   * The ground truth value (an arbitrary, JSON serializable object) that you'd
   * compare to `output` to determine if your `output` value is correct or not.
   * Braintrust currently does not compare `output` to `expected` for you, since
   * there are so many different ways to do that correctly. Instead, these values are
   * just used to help you navigate your experiments while digging into analyses.
   * However, we may later use these values to re-score outputs or fine-tune your
   * models
   */
  expected?: unknown;

  /**
   * The arguments that uniquely define a test case (an arbitrary, JSON serializable
   * object). Later on, Braintrust will use the `input` to know whether two test
   * cases are the same between experiments, so they should not contain
   * experiment-specific state. A simple rule of thumb is that if you run the same
   * experiment twice, the `input` should be identical
   */
  input?: unknown;

  /**
   * A dictionary with additional data about the test example, model outputs, or just
   * about anything else that's relevant, that you can use to help find and analyze
   * examples later. For example, you could log the `prompt`, example's `id`, or
   * anything else that would be useful to slice/dice later. The values in `metadata`
   * can be any JSON-serializable type, but its keys must be strings
   */
  metadata?: InsertExperimentEvent.Metadata | null;

  /**
   * Metrics are numerical measurements tracking the execution of the code that
   * produced the experiment event. Use "start" and "end" to track the time span over
   * which the experiment event was produced
   */
  metrics?: InsertExperimentEvent.Metrics | null;

  /**
   * Indicates the event was copied from another object.
   */
  origin?: ObjectReference | null;

  /**
   * The output of your application, including post-processing (an arbitrary, JSON
   * serializable object), that allows you to determine whether the result is correct
   * or not. For example, in an app that generates SQL queries, the `output` should
   * be the _result_ of the SQL query generated by the model, not the query itself,
   * because there may be multiple valid queries that answer a single question
   */
  output?: unknown;

  /**
   * Use `span_id`, `root_span_id`, and `span_parents` instead of `_parent_id`, which
   * is now deprecated. The span_id is a unique identifier describing the row's place
   * in the a trace, and the root_span_id is a unique identifier for the whole trace.
   * See the [guide](https://www.braintrust.dev/docs/guides/tracing) for full
   * details.
   *
   * For example, say we have logged a row
   * `{"id": "abc", "span_id": "span0", "root_span_id": "root_span0", "input": "foo", "output": "bar", "expected": "boo", "scores": {"correctness": 0.33}}`.
   * We can create a sub-span of the parent row by logging
   * `{"id": "llm_call", "span_id": "span1", "root_span_id": "root_span0", "span_parents": ["span0"], "input": {"prompt": "What comes after foo?"}, "output": "bar", "metrics": {"tokens": 1}}`.
   * In the webapp, only the root span row `"abc"` will show up in the summary view.
   * You can view the full trace hierarchy (in this case, the `"llm_call"` row) by
   * clicking on the "abc" row.
   *
   * If the row is being merged into an existing row, this field will be ignored.
   */
  root_span_id?: string | null;

  /**
   * A dictionary of numeric values (between 0 and 1) to log. The scores should give
   * you a variety of signals that help you determine how accurate the outputs are
   * compared to what you expect and diagnose failures. For example, a summarization
   * app might have one score that tells you how accurate the summary is, and another
   * that measures the word similarity between the generated and grouth truth
   * summary. The word similarity score could help you determine whether the
   * summarization was covering similar concepts or not. You can use these scores to
   * help you sort, filter, and compare experiments
   */
  scores?: Record<string, number | null> | null;

  /**
   * Human-identifying attributes of the span, such as name, type, etc.
   */
  span_attributes?: SpanAttributes | null;

  /**
   * Use `span_id`, `root_span_id`, and `span_parents` instead of `_parent_id`, which
   * is now deprecated. The span_id is a unique identifier describing the row's place
   * in the a trace, and the root_span_id is a unique identifier for the whole trace.
   * See the [guide](https://www.braintrust.dev/docs/guides/tracing) for full
   * details.
   *
   * For example, say we have logged a row
   * `{"id": "abc", "span_id": "span0", "root_span_id": "root_span0", "input": "foo", "output": "bar", "expected": "boo", "scores": {"correctness": 0.33}}`.
   * We can create a sub-span of the parent row by logging
   * `{"id": "llm_call", "span_id": "span1", "root_span_id": "root_span0", "span_parents": ["span0"], "input": {"prompt": "What comes after foo?"}, "output": "bar", "metrics": {"tokens": 1}}`.
   * In the webapp, only the root span row `"abc"` will show up in the summary view.
   * You can view the full trace hierarchy (in this case, the `"llm_call"` row) by
   * clicking on the "abc" row.
   *
   * If the row is being merged into an existing row, this field will be ignored.
   */
  span_id?: string | null;

  /**
   * Use `span_id`, `root_span_id`, and `span_parents` instead of `_parent_id`, which
   * is now deprecated. The span_id is a unique identifier describing the row's place
   * in the a trace, and the root_span_id is a unique identifier for the whole trace.
   * See the [guide](https://www.braintrust.dev/docs/guides/tracing) for full
   * details.
   *
   * For example, say we have logged a row
   * `{"id": "abc", "span_id": "span0", "root_span_id": "root_span0", "input": "foo", "output": "bar", "expected": "boo", "scores": {"correctness": 0.33}}`.
   * We can create a sub-span of the parent row by logging
   * `{"id": "llm_call", "span_id": "span1", "root_span_id": "root_span0", "span_parents": ["span0"], "input": {"prompt": "What comes after foo?"}, "output": "bar", "metrics": {"tokens": 1}}`.
   * In the webapp, only the root span row `"abc"` will show up in the summary view.
   * You can view the full trace hierarchy (in this case, the `"llm_call"` row) by
   * clicking on the "abc" row.
   *
   * If the row is being merged into an existing row, this field will be ignored.
   */
  span_parents?: Array<string> | null;

  /**
   * A list of tags to log
   */
  tags?: Array<string> | null;
}

export namespace InsertExperimentEvent {
  /**
   * Context is additional information about the code that produced the experiment
   * event. It is essentially the textual counterpart to `metrics`. Use the
   * `caller_*` attributes to track the location in code which produced the
   * experiment event
   */
  export interface Context {
    /**
     * Name of the file in code where the experiment event was created
     */
    caller_filename?: string | null;

    /**
     * The function in code which created the experiment event
     */
    caller_functionname?: string | null;

    /**
     * Line of code where the experiment event was created
     */
    caller_lineno?: number | null;
    [k: string]: unknown;
  }

  /**
   * A dictionary with additional data about the test example, model outputs, or just
   * about anything else that's relevant, that you can use to help find and analyze
   * examples later. For example, you could log the `prompt`, example's `id`, or
   * anything else that would be useful to slice/dice later. The values in `metadata`
   * can be any JSON-serializable type, but its keys must be strings
   */
  export interface Metadata {
    /**
     * The model used for this example
     */
    model?: string | null;
    [k: string]: unknown;
  }

  /**
   * Metrics are numerical measurements tracking the execution of the code that
   * produced the experiment event. Use "start" and "end" to track the time span over
   * which the experiment event was produced
   */
  export interface Metrics {
    /**
     * This metric is deprecated
     */
    caller_filename?: unknown;

    /**
     * This metric is deprecated
     */
    caller_functionname?: unknown;

    /**
     * This metric is deprecated
     */
    caller_lineno?: unknown;

    /**
     * The number of tokens in the completion generated by the model (only set if this
     * is an LLM span)
     */
    completion_tokens?: number | null;

    /**
     * A unix timestamp recording when the section of code which produced the
     * experiment event finished
     */
    end?: number | null;

    /**
     * The number of tokens in the prompt used to generate the experiment event (only
     * set if this is an LLM span)
     */
    prompt_tokens?: number | null;

    /**
     * A unix timestamp recording when the section of code which produced the
     * experiment event started
     */
    start?: number | null;

    /**
     * The total number of tokens in the input and output of the experiment event.
     */
    tokens?: number | null;
    [k: string]: number | unknown | number | null | undefined;
  }
}

/**
 * A project logs event
 */
export interface InsertProjectLogsEvent {
  /**
   * A unique identifier for the project logs event. If you don't provide one,
   * BrainTrust will generate one for you
   */
  id?: string | null;

  /**
   * The `_is_merge` field controls how the row is merged with any existing row with
   * the same id in the DB. By default (or when set to `false`), the existing row is
   * completely replaced by the new row. When set to `true`, the new row is
   * deep-merged into the existing row, if one is found. If no existing row is found,
   * the new row is inserted as is.
   *
   * For example, say there is an existing row in the DB
   * `{"id": "foo", "input": {"a": 5, "b": 10}}`. If we merge a new row as
   * `{"_is_merge": true, "id": "foo", "input": {"b": 11, "c": 20}}`, the new row
   * will be `{"id": "foo", "input": {"a": 5, "b": 11, "c": 20}}`. If we replace the
   * new row as `{"id": "foo", "input": {"b": 11, "c": 20}}`, the new row will be
   * `{"id": "foo", "input": {"b": 11, "c": 20}}`
   */
  _is_merge?: boolean | null;

  /**
   * The `_merge_paths` field allows controlling the depth of the merge, when
   * `_is_merge=true`. `_merge_paths` is a list of paths, where each path is a list
   * of field names. The deep merge will not descend below any of the specified merge
   * paths.
   *
   * For example, say there is an existing row in the DB
   * `{"id": "foo", "input": {"a": {"b": 10}, "c": {"d": 20}}, "output": {"a": 20}}`.
   * If we merge a new row as
   * `{"_is_merge": true, "_merge_paths": [["input", "a"], ["output"]], "input": {"a": {"q": 30}, "c": {"e": 30}, "bar": "baz"}, "output": {"d": 40}}`,
   * the new row will be
   * `{"id": "foo": "input": {"a": {"q": 30}, "c": {"d": 20, "e": 30}, "bar": "baz"}, "output": {"d": 40}}`.
   * In this case, due to the merge paths, we have replaced `input.a` and `output`,
   * but have still deep-merged `input` and `input.c`.
   */
  _merge_paths?: Array<Array<string>> | null;

  /**
   * Pass `_object_delete=true` to mark the project logs event deleted. Deleted
   * events will not show up in subsequent fetches for this project logs
   */
  _object_delete?: boolean | null;

  /**
   * DEPRECATED: The `_parent_id` field is deprecated and should not be used. Support
   * for `_parent_id` will be dropped in a future version of Braintrust. Log
   * `span_id`, `root_span_id`, and `span_parents` explicitly instead.
   *
   * Use the `_parent_id` field to create this row as a subspan of an existing row.
   * Tracking hierarchical relationships are important for tracing (see the
   * [guide](https://www.braintrust.dev/docs/guides/tracing) for full details).
   *
   * For example, say we have logged a row
   * `{"id": "abc", "input": "foo", "output": "bar", "expected": "boo", "scores": {"correctness": 0.33}}`.
   * We can create a sub-span of the parent row by logging
   * `{"_parent_id": "abc", "id": "llm_call", "input": {"prompt": "What comes after foo?"}, "output": "bar", "metrics": {"tokens": 1}}`.
   * In the webapp, only the root span row `"abc"` will show up in the summary view.
   * You can view the full trace hierarchy (in this case, the `"llm_call"` row) by
   * clicking on the "abc" row.
   *
   * If the row is being merged into an existing row, this field will be ignored.
   */
  _parent_id?: string | null;

  /**
   * Context is additional information about the code that produced the project logs
   * event. It is essentially the textual counterpart to `metrics`. Use the
   * `caller_*` attributes to track the location in code which produced the project
   * logs event
   */
  context?: InsertProjectLogsEvent.Context | null;

  /**
   * The timestamp the project logs event was created
   */
  created?: string | null;

  /**
   * The error that occurred, if any.
   */
  error?: unknown;

  /**
   * The ground truth value (an arbitrary, JSON serializable object) that you'd
   * compare to `output` to determine if your `output` value is correct or not.
   * Braintrust currently does not compare `output` to `expected` for you, since
   * there are so many different ways to do that correctly. Instead, these values are
   * just used to help you navigate while digging into analyses. However, we may
   * later use these values to re-score outputs or fine-tune your models.
   */
  expected?: unknown;

  /**
   * The arguments that uniquely define a user input (an arbitrary, JSON serializable
   * object).
   */
  input?: unknown;

  /**
   * A dictionary with additional data about the test example, model outputs, or just
   * about anything else that's relevant, that you can use to help find and analyze
   * examples later. For example, you could log the `prompt`, example's `id`, or
   * anything else that would be useful to slice/dice later. The values in `metadata`
   * can be any JSON-serializable type, but its keys must be strings
   */
  metadata?: InsertProjectLogsEvent.Metadata | null;

  /**
   * Metrics are numerical measurements tracking the execution of the code that
   * produced the project logs event. Use "start" and "end" to track the time span
   * over which the project logs event was produced
   */
  metrics?: InsertProjectLogsEvent.Metrics | null;

  /**
   * Indicates the event was copied from another object.
   */
  origin?: ObjectReference | null;

  /**
   * The output of your application, including post-processing (an arbitrary, JSON
   * serializable object), that allows you to determine whether the result is correct
   * or not. For example, in an app that generates SQL queries, the `output` should
   * be the _result_ of the SQL query generated by the model, not the query itself,
   * because there may be multiple valid queries that answer a single question.
   */
  output?: unknown;

  /**
   * Use `span_id`, `root_span_id`, and `span_parents` instead of `_parent_id`, which
   * is now deprecated. The span_id is a unique identifier describing the row's place
   * in the a trace, and the root_span_id is a unique identifier for the whole trace.
   * See the [guide](https://www.braintrust.dev/docs/guides/tracing) for full
   * details.
   *
   * For example, say we have logged a row
   * `{"id": "abc", "span_id": "span0", "root_span_id": "root_span0", "input": "foo", "output": "bar", "expected": "boo", "scores": {"correctness": 0.33}}`.
   * We can create a sub-span of the parent row by logging
   * `{"id": "llm_call", "span_id": "span1", "root_span_id": "root_span0", "span_parents": ["span0"], "input": {"prompt": "What comes after foo?"}, "output": "bar", "metrics": {"tokens": 1}}`.
   * In the webapp, only the root span row `"abc"` will show up in the summary view.
   * You can view the full trace hierarchy (in this case, the `"llm_call"` row) by
   * clicking on the "abc" row.
   *
   * If the row is being merged into an existing row, this field will be ignored.
   */
  root_span_id?: string | null;

  /**
   * A dictionary of numeric values (between 0 and 1) to log. The scores should give
   * you a variety of signals that help you determine how accurate the outputs are
   * compared to what you expect and diagnose failures. For example, a summarization
   * app might have one score that tells you how accurate the summary is, and another
   * that measures the word similarity between the generated and grouth truth
   * summary. The word similarity score could help you determine whether the
   * summarization was covering similar concepts or not. You can use these scores to
   * help you sort, filter, and compare logs.
   */
  scores?: Record<string, number | null> | null;

  /**
   * Human-identifying attributes of the span, such as name, type, etc.
   */
  span_attributes?: SpanAttributes | null;

  /**
   * Use `span_id`, `root_span_id`, and `span_parents` instead of `_parent_id`, which
   * is now deprecated. The span_id is a unique identifier describing the row's place
   * in the a trace, and the root_span_id is a unique identifier for the whole trace.
   * See the [guide](https://www.braintrust.dev/docs/guides/tracing) for full
   * details.
   *
   * For example, say we have logged a row
   * `{"id": "abc", "span_id": "span0", "root_span_id": "root_span0", "input": "foo", "output": "bar", "expected": "boo", "scores": {"correctness": 0.33}}`.
   * We can create a sub-span of the parent row by logging
   * `{"id": "llm_call", "span_id": "span1", "root_span_id": "root_span0", "span_parents": ["span0"], "input": {"prompt": "What comes after foo?"}, "output": "bar", "metrics": {"tokens": 1}}`.
   * In the webapp, only the root span row `"abc"` will show up in the summary view.
   * You can view the full trace hierarchy (in this case, the `"llm_call"` row) by
   * clicking on the "abc" row.
   *
   * If the row is being merged into an existing row, this field will be ignored.
   */
  span_id?: string | null;

  /**
   * Use `span_id`, `root_span_id`, and `span_parents` instead of `_parent_id`, which
   * is now deprecated. The span_id is a unique identifier describing the row's place
   * in the a trace, and the root_span_id is a unique identifier for the whole trace.
   * See the [guide](https://www.braintrust.dev/docs/guides/tracing) for full
   * details.
   *
   * For example, say we have logged a row
   * `{"id": "abc", "span_id": "span0", "root_span_id": "root_span0", "input": "foo", "output": "bar", "expected": "boo", "scores": {"correctness": 0.33}}`.
   * We can create a sub-span of the parent row by logging
   * `{"id": "llm_call", "span_id": "span1", "root_span_id": "root_span0", "span_parents": ["span0"], "input": {"prompt": "What comes after foo?"}, "output": "bar", "metrics": {"tokens": 1}}`.
   * In the webapp, only the root span row `"abc"` will show up in the summary view.
   * You can view the full trace hierarchy (in this case, the `"llm_call"` row) by
   * clicking on the "abc" row.
   *
   * If the row is being merged into an existing row, this field will be ignored.
   */
  span_parents?: Array<string> | null;

  /**
   * A list of tags to log
   */
  tags?: Array<string> | null;
}

export namespace InsertProjectLogsEvent {
  /**
   * Context is additional information about the code that produced the project logs
   * event. It is essentially the textual counterpart to `metrics`. Use the
   * `caller_*` attributes to track the location in code which produced the project
   * logs event
   */
  export interface Context {
    /**
     * Name of the file in code where the project logs event was created
     */
    caller_filename?: string | null;

    /**
     * The function in code which created the project logs event
     */
    caller_functionname?: string | null;

    /**
     * Line of code where the project logs event was created
     */
    caller_lineno?: number | null;
    [k: string]: unknown;
  }

  /**
   * A dictionary with additional data about the test example, model outputs, or just
   * about anything else that's relevant, that you can use to help find and analyze
   * examples later. For example, you could log the `prompt`, example's `id`, or
   * anything else that would be useful to slice/dice later. The values in `metadata`
   * can be any JSON-serializable type, but its keys must be strings
   */
  export interface Metadata {
    /**
     * The model used for this example
     */
    model?: string | null;
    [k: string]: unknown;
  }

  /**
   * Metrics are numerical measurements tracking the execution of the code that
   * produced the project logs event. Use "start" and "end" to track the time span
   * over which the project logs event was produced
   */
  export interface Metrics {
    /**
     * This metric is deprecated
     */
    caller_filename?: unknown;

    /**
     * This metric is deprecated
     */
    caller_functionname?: unknown;

    /**
     * This metric is deprecated
     */
    caller_lineno?: unknown;

    /**
     * The number of tokens in the completion generated by the model (only set if this
     * is an LLM span)
     */
    completion_tokens?: number | null;

    /**
     * A unix timestamp recording when the section of code which produced the project
     * logs event finished
     */
    end?: number | null;

    /**
     * The number of tokens in the prompt used to generate the project logs event (only
     * set if this is an LLM span)
     */
    prompt_tokens?: number | null;

    /**
     * A unix timestamp recording when the section of code which produced the project
     * logs event started
     */
    start?: number | null;

    /**
     * The total number of tokens in the input and output of the project logs event.
     */
    tokens?: number | null;
    [k: string]: number | unknown | number | null | undefined;
  }
}

/**
 * Summary of a metric's performance
 */
export interface MetricSummary {
  /**
   * Number of improvements in the metric
   */
  improvements: number;

  /**
   * Average metric across all examples
   */
  metric: number;

  /**
   * Name of the metric
   */
  name: string;

  /**
   * Number of regressions in the metric
   */
  regressions: number;

  /**
   * Unit label for the metric
   */
  unit: string;

  /**
   * Difference in metric between the current and comparison experiment
   */
  diff?: number;
}

/**
 * Indicates the event was copied from another object.
 */
export interface ObjectReference {
  /**
   * ID of the original event.
   */
  id: string;

  /**
   * Transaction ID of the original event.
   */
  _xact_id: string;

  /**
   * ID of the object the event is originating from.
   */
  object_id: string;

  /**
   * Type of the object the event is originating from.
   */
  object_type: 'experiment' | 'dataset' | 'prompt' | 'function' | 'prompt_session' | 'project_logs';

  /**
   * Created timestamp of the original event. Used to help sort in the UI
   */
  created?: string | null;
}

export interface OnlineScoreConfig {
  /**
   * The sampling rate for online scoring
   */
  sampling_rate: number;

  /**
   * The list of scorers to use for online scoring
   */
  scorers: Array<OnlineScoreConfig.Function | OnlineScoreConfig.Global>;

  /**
   * Whether to trigger online scoring on the root span of each trace
   */
  apply_to_root_span?: boolean | null;

  /**
   * Trigger online scoring on any spans with a name in this list
   */
  apply_to_span_names?: Array<string> | null;
}

export namespace OnlineScoreConfig {
  export interface Function {
    id: string;

    type: 'function';
  }

  export interface Global {
    name: string;

    type: 'global';
  }
}

export interface Organization {
  /**
   * Unique identifier for the organization
   */
  id: string;

  /**
   * Name of the organization
   */
  name: string;

  api_url?: string | null;

  /**
   * Date of organization creation
   */
  created?: string | null;

  is_universal_api?: boolean | null;

  proxy_url?: string | null;

  realtime_url?: string | null;
}

export interface PatchOrganizationMembersOutput {
  /**
   * The id of the org that was modified.
   */
  org_id: string;

  status: 'success';

  /**
   * If invite emails failed to send for some reason, the patch operation will still
   * complete, but we will return an error message here
   */
  send_email_error?: string | null;
}

/**
 * Each permission permits a certain type of operation on an object in the system
 *
 * Permissions can be assigned to to objects on an individual basis, or grouped
 * into roles
 */
export type Permission =
  | 'create'
  | 'read'
  | 'update'
  | 'delete'
  | 'create_acls'
  | 'read_acls'
  | 'update_acls'
  | 'delete_acls';

export interface Project {
  /**
   * Unique identifier for the project
   */
  id: string;

  /**
   * Name of the project
   */
  name: string;

  /**
   * Unique id for the organization that the project belongs under
   */
  org_id: string;

  /**
   * Date of project creation
   */
  created?: string | null;

  /**
   * Date of project deletion, or null if the project is still active
   */
  deleted_at?: string | null;

  settings?: ProjectSettings | null;

  /**
   * Identifies the user who created the project
   */
  user_id?: string | null;
}

export interface ProjectLogsEvent {
  /**
   * A unique identifier for the project logs event. If you don't provide one,
   * BrainTrust will generate one for you
   */
  id: string;

  /**
   * The transaction id of an event is unique to the network operation that processed
   * the event insertion. Transaction ids are monotonically increasing over time and
   * can be used to retrieve a versioned snapshot of the project logs (see the
   * `version` parameter)
   */
  _xact_id: string;

  /**
   * The timestamp the project logs event was created
   */
  created: string;

  /**
   * A literal 'g' which identifies the log as a project log
   */
  log_id: 'g';

  /**
   * Unique id for the organization that the project belongs under
   */
  org_id: string;

  /**
   * Unique identifier for the project
   */
  project_id: string;

  /**
   * A unique identifier for the trace this project logs event belongs to
   */
  root_span_id: string;

  /**
   * A unique identifier used to link different project logs events together as part
   * of a full trace. See the
   * [tracing guide](https://www.braintrust.dev/docs/guides/tracing) for full details
   * on tracing
   */
  span_id: string;

  /**
   * Context is additional information about the code that produced the project logs
   * event. It is essentially the textual counterpart to `metrics`. Use the
   * `caller_*` attributes to track the location in code which produced the project
   * logs event
   */
  context?: ProjectLogsEvent.Context | null;

  /**
   * The error that occurred, if any.
   */
  error?: unknown;

  /**
   * The ground truth value (an arbitrary, JSON serializable object) that you'd
   * compare to `output` to determine if your `output` value is correct or not.
   * Braintrust currently does not compare `output` to `expected` for you, since
   * there are so many different ways to do that correctly. Instead, these values are
   * just used to help you navigate while digging into analyses. However, we may
   * later use these values to re-score outputs or fine-tune your models.
   */
  expected?: unknown;

  /**
   * The arguments that uniquely define a user input (an arbitrary, JSON serializable
   * object).
   */
  input?: unknown;

  /**
   * Whether this span is a root span
   */
  is_root?: boolean | null;

  /**
   * A dictionary with additional data about the test example, model outputs, or just
   * about anything else that's relevant, that you can use to help find and analyze
   * examples later. For example, you could log the `prompt`, example's `id`, or
   * anything else that would be useful to slice/dice later. The values in `metadata`
   * can be any JSON-serializable type, but its keys must be strings
   */
  metadata?: ProjectLogsEvent.Metadata | null;

  /**
   * Metrics are numerical measurements tracking the execution of the code that
   * produced the project logs event. Use "start" and "end" to track the time span
   * over which the project logs event was produced
   */
  metrics?: ProjectLogsEvent.Metrics | null;

  /**
   * Indicates the event was copied from another object.
   */
  origin?: ObjectReference | null;

  /**
   * The output of your application, including post-processing (an arbitrary, JSON
   * serializable object), that allows you to determine whether the result is correct
   * or not. For example, in an app that generates SQL queries, the `output` should
   * be the _result_ of the SQL query generated by the model, not the query itself,
   * because there may be multiple valid queries that answer a single question.
   */
  output?: unknown;

  /**
   * A dictionary of numeric values (between 0 and 1) to log. The scores should give
   * you a variety of signals that help you determine how accurate the outputs are
   * compared to what you expect and diagnose failures. For example, a summarization
   * app might have one score that tells you how accurate the summary is, and another
   * that measures the word similarity between the generated and grouth truth
   * summary. The word similarity score could help you determine whether the
   * summarization was covering similar concepts or not. You can use these scores to
   * help you sort, filter, and compare logs.
   */
  scores?: Record<string, number | null> | null;

  /**
   * Human-identifying attributes of the span, such as name, type, etc.
   */
  span_attributes?: SpanAttributes | null;

  /**
   * An array of the parent `span_ids` of this project logs event. This should be
   * empty for the root span of a trace, and should most often contain just one
   * parent element for subspans
   */
  span_parents?: Array<string> | null;

  /**
   * A list of tags to log
   */
  tags?: Array<string> | null;
}

export namespace ProjectLogsEvent {
  /**
   * Context is additional information about the code that produced the project logs
   * event. It is essentially the textual counterpart to `metrics`. Use the
   * `caller_*` attributes to track the location in code which produced the project
   * logs event
   */
  export interface Context {
    /**
     * Name of the file in code where the project logs event was created
     */
    caller_filename?: string | null;

    /**
     * The function in code which created the project logs event
     */
    caller_functionname?: string | null;

    /**
     * Line of code where the project logs event was created
     */
    caller_lineno?: number | null;
    [k: string]: unknown;
  }

  /**
   * A dictionary with additional data about the test example, model outputs, or just
   * about anything else that's relevant, that you can use to help find and analyze
   * examples later. For example, you could log the `prompt`, example's `id`, or
   * anything else that would be useful to slice/dice later. The values in `metadata`
   * can be any JSON-serializable type, but its keys must be strings
   */
  export interface Metadata {
    /**
     * The model used for this example
     */
    model?: string | null;
    [k: string]: unknown;
  }

  /**
   * Metrics are numerical measurements tracking the execution of the code that
   * produced the project logs event. Use "start" and "end" to track the time span
   * over which the project logs event was produced
   */
  export interface Metrics {
    /**
     * This metric is deprecated
     */
    caller_filename?: unknown;

    /**
     * This metric is deprecated
     */
    caller_functionname?: unknown;

    /**
     * This metric is deprecated
     */
    caller_lineno?: unknown;

    /**
     * The number of tokens in the completion generated by the model (only set if this
     * is an LLM span)
     */
    completion_tokens?: number | null;

    /**
     * A unix timestamp recording when the section of code which produced the project
     * logs event finished
     */
    end?: number | null;

    /**
     * The number of tokens in the prompt used to generate the project logs event (only
     * set if this is an LLM span)
     */
    prompt_tokens?: number | null;

    /**
     * A unix timestamp recording when the section of code which produced the project
     * logs event started
     */
    start?: number | null;

    /**
     * The total number of tokens in the input and output of the project logs event.
     */
    tokens?: number | null;
    [k: string]: number | unknown | number | null | undefined;
  }
}

/**
 * A project score is a user-configured score, which can be manually-labeled
 * through the UI
 */
export interface ProjectScore {
  /**
   * Unique identifier for the project score
   */
  id: string;

  /**
   * Name of the project score
   */
  name: string;

  /**
   * Unique identifier for the project that the project score belongs under
   */
  project_id: string;

  /**
   * The type of the configured score
   */
  score_type: ProjectScoreType;

  user_id: string;

  /**
   * For categorical-type project scores, the list of all categories
   */
  categories?: Array<ProjectScoreCategory> | Record<string, number> | Array<string> | null;

  config?: ProjectScoreConfig | null;

  /**
   * Date of project score creation
   */
  created?: string | null;

  /**
   * Textual description of the project score
   */
  description?: string | null;

  /**
   * An optional LexoRank-based string that sets the sort position for the score in
   * the UI
   */
  position?: string | null;
}

/**
 * For categorical-type project scores, defines a single category
 */
export interface ProjectScoreCategory {
  /**
   * Name of the category
   */
  name: string;

  /**
   * Numerical value of the category. Must be between 0 and 1, inclusive
   */
  value: number;
}

export interface ProjectScoreConfig {
  destination?: string | null;

  multi_select?: boolean | null;

  online?: OnlineScoreConfig | null;
}

/**
 * The type of the configured score
 */
export type ProjectScoreType =
  | 'slider'
  | 'categorical'
  | 'weighted'
  | 'minimum'
  | 'maximum'
  | 'online'
  | 'free-form';

export interface ProjectSettings {
  /**
   * The id of the experiment to use as the default baseline for comparisons
   */
  baseline_experiment_id?: string | null;

  /**
   * The key used to join two experiments (defaults to `input`)
   */
  comparison_key?: string | null;

  /**
   * The order of the fields to display in the trace view
   */
  spanFieldOrder?: Array<ProjectSettings.SpanFieldOrder> | null;
}

export namespace ProjectSettings {
  export interface SpanFieldOrder {
    column_id: string;

    object_type: string;

    position: string;

    layout?: 'full' | 'two_column' | null;
  }
}

/**
 * A project tag is a user-configured tag for tracking and filtering your
 * experiments, logs, and other data
 */
export interface ProjectTag {
  /**
   * Unique identifier for the project tag
   */
  id: string;

  /**
   * Name of the project tag
   */
  name: string;

  /**
   * Unique identifier for the project that the project tag belongs under
   */
  project_id: string;

  user_id: string;

  /**
   * Color of the tag for the UI
   */
  color?: string | null;

  /**
   * Date of project tag creation
   */
  created?: string | null;

  /**
   * Textual description of the project tag
   */
  description?: string | null;
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

  function_type?: 'llm' | 'scorer' | 'task' | 'tool' | null;

  /**
   * User-controlled metadata about the prompt
   */
  metadata?: Record<string, unknown> | null;

  /**
   * The prompt, model, and its parameters
   */
  prompt_data?: PromptData | null;

  /**
   * A list of tags for the prompt
   */
  tags?: Array<string> | null;
}

/**
 * The prompt, model, and its parameters
 */
export interface PromptData {
  options?: PromptOptions | null;

  origin?: PromptData.Origin | null;

  parser?: PromptData.Parser | null;

  prompt?: PromptData.Completion | PromptData.Chat | null;

  tool_functions?: Array<PromptData.Function | PromptData.Global> | null;
}

export namespace PromptData {
  export interface Origin {
    project_id?: string;

    prompt_id?: string;

    prompt_version?: string;
  }

  export interface Parser {
    choice_scores: Record<string, number>;

    type: 'llm_classifier';

    use_cot: boolean;
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
  }

  export interface Function {
    id: string;

    type: 'function';
  }

  export interface Global {
    name: string;

    type: 'global';
  }
}

export interface PromptOptions {
  model?: string;

  params?:
    | PromptOptions.OpenAIModelParams
    | PromptOptions.AnthropicModelParams
    | PromptOptions.GoogleModelParams
    | PromptOptions.WindowAIModelParams
    | PromptOptions.JsCompletionParams;

  position?: string;
}

export namespace PromptOptions {
  export interface OpenAIModelParams {
    frequency_penalty?: number;

    function_call?: 'auto' | 'none' | OpenAIModelParams.Function;

    /**
     * The successor to max_tokens
     */
    max_completion_tokens?: number;

    max_tokens?: number;

    n?: number;

    presence_penalty?: number;

    reasoning_effort?: 'low' | 'medium' | 'high';

    response_format?:
      | OpenAIModelParams.JsonObject
      | OpenAIModelParams.JsonSchema
      | OpenAIModelParams.Text
      | null;

    stop?: Array<string>;

    temperature?: number;

    tool_choice?: 'auto' | 'none' | 'required' | OpenAIModelParams.Function;

    top_p?: number;

    use_cache?: boolean;
  }

  export namespace OpenAIModelParams {
    export interface Function {
      name: string;
    }

    export interface JsonObject {
      type: 'json_object';
    }

    export interface JsonSchema {
      json_schema: JsonSchema.JsonSchema;

      type: 'json_schema';
    }

    export namespace JsonSchema {
      export interface JsonSchema {
        name: string;

        description?: string;

        schema?: Record<string, unknown> | string;

        strict?: boolean | null;
      }
    }

    export interface Text {
      type: 'text';
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

/**
 * Metadata about the state of the repo when the experiment was created
 */
export interface RepoInfo {
  /**
   * Email of the author of the most recent commit
   */
  author_email?: string | null;

  /**
   * Name of the author of the most recent commit
   */
  author_name?: string | null;

  /**
   * Name of the branch the most recent commit belongs to
   */
  branch?: string | null;

  /**
   * SHA of most recent commit
   */
  commit?: string | null;

  /**
   * Most recent commit message
   */
  commit_message?: string | null;

  /**
   * Time of the most recent commit
   */
  commit_time?: string | null;

  /**
   * Whether or not the repo had uncommitted changes when snapshotted
   */
  dirty?: boolean | null;

  /**
   * If the repo was dirty when run, this includes the diff between the current state
   * of the repo and the most recent commit.
   */
  git_diff?: string | null;

  /**
   * Name of the tag on the most recent commit
   */
  tag?: string | null;
}

/**
 * A role is a collection of permissions which can be granted as part of an ACL
 *
 * Roles can consist of individual permissions, as well as a set of roles they
 * inherit from
 */
export interface Role {
  /**
   * Unique identifier for the role
   */
  id: string;

  /**
   * Name of the role
   */
  name: string;

  /**
   * Date of role creation
   */
  created?: string | null;

  /**
   * Date of role deletion, or null if the role is still active
   */
  deleted_at?: string | null;

  /**
   * Textual description of the role
   */
  description?: string | null;

  /**
   * (permission, restrict_object_type) tuples which belong to this role
   */
  member_permissions?: Array<Role.MemberPermission> | null;

  /**
   * Ids of the roles this role inherits from
   *
   * An inheriting role has all the permissions contained in its member roles, as
   * well as all of their inherited permissions
   */
  member_roles?: Array<string> | null;

  /**
   * Unique id for the organization that the role belongs under
   *
   * A null org_id indicates a system role, which may be assigned to anybody and
   * inherited by any other role, but cannot be edited.
   *
   * It is forbidden to change the org after creating a role
   */
  org_id?: string | null;

  /**
   * Identifies the user who created the role
   */
  user_id?: string | null;
}

export namespace Role {
  export interface MemberPermission {
    /**
     * Each permission permits a certain type of operation on an object in the system
     *
     * Permissions can be assigned to to objects on an individual basis, or grouped
     * into roles
     */
    permission: Shared.Permission;

    /**
     * The object type that the ACL applies to
     */
    restrict_object_type?: Shared.ACLObjectType | null;
  }
}

/**
 * Summary of a score's performance
 */
export interface ScoreSummary {
  /**
   * Number of improvements in the score
   */
  improvements: number;

  /**
   * Name of the score
   */
  name: string;

  /**
   * Number of regressions in the score
   */
  regressions: number;

  /**
   * Average score across all examples
   */
  score: number;

  /**
   * Difference in score between the current and comparison experiment
   */
  diff?: number;
}

/**
 * Human-identifying attributes of the span, such as name, type, etc.
 */
export interface SpanAttributes {
  /**
   * Name of the span, for display purposes only
   */
  name?: string | null;

  /**
   * Type of the span, for display purposes only
   */
  type?: SpanType | null;
  [k: string]: unknown;
}

export interface SpanIFrame {
  /**
   * Unique identifier for the span iframe
   */
  id: string;

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
   * Date of span iframe creation
   */
  created?: string | null;

  /**
   * Date of span iframe deletion, or null if the span iframe is still active
   */
  deleted_at?: string | null;

  /**
   * Textual description of the span iframe
   */
  description?: string | null;

  /**
   * Whether to post messages to the iframe containing the span's data. This is
   * useful when you want to render more data than fits in the URL.
   */
  post_message?: boolean | null;

  /**
   * Identifies the user who created the span iframe
   */
  user_id?: string | null;
}

/**
 * Type of the span, for display purposes only
 */
export type SpanType = 'llm' | 'score' | 'function' | 'eval' | 'task' | 'tool' | null;

/**
 * Summary of a dataset
 */
export interface SummarizeDatasetResponse {
  /**
   * Name of the dataset
   */
  dataset_name: string;

  /**
   * URL to the dataset's page in the Braintrust app
   */
  dataset_url: string;

  /**
   * Name of the project that the dataset belongs to
   */
  project_name: string;

  /**
   * URL to the project's page in the Braintrust app
   */
  project_url: string;

  /**
   * Summary of a dataset's data
   */
  data_summary?: DataSummary | null;
}

/**
 * Summary of an experiment
 */
export interface SummarizeExperimentResponse {
  /**
   * Name of the experiment
   */
  experiment_name: string;

  /**
   * URL to the experiment's page in the Braintrust app
   */
  experiment_url: string;

  /**
   * Name of the project that the experiment belongs to
   */
  project_name: string;

  /**
   * URL to the project's page in the Braintrust app
   */
  project_url: string;

  /**
   * The experiment which scores are baselined against
   */
  comparison_experiment_name?: string | null;

  /**
   * Summary of the experiment's metrics
   */
  metrics?: Record<string, MetricSummary> | null;

  /**
   * Summary of the experiment's scores
   */
  scores?: Record<string, ScoreSummary> | null;
}

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

export interface View {
  /**
   * Unique identifier for the view
   */
  id: string;

  /**
   * Name of the view
   */
  name: string;

  /**
   * The id of the object the view applies to
   */
  object_id: string;

  /**
   * The object type that the ACL applies to
   */
  object_type: ACLObjectType;

  /**
   * Type of table that the view corresponds to.
   */
  view_type:
    | 'projects'
    | 'experiments'
    | 'experiment'
    | 'playgrounds'
    | 'playground'
    | 'datasets'
    | 'dataset'
    | 'prompts'
    | 'tools'
    | 'scorers'
    | 'logs'
    | null;

  /**
   * Date of view creation
   */
  created?: string | null;

  /**
   * Date of role deletion, or null if the role is still active
   */
  deleted_at?: string | null;

  /**
   * Options for the view in the app
   */
  options?: ViewOptions | null;

  /**
   * Identifies the user who created the view
   */
  user_id?: string | null;

  /**
   * The view definition
   */
  view_data?: ViewData | null;
}

/**
 * The view definition
 */
export interface ViewData {
  search?: ViewDataSearch | null;
}

export interface ViewDataSearch {
  filter?: Array<unknown> | null;

  match?: Array<unknown> | null;

  sort?: Array<unknown> | null;

  tag?: Array<unknown> | null;
}

/**
 * Options for the view in the app
 */
export interface ViewOptions {
  columnOrder?: Array<string> | null;

  columnSizing?: Record<string, number> | null;

  columnVisibility?: Record<string, boolean> | null;

  grouping?: string | null;

  layout?: string | null;

  rowHeight?: string | null;
}

/**
 * Type of table that the view corresponds to.
 */
export type ViewType =
  | 'projects'
  | 'experiments'
  | 'experiment'
  | 'playgrounds'
  | 'playground'
  | 'datasets'
  | 'dataset'
  | 'prompts'
  | 'tools'
  | 'scorers'
  | 'logs'
  | null;

/**
 * Pagination for endpoints which list data objects
 */
export class ProjectsListObjects extends ListObjects<Project> {}

/**
 * Pagination for endpoints which list data objects
 */
export class ExperimentsListObjects extends ListObjects<Experiment> {}

/**
 * Pagination for endpoints which list data objects
 */
export class DatasetsListObjects extends ListObjects<Dataset> {}

/**
 * Pagination for endpoints which list data objects
 */
export class PromptsListObjects extends ListObjects<Prompt> {}

/**
 * Pagination for endpoints which list data objects
 */
export class RolesListObjects extends ListObjects<Role> {}

/**
 * Pagination for endpoints which list data objects
 */
export class GroupsListObjects extends ListObjects<Group> {}

/**
 * Pagination for endpoints which list data objects
 */
export class ACLsListObjects extends ListObjects<ACL> {}

/**
 * Pagination for endpoints which list data objects
 */
export class UsersListObjects extends ListObjects<User> {}

/**
 * Pagination for endpoints which list data objects
 */
export class ProjectScoresListObjects extends ListObjects<ProjectScore> {}

/**
 * Pagination for endpoints which list data objects
 */
export class ProjectTagsListObjects extends ListObjects<ProjectTag> {}

/**
 * Pagination for endpoints which list data objects
 */
export class SpanIFramesListObjects extends ListObjects<SpanIFrame> {}

/**
 * Pagination for endpoints which list data objects
 */
export class FunctionsListObjects extends ListObjects<Function> {}

/**
 * Pagination for endpoints which list data objects
 */
export class ViewsListObjects extends ListObjects<View> {}

/**
 * Pagination for endpoints which list data objects
 */
export class OrganizationsListObjects extends ListObjects<Organization> {}

/**
 * Pagination for endpoints which list data objects
 */
export class APIKeysListObjects extends ListObjects<APIKey> {}

/**
 * Pagination for endpoints which list data objects
 */
export class AISecretsListObjects extends ListObjects<AISecret> {}
