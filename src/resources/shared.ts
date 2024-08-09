// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Shared from './shared';
import { ListObjects } from '../pagination';

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
    | 'org_project'
    | null;

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
  permission?:
    | 'create'
    | 'read'
    | 'update'
    | 'delete'
    | 'create_acls'
    | 'read_acls'
    | 'update_acls'
    | 'delete_acls'
    | null;

  /**
   * When setting a permission directly, optionally restricts the permission grant to
   * just the specified object type. Cannot be set alongside a `role_id`.
   */
  restrict_object_type?:
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
    | 'org_project'
    | null;

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
export interface CreateACL {
  /**
   * The id of the object the ACL applies to
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
    | 'org_project'
    | null;

  /**
   * Id of the group the ACL applies to. Exactly one of `user_id` and `group_id` will
   * be provided
   */
  group_id?: string | null;

  /**
   * Permission the ACL grants. Exactly one of `permission` and `role_id` will be
   * provided
   */
  permission?:
    | 'create'
    | 'read'
    | 'update'
    | 'delete'
    | 'create_acls'
    | 'read_acls'
    | 'update_acls'
    | 'delete_acls'
    | null;

  /**
   * When setting a permission directly, optionally restricts the permission grant to
   * just the specified object type. Cannot be set alongside a `role_id`.
   */
  restrict_object_type?:
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
    | 'org_project'
    | null;

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

export interface CreateDataset {
  /**
   * Name of the dataset. Within a project, dataset names are unique
   */
  name: string;

  /**
   * Textual description of the dataset
   */
  description?: string | null;

  /**
   * Unique identifier for the project that the dataset belongs under
   */
  project_id?: string | null;
}

export interface CreateExperiment {
  /**
   * Unique identifier for the project that the experiment belongs under
   */
  project_id: string;

  /**
   * Id of default base experiment to compare against when viewing this experiment
   */
  base_exp_id?: string | null;

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
   * Textual description of the experiment
   */
  description?: string | null;

  /**
   * Normally, creating an experiment with the same name as an existing experiment
   * will return the existing one un-modified. But if `ensure_new` is true,
   * registration will generate a new experiment with a unique name in case of a
   * conflict.
   */
  ensure_new?: boolean | null;

  /**
   * User-controlled metadata about the experiment
   */
  metadata?: Record<string, unknown> | null;

  /**
   * Name of the experiment. Within a project, experiment names are unique
   */
  name?: string | null;

  /**
   * Whether or not the experiment is public. Public experiments can be viewed by
   * anybody inside or outside the organization
   */
  public?: boolean | null;

  /**
   * Metadata about the state of the repo when the experiment was created
   */
  repo_info?: RepoInfo | null;
}

export interface CreateFunction {
  function_data: CreateFunction.Prompt | CreateFunction.Code | CreateFunction.Global;

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
  prompt_data?: PromptData | null;

  /**
   * A list of tags for the prompt
   */
  tags?: Array<string> | null;
}

export namespace CreateFunction {
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
}

export interface CreateGroup {
  /**
   * Name of the group
   */
  name: string;

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
   * For nearly all users, this parameter should be unnecessary. But in the rare case
   * that your API key belongs to multiple organizations, you may specify the name of
   * the organization the group belongs in.
   */
  org_name?: string | null;
}

export interface CreateProject {
  /**
   * Name of the project
   */
  name: string;

  /**
   * For nearly all users, this parameter should be unnecessary. But in the rare case
   * that your API key belongs to multiple organizations, you may specify the name of
   * the organization the project belongs in.
   */
  org_name?: string | null;
}

export interface CreateProjectScore {
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
  score_type: 'slider' | 'categorical' | 'weighted' | 'minimum' | null;

  /**
   * For categorical-type project scores, the list of all categories
   */
  categories?:
    | Array<ProjectScoreCategory>
    | Record<string, number>
    | Array<string>
    | CreateProjectScore.NullableVariant
    | null;

  /**
   * Textual description of the project score
   */
  description?: string | null;
}

export namespace CreateProjectScore {
  export interface NullableVariant {}
}

export interface CreateProjectTag {
  /**
   * Name of the project tag
   */
  name: string;

  /**
   * Unique identifier for the project that the project tag belongs under
   */
  project_id: string;

  /**
   * Color of the tag for the UI
   */
  color?: string | null;

  /**
   * Textual description of the project tag
   */
  description?: string | null;
}

export interface CreatePrompt {
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
  prompt_data?: PromptData | null;

  /**
   * A list of tags for the prompt
   */
  tags?: Array<string> | null;
}

export interface CreateRole {
  /**
   * Name of the role
   */
  name: string;

  /**
   * Textual description of the role
   */
  description?: string | null;

  /**
   * (permission, restrict_object_type) tuples which belong to this role
   */
  member_permissions?: Array<CreateRole.MemberPermission> | null;

