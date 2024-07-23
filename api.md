# TopLevel

Types:

- <code><a href="./src/resources/top-level.ts">TopLevelHelloWorldResponse</a></code>

Methods:

- <code title="get /v1">client.topLevel.<a href="./src/resources/top-level.ts">helloWorld</a>() -> string</code>

# Project

Types:

- <code><a href="./src/resources/project/project.ts">Project</a></code>

Methods:

- <code title="post /v1/project">client.project.<a href="./src/resources/project/project.ts">create</a>({ ...params }) -> Project</code>
- <code title="get /v1/project/{project_id}">client.project.<a href="./src/resources/project/project.ts">retrieve</a>(projectId) -> Project</code>
- <code title="patch /v1/project/{project_id}">client.project.<a href="./src/resources/project/project.ts">update</a>(projectId, { ...params }) -> Project</code>
- <code title="get /v1/project">client.project.<a href="./src/resources/project/project.ts">list</a>({ ...params }) -> ProjectsListObjects</code>
- <code title="delete /v1/project/{project_id}">client.project.<a href="./src/resources/project/project.ts">delete</a>(projectId) -> Project</code>

## Logs

Types:

- <code><a href="./src/resources/project/logs.ts">LogFetchResponse</a></code>
- <code><a href="./src/resources/project/logs.ts">LogFetchPostResponse</a></code>
- <code><a href="./src/resources/project/logs.ts">LogInsertResponse</a></code>

Methods:

- <code title="post /v1/project_logs/{project_id}/feedback">client.project.logs.<a href="./src/resources/project/logs.ts">feedback</a>(projectId, { ...params }) -> void</code>
- <code title="get /v1/project_logs/{project_id}/fetch">client.project.logs.<a href="./src/resources/project/logs.ts">fetch</a>(projectId, { ...params }) -> LogFetchResponse</code>
- <code title="post /v1/project_logs/{project_id}/fetch">client.project.logs.<a href="./src/resources/project/logs.ts">fetchPost</a>(projectId, { ...params }) -> LogFetchPostResponse</code>
- <code title="post /v1/project_logs/{project_id}/insert">client.project.logs.<a href="./src/resources/project/logs.ts">insert</a>(projectId, { ...params }) -> LogInsertResponse</code>

# Experiment

Types:

- <code><a href="./src/resources/experiment.ts">Experiment</a></code>
- <code><a href="./src/resources/experiment.ts">ExperimentFetchResponse</a></code>
- <code><a href="./src/resources/experiment.ts">ExperimentFetchPostResponse</a></code>
- <code><a href="./src/resources/experiment.ts">ExperimentInsertResponse</a></code>
- <code><a href="./src/resources/experiment.ts">ExperimentSummarizeResponse</a></code>

Methods:

- <code title="post /v1/experiment">client.experiment.<a href="./src/resources/experiment.ts">create</a>({ ...params }) -> Experiment</code>
- <code title="get /v1/experiment/{experiment_id}">client.experiment.<a href="./src/resources/experiment.ts">retrieve</a>(experimentId) -> Experiment</code>
- <code title="patch /v1/experiment/{experiment_id}">client.experiment.<a href="./src/resources/experiment.ts">update</a>(experimentId, { ...params }) -> Experiment</code>
- <code title="get /v1/experiment">client.experiment.<a href="./src/resources/experiment.ts">list</a>({ ...params }) -> ExperimentsListObjects</code>
- <code title="delete /v1/experiment/{experiment_id}">client.experiment.<a href="./src/resources/experiment.ts">delete</a>(experimentId) -> Experiment</code>
- <code title="post /v1/experiment/{experiment_id}/feedback">client.experiment.<a href="./src/resources/experiment.ts">feedback</a>(experimentId, { ...params }) -> void</code>
- <code title="get /v1/experiment/{experiment_id}/fetch">client.experiment.<a href="./src/resources/experiment.ts">fetch</a>(experimentId, { ...params }) -> ExperimentFetchResponse</code>
- <code title="post /v1/experiment/{experiment_id}/fetch">client.experiment.<a href="./src/resources/experiment.ts">fetchPost</a>(experimentId, { ...params }) -> ExperimentFetchPostResponse</code>
- <code title="post /v1/experiment/{experiment_id}/insert">client.experiment.<a href="./src/resources/experiment.ts">insert</a>(experimentId, { ...params }) -> ExperimentInsertResponse</code>
- <code title="get /v1/experiment/{experiment_id}/summarize">client.experiment.<a href="./src/resources/experiment.ts">summarize</a>(experimentId, { ...params }) -> ExperimentSummarizeResponse</code>

