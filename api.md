# TopLevel

Types:

- <code><a href="./src/resources/top-level.ts">TopLevelHelloWorldResponse</a></code>

Methods:

- <code title="get /v1">client.topLevel.<a href="./src/resources/top-level.ts">helloWorld</a>() -> string</code>

# Projects

Types:

- <code><a href="./src/resources/projects/projects.ts">Project</a></code>

Methods:

- <code title="post /v1/project">client.projects.<a href="./src/resources/projects/projects.ts">create</a>({ ...params }) -> Project</code>
- <code title="get /v1/project/{project_id}">client.projects.<a href="./src/resources/projects/projects.ts">retrieve</a>(projectId) -> Project</code>
- <code title="patch /v1/project/{project_id}">client.projects.<a href="./src/resources/projects/projects.ts">update</a>(projectId, { ...params }) -> Project</code>
- <code title="get /v1/project">client.projects.<a href="./src/resources/projects/projects.ts">list</a>({ ...params }) -> ProjectsListObjects</code>
- <code title="delete /v1/project/{project_id}">client.projects.<a href="./src/resources/projects/projects.ts">delete</a>(projectId) -> Project</code>

## Logs

Types:

- <code><a href="./src/resources/projects/logs.ts">LogFetchResponse</a></code>
- <code><a href="./src/resources/projects/logs.ts">LogFetchPostResponse</a></code>
- <code><a href="./src/resources/projects/logs.ts">LogInsertResponse</a></code>

Methods:

- <code title="post /v1/project_logs/{project_id}/feedback">client.projects.logs.<a href="./src/resources/projects/logs.ts">feedback</a>(projectId, { ...params }) -> void</code>
- <code title="get /v1/project_logs/{project_id}/fetch">client.projects.logs.<a href="./src/resources/projects/logs.ts">fetch</a>(projectId, { ...params }) -> LogFetchResponse</code>
- <code title="post /v1/project_logs/{project_id}/fetch">client.projects.logs.<a href="./src/resources/projects/logs.ts">fetchPost</a>(projectId, { ...params }) -> LogFetchPostResponse</code>
- <code title="post /v1/project_logs/{project_id}/insert">client.projects.logs.<a href="./src/resources/projects/logs.ts">insert</a>(projectId, { ...params }) -> LogInsertResponse</code>

# Experiments

Types:

- <code><a href="./src/resources/experiments.ts">Experiment</a></code>
- <code><a href="./src/resources/experiments.ts">ExperimentFetchResponse</a></code>
- <code><a href="./src/resources/experiments.ts">ExperimentFetchPostResponse</a></code>
- <code><a href="./src/resources/experiments.ts">ExperimentInsertResponse</a></code>
- <code><a href="./src/resources/experiments.ts">ExperimentSummarizeResponse</a></code>

Methods:

- <code title="post /v1/experiment">client.experiments.<a href="./src/resources/experiments.ts">create</a>({ ...params }) -> Experiment</code>
- <code title="get /v1/experiment/{experiment_id}">client.experiments.<a href="./src/resources/experiments.ts">retrieve</a>(experimentId) -> Experiment</code>
- <code title="patch /v1/experiment/{experiment_id}">client.experiments.<a href="./src/resources/experiments.ts">update</a>(experimentId, { ...params }) -> Experiment</code>
- <code title="get /v1/experiment">client.experiments.<a href="./src/resources/experiments.ts">list</a>({ ...params }) -> ExperimentsListObjects</code>
- <code title="delete /v1/experiment/{experiment_id}">client.experiments.<a href="./src/resources/experiments.ts">delete</a>(experimentId) -> Experiment</code>
- <code title="post /v1/experiment/{experiment_id}/feedback">client.experiments.<a href="./src/resources/experiments.ts">feedback</a>(experimentId, { ...params }) -> void</code>
- <code title="get /v1/experiment/{experiment_id}/fetch">client.experiments.<a href="./src/resources/experiments.ts">fetch</a>(experimentId, { ...params }) -> ExperimentFetchResponse</code>
- <code title="post /v1/experiment/{experiment_id}/fetch">client.experiments.<a href="./src/resources/experiments.ts">fetchPost</a>(experimentId, { ...params }) -> ExperimentFetchPostResponse</code>
- <code title="post /v1/experiment/{experiment_id}/insert">client.experiments.<a href="./src/resources/experiments.ts">insert</a>(experimentId, { ...params }) -> ExperimentInsertResponse</code>
- <code title="get /v1/experiment/{experiment_id}/summarize">client.experiments.<a href="./src/resources/experiments.ts">summarize</a>(experimentId, { ...params }) -> ExperimentSummarizeResponse</code>