  /**
   * Ids of the roles this role inherits from
   *
   * An inheriting role has all the permissions contained in its member roles, as
   * well as all of their inherited permissions
   */
  member_roles?: Array<string> | null;

  /**
   * For nearly all users, this parameter should be unnecessary. But in the rare case
   * that your API key belongs to multiple organizations, you may specify the name of
   * the organization the role belongs in.
   */
  org_name?: string | null;
}

export namespace CreateRole {
  export interface MemberPermission {
    /**
     * Each permission permits a certain type of operation on an object in the system
     *
     * Permissions can be assigned to to objects on an individual basis, or grouped
     * into roles
     */
    permission:
      | 'create'
      | 'read'
      | 'update'
      | 'delete'
      | 'create_acls'
      | 'read_acls'
      | 'update_acls'
      | 'delete_acls'
      | null;

    /**
     * The object type that the ACL applies to
     */
    restrict_object_type?:
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
      | 'org_project'
      | null;
  }
}

export interface CreateView {
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
    | 'org_project'
    | null;

  /**
   * Type of table that the view corresponds to.
   */
  view_type:
    | 'projects'
    | 'logs'
    | 'experiments'
    | 'datasets'
    | 'prompts'
    | 'playgrounds'
    | 'experiment'
    | 'dataset'
    | null;

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

export interface CrossObjectInsertRequest {
  /**
   * A mapping from dataset id to a set of log events and feedback items to insert
   */
  dataset?: Record<string, CrossObjectInsertRequest.Dataset> | null;

  /**
   * A mapping from experiment id to a set of log events and feedback items to insert
   */
  experiment?: Record<string, CrossObjectInsertRequest.Experiment> | null;

  /**
   * A mapping from project id to a set of log events and feedback items to insert
   */
  project_logs?: Record<string, CrossObjectInsertRequest.ProjectLogs> | null;
}

export namespace CrossObjectInsertRequest {
  export interface Dataset {
    /**
     * A list of dataset events to insert
     */
    events?: Array<Shared.InsertDatasetEventReplace | Shared.InsertDatasetEventMerge> | null;

    /**
     * A list of dataset feedback items
     */
    feedback?: Array<Shared.FeedbackDatasetItem> | null;
  }

  export interface Experiment {
    /**
     * A list of experiment events to insert
     */
    events?: Array<Shared.InsertExperimentEventReplace | Shared.InsertExperimentEventMerge> | null;

    /**
     * A list of experiment feedback items
     */
    feedback?: Array<Shared.FeedbackExperimentItem> | null;
  }

  export interface ProjectLogs {
    /**
     * A list of project logs events to insert
     */
    events?: Array<Shared.InsertProjectLogsEventReplace | Shared.InsertProjectLogsEventMerge> | null;

    /**
     * A list of project logs feedback items
     */
    feedback?: Array<Shared.FeedbackProjectLogsItem> | null;
  }
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
   * Unique identifier for the project that the dataset belongs under
   */
  project_id?: string | null;

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
   * The `span_id` of the root of the trace this dataset event belongs to
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
   * A dictionary with additional data about the test example, model outputs, or just
   * about anything else that's relevant, that you can use to help find and analyze
   * examples later. For example, you could log the `prompt`, example's `id`, or
   * anything else that would be useful to slice/dice later. The values in `metadata`
   * can be any JSON-serializable type, but its keys must be strings
   */
  metadata?: Record<string, unknown> | null;

  /**
   * Unique identifier for the project that the dataset belongs under
   */
  project_id?: string | null;

  /**
   * A list of tags to log
   */
  tags?: Array<string> | null;
}

export interface DeleteView {
  /**
   * The id of the object the view applies to
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
    | 'org_project'
    | null;
}

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
   * The `span_id` of the root of the trace this experiment event belongs to
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
   * If the experiment is associated to a dataset, this is the event-level dataset id
   * this experiment event is tied to
   */
  dataset_record_id?: string | null;

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
  metadata?: Record<string, unknown> | null;

  /**
   * Metrics are numerical measurements tracking the execution of the code that
   * produced the experiment event. Use "start" and "end" to track the time span over
   * which the experiment event was produced
   */
  metrics?: ExperimentEvent.Metrics | null;

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
  span_attributes?: ExperimentEvent.SpanAttributes | null;

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
   * Metrics are numerical measurements tracking the execution of the code that
   * produced the experiment event. Use "start" and "end" to track the time span over
   * which the experiment event was produced
   */
  export interface Metrics {
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
    [k: string]: unknown;
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
    type?: 'llm' | 'score' | 'function' | 'eval' | 'task' | 'tool' | null;
    [k: string]: unknown;
  }
}

export interface FeedbackDatasetEventRequest {
  /**
   * A list of dataset feedback items
   */
  feedback: Array<FeedbackDatasetItem>;
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
   * you can log it here and access it in the Braintrust UI.
   */
  metadata?: Record<string, unknown> | null;

