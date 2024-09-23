# Shared

Types:

- <code><a href="./src/resources/shared.ts">AISecret</a></code>
- <code><a href="./src/resources/shared.ts">ACL</a></code>
- <code><a href="./src/resources/shared.ts">APIKey</a></code>
- <code><a href="./src/resources/shared.ts">CreateAPIKeyOutput</a></code>
- <code><a href="./src/resources/shared.ts">CrossObjectInsertResponse</a></code>
- <code><a href="./src/resources/shared.ts">DataSummary</a></code>
- <code><a href="./src/resources/shared.ts">Dataset</a></code>
- <code><a href="./src/resources/shared.ts">DatasetEvent</a></code>
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
- <code><a href="./src/resources/shared.ts">InsertDatasetEventMerge</a></code>
- <code><a href="./src/resources/shared.ts">InsertDatasetEventReplace</a></code>
- <code><a href="./src/resources/shared.ts">InsertEventsResponse</a></code>
- <code><a href="./src/resources/shared.ts">InsertExperimentEventMerge</a></code>
- <code><a href="./src/resources/shared.ts">InsertExperimentEventReplace</a></code>
- <code><a href="./src/resources/shared.ts">InsertProjectLogsEventMerge</a></code>
- <code><a href="./src/resources/shared.ts">InsertProjectLogsEventReplace</a></code>
- <code><a href="./src/resources/shared.ts">MetricSummary</a></code>
- <code><a href="./src/resources/shared.ts">Organization</a></code>
- <code><a href="./src/resources/shared.ts">PathLookupFilter</a></code>
- <code><a href="./src/resources/shared.ts">Project</a></code>
- <code><a href="./src/resources/shared.ts">ProjectLogsEvent</a></code>
- <code><a href="./src/resources/shared.ts">ProjectScore</a></code>
- <code><a href="./src/resources/shared.ts">ProjectScoreCategory</a></code>
- <code><a href="./src/resources/shared.ts">ProjectTag</a></code>
- <code><a href="./src/resources/shared.ts">Prompt</a></code>
- <code><a href="./src/resources/shared.ts">PromptData</a></code>
- <code><a href="./src/resources/shared.ts">RepoInfo</a></code>
- <code><a href="./src/resources/shared.ts">Role</a></code>
- <code><a href="./src/resources/shared.ts">ScoreSummary</a></code>
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

# Project

Methods:

- <code title="post /v1/project">client.project.<a href="./src/resources/project/project.ts">create</a>({ ...params }) -> Project</code>
- <code title="get /v1/project/{project_id}">client.project.<a href="./src/resources/project/project.ts">retrieve</a>(projectId) -> Project</code>
- <code title="patch /v1/project/{project_id}">client.project.<a href="./src/resources/project/project.ts">update</a>(projectId, { ...params }) -> Project</code>
- <code title="get /v1/project">client.project.<a href="./src/resources/project/project.ts">list</a>({ ...params }) -> ProjectsListObjects</code>
- <code title="delete /v1/project/{project_id}">client.project.<a href="./src/resources/project/project.ts">delete</a>(projectId) -> Project</code>

## Logs

Methods:

- <code title="post /v1/project_logs/{project_id}/feedback">client.project.logs.<a href="./src/resources/project/logs.ts">feedback</a>(projectId, { ...params }) -> FeedbackResponseSchema</code>
- <code title="get /v1/project_logs/{project_id}/fetch">client.project.logs.<a href="./src/resources/project/logs.ts">fetch</a>(projectId, { ...params }) -> FetchProjectLogsEventsResponse</code>
- <code title="post /v1/project_logs/{project_id}/fetch">client.project.logs.<a href="./src/resources/project/logs.ts">fetchPost</a>(projectId, { ...params }) -> FetchProjectLogsEventsResponse</code>
- <code title="post /v1/project_logs/{project_id}/insert">client.project.logs.<a href="./src/resources/project/logs.ts">insert</a>(projectId, { ...params }) -> InsertEventsResponse</code>

# Experiment

Methods:

- <code title="post /v1/experiment">client.experiment.<a href="./src/resources/experiment.ts">create</a>({ ...params }) -> Experiment</code>
- <code title="get /v1/experiment/{experiment_id}">client.experiment.<a href="./src/resources/experiment.ts">retrieve</a>(experimentId) -> Experiment</code>
- <code title="patch /v1/experiment/{experiment_id}">client.experiment.<a href="./src/resources/experiment.ts">update</a>(experimentId, { ...params }) -> Experiment</code>
- <code title="get /v1/experiment">client.experiment.<a href="./src/resources/experiment.ts">list</a>({ ...params }) -> ExperimentsListObjects</code>
- <code title="delete /v1/experiment/{experiment_id}">client.experiment.<a href="./src/resources/experiment.ts">delete</a>(experimentId) -> Experiment</code>
- <code title="post /v1/experiment/{experiment_id}/feedback">client.experiment.<a href="./src/resources/experiment.ts">feedback</a>(experimentId, { ...params }) -> FeedbackResponseSchema</code>
- <code title="get /v1/experiment/{experiment_id}/fetch">client.experiment.<a href="./src/resources/experiment.ts">fetch</a>(experimentId, { ...params }) -> FetchExperimentEventsResponse</code>
- <code title="post /v1/experiment/{experiment_id}/fetch">client.experiment.<a href="./src/resources/experiment.ts">fetchPost</a>(experimentId, { ...params }) -> FetchExperimentEventsResponse</code>
- <code title="post /v1/experiment/{experiment_id}/insert">client.experiment.<a href="./src/resources/experiment.ts">insert</a>(experimentId, { ...params }) -> InsertEventsResponse</code>
- <code title="get /v1/experiment/{experiment_id}/summarize">client.experiment.<a href="./src/resources/experiment.ts">summarize</a>(experimentId, { ...params }) -> SummarizeExperimentResponse</code>

# Dataset

Methods:

- <code title="post /v1/dataset">client.dataset.<a href="./src/resources/dataset.ts">create</a>({ ...params }) -> Dataset</code>
- <code title="get /v1/dataset/{dataset_id}">client.dataset.<a href="./src/resources/dataset.ts">retrieve</a>(datasetId) -> Dataset</code>
- <code title="patch /v1/dataset/{dataset_id}">client.dataset.<a href="./src/resources/dataset.ts">update</a>(datasetId, { ...params }) -> Dataset</code>
- <code title="get /v1/dataset">client.dataset.<a href="./src/resources/dataset.ts">list</a>({ ...params }) -> DatasetsListObjects</code>
- <code title="delete /v1/dataset/{dataset_id}">client.dataset.<a href="./src/resources/dataset.ts">delete</a>(datasetId) -> Dataset</code>
- <code title="post /v1/dataset/{dataset_id}/feedback">client.dataset.<a href="./src/resources/dataset.ts">feedback</a>(datasetId, { ...params }) -> FeedbackResponseSchema</code>
- <code title="get /v1/dataset/{dataset_id}/fetch">client.dataset.<a href="./src/resources/dataset.ts">fetch</a>(datasetId, { ...params }) -> FetchDatasetEventsResponse</code>
- <code title="post /v1/dataset/{dataset_id}/fetch">client.dataset.<a href="./src/resources/dataset.ts">fetchPost</a>(datasetId, { ...params }) -> FetchDatasetEventsResponse</code>
- <code title="post /v1/dataset/{dataset_id}/insert">client.dataset.<a href="./src/resources/dataset.ts">insert</a>(datasetId, { ...params }) -> InsertEventsResponse</code>
- <code title="get /v1/dataset/{dataset_id}/summarize">client.dataset.<a href="./src/resources/dataset.ts">summarize</a>(datasetId, { ...params }) -> SummarizeDatasetResponse</code>

# Prompt

Methods:

- <code title="post /v1/prompt">client.prompt.<a href="./src/resources/prompt.ts">create</a>({ ...params }) -> Prompt</code>
- <code title="get /v1/prompt/{prompt_id}">client.prompt.<a href="./src/resources/prompt.ts">retrieve</a>(promptId) -> Prompt</code>
- <code title="patch /v1/prompt/{prompt_id}">client.prompt.<a href="./src/resources/prompt.ts">update</a>(promptId, { ...params }) -> Prompt</code>
- <code title="get /v1/prompt">client.prompt.<a href="./src/resources/prompt.ts">list</a>({ ...params }) -> PromptsListObjects</code>
- <code title="delete /v1/prompt/{prompt_id}">client.prompt.<a href="./src/resources/prompt.ts">delete</a>(promptId) -> Prompt</code>
- <code title="put /v1/prompt">client.prompt.<a href="./src/resources/prompt.ts">replace</a>({ ...params }) -> Prompt</code>

# Role

Methods:

- <code title="post /v1/role">client.role.<a href="./src/resources/role.ts">create</a>({ ...params }) -> Role</code>
- <code title="get /v1/role/{role_id}">client.role.<a href="./src/resources/role.ts">retrieve</a>(roleId) -> Role</code>
- <code title="patch /v1/role/{role_id}">client.role.<a href="./src/resources/role.ts">update</a>(roleId, { ...params }) -> Role</code>
- <code title="get /v1/role">client.role.<a href="./src/resources/role.ts">list</a>({ ...params }) -> RolesListObjects</code>
- <code title="delete /v1/role/{role_id}">client.role.<a href="./src/resources/role.ts">delete</a>(roleId) -> Role</code>
- <code title="put /v1/role">client.role.<a href="./src/resources/role.ts">replace</a>({ ...params }) -> Role</code>