# Datasets

Types:

- <code><a href="./src/resources/datasets.ts">Dataset</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetFetchResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetFetchPostResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetInsertResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetSummarizeResponse</a></code>

Methods:

- <code title="post /v1/dataset">client.datasets.<a href="./src/resources/datasets.ts">create</a>({ ...params }) -> Dataset</code>
- <code title="get /v1/dataset/{dataset_id}">client.datasets.<a href="./src/resources/datasets.ts">retrieve</a>(datasetId) -> Dataset</code>
- <code title="patch /v1/dataset/{dataset_id}">client.datasets.<a href="./src/resources/datasets.ts">update</a>(datasetId, { ...params }) -> Dataset</code>
- <code title="get /v1/dataset">client.datasets.<a href="./src/resources/datasets.ts">list</a>({ ...params }) -> DatasetsListObjects</code>
- <code title="delete /v1/dataset/{dataset_id}">client.datasets.<a href="./src/resources/datasets.ts">delete</a>(datasetId) -> Dataset</code>
- <code title="post /v1/dataset/{dataset_id}/feedback">client.datasets.<a href="./src/resources/datasets.ts">feedback</a>(datasetId, { ...params }) -> void</code>
- <code title="get /v1/dataset/{dataset_id}/fetch">client.datasets.<a href="./src/resources/datasets.ts">fetch</a>(datasetId, { ...params }) -> DatasetFetchResponse</code>
- <code title="post /v1/dataset/{dataset_id}/fetch">client.datasets.<a href="./src/resources/datasets.ts">fetchPost</a>(datasetId, { ...params }) -> DatasetFetchPostResponse</code>
- <code title="post /v1/dataset/{dataset_id}/insert">client.datasets.<a href="./src/resources/datasets.ts">insert</a>(datasetId, { ...params }) -> DatasetInsertResponse</code>
- <code title="get /v1/dataset/{dataset_id}/summarize">client.datasets.<a href="./src/resources/datasets.ts">summarize</a>(datasetId, { ...params }) -> DatasetSummarizeResponse</code>

# Prompts

Types:

- <code><a href="./src/resources/prompts.ts">Prompt</a></code>

Methods:

- <code title="post /v1/prompt">client.prompts.<a href="./src/resources/prompts.ts">create</a>({ ...params }) -> Prompt</code>
- <code title="get /v1/prompt/{prompt_id}">client.prompts.<a href="./src/resources/prompts.ts">retrieve</a>(promptId) -> Prompt</code>
- <code title="patch /v1/prompt/{prompt_id}">client.prompts.<a href="./src/resources/prompts.ts">update</a>(promptId, { ...params }) -> Prompt</code>
- <code title="get /v1/prompt">client.prompts.<a href="./src/resources/prompts.ts">list</a>({ ...params }) -> PromptsListObjects</code>
- <code title="delete /v1/prompt/{prompt_id}">client.prompts.<a href="./src/resources/prompts.ts">delete</a>(promptId) -> Prompt</code>
- <code title="post /v1/prompt/{prompt_id}/feedback">client.prompts.<a href="./src/resources/prompts.ts">feedback</a>(promptId, { ...params }) -> void</code>
- <code title="put /v1/prompt">client.prompts.<a href="./src/resources/prompts.ts">replace</a>({ ...params }) -> Prompt</code>

# Roles

Types:

- <code><a href="./src/resources/roles.ts">Role</a></code>

Methods:

- <code title="post /v1/role">client.roles.<a href="./src/resources/roles.ts">create</a>({ ...params }) -> Role</code>
- <code title="get /v1/role/{role_id}">client.roles.<a href="./src/resources/roles.ts">retrieve</a>(roleId) -> Role</code>
- <code title="patch /v1/role/{role_id}">client.roles.<a href="./src/resources/roles.ts">update</a>(roleId, { ...params }) -> Role</code>
- <code title="get /v1/role">client.roles.<a href="./src/resources/roles.ts">list</a>({ ...params }) -> RolesListObjects</code>
- <code title="delete /v1/role/{role_id}">client.roles.<a href="./src/resources/roles.ts">delete</a>(roleId) -> Role</code>
- <code title="put /v1/role">client.roles.<a href="./src/resources/roles.ts">replace</a>({ ...params }) -> Role</code>