  /**
   * The source of the feedback. Must be one of "external" (default), "app", or "api"
   */
  source?: 'app' | 'api' | 'external' | null;
}

export interface FeedbackExperimentEventRequest {
  /**
   * A list of experiment feedback items
   */
  feedback: Array<FeedbackExperimentItem>;
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
   * you can log it here and access it in the Braintrust UI.
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
}

export interface FeedbackProjectLogsEventRequest {
  /**
   * A list of project logs feedback items
   */
  feedback: Array<FeedbackProjectLogsItem>;
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
   * you can log it here and access it in the Braintrust UI.
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

export interface FetchEventsRequest {
  /**
   * An opaque string to be used as a cursor for the next page of results, in order
   * from latest to earliest.
   *
   * The string can be obtained directly from the `cursor` property of the previous
   * fetch query
   */
  cursor?: string | null;

  /**
   * A list of filters on the events to fetch. Currently, only path-lookup type
   * filters are supported, but we may add more in the future
   */
  filters?: Array<PathLookupFilter> | null;

  /**
   * limit the number of traces fetched
   *
   * Fetch queries may be paginated if the total result size is expected to be large
   * (e.g. project_logs which accumulate over a long time). Note that fetch queries
   * only support pagination in descending time order (from latest to earliest
   * `_xact_id`. Furthermore, later pages may return rows which showed up in earlier
   * pages, except with an earlier `_xact_id`. This happens because pagination occurs
   * over the whole version history of the event log. You will most likely want to
   * exclude any such duplicate, outdated rows (by `id`) from your combined result
   * set.
   *
   * The `limit` parameter controls the number of full traces to return. So you may
   * end up with more individual rows than the specified limit if you are fetching
   * events containing traces.
   */
  limit?: number | null;

  /**
   * DEPRECATION NOTICE: The manually-constructed pagination cursor is deprecated in
   * favor of the explicit 'cursor' returned by object fetch requests. Please prefer
   * the 'cursor' argument going forwards.
   *
   * Together, `max_xact_id` and `max_root_span_id` form a pagination cursor
   *
   * Since a paginated fetch query returns results in order from latest to earliest,
   * the cursor for the next page can be found as the row with the minimum (earliest)
   * value of the tuple `(_xact_id, root_span_id)`. See the documentation of `limit`
   * for an overview of paginating fetch queries.
   */
  max_root_span_id?: string | null;

  /**
   * DEPRECATION NOTICE: The manually-constructed pagination cursor is deprecated in
   * favor of the explicit 'cursor' returned by object fetch requests. Please prefer
   * the 'cursor' argument going forwards.
   *
   * Together, `max_xact_id` and `max_root_span_id` form a pagination cursor
   *
   * Since a paginated fetch query returns results in order from latest to earliest,
   * the cursor for the next page can be found as the row with the minimum (earliest)
   * value of the tuple `(_xact_id, root_span_id)`. See the documentation of `limit`
   * for an overview of paginating fetch queries.
   */
  max_xact_id?: string | null;

  /**
   * Retrieve a snapshot of events from a past time
   *
   * The version id is essentially a filter on the latest event transaction id. You
   * can use the `max_xact_id` returned by a past fetch as the version to reproduce
   * that exact fetch.
   */
  version?: string | null;
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

export interface InsertDatasetEventMerge {
  /**
   * The `_is_merge` field controls how the row is merged with any existing row with
   * the same id in the DB. By default (or when set to `false`), the existing row is
   * completely replaced by the new row. When set to `true`, the new row is
   * deep-merged into the existing row
   *
   * For example, say there is an existing row in the DB
   * `{"id": "foo", "input": {"a": 5, "b": 10}}`. If we merge a new row as
   * `{"_is_merge": true, "id": "foo", "input": {"b": 11, "c": 20}}`, the new row
   * will be `{"id": "foo", "input": {"a": 5, "b": 11, "c": 20}}`. If we replace the
   * new row as `{"id": "foo", "input": {"b": 11, "c": 20}}`, the new row will be
   * `{"id": "foo", "input": {"b": 11, "c": 20}}`
   */
  _is_merge: boolean;

  /**
   * A unique identifier for the dataset event. If you don't provide one, BrainTrust
   * will generate one for you
   */
  id?: string | null;

  /**
   * The `_merge_paths` field allows controlling the depth of the merge. It can only
   * be specified alongside `_is_merge=true`. `_merge_paths` is a list of paths,
   * where each path is a list of field names. The deep merge will not descend below
   * any of the specified merge paths.
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
  metadata?: Record<string, unknown> | null;

  /**
   * A list of tags to log
   */
  tags?: Array<string> | null;
}

export interface InsertDatasetEventReplace {
  /**
   * A unique identifier for the dataset event. If you don't provide one, BrainTrust
   * will generate one for you
   */
  id?: string | null;

