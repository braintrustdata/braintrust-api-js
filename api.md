# Shared

Types:

- <code><a href="./src/resources/shared.ts">AISecret</a></code>
- <code><a href="./src/resources/shared.ts">ACL</a></code>
- <code><a href="./src/resources/shared.ts">ACLBatchUpdateResponse</a></code>
- <code><a href="./src/resources/shared.ts">APIKey</a></code>
- <code><a href="./src/resources/shared.ts">ChatCompletionContent</a></code>
- <code><a href="./src/resources/shared.ts">ChatCompletionContentPart</a></code>
- <code><a href="./src/resources/shared.ts">ChatCompletionContentPartImage</a></code>
- <code><a href="./src/resources/shared.ts">ChatCompletionContentPartText</a></code>
- <code><a href="./src/resources/shared.ts">ChatCompletionMessage</a></code>
- <code><a href="./src/resources/shared.ts">ChatCompletionMessageToolCall</a></code>
- <code><a href="./src/resources/shared.ts">CodeBundle</a></code>
- <code><a href="./src/resources/shared.ts">CreateAPIKeyOutput</a></code>
- <code><a href="./src/resources/shared.ts">CrossObjectInsertResponse</a></code>
- <code><a href="./src/resources/shared.ts">DataSummary</a></code>
- <code><a href="./src/resources/shared.ts">Dataset</a></code>
- <code><a href="./src/resources/shared.ts">DatasetEvent</a></code>
- <code><a href="./src/resources/shared.ts">EnvVar</a></code>
- <code><a href="./src/resources/shared.ts">Experiment</a></code>
- <code><a href="./src/resources/shared.ts">ExperimentEvent</a></code>
- <code><a href="./src/resources/shared.ts">FeedbackDatasetItem</a></code>
- <code><a href="./src/resources/shared.ts">FeedbackExperimentItem</a></code>
- <code><a href="./src/resources/shared.ts">FeedbackProjectLogsItem</a></code>
- <code><a href="./src/resources/shared.ts">FeedbackResponseSchema</a></code>
- <code><a href="./src/resources/shared.ts">FetchDatasetEventsResponse</a></code>
- <code><a href="./src/resources/shared.ts">FetchExperimentEventsResponse</a></code>
- <code><a href="./src/resources/shared.ts">FetchProjectLogsEventsResponse</a></code>
- <code><a href="./src/resources/shared.ts">Function</a></code>
- <code><a href="./src/resources/shared.ts">Group</a></code>
- <code><a href="./src/resources/shared.ts">InsertDatasetEvent</a></code>
- <code><a href="./src/resources/shared.ts">InsertEventsResponse</a></code>
- <code><a href="./src/resources/shared.ts">InsertExperimentEvent</a></code>
- <code><a href="./src/resources/shared.ts">InsertProjectLogsEvent</a></code>
- <code><a href="./src/resources/shared.ts">MetricSummary</a></code>
- <code><a href="./src/resources/shared.ts">OnlineScoreConfig</a></code>
- <code><a href="./src/resources/shared.ts">Organization</a></code>
- <code><a href="./src/resources/shared.ts">PatchOrganizationMembersOutput</a></code>
- <code><a href="./src/resources/shared.ts">PathLookupFilter</a></code>
- <code><a href="./src/resources/shared.ts">Project</a></code>
- <code><a href="./src/resources/shared.ts">ProjectLogsEvent</a></code>
- <code><a href="./src/resources/shared.ts">ProjectScore</a></code>
- <code><a href="./src/resources/shared.ts">ProjectScoreCategory</a></code>
- <code><a href="./src/resources/shared.ts">ProjectScoreConfig</a></code>
- <code><a href="./src/resources/shared.ts">ProjectSettings</a></code>
- <code><a href="./src/resources/shared.ts">ProjectTag</a></code>
- <code><a href="./src/resources/shared.ts">Prompt</a></code>
- <code><a href="./src/resources/shared.ts">PromptData</a></code>
- <code><a href="./src/resources/shared.ts">PromptOptions</a></code>
- <code><a href="./src/resources/shared.ts">RepoInfo</a></code>
- <code><a href="./src/resources/shared.ts">Role</a></code>
- <code><a href="./src/resources/shared.ts">ScoreSummary</a></code>
- <code><a href="./src/resources/shared.ts">SpanAttributes</a></code>
- <code><a href="./src/resources/shared.ts">SpanIFrame</a></code>
- <code><a href="./src/resources/shared.ts">SummarizeDatasetResponse</a></code>
- <code><a href="./src/resources/shared.ts">SummarizeExperimentResponse</a></code>
- <code><a href="./src/resources/shared.ts">User</a></code>
- <code><a href="./src/resources/shared.ts">View</a></code>
- <code><a href="./src/resources/shared.ts">ViewData</a></code>
- <code><a href="./src/resources/shared.ts">ViewDataSearch</a></code>
- <code><a href="./src/resources/shared.ts">ViewOptions</a></code>