# Groups

Types:

- <code><a href="./src/resources/groups.ts">Group</a></code>

Methods:

- <code title="post /v1/group">client.groups.<a href="./src/resources/groups.ts">create</a>({ ...params }) -> Group</code>
- <code title="get /v1/group/{group_id}">client.groups.<a href="./src/resources/groups.ts">retrieve</a>(groupId) -> Group</code>
- <code title="patch /v1/group/{group_id}">client.groups.<a href="./src/resources/groups.ts">update</a>(groupId, { ...params }) -> Group</code>
- <code title="get /v1/group">client.groups.<a href="./src/resources/groups.ts">list</a>({ ...params }) -> GroupsListObjects</code>
- <code title="delete /v1/group/{group_id}">client.groups.<a href="./src/resources/groups.ts">delete</a>(groupId) -> Group</code>
- <code title="put /v1/group">client.groups.<a href="./src/resources/groups.ts">replace</a>({ ...params }) -> Group</code>

# ACLs

Types:

- <code><a href="./src/resources/acls.ts">ACL</a></code>

Methods:

- <code title="post /v1/acl">client.acls.<a href="./src/resources/acls.ts">create</a>({ ...params }) -> ACL</code>
- <code title="get /v1/acl/{acl_id}">client.acls.<a href="./src/resources/acls.ts">retrieve</a>(aclId) -> ACL</code>
- <code title="get /v1/acl">client.acls.<a href="./src/resources/acls.ts">list</a>({ ...params }) -> ACLsListObjects</code>
- <code title="delete /v1/acl/{acl_id}">client.acls.<a href="./src/resources/acls.ts">delete</a>(aclId) -> ACL</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">User</a></code>

Methods:

- <code title="get /v1/user/{user_id}">client.users.<a href="./src/resources/users.ts">retrieve</a>(userId) -> User</code>
- <code title="get /v1/user">client.users.<a href="./src/resources/users.ts">list</a>({ ...params }) -> UsersListObjects</code>

# ProjectScores

Types:

- <code><a href="./src/resources/project-scores.ts">ProjectScore</a></code>

Methods:

- <code title="post /v1/project_score">client.projectScores.<a href="./src/resources/project-scores.ts">create</a>({ ...params }) -> ProjectScore</code>
- <code title="get /v1/project_score/{project_score_id}">client.projectScores.<a href="./src/resources/project-scores.ts">retrieve</a>(projectScoreId) -> ProjectScore</code>
- <code title="patch /v1/project_score/{project_score_id}">client.projectScores.<a href="./src/resources/project-scores.ts">update</a>(projectScoreId, { ...params }) -> ProjectScore</code>
- <code title="get /v1/project_score">client.projectScores.<a href="./src/resources/project-scores.ts">list</a>({ ...params }) -> ProjectScoresListObjects</code>
- <code title="delete /v1/project_score/{project_score_id}">client.projectScores.<a href="./src/resources/project-scores.ts">delete</a>(projectScoreId) -> ProjectScore</code>
- <code title="put /v1/project_score">client.projectScores.<a href="./src/resources/project-scores.ts">replace</a>({ ...params }) -> ProjectScore</code>

# ProjectTags

Types:

- <code><a href="./src/resources/project-tags.ts">ProjectTag</a></code>

Methods:

- <code title="post /v1/project_tag">client.projectTags.<a href="./src/resources/project-tags.ts">create</a>({ ...params }) -> ProjectTag</code>
- <code title="get /v1/project_tag/{project_tag_id}">client.projectTags.<a href="./src/resources/project-tags.ts">retrieve</a>(projectTagId) -> ProjectTag</code>
- <code title="patch /v1/project_tag/{project_tag_id}">client.projectTags.<a href="./src/resources/project-tags.ts">update</a>(projectTagId, { ...params }) -> ProjectTag</code>
- <code title="get /v1/project_tag">client.projectTags.<a href="./src/resources/project-tags.ts">list</a>({ ...params }) -> ProjectTagsListObjects</code>
- <code title="delete /v1/project_tag/{project_tag_id}">client.projectTags.<a href="./src/resources/project-tags.ts">delete</a>(projectTagId) -> ProjectTag</code>
- <code title="put /v1/project_tag">client.projectTags.<a href="./src/resources/project-tags.ts">replace</a>({ ...params }) -> ProjectTag</code>