  /**
   * The `_is_merge` field controls how the row is merged with any existing row with
   * the same id in the DB. By default (or when set to `false`), the existing row is
   * completely replaced by the new row. When set to `true`, the new row is
   * deep-merged into the existing row
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
   * Pass `_object_delete=true` to mark the dataset event deleted. Deleted events
   * will not show up in subsequent fetches for this dataset
   */
  _object_delete?: boolean | null;

  /**
   * Use the `_parent_id` field to create this row as a subspan of an existing row.
   * It cannot be specified alongside `_is_merge=true`. Tracking hierarchical
   * relationships are important for tracing (see the
   * [guide](https://www.braintrust.dev/docs/guides/tracing) for full details).
   *
   * For example, say we have logged a row
   * `{"id": "abc", "input": "foo", "output": "bar", "expected": "boo", "scores": {"correctness": 0.33}}`.
   * We can create a sub-span of the parent row by logging
   * `{"_parent_id": "abc", "id": "llm_call", "input": {"prompt": "What comes after foo?"}, "output": "bar", "metrics": {"tokens": 1}}`.
   * In the webapp, only the root span row `"abc"` will show up in the summary view.
   * You can view the full trace hierarchy (in this case, the `"llm_call"` row) by
   * clicking on the "abc" row.
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
  metadata?: Record<string, unknown> | null;

  /**
   * A list of tags to log
   */
  tags?: Array<string> | null;
}

export interface InsertDatasetEventRequest {
  /**
   * A list of dataset events to insert
   */
  events: Array<InsertDatasetEventReplace | InsertDatasetEventMerge>;
}

export interface InsertEventsResponse {
  /**
   * The ids of all rows that were inserted, aligning one-to-one with the rows
   * provided as input
   */
  row_ids: Array<string>;
}

export interface InsertExperimentEventMerge {
  /**
   * The `_is_merge` field controls how the row is merged with any existing row with
   * the same id in the DB. By default (or when set to `false`), the existing row is
   * completely replaced by the new row. When set to `true`, the new row is
   * deep-merged into the existing row
   *
   * For example, say there is an existing row in the DB
   * `{"id": "foo", "input": {"a": 5, "b": 10}}`. If we merge a new row as
   * `{"_is_merge": true, "id": "foo", "input": {"b": 11, "c": 20}}`, the new row
   * will be `{"id": "foo", "input": {"a": 5, "b": 11, "c": 20}}`. If we replace the
   * new row as `{"id": "foo", "input": {"b": 11, "c": 20}}`, the new row will be
   * `{"id": "foo", "input": {"b": 11, "c": 20}}`
   */
  _is_merge: boolean;

  /**
   * A unique identifier for the experiment event. If you don't provide one,
   * BrainTrust will generate one for you
   */
  id?: string | null;

  /**
   * The `_merge_paths` field allows controlling the depth of the merge. It can only
   * be specified alongside `_is_merge=true`. `_merge_paths` is a list of paths,
   * where each path is a list of field names. The deep merge will not descend below
   * any of the specified merge paths.
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
   * Context is additional information about the code that produced the experiment
   * event. It is essentially the textual counterpart to `metrics`. Use the
   * `caller_*` attributes to track the location in code which produced the
   * experiment event
   */
  context?: InsertExperimentEventMerge.Context | null;

  /**
   * The timestamp the experiment event was created
   */
  created?: string | null;

  /**
   * If the experiment is associated to a dataset, this is the event-level dataset id
   * this experiment event is tied to
   */
  dataset_record_id?: string | null;

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
  metadata?: Record<string, unknown> | null;

  /**
   * Metrics are numerical measurements tracking the execution of the code that
   * produced the experiment event. Use "start" and "end" to track the time span over
   * which the experiment event was produced
   */
  metrics?: InsertExperimentEventMerge.Metrics | null;

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
  span_attributes?: InsertExperimentEventMerge.SpanAttributes | null;

  /**
   * A list of tags to log
   */
  tags?: Array<string> | null;
}

export namespace InsertExperimentEventMerge {
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
   * Metrics are numerical measurements tracking the execution of the code that
   * produced the experiment event. Use "start" and "end" to track the time span over
   * which the experiment event was produced
   */
  export interface Metrics {
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
    [k: string]: unknown;
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
    type?: 'llm' | 'score' | 'function' | 'eval' | 'task' | 'tool' | null;
    [k: string]: unknown;
  }
}

export interface InsertExperimentEventReplace {
  /**
   * A unique identifier for the experiment event. If you don't provide one,
   * BrainTrust will generate one for you
   */
  id?: string | null;

  /**
   * The `_is_merge` field controls how the row is merged with any existing row with
   * the same id in the DB. By default (or when set to `false`), the existing row is
   * completely replaced by the new row. When set to `true`, the new row is
   * deep-merged into the existing row
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
   * Pass `_object_delete=true` to mark the experiment event deleted. Deleted events
   * will not show up in subsequent fetches for this experiment
   */
  _object_delete?: boolean | null;