# TopLevel

Types:

- <code><a href="./src/resources/top-level.ts">TopLevelHelloWorldResponse</a></code>

Methods:

- <code title="get /v1">client.topLevel.<a href="./src/resources/top-level.ts">helloWorld</a>() -> string</code>

# Projects

Methods:

- <code title="post /v1/project">client.projects.<a href="./src/resources/projects/projects.ts">create</a>({ ...params }) -> Project</code>
- <code title="get /v1/project/{project_id}">client.projects.<a href="./src/resources/projects/projects.ts">retrieve</a>(projectId) -> Project</code>
- <code title="patch /v1/project/{project_id}">client.projects.<a href="./src/resources/projects/projects.ts">update</a>(projectId, { ...params }) -> Project</code>
- <code title="get /v1/project">client.projects.<a href="./src/resources/projects/projects.ts">list</a>({ ...params }) -> ProjectsListObjects</code>
- <code title="delete /v1/project/{project_id}">client.projects.<a href="./src/resources/projects/projects.ts">delete</a>(projectId) -> Project</code>

## Logs

Types:

- <code><a href="./src/resources/projects/logs.ts">LogInsertResponse</a></code>

Methods:

- <code title="post /v1/project_logs/{project_id}/feedback">client.projects.logs.<a href="./src/resources/projects/logs.ts">feedback</a>(projectId, { ...params }) -> FeedbackResponseSchema</code>
- <code title="get /v1/project_logs/{project_id}/fetch">client.projects.logs.<a href="./src/resources/projects/logs.ts">fetch</a>(projectId, { ...params }) -> FetchProjectLogsEventsResponse</code>
- <code title="post /v1/project_logs/{project_id}/fetch">client.projects.logs.<a href="./src/resources/projects/logs.ts">fetchPost</a>(projectId, { ...params }) -> FetchProjectLogsEventsResponse</code>
- <code title="post /v1/project_logs/{project_id}/insert">client.projects.logs.<a href="./src/resources/projects/logs.ts">insert</a>(projectId, { ...params }) -> LogInsertResponse</code>

# Experiments

Types:

- <code><a href="./src/resources/experiments.ts">ExperimentInsertResponse</a></code>

Methods:

- <code title="post /v1/experiment">client.experiments.<a href="./src/resources/experiments.ts">create</a>({ ...params }) -> Experiment</code>
- <code title="get /v1/experiment/{experiment_id}">client.experiments.<a href="./src/resources/experiments.ts">retrieve</a>(experimentId) -> Experiment</code>
- <code title="patch /v1/experiment/{experiment_id}">client.experiments.<a href="./src/resources/experiments.ts">update</a>(experimentId, { ...params }) -> Experiment</code>
- <code title="get /v1/experiment">client.experiments.<a href="./src/resources/experiments.ts">list</a>({ ...params }) -> ExperimentsListObjects</code>
- <code title="delete /v1/experiment/{experiment_id}">client.experiments.<a href="./src/resources/experiments.ts">delete</a>(experimentId) -> Experiment</code>
- <code title="post /v1/experiment/{experiment_id}/feedback">client.experiments.<a href="./src/resources/experiments.ts">feedback</a>(experimentId, { ...params }) -> FeedbackResponseSchema</code>
- <code title="get /v1/experiment/{experiment_id}/fetch">client.experiments.<a href="./src/resources/experiments.ts">fetch</a>(experimentId, { ...params }) -> FetchExperimentEventsResponse</code>
- <code title="post /v1/experiment/{experiment_id}/fetch">client.experiments.<a href="./src/resources/experiments.ts">fetchPost</a>(experimentId, { ...params }) -> FetchExperimentEventsResponse</code>
- <code title="post /v1/experiment/{experiment_id}/insert">client.experiments.<a href="./src/resources/experiments.ts">insert</a>(experimentId, { ...params }) -> ExperimentInsertResponse</code>
- <code title="get /v1/experiment/{experiment_id}/summarize">client.experiments.<a href="./src/resources/experiments.ts">summarize</a>(experimentId, { ...params }) -> SummarizeExperimentResponse</code>