# Functions

Types:

- <code><a href="./src/resources/functions.ts">Function</a></code>

Methods:

- <code title="post /v1/function">client.functions.<a href="./src/resources/functions.ts">create</a>({ ...params }) -> Function</code>
- <code title="get /v1/function/{function_id}">client.functions.<a href="./src/resources/functions.ts">retrieve</a>(functionId) -> Function</code>
- <code title="patch /v1/function/{function_id}">client.functions.<a href="./src/resources/functions.ts">update</a>(functionId, { ...params }) -> Function</code>
- <code title="get /v1/function">client.functions.<a href="./src/resources/functions.ts">list</a>({ ...params }) -> FunctionsListObjects</code>
- <code title="delete /v1/function/{function_id}">client.functions.<a href="./src/resources/functions.ts">delete</a>(functionId) -> Function</code>
- <code title="post /v1/function/{function_id}/feedback">client.functions.<a href="./src/resources/functions.ts">feedback</a>(functionId, { ...params }) -> void</code>
- <code title="put /v1/function">client.functions.<a href="./src/resources/functions.ts">replace</a>({ ...params }) -> Function</code>

# Views

Types:

- <code><a href="./src/resources/views.ts">View</a></code>

Methods:

- <code title="post /v1/view">client.views.<a href="./src/resources/views.ts">create</a>({ ...params }) -> View</code>
- <code title="get /v1/view/{view_id}">client.views.<a href="./src/resources/views.ts">retrieve</a>(viewId, { ...params }) -> View</code>
- <code title="patch /v1/view/{view_id}">client.views.<a href="./src/resources/views.ts">update</a>(viewId, { ...params }) -> View</code>
- <code title="get /v1/view">client.views.<a href="./src/resources/views.ts">list</a>({ ...params }) -> ViewsListObjects</code>
- <code title="delete /v1/view/{view_id}">client.views.<a href="./src/resources/views.ts">delete</a>(viewId, { ...params }) -> View</code>
- <code title="put /v1/view">client.views.<a href="./src/resources/views.ts">replace</a>({ ...params }) -> View</code>

# Organizations

Types:

- <code><a href="./src/resources/organizations.ts">Organization</a></code>

Methods:

- <code title="get /v1/organization/{organization_id}">client.organizations.<a href="./src/resources/organizations.ts">retrieve</a>(organizationId) -> Organization</code>
- <code title="patch /v1/organization/{organization_id}">client.organizations.<a href="./src/resources/organizations.ts">update</a>(organizationId, { ...params }) -> Organization</code>
- <code title="get /v1/organization">client.organizations.<a href="./src/resources/organizations.ts">list</a>({ ...params }) -> OrganizationsListObjects</code>
- <code title="delete /v1/organization/{organization_id}">client.organizations.<a href="./src/resources/organizations.ts">delete</a>(organizationId) -> Organization</code>

# APIKeys

Types:

- <code><a href="./src/resources/api-keys.ts">APIKey</a></code>
- <code><a href="./src/resources/api-keys.ts">APIKeyCreateResponse</a></code>

Methods:

- <code title="post /v1/api_key">client.apiKeys.<a href="./src/resources/api-keys.ts">create</a>({ ...params }) -> APIKeyCreateResponse</code>
- <code title="get /v1/api_key/{api_key_id}">client.apiKeys.<a href="./src/resources/api-keys.ts">retrieve</a>(apiKeyId) -> APIKey</code>
- <code title="get /v1/api_key">client.apiKeys.<a href="./src/resources/api-keys.ts">list</a>({ ...params }) -> APIKeysListObjects</code>
- <code title="delete /v1/api_key/{api_key_id}">client.apiKeys.<a href="./src/resources/api-keys.ts">delete</a>(apiKeyId) -> APIKey</code>