  /**
   * Use the `_parent_id` field to create this row as a subspan of an existing row.
   * It cannot be specified alongside `_is_merge=true`. Tracking hierarchical
   * relationships are important for tracing (see the
   * [guide](https://www.braintrust.dev/docs/guides/tracing) for full details).
   *
   * For example, say we have logged a row
   * `{"id": "abc", "input": "foo", "output": "bar", "expected": "boo", "scores": {"correctness": 0.33}}`.
   * We can create a sub-span of the parent row by logging
   * `{"_parent_id": "abc", "id": "llm_call", "input": {"prompt": "What comes after foo?"}, "output": "bar", "metrics": {"tokens": 1}}`.
   * In the webapp, only the root span row `"abc"` will show up in the summary view.
   * You can view the full trace hierarchy (in this case, the `"llm_call"` row) by
   * clicking on the "abc" row.
   */
  _parent_id?: string | null;

  /**
   * Context is additional information about the code that produced the experiment
   * event. It is essentially the textual counterpart to `metrics`. Use the
   * `caller_*` attributes to track the location in code which produced the
   * experiment event
   */
  context?: InsertExperimentEventReplace.Context | null;

  /**
   * The timestamp the experiment event was created
   */
  created?: string | null;

  /**
   * If the experiment is associated to a dataset, this is the event-level dataset id
   * this experiment event is tied to
   */
  dataset_record_id?: string | null;

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
  metadata?: Record<string, unknown> | null;

  /**
   * Metrics are numerical measurements tracking the execution of the code that
   * produced the experiment event. Use "start" and "end" to track the time span over
   * which the experiment event was produced
   */
  metrics?: InsertExperimentEventReplace.Metrics | null;

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
  span_attributes?: InsertExperimentEventReplace.SpanAttributes | null;

  /**
   * A list of tags to log
   */
  tags?: Array<string> | null;
}

export namespace InsertExperimentEventReplace {
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
   * Metrics are numerical measurements tracking the execution of the code that
   * produced the experiment event. Use "start" and "end" to track the time span over
   * which the experiment event was produced
   */
  export interface Metrics {
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
    [k: string]: unknown;
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
    type?: 'llm' | 'score' | 'function' | 'eval' | 'task' | 'tool' | null;
    [k: string]: unknown;
  }
}

export interface InsertExperimentEventRequest {
  /**
   * A list of experiment events to insert
   */
  events: Array<InsertExperimentEventReplace | InsertExperimentEventMerge>;
}

export interface InsertProjectLogsEventMerge {
  /**
   * The `_is_merge` field controls how the row is merged with any existing row with
   * the same id in the DB. By default (or when set to `false`), the existing row is
   * completely replaced by the new row. When set to `true`, the new row is
   * deep-merged into the existing row
   *
   * For example, say there is an existing row in the DB
   * `{"id": "foo", "input": {"a": 5, "b": 10}}`. If we merge a new row as
   * `{"_is_merge": true, "id": "foo", "input": {"b": 11, "c": 20}}`, the new row
   * will be `{"id": "foo", "input": {"a": 5, "b": 11, "c": 20}}`. If we replace the
   * new row as `{"id": "foo", "input": {"b": 11, "c": 20}}`, the new row will be
   * `{"id": "foo", "input": {"b": 11, "c": 20}}`
   */
  _is_merge: boolean;

  /**
   * A unique identifier for the project logs event. If you don't provide one,
   * BrainTrust will generate one for you
   */
  id?: string | null;

  /**
   * The `_merge_paths` field allows controlling the depth of the merge. It can only
   * be specified alongside `_is_merge=true`. `_merge_paths` is a list of paths,
   * where each path is a list of field names. The deep merge will not descend below
   * any of the specified merge paths.
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
   * Context is additional information about the code that produced the project logs
   * event. It is essentially the textual counterpart to `metrics`. Use the
   * `caller_*` attributes to track the location in code which produced the project
   * logs event
   */
  context?: InsertProjectLogsEventMerge.Context | null;

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
  metadata?: Record<string, unknown> | null;

  /**
   * Metrics are numerical measurements tracking the execution of the code that
   * produced the project logs event. Use "start" and "end" to track the time span
   * over which the project logs event was produced
   */
  metrics?: InsertProjectLogsEventMerge.Metrics | null;

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
  span_attributes?: InsertProjectLogsEventMerge.SpanAttributes | null;

  /**
   * A list of tags to log
   */
  tags?: Array<string> | null;
}

export namespace InsertProjectLogsEventMerge {
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
   * Metrics are numerical measurements tracking the execution of the code that
   * produced the project logs event. Use "start" and "end" to track the time span
   * over which the project logs event was produced
   */
  export interface Metrics {
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
    [k: string]: unknown;
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
    type?: 'llm' | 'score' | 'function' | 'eval' | 'task' | 'tool' | null;
    [k: string]: unknown;
  }
}

export interface InsertProjectLogsEventReplace {
  /**
   * A unique identifier for the project logs event. If you don't provide one,
   * BrainTrust will generate one for you
   */
  id?: string | null;

