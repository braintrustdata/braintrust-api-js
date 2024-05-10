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
- <code title="put /v1/project">client.project.<a href="./src/resources/project/project.ts">replace</a>({ ...params }) -> Project</code>

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
- <code title="put /v1/experiment">client.experiment.<a href="./src/resources/experiment.ts">replace</a>({ ...params }) -> Experiment</code>
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
- <code title="put /v1/dataset">client.dataset.<a href="./src/resources/dataset.ts">replace</a>({ ...params }) -> Dataset</code>
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
- <code title="put /v1/acl">client.acl.<a href="./src/resources/acl.ts">replace</a>({ ...params }) -> ACL</code>

# User

Types:

- <code><a href="./src/resources/user.ts">User</a></code>

Methods:

- <code title="get /v1/user/{user_id}">client.user.<a href="./src/resources/user.ts">retrieve</a>(userId) -> User</code>
- <code title="get /v1/user">client.user.<a href="./src/resources/user.ts">list</a>({ ...params }) -> UsersListObjects</code>