# Group

Methods:

- <code title="post /v1/group">client.group.<a href="./src/resources/group.ts">create</a>({ ...params }) -> Group</code>
- <code title="get /v1/group/{group_id}">client.group.<a href="./src/resources/group.ts">retrieve</a>(groupId) -> Group</code>
- <code title="patch /v1/group/{group_id}">client.group.<a href="./src/resources/group.ts">update</a>(groupId, { ...params }) -> Group</code>
- <code title="get /v1/group">client.group.<a href="./src/resources/group.ts">list</a>({ ...params }) -> GroupsListObjects</code>
- <code title="delete /v1/group/{group_id}">client.group.<a href="./src/resources/group.ts">delete</a>(groupId) -> Group</code>
- <code title="put /v1/group">client.group.<a href="./src/resources/group.ts">replace</a>({ ...params }) -> Group</code>

# ACL

Types:

- <code><a href="./src/resources/acl.ts">ACLBatchUpdateResponse</a></code>

Methods:

- <code title="post /v1/acl">client.acl.<a href="./src/resources/acl.ts">create</a>({ ...params }) -> ACL</code>
- <code title="get /v1/acl/{acl_id}">client.acl.<a href="./src/resources/acl.ts">retrieve</a>(aclId) -> ACL</code>
- <code title="get /v1/acl">client.acl.<a href="./src/resources/acl.ts">list</a>({ ...params }) -> ACLsListObjects</code>
- <code title="delete /v1/acl/{acl_id}">client.acl.<a href="./src/resources/acl.ts">delete</a>(aclId) -> ACL</code>
- <code title="post /v1/acl/batch-update">client.acl.<a href="./src/resources/acl.ts">batchUpdate</a>({ ...params }) -> ACLBatchUpdateResponse</code>
- <code title="delete /v1/acl">client.acl.<a href="./src/resources/acl.ts">findAndDelete</a>({ ...params }) -> ACL</code>

# User

Methods:

- <code title="get /v1/user/{user_id}">client.user.<a href="./src/resources/user.ts">retrieve</a>(userId) -> User</code>
- <code title="get /v1/user">client.user.<a href="./src/resources/user.ts">list</a>({ ...params }) -> UsersListObjects</code>

# ProjectScore

Methods:

- <code title="post /v1/project_score">client.projectScore.<a href="./src/resources/project-score.ts">create</a>({ ...params }) -> ProjectScore</code>
- <code title="get /v1/project_score/{project_score_id}">client.projectScore.<a href="./src/resources/project-score.ts">retrieve</a>(projectScoreId) -> ProjectScore</code>
- <code title="patch /v1/project_score/{project_score_id}">client.projectScore.<a href="./src/resources/project-score.ts">update</a>(projectScoreId, { ...params }) -> ProjectScore</code>
- <code title="get /v1/project_score">client.projectScore.<a href="./src/resources/project-score.ts">list</a>({ ...params }) -> ProjectScoresListObjects</code>
- <code title="delete /v1/project_score/{project_score_id}">client.projectScore.<a href="./src/resources/project-score.ts">delete</a>(projectScoreId) -> ProjectScore</code>
- <code title="put /v1/project_score">client.projectScore.<a href="./src/resources/project-score.ts">replace</a>({ ...params }) -> ProjectScore</code>

# ProjectTag

Methods:

- <code title="post /v1/project_tag">client.projectTag.<a href="./src/resources/project-tag.ts">create</a>({ ...params }) -> ProjectTag</code>
- <code title="get /v1/project_tag/{project_tag_id}">client.projectTag.<a href="./src/resources/project-tag.ts">retrieve</a>(projectTagId) -> ProjectTag</code>
- <code title="patch /v1/project_tag/{project_tag_id}">client.projectTag.<a href="./src/resources/project-tag.ts">update</a>(projectTagId, { ...params }) -> ProjectTag</code>
- <code title="get /v1/project_tag">client.projectTag.<a href="./src/resources/project-tag.ts">list</a>({ ...params }) -> ProjectTagsListObjects</code>
- <code title="delete /v1/project_tag/{project_tag_id}">client.projectTag.<a href="./src/resources/project-tag.ts">delete</a>(projectTagId) -> ProjectTag</code>
- <code title="put /v1/project_tag">client.projectTag.<a href="./src/resources/project-tag.ts">replace</a>({ ...params }) -> ProjectTag</code>

# Function

Types:

- <code><a href="./src/resources/function.ts">FunctionInvokeResponse</a></code>

Methods:

- <code title="post /v1/function">client.function.<a href="./src/resources/function.ts">create</a>({ ...params }) -> Function</code>
- <code title="get /v1/function/{function_id}">client.function.<a href="./src/resources/function.ts">retrieve</a>(functionId) -> Function</code>
- <code title="patch /v1/function/{function_id}">client.function.<a href="./src/resources/function.ts">update</a>(functionId, { ...params }) -> Function</code>
- <code title="get /v1/function">client.function.<a href="./src/resources/function.ts">list</a>({ ...params }) -> FunctionsListObjects</code>
- <code title="delete /v1/function/{function_id}">client.function.<a href="./src/resources/function.ts">delete</a>(functionId) -> Function</code>
- <code title="post /v1/function/{function_id}/invoke">client.function.<a href="./src/resources/function.ts">invoke</a>(functionId, { ...params }) -> unknown</code>
- <code title="put /v1/function">client.function.<a href="./src/resources/function.ts">replace</a>({ ...params }) -> Function</code>

# View

Methods:

- <code title="post /v1/view">client.view.<a href="./src/resources/view.ts">create</a>({ ...params }) -> View</code>
- <code title="get /v1/view/{view_id}">client.view.<a href="./src/resources/view.ts">retrieve</a>(viewId, { ...params }) -> View</code>
- <code title="patch /v1/view/{view_id}">client.view.<a href="./src/resources/view.ts">update</a>(viewId, { ...params }) -> View</code>
- <code title="get /v1/view">client.view.<a href="./src/resources/view.ts">list</a>({ ...params }) -> ViewsListObjects</code>
- <code title="delete /v1/view/{view_id}">client.view.<a href="./src/resources/view.ts">delete</a>(viewId, { ...params }) -> View</code>
- <code title="put /v1/view">client.view.<a href="./src/resources/view.ts">replace</a>({ ...params }) -> View</code>

# Organization

Methods:

- <code title="get /v1/organization/{organization_id}">client.organization.<a href="./src/resources/organization/organization.ts">retrieve</a>(organizationId) -> Organization</code>
- <code title="patch /v1/organization/{organization_id}">client.organization.<a href="./src/resources/organization/organization.ts">update</a>(organizationId, { ...params }) -> Organization</code>
- <code title="get /v1/organization">client.organization.<a href="./src/resources/organization/organization.ts">list</a>({ ...params }) -> OrganizationsListObjects</code>
- <code title="delete /v1/organization/{organization_id}">client.organization.<a href="./src/resources/organization/organization.ts">delete</a>(organizationId) -> Organization</code>

## Members

Types:

- <code><a href="./src/resources/organization/members.ts">MemberUpdateResponse</a></code>

Methods:

- <code title="patch /v1/organization/members">client.organization.members.<a href="./src/resources/organization/members.ts">update</a>({ ...params }) -> MemberUpdateResponse</code>

# APIKeyResource

Methods:

- <code title="post /v1/api_key">client.apiKeyResource.<a href="./src/resources/api-key-resource.ts">create</a>({ ...params }) -> CreateAPIKeyOutput</code>
- <code title="get /v1/api_key/{api_key_id}">client.apiKeyResource.<a href="./src/resources/api-key-resource.ts">retrieve</a>(apiKeyId) -> APIKey</code>
- <code title="get /v1/api_key">client.apiKeyResource.<a href="./src/resources/api-key-resource.ts">list</a>({ ...params }) -> APIKeysListObjects</code>
- <code title="delete /v1/api_key/{api_key_id}">client.apiKeyResource.<a href="./src/resources/api-key-resource.ts">delete</a>(apiKeyId) -> APIKey</code>

# AISecret

Methods:

- <code title="post /v1/ai_secret">client.aiSecret.<a href="./src/resources/ai-secret.ts">create</a>({ ...params }) -> AISecret</code>
- <code title="get /v1/ai_secret/{ai_secret_id}">client.aiSecret.<a href="./src/resources/ai-secret.ts">retrieve</a>(aiSecretId) -> AISecret</code>
- <code title="patch /v1/ai_secret/{ai_secret_id}">client.aiSecret.<a href="./src/resources/ai-secret.ts">update</a>(aiSecretId, { ...params }) -> AISecret</code>
- <code title="get /v1/ai_secret">client.aiSecret.<a href="./src/resources/ai-secret.ts">list</a>({ ...params }) -> AISecretsListObjects</code>
- <code title="delete /v1/ai_secret/{ai_secret_id}">client.aiSecret.<a href="./src/resources/ai-secret.ts">delete</a>(aiSecretId) -> AISecret</code>
- <code title="delete /v1/ai_secret">client.aiSecret.<a href="./src/resources/ai-secret.ts">findAndDelete</a>({ ...params }) -> AISecret</code>
- <code title="put /v1/ai_secret">client.aiSecret.<a href="./src/resources/ai-secret.ts">replace</a>({ ...params }) -> AISecret</code>