  /**
   * The `_is_merge` field controls how the row is merged with any existing row with
   * the same id in the DB. By default (or when set to `false`), the existing row is
   * completely replaced by the new row. When set to `true`, the new row is
   * deep-merged into the existing row
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
   * Pass `_object_delete=true` to mark the project logs event deleted. Deleted
   * events will not show up in subsequent fetches for this project logs
   */
  _object_delete?: boolean | null;

  /**
   * Use the `_parent_id` field to create this row as a subspan of an existing row.
   * It cannot be specified alongside `_is_merge=true`. Tracking hierarchical
   * relationships are important for tracing (see the
   * [guide](https://www.braintrust.dev/docs/guides/tracing) for full details).
   *
   * For example, say we have logged a row
   * `{"id": "abc", "input": "foo", "output": "bar", "expected": "boo", "scores": {"correctness": 0.33}}`.
   * We can create a sub-span of the parent row by logging
   * `{"_parent_id": "abc", "id": "llm_call", "input": {"prompt": "What comes after foo?"}, "output": "bar", "metrics": {"tokens": 1}}`.
   * In the webapp, only the root span row `"abc"` will show up in the summary view.
   * You can view the full trace hierarchy (in this case, the `"llm_call"` row) by
   * clicking on the "abc" row.
   */
  _parent_id?: string | null;

  /**
   * Context is additional information about the code that produced the project logs
   * event. It is essentially the textual counterpart to `metrics`. Use the
   * `caller_*` attributes to track the location in code which produced the project
   * logs event
   */
  context?: InsertProjectLogsEventReplace.Context | null;

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
  metadata?: Record<string, unknown> | null;

  /**
   * Metrics are numerical measurements tracking the execution of the code that
   * produced the project logs event. Use "start" and "end" to track the time span
   * over which the project logs event was produced
   */
  metrics?: InsertProjectLogsEventReplace.Metrics | null;

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
  span_attributes?: InsertProjectLogsEventReplace.SpanAttributes | null;

  /**
   * A list of tags to log
   */
  tags?: Array<string> | null;
}

export namespace InsertProjectLogsEventReplace {
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
   * Metrics are numerical measurements tracking the execution of the code that
   * produced the project logs event. Use "start" and "end" to track the time span
   * over which the project logs event was produced
   */
  export interface Metrics {
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
    [k: string]: unknown;
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
    type?: 'llm' | 'score' | 'function' | 'eval' | 'task' | 'tool' | null;
    [k: string]: unknown;
  }
}

export interface InsertProjectLogsEventRequest {
  /**
   * A list of project logs events to insert
   */
  events: Array<InsertProjectLogsEventReplace | InsertProjectLogsEventMerge>;
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

export interface PatchDataset {
  /**
   * Textual description of the dataset
   */
  description?: string | null;

  /**
   * User-controlled metadata about the dataset
   */
  metadata?: Record<string, unknown> | null;

  /**
   * Name of the dataset. Within a project, dataset names are unique
   */
  name?: string | null;
}

export interface PatchExperiment {
  /**
   * Id of default base experiment to compare against when viewing this experiment
   */
  base_exp_id?: string | null;

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
   * Textual description of the experiment
   */
  description?: string | null;

  /**
   * User-controlled metadata about the experiment
   */
  metadata?: Record<string, unknown> | null;

  /**
   * Name of the experiment. Within a project, experiment names are unique
   */
  name?: string | null;

  /**
   * Whether or not the experiment is public. Public experiments can be viewed by
   * anybody inside or outside the organization
   */
  public?: boolean | null;

  /**
   * Metadata about the state of the repo when the experiment was created
   */
  repo_info?: RepoInfo | null;
}

export interface PatchFunction {
  /**
   * Textual description of the prompt
   */
  description?: string | null;

  function_data?:
    | PatchFunction.Prompt
    | PatchFunction.Code
    | PatchFunction.Global
    | PatchFunction.NullableVariant
    | null;

  /**
   * Name of the prompt
   */
  name?: string | null;

  /**
   * The prompt, model, and its parameters
   */
  prompt_data?: PromptData | null;

  /**
   * A list of tags for the prompt
   */
  tags?: Array<string> | null;
}

export namespace PatchFunction {
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
}

export interface PatchGroup {
  /**
   * A list of group IDs to add to the group's inheriting-from set
   */
  add_member_groups?: Array<string> | null;

  /**
   * A list of user IDs to add to the group
   */
  add_member_users?: Array<string> | null;

  /**
   * Textual description of the group
   */
  description?: string | null;

  /**
   * Name of the group
   */
  name?: string | null;