# Dataset

Types:

- <code><a href="./src/resources/dataset.ts">Dataset</a></code>
- <code><a href="./src/resources/dataset.ts">DatasetFetchResponse</a></code>
- <code><a href="./src/resources/dataset.ts">DatasetFetchPostResponse</a></code>
- <code><a href="./src/resources/dataset.ts">DatasetInsertResponse</a></code>
- <code><a href="./src/resources/dataset.ts">DatasetSummarizeResponse</a></code>

Methods:

- <code title="post /v1/dataset">client.dataset.<a href="./src/resources/dataset.ts">create</a>({ ...params }) -> Dataset</code>
- <code title="get /v1/dataset/{dataset_id}">client.dataset.<a href="./src/resources/dataset.ts">retrieve</a>(datasetId) -> Dataset</code>
- <code title="patch /v1/dataset/{dataset_id}">client.dataset.<a href="./src/resources/dataset.ts">update</a>(datasetId, { ...params }) -> Dataset</code>
- <code title="get /v1/dataset">client.dataset.<a href="./src/resources/dataset.ts">list</a>({ ...params }) -> DatasetsListObjects</code>
- <code title="delete /v1/dataset/{dataset_id}">client.dataset.<a href="./src/resources/dataset.ts">delete</a>(datasetId) -> Dataset</code>
- <code title="post /v1/dataset/{dataset_id}/feedback">client.dataset.<a href="./src/resources/dataset.ts">feedback</a>(datasetId, { ...params }) -> void</code>
- <code title="get /v1/dataset/{dataset_id}/fetch">client.dataset.<a href="./src/resources/dataset.ts">fetch</a>(datasetId, { ...params }) -> DatasetFetchResponse</code>
- <code title="post /v1/dataset/{dataset_id}/fetch">client.dataset.<a href="./src/resources/dataset.ts">fetchPost</a>(datasetId, { ...params }) -> DatasetFetchPostResponse</code>
- <code title="post /v1/dataset/{dataset_id}/insert">client.dataset.<a href="./src/resources/dataset.ts">insert</a>(datasetId, { ...params }) -> DatasetInsertResponse</code>
- <code title="get /v1/dataset/{dataset_id}/summarize">client.dataset.<a href="./src/resources/dataset.ts">summarize</a>(datasetId, { ...params }) -> DatasetSummarizeResponse</code>

# Prompt

Types:

- <code><a href="./src/resources/prompt.ts">Prompt</a></code>

Methods:

- <code title="post /v1/prompt">client.prompt.<a href="./src/resources/prompt.ts">create</a>({ ...params }) -> Prompt</code>
- <code title="get /v1/prompt/{prompt_id}">client.prompt.<a href="./src/resources/prompt.ts">retrieve</a>(promptId) -> Prompt</code>
- <code title="patch /v1/prompt/{prompt_id}">client.prompt.<a href="./src/resources/prompt.ts">update</a>(promptId, { ...params }) -> Prompt</code>
- <code title="get /v1/prompt">client.prompt.<a href="./src/resources/prompt.ts">list</a>({ ...params }) -> PromptsListObjects</code>
- <code title="delete /v1/prompt/{prompt_id}">client.prompt.<a href="./src/resources/prompt.ts">delete</a>(promptId) -> Prompt</code>
- <code title="post /v1/prompt/{prompt_id}/feedback">client.prompt.<a href="./src/resources/prompt.ts">feedback</a>(promptId, { ...params }) -> void</code>
- <code title="put /v1/prompt">client.prompt.<a href="./src/resources/prompt.ts">replace</a>({ ...params }) -> Prompt</code>

# Role

Types:

- <code><a href="./src/resources/role.ts">Role</a></code>

Methods:

- <code title="post /v1/role">client.role.<a href="./src/resources/role.ts">create</a>({ ...params }) -> Role</code>
- <code title="get /v1/role/{role_id}">client.role.<a href="./src/resources/role.ts">retrieve</a>(roleId) -> Role</code>
- <code title="patch /v1/role/{role_id}">client.role.<a href="./src/resources/role.ts">update</a>(roleId, { ...params }) -> Role</code>
- <code title="get /v1/role">client.role.<a href="./src/resources/role.ts">list</a>({ ...params }) -> RolesListObjects</code>
- <code title="delete /v1/role/{role_id}">client.role.<a href="./src/resources/role.ts">delete</a>(roleId) -> Role</code>
- <code title="put /v1/role">client.role.<a href="./src/resources/role.ts">replace</a>({ ...params }) -> Role</code>

# Group

Types:

- <code><a href="./src/resources/group.ts">Group</a></code>

Methods:

- <code title="post /v1/group">client.group.<a href="./src/resources/group.ts">create</a>({ ...params }) -> Group</code>
- <code title="get /v1/group/{group_id}">client.group.<a href="./src/resources/group.ts">retrieve</a>(groupId) -> Group</code>
- <code title="patch /v1/group/{group_id}">client.group.<a href="./src/resources/group.ts">update</a>(groupId, { ...params }) -> Group</code>
- <code title="get /v1/group">client.group.<a href="./src/resources/group.ts">list</a>({ ...params }) -> GroupsListObjects</code>
- <code title="delete /v1/group/{group_id}">client.group.<a href="./src/resources/group.ts">delete</a>(groupId) -> Group</code>
- <code title="put /v1/group">client.group.<a href="./src/resources/group.ts">replace</a>({ ...params }) -> Group</code>

# ACL

Types:

- <code><a href="./src/resources/acl.ts">ACL</a></code>

Methods:

- <code title="post /v1/acl">client.acl.<a href="./src/resources/acl.ts">create</a>({ ...params }) -> ACL</code>
- <code title="get /v1/acl/{acl_id}">client.acl.<a href="./src/resources/acl.ts">retrieve</a>(aclId) -> ACL</code>
- <code title="get /v1/acl">client.acl.<a href="./src/resources/acl.ts">list</a>({ ...params }) -> ACLsListObjects</code>
- <code title="delete /v1/acl/{acl_id}">client.acl.<a href="./src/resources/acl.ts">delete</a>(aclId) -> ACL</code>

# User

Types:

- <code><a href="./src/resources/user.ts">User</a></code>

Methods:

- <code title="get /v1/user/{user_id}">client.user.<a href="./src/resources/user.ts">retrieve</a>(userId) -> User</code>
- <code title="get /v1/user">client.user.<a href="./src/resources/user.ts">list</a>({ ...params }) -> UsersListObjects</code>

# ProjectScore

Types:

- <code><a href="./src/resources/project-score.ts">ProjectScore</a></code>

Methods:

- <code title="post /v1/project_score">client.projectScore.<a href="./src/resources/project-score.ts">create</a>({ ...params }) -> ProjectScore</code>
- <code title="get /v1/project_score/{project_score_id}">client.projectScore.<a href="./src/resources/project-score.ts">retrieve</a>(projectScoreId) -> ProjectScore</code>
- <code title="patch /v1/project_score/{project_score_id}">client.projectScore.<a href="./src/resources/project-score.ts">update</a>(projectScoreId, { ...params }) -> ProjectScore</code>
- <code title="get /v1/project_score">client.projectScore.<a href="./src/resources/project-score.ts">list</a>({ ...params }) -> ProjectScoresListObjects</code>
- <code title="delete /v1/project_score/{project_score_id}">client.projectScore.<a href="./src/resources/project-score.ts">delete</a>(projectScoreId) -> ProjectScore</code>
- <code title="put /v1/project_score">client.projectScore.<a href="./src/resources/project-score.ts">replace</a>({ ...params }) -> ProjectScore</code>

# ProjectTag

Types:

- <code><a href="./src/resources/project-tag.ts">ProjectTag</a></code>

Methods:

- <code title="post /v1/project_tag">client.projectTag.<a href="./src/resources/project-tag.ts">create</a>({ ...params }) -> ProjectTag</code>
- <code title="get /v1/project_tag/{project_tag_id}">client.projectTag.<a href="./src/resources/project-tag.ts">retrieve</a>(projectTagId) -> ProjectTag</code>
- <code title="patch /v1/project_tag/{project_tag_id}">client.projectTag.<a href="./src/resources/project-tag.ts">update</a>(projectTagId, { ...params }) -> ProjectTag</code>
- <code title="get /v1/project_tag">client.projectTag.<a href="./src/resources/project-tag.ts">list</a>({ ...params }) -> ProjectTagsListObjects</code>
- <code title="delete /v1/project_tag/{project_tag_id}">client.projectTag.<a href="./src/resources/project-tag.ts">delete</a>(projectTagId) -> ProjectTag</code>
- <code title="put /v1/project_tag">client.projectTag.<a href="./src/resources/project-tag.ts">replace</a>({ ...params }) -> ProjectTag</code>

# Function

Types:

- <code><a href="./src/resources/function.ts">Function</a></code>

Methods:

- <code title="post /v1/function">client.function.<a href="./src/resources/function.ts">create</a>({ ...params }) -> Function</code>
- <code title="get /v1/function/{function_id}">client.function.<a href="./src/resources/function.ts">retrieve</a>(functionId) -> Function</code>
- <code title="patch /v1/function/{function_id}">client.function.<a href="./src/resources/function.ts">update</a>(functionId, { ...params }) -> Function</code>
- <code title="get /v1/function">client.function.<a href="./src/resources/function.ts">list</a>({ ...params }) -> FunctionsListObjects</code>
- <code title="delete /v1/function/{function_id}">client.function.<a href="./src/resources/function.ts">delete</a>(functionId) -> Function</code>
- <code title="post /v1/function/{function_id}/feedback">client.function.<a href="./src/resources/function.ts">feedback</a>(functionId, { ...params }) -> void</code>
- <code title="put /v1/function">client.function.<a href="./src/resources/function.ts">replace</a>({ ...params }) -> Function</code>

# View

Types:

- <code><a href="./src/resources/view.ts">View</a></code>

Methods:

- <code title="post /v1/view">client.view.<a href="./src/resources/view.ts">create</a>({ ...params }) -> View</code>
- <code title="get /v1/view/{view_id}">client.view.<a href="./src/resources/view.ts">retrieve</a>(viewId, { ...params }) -> View</code>
- <code title="patch /v1/view/{view_id}">client.view.<a href="./src/resources/view.ts">update</a>(viewId, { ...params }) -> View</code>
- <code title="get /v1/view">client.view.<a href="./src/resources/view.ts">list</a>({ ...params }) -> ViewsListObjects</code>
- <code title="delete /v1/view/{view_id}">client.view.<a href="./src/resources/view.ts">delete</a>(viewId, { ...params }) -> View</code>
- <code title="put /v1/view">client.view.<a href="./src/resources/view.ts">replace</a>({ ...params }) -> View</code>

# Organization

Types:

- <code><a href="./src/resources/organization.ts">Organization</a></code>

Methods:

- <code title="get /v1/organization/{organization_id}">client.organization.<a href="./src/resources/organization.ts">retrieve</a>(organizationId) -> Organization</code>
- <code title="patch /v1/organization/{organization_id}">client.organization.<a href="./src/resources/organization.ts">update</a>(organizationId, { ...params }) -> Organization</code>
- <code title="get /v1/organization">client.organization.<a href="./src/resources/organization.ts">list</a>({ ...params }) -> OrganizationsListObjects</code>
- <code title="delete /v1/organization/{organization_id}">client.organization.<a href="./src/resources/organization.ts">delete</a>(organizationId) -> Organization</code>

# APIKey

Types:

- <code><a href="./src/resources/api-key.ts">APIKey</a></code>
- <code><a href="./src/resources/api-key.ts">APIKeyCreateResponse</a></code>

Methods:

- <code title="post /v1/api_key">client.apiKey.<a href="./src/resources/api-key.ts">create</a>({ ...params }) -> APIKeyCreateResponse</code>
- <code title="get /v1/api_key/{api_key_id}">client.apiKey.<a href="./src/resources/api-key.ts">retrieve</a>(apiKeyId) -> APIKey</code>
- <code title="get /v1/api_key">client.apiKey.<a href="./src/resources/api-key.ts">list</a>({ ...params }) -> APIKeysListObjects</code>
- <code title="delete /v1/api_key/{api_key_id}">client.apiKey.<a href="./src/resources/api-key.ts">delete</a>(apiKeyId) -> APIKey</code>