# Datasets

Methods:

- <code title="post /v1/dataset">client.datasets.<a href="./src/resources/datasets.ts">create</a>({ ...params }) -> Dataset</code>
- <code title="get /v1/dataset/{dataset_id}">client.datasets.<a href="./src/resources/datasets.ts">retrieve</a>(datasetId) -> Dataset</code>
- <code title="patch /v1/dataset/{dataset_id}">client.datasets.<a href="./src/resources/datasets.ts">update</a>(datasetId, { ...params }) -> Dataset</code>
- <code title="get /v1/dataset">client.datasets.<a href="./src/resources/datasets.ts">list</a>({ ...params }) -> DatasetsListObjects</code>
- <code title="delete /v1/dataset/{dataset_id}">client.datasets.<a href="./src/resources/datasets.ts">delete</a>(datasetId) -> Dataset</code>
- <code title="post /v1/dataset/{dataset_id}/feedback">client.datasets.<a href="./src/resources/datasets.ts">feedback</a>(datasetId, { ...params }) -> FeedbackResponseSchema</code>
- <code title="get /v1/dataset/{dataset_id}/fetch">client.datasets.<a href="./src/resources/datasets.ts">fetch</a>(datasetId, { ...params }) -> FetchDatasetEventsResponse</code>
- <code title="post /v1/dataset/{dataset_id}/fetch">client.datasets.<a href="./src/resources/datasets.ts">fetchPost</a>(datasetId, { ...params }) -> FetchDatasetEventsResponse</code>
- <code title="post /v1/dataset/{dataset_id}/insert">client.datasets.<a href="./src/resources/datasets.ts">insert</a>(datasetId, { ...params }) -> InsertEventsResponse</code>
- <code title="get /v1/dataset/{dataset_id}/summarize">client.datasets.<a href="./src/resources/datasets.ts">summarize</a>(datasetId, { ...params }) -> SummarizeDatasetResponse</code>

# Prompts

Methods:

- <code title="post /v1/prompt">client.prompts.<a href="./src/resources/prompts.ts">create</a>({ ...params }) -> Prompt</code>
- <code title="get /v1/prompt/{prompt_id}">client.prompts.<a href="./src/resources/prompts.ts">retrieve</a>(promptId) -> Prompt</code>
- <code title="patch /v1/prompt/{prompt_id}">client.prompts.<a href="./src/resources/prompts.ts">update</a>(promptId, { ...params }) -> Prompt</code>
- <code title="get /v1/prompt">client.prompts.<a href="./src/resources/prompts.ts">list</a>({ ...params }) -> PromptsListObjects</code>
- <code title="delete /v1/prompt/{prompt_id}">client.prompts.<a href="./src/resources/prompts.ts">delete</a>(promptId) -> Prompt</code>
- <code title="put /v1/prompt">client.prompts.<a href="./src/resources/prompts.ts">replace</a>({ ...params }) -> Prompt</code>

# Roles

Methods:

- <code title="post /v1/role">client.roles.<a href="./src/resources/roles.ts">create</a>({ ...params }) -> Role</code>
- <code title="get /v1/role/{role_id}">client.roles.<a href="./src/resources/roles.ts">retrieve</a>(roleId) -> Role</code>
- <code title="patch /v1/role/{role_id}">client.roles.<a href="./src/resources/roles.ts">update</a>(roleId, { ...params }) -> Role</code>
- <code title="get /v1/role">client.roles.<a href="./src/resources/roles.ts">list</a>({ ...params }) -> RolesListObjects</code>
- <code title="delete /v1/role/{role_id}">client.roles.<a href="./src/resources/roles.ts">delete</a>(roleId) -> Role</code>
- <code title="put /v1/role">client.roles.<a href="./src/resources/roles.ts">replace</a>({ ...params }) -> Role</code>

# Groups

Methods:

- <code title="post /v1/group">client.groups.<a href="./src/resources/groups.ts">create</a>({ ...params }) -> Group</code>
- <code title="get /v1/group/{group_id}">client.groups.<a href="./src/resources/groups.ts">retrieve</a>(groupId) -> Group</code>
- <code title="patch /v1/group/{group_id}">client.groups.<a href="./src/resources/groups.ts">update</a>(groupId, { ...params }) -> Group</code>
- <code title="get /v1/group">client.groups.<a href="./src/resources/groups.ts">list</a>({ ...params }) -> GroupsListObjects</code>
- <code title="delete /v1/group/{group_id}">client.groups.<a href="./src/resources/groups.ts">delete</a>(groupId) -> Group</code>
- <code title="put /v1/group">client.groups.<a href="./src/resources/groups.ts">replace</a>({ ...params }) -> Group</code>

# ACLs

Methods:

- <code title="post /v1/acl">client.acls.<a href="./src/resources/acls.ts">create</a>({ ...params }) -> ACL</code>
- <code title="get /v1/acl/{acl_id}">client.acls.<a href="./src/resources/acls.ts">retrieve</a>(aclId) -> ACL</code>
- <code title="get /v1/acl">client.acls.<a href="./src/resources/acls.ts">list</a>({ ...params }) -> ACLsListObjects</code>
- <code title="delete /v1/acl/{acl_id}">client.acls.<a href="./src/resources/acls.ts">delete</a>(aclId) -> ACL</code>
- <code title="post /v1/acl/batch-update">client.acls.<a href="./src/resources/acls.ts">batchUpdate</a>({ ...params }) -> ACLBatchUpdateResponse</code>
- <code title="delete /v1/acl">client.acls.<a href="./src/resources/acls.ts">findAndDelete</a>({ ...params }) -> ACL</code>

# Users

Methods:

- <code title="get /v1/user/{user_id}">client.users.<a href="./src/resources/users.ts">retrieve</a>(userId) -> User</code>
- <code title="get /v1/user">client.users.<a href="./src/resources/users.ts">list</a>({ ...params }) -> UsersListObjects</code>

# ProjectScores

Methods:

- <code title="post /v1/project_score">client.projectScores.<a href="./src/resources/project-scores.ts">create</a>({ ...params }) -> ProjectScore</code>
- <code title="get /v1/project_score/{project_score_id}">client.projectScores.<a href="./src/resources/project-scores.ts">retrieve</a>(projectScoreId) -> ProjectScore</code>
- <code title="patch /v1/project_score/{project_score_id}">client.projectScores.<a href="./src/resources/project-scores.ts">update</a>(projectScoreId, { ...params }) -> ProjectScore</code>
- <code title="get /v1/project_score">client.projectScores.<a href="./src/resources/project-scores.ts">list</a>({ ...params }) -> ProjectScoresListObjects</code>
- <code title="delete /v1/project_score/{project_score_id}">client.projectScores.<a href="./src/resources/project-scores.ts">delete</a>(projectScoreId) -> ProjectScore</code>
- <code title="put /v1/project_score">client.projectScores.<a href="./src/resources/project-scores.ts">replace</a>({ ...params }) -> ProjectScore</code>

# ProjectTags

Methods:

- <code title="post /v1/project_tag">client.projectTags.<a href="./src/resources/project-tags.ts">create</a>({ ...params }) -> ProjectTag</code>
- <code title="get /v1/project_tag/{project_tag_id}">client.projectTags.<a href="./src/resources/project-tags.ts">retrieve</a>(projectTagId) -> ProjectTag</code>
- <code title="patch /v1/project_tag/{project_tag_id}">client.projectTags.<a href="./src/resources/project-tags.ts">update</a>(projectTagId, { ...params }) -> ProjectTag</code>
- <code title="get /v1/project_tag">client.projectTags.<a href="./src/resources/project-tags.ts">list</a>({ ...params }) -> ProjectTagsListObjects</code>
- <code title="delete /v1/project_tag/{project_tag_id}">client.projectTags.<a href="./src/resources/project-tags.ts">delete</a>(projectTagId) -> ProjectTag</code>
- <code title="put /v1/project_tag">client.projectTags.<a href="./src/resources/project-tags.ts">replace</a>({ ...params }) -> ProjectTag</code>

# SpanIframes

Methods:

- <code title="post /v1/span_iframe">client.spanIframes.<a href="./src/resources/span-iframes.ts">create</a>({ ...params }) -> SpanIFrame</code>
- <code title="get /v1/span_iframe/{span_iframe_id}">client.spanIframes.<a href="./src/resources/span-iframes.ts">retrieve</a>(spanIframeId) -> SpanIFrame</code>
- <code title="patch /v1/span_iframe/{span_iframe_id}">client.spanIframes.<a href="./src/resources/span-iframes.ts">update</a>(spanIframeId, { ...params }) -> SpanIFrame</code>
- <code title="get /v1/span_iframe">client.spanIframes.<a href="./src/resources/span-iframes.ts">list</a>({ ...params }) -> SpanIFramesListObjects</code>
- <code title="delete /v1/span_iframe/{span_iframe_id}">client.spanIframes.<a href="./src/resources/span-iframes.ts">delete</a>(spanIframeId) -> SpanIFrame</code>
- <code title="put /v1/span_iframe">client.spanIframes.<a href="./src/resources/span-iframes.ts">replace</a>({ ...params }) -> SpanIFrame</code>

# Functions

Types:

- <code><a href="./src/resources/functions.ts">FunctionInvokeResponse</a></code>

Methods:

- <code title="post /v1/function">client.functions.<a href="./src/resources/functions.ts">create</a>({ ...params }) -> Function</code>
- <code title="get /v1/function/{function_id}">client.functions.<a href="./src/resources/functions.ts">retrieve</a>(functionId) -> Function</code>
- <code title="patch /v1/function/{function_id}">client.functions.<a href="./src/resources/functions.ts">update</a>(functionId, { ...params }) -> Function</code>
- <code title="get /v1/function">client.functions.<a href="./src/resources/functions.ts">list</a>({ ...params }) -> FunctionsListObjects</code>
- <code title="delete /v1/function/{function_id}">client.functions.<a href="./src/resources/functions.ts">delete</a>(functionId) -> Function</code>
- <code title="post /v1/function/{function_id}/invoke">client.functions.<a href="./src/resources/functions.ts">invoke</a>(functionId, { ...params }) -> unknown</code>
- <code title="put /v1/function">client.functions.<a href="./src/resources/functions.ts">replace</a>({ ...params }) -> Function</code>

# Views

Methods:

- <code title="post /v1/view">client.views.<a href="./src/resources/views.ts">create</a>({ ...params }) -> View</code>
- <code title="get /v1/view/{view_id}">client.views.<a href="./src/resources/views.ts">retrieve</a>(viewId, { ...params }) -> View</code>
- <code title="patch /v1/view/{view_id}">client.views.<a href="./src/resources/views.ts">update</a>(viewId, { ...params }) -> View</code>
- <code title="get /v1/view">client.views.<a href="./src/resources/views.ts">list</a>({ ...params }) -> ViewsListObjects</code>
- <code title="delete /v1/view/{view_id}">client.views.<a href="./src/resources/views.ts">delete</a>(viewId, { ...params }) -> View</code>
- <code title="put /v1/view">client.views.<a href="./src/resources/views.ts">replace</a>({ ...params }) -> View</code>

# Organizations

Methods:

- <code title="get /v1/organization/{organization_id}">client.organizations.<a href="./src/resources/organizations/organizations.ts">retrieve</a>(organizationId) -> Organization</code>
- <code title="patch /v1/organization/{organization_id}">client.organizations.<a href="./src/resources/organizations/organizations.ts">update</a>(organizationId, { ...params }) -> Organization</code>
- <code title="get /v1/organization">client.organizations.<a href="./src/resources/organizations/organizations.ts">list</a>({ ...params }) -> OrganizationsListObjects</code>
- <code title="delete /v1/organization/{organization_id}">client.organizations.<a href="./src/resources/organizations/organizations.ts">delete</a>(organizationId) -> Organization</code>

## Members

Methods:

- <code title="patch /v1/organization/members">client.organizations.members.<a href="./src/resources/organizations/members.ts">update</a>({ ...params }) -> PatchOrganizationMembersOutput</code>

# APIKeys

Methods:

- <code title="post /v1/api_key">client.apiKeys.<a href="./src/resources/api-keys.ts">create</a>({ ...params }) -> CreateAPIKeyOutput</code>
- <code title="get /v1/api_key/{api_key_id}">client.apiKeys.<a href="./src/resources/api-keys.ts">retrieve</a>(apiKeyId) -> APIKey</code>
- <code title="get /v1/api_key">client.apiKeys.<a href="./src/resources/api-keys.ts">list</a>({ ...params }) -> APIKeysListObjects</code>
- <code title="delete /v1/api_key/{api_key_id}">client.apiKeys.<a href="./src/resources/api-keys.ts">delete</a>(apiKeyId) -> APIKey</code>

# AISecrets

Methods:

- <code title="post /v1/ai_secret">client.aiSecrets.<a href="./src/resources/ai-secrets.ts">create</a>({ ...params }) -> AISecret</code>
- <code title="get /v1/ai_secret/{ai_secret_id}">client.aiSecrets.<a href="./src/resources/ai-secrets.ts">retrieve</a>(aiSecretId) -> AISecret</code>
- <code title="patch /v1/ai_secret/{ai_secret_id}">client.aiSecrets.<a href="./src/resources/ai-secrets.ts">update</a>(aiSecretId, { ...params }) -> AISecret</code>
- <code title="get /v1/ai_secret">client.aiSecrets.<a href="./src/resources/ai-secrets.ts">list</a>({ ...params }) -> AISecretsListObjects</code>
- <code title="delete /v1/ai_secret/{ai_secret_id}">client.aiSecrets.<a href="./src/resources/ai-secrets.ts">delete</a>(aiSecretId) -> AISecret</code>
- <code title="delete /v1/ai_secret">client.aiSecrets.<a href="./src/resources/ai-secrets.ts">findAndDelete</a>({ ...params }) -> AISecret</code>
- <code title="put /v1/ai_secret">client.aiSecrets.<a href="./src/resources/ai-secrets.ts">replace</a>({ ...params }) -> AISecret</code>

# EnvVars

Types:

- <code><a href="./src/resources/env-vars.ts">EnvVarListResponse</a></code>

Methods:

- <code title="post /v1/env_var">client.envVars.<a href="./src/resources/env-vars.ts">create</a>({ ...params }) -> EnvVar</code>
- <code title="get /v1/env_var/{env_var_id}">client.envVars.<a href="./src/resources/env-vars.ts">retrieve</a>(envVarId) -> EnvVar</code>
- <code title="patch /v1/env_var/{env_var_id}">client.envVars.<a href="./src/resources/env-vars.ts">update</a>(envVarId, { ...params }) -> EnvVar</code>
- <code title="get /v1/env_var">client.envVars.<a href="./src/resources/env-vars.ts">list</a>({ ...params }) -> EnvVarListResponse</code>
- <code title="delete /v1/env_var/{env_var_id}">client.envVars.<a href="./src/resources/env-vars.ts">delete</a>(envVarId) -> EnvVar</code>
- <code title="put /v1/env_var">client.envVars.<a href="./src/resources/env-vars.ts">replace</a>({ ...params }) -> EnvVar</code>

# Evals

Methods:

- <code title="post /v1/eval">client.evals.<a href="./src/resources/evals.ts">create</a>({ ...params }) -> SummarizeExperimentResponse</code>