  /**
   * A list of group IDs to remove from the group's inheriting-from set
   */
  remove_member_groups?: Array<string> | null;

  /**
   * A list of user IDs to remove from the group
   */
  remove_member_users?: Array<string> | null;
}

export interface PatchOrganization {
  api_url?: string | null;

  is_universal_api?: boolean | null;

  /**
   * Name of the organization
   */
  name?: string | null;

  proxy_url?: string | null;

  realtime_url?: string | null;
}

export interface PatchOrganizationMembers {
  /**
   * Users to invite to the organization
   */
  invite_users?: PatchOrganizationMembers.InviteUsers | null;

  /**
   * For nearly all users, this parameter should be unnecessary. But in the rare case
   * that your API key belongs to multiple organizations, or in case you want to
   * explicitly assert the organization you are modifying, you may specify the id of
   * the organization.
   */
  org_id?: string | null;

  /**
   * For nearly all users, this parameter should be unnecessary. But in the rare case
   * that your API key belongs to multiple organizations, or in case you want to
   * explicitly assert the organization you are modifying, you may specify the name
   * of the organization.
   */
  org_name?: string | null;

  /**
   * Users to remove from the organization
   */
  remove_users?: PatchOrganizationMembers.RemoveUsers | null;
}

export namespace PatchOrganizationMembers {
  /**
   * Users to invite to the organization
   */
  export interface InviteUsers {
    /**
     * Emails of users to invite
     */
    emails?: Array<string> | null;

    /**
     * Optional id of a group to add newly-invited users to. Cannot specify both a
     * group id and a group name.
     */
    group_id?: string | null;

    /**
     * Optional name of a group to add newly-invited users to. Cannot specify both a
     * group id and a group name.
     */
    group_name?: string | null;

    /**
     * Ids of existing users to invite
     */
    ids?: Array<string> | null;

    /**
     * If true, send invite emails to the users who wore actually added
     */
    send_invite_emails?: boolean | null;
  }

  /**
   * Users to remove from the organization
   */
  export interface RemoveUsers {
    /**
     * Emails of users to remove
     */
    emails?: Array<string> | null;

    /**
     * Ids of users to remove
     */
    ids?: Array<string> | null;
  }
}

export interface PatchProject {
  /**
   * Name of the project
   */
  name?: string | null;

  /**
   * Project settings. Patch operations replace all settings, so make sure you
   * include all settings you want to keep.
   */
  settings?: PatchProject.Settings | null;
}

export namespace PatchProject {
  /**
   * Project settings. Patch operations replace all settings, so make sure you
   * include all settings you want to keep.
   */
  export interface Settings {
    /**
     * The key used to join two experiments (defaults to `input`).
     */
    comparison_key?: string | null;
  }
}

export interface PatchProjectScore {
  /**
   * For categorical-type project scores, the list of all categories
   */
  categories?:
    | Array<ProjectScoreCategory>
    | Record<string, number>
    | Array<string>
    | PatchProjectScore.NullableVariant
    | null;

  /**
   * Textual description of the project score
   */
  description?: string | null;

  /**
   * Name of the project score
   */
  name?: string | null;

  /**
   * The type of the configured score
   */
  score_type?: 'slider' | 'categorical' | 'weighted' | 'minimum' | null;
}

export namespace PatchProjectScore {
  export interface NullableVariant {}
}

export interface PatchProjectTag {
  /**
   * Color of the tag for the UI
   */
  color?: string | null;

  /**
   * Textual description of the project tag
   */
  description?: string | null;

  /**
   * Name of the project tag
   */
  name?: string | null;
}

export interface PatchPrompt {
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
  prompt_data?: PromptData | null;

  /**
   * A list of tags for the prompt
   */
  tags?: Array<string> | null;
}

export interface PatchRole {
  /**
   * A list of permissions to add to the role
   */
  add_member_permissions?: Array<PatchRole.AddMemberPermission> | null;

  /**
   * A list of role IDs to add to the role's inheriting-from set
   */
  add_member_roles?: Array<string> | null;

  /**
   * Textual description of the role
   */
  description?: string | null;

  /**
   * Name of the role
   */
  name?: string | null;

  /**
   * A list of permissions to remove from the role
   */
  remove_member_permissions?: Array<PatchRole.RemoveMemberPermission> | null;

  /**
   * A list of role IDs to remove from the role's inheriting-from set
   */
  remove_member_roles?: Array<string> | null;
}

export namespace PatchRole {
  export interface AddMemberPermission {
    /**
     * Each permission permits a certain type of operation on an object in the system
     *
     * Permissions can be assigned to to objects on an individual basis, or grouped
     * into roles
     */
    permission:
      | 'create'
      | 'read'
      | 'update'
      | 'delete'
      | 'create_acls'
      | 'read_acls'
      | 'update_acls'
      | 'delete_acls'
      | null;

    /**
     * The object type that the ACL applies to
     */
    restrict_object_type?:
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
      | 'org_project'
      | null;
  }

  export interface RemoveMemberPermission {
    /**
     * Each permission permits a certain type of operation on an object in the system
     *
     * Permissions can be assigned to to objects on an individual basis, or grouped
     * into roles
     */
    permission:
      | 'create'
      | 'read'
      | 'update'
      | 'delete'
      | 'create_acls'
      | 'read_acls'
      | 'update_acls'
      | 'delete_acls'
      | null;

    /**
     * The object type that the ACL applies to
     */
    restrict_object_type?:
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
      | 'org_project'
      | null;
  }
}

export interface PatchView {
  /**
   * The id of the object the view applies to
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
    | 'org_project'
    | null;

  /**
   * Name of the view
   */
  name?: string | null;

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

  /**
   * Type of table that the view corresponds to.
   */
  view_type?:
    | 'projects'
    | 'logs'
    | 'experiments'
    | 'datasets'
    | 'prompts'
    | 'playgrounds'
    | 'experiment'
    | 'dataset'
    | null;
}

/**
 * A path-lookup filter describes an equality comparison against a specific
 * sub-field in the event row. For instance, if you wish to filter on the value of
 * `c` in `{"input": {"a": {"b": {"c": "hello"}}}}`, pass
 * `path=["input", "a", "b", "c"]` and `value="hello"`
 */
export interface PathLookupFilter {
  /**
   * List of fields describing the path to the value to be checked against. For
   * instance, if you wish to filter on the value of `c` in
   * `{"input": {"a": {"b": {"c": "hello"}}}}`, pass `path=["input", "a", "b", "c"]`
   */
  path: Array<string>;

  /**
   * Denotes the type of filter as a path-lookup filter
   */
  type: 'path_lookup';

  /**
   * The value to compare equality-wise against the event value at the specified
   * `path`. The value must be a "primitive", that is, any JSON-serializable object
   * except for objects and arrays. For instance, if you wish to filter on the value
   * of "input.a.b.c" in the object `{"input": {"a": {"b": {"c": "hello"}}}}`, pass
   * `value="hello"`
   */
  value?: unknown;
}

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

  settings?: Project.Settings | null;

  /**
   * Identifies the user who created the project
   */
  user_id?: string | null;
}

export namespace Project {
  export interface Settings {
    /**
     * The key used to join two experiments (defaults to `input`).
     */
    comparison_key?: string | null;
  }
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
   * The `span_id` of the root of the trace this project logs event belongs to
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
   * A dictionary with additional data about the test example, model outputs, or just
   * about anything else that's relevant, that you can use to help find and analyze
   * examples later. For example, you could log the `prompt`, example's `id`, or
   * anything else that would be useful to slice/dice later. The values in `metadata`
   * can be any JSON-serializable type, but its keys must be strings
   */
  metadata?: Record<string, unknown> | null;

  /**
   * Metrics are numerical measurements tracking the execution of the code that
   * produced the project logs event. Use "start" and "end" to track the time span
   * over which the project logs event was produced
   */
  metrics?: ProjectLogsEvent.Metrics | null;

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
  span_attributes?: ProjectLogsEvent.SpanAttributes | null;

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
   * Metrics are numerical measurements tracking the execution of the code that
   * produced the project logs event. Use "start" and "end" to track the time span
   * over which the project logs event was produced
   */
  export interface Metrics {
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
    [k: string]: unknown;
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
    type?: 'llm' | 'score' | 'function' | 'eval' | 'task' | 'tool' | null;
    [k: string]: unknown;
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
  score_type: 'slider' | 'categorical' | 'weighted' | 'minimum' | null;

  user_id: string;

  /**
   * For categorical-type project scores, the list of all categories
   */
  categories?:
    | Array<ProjectScoreCategory>
    | Record<string, number>
    | Array<string>
    | ProjectScore.NullableVariant
    | null;

  config?: ProjectScore.Config | null;

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

export namespace ProjectScore {
  export interface NullableVariant {}

  export interface Config {
    destination?: 'expected' | null;

    multi_select?: boolean | null;
  }
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

      function_call?: Assistant.FunctionCall | null;

      name?: string | null;

      tool_calls?: Array<Assistant.ToolCall> | null;
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
    permission:
      | 'create'
      | 'read'
      | 'update'
      | 'delete'
      | 'create_acls'
      | 'read_acls'
      | 'update_acls'
      | 'delete_acls'
      | null;

    /**
     * The object type that the ACL applies to
     */
    restrict_object_type?:
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
      | 'org_project'
      | null;
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
    | 'org_project'
    | null;

  /**
   * Type of table that the view corresponds to.
   */
  view_type:
    | 'projects'
    | 'logs'
    | 'experiments'
    | 'datasets'
    | 'prompts'
    | 'playgrounds'
    | 'experiment'
    | 'dataset'
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
}

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
