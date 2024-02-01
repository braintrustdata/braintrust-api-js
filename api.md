# Project

Types:

- <code><a href="./src/resources/project/project.ts">Project</a></code>
- <code><a href="./src/resources/project/project.ts">ProjectListResponse</a></code>

Methods:

- <code title="post /v1/project">client.project.<a href="./src/resources/project/project.ts">create</a>({ ...params }) -> Project</code>
- <code title="get /v1/project/{project_id}">client.project.<a href="./src/resources/project/project.ts">retrieve</a>(projectId) -> Project</code>
- <code title="patch /v1/project/{project_id}">client.project.<a href="./src/resources/project/project.ts">update</a>(projectId, { ...params }) -> Project</code>
- <code title="get /v1/project">client.project.<a href="./src/resources/project/project.ts">list</a>({ ...params }) -> ProjectListResponse</code>
- <code title="delete /v1/project/{project_id}">client.project.<a href="./src/resources/project/project.ts">delete</a>(projectId) -> Project</code>
- <code title="put /v1/project">client.project.<a href="./src/resources/project/project.ts">replace</a>({ ...params }) -> Project</code>

## Logs

# Logs

Types:

- <code><a href="./src/resources/logs.ts">LogFetchResponse</a></code>
- <code><a href="./src/resources/logs.ts">LogFetchPostResponse</a></code>
- <code><a href="./src/resources/logs.ts">LogInsertResponse</a></code>

Methods:

- <code title="post /v1/project_logs/{project_id}/feedback">client.logs.<a href="./src/resources/logs.ts">feedback</a>(projectId, { ...params }) -> void</code>
- <code title="get /v1/project_logs/{project_id}/fetch">client.logs.<a href="./src/resources/logs.ts">fetch</a>(projectId, { ...params }) -> LogFetchResponse</code>
- <code title="post /v1/project_logs/{project_id}/fetch">client.logs.<a href="./src/resources/logs.ts">fetchPost</a>(projectId, { ...params }) -> LogFetchPostResponse</code>
- <code title="post /v1/project_logs/{project_id}/insert">client.logs.<a href="./src/resources/logs.ts">insert</a>(projectId, { ...params }) -> LogInsertResponse</code>

# Experiment

Types:

- <code><a href="./src/resources/experiment.ts">Experiment</a></code>
- <code><a href="./src/resources/experiment.ts">ExperimentListResponse</a></code>
- <code><a href="./src/resources/experiment.ts">ExperimentFetchResponse</a></code>
- <code><a href="./src/resources/experiment.ts">ExperimentFetchPostResponse</a></code>
- <code><a href="./src/resources/experiment.ts">ExperimentInsertResponse</a></code>

Methods:

- <code title="post /v1/experiment">client.experiment.<a href="./src/resources/experiment.ts">create</a>({ ...params }) -> Experiment</code>
- <code title="get /v1/experiment/{experiment_id}">client.experiment.<a href="./src/resources/experiment.ts">retrieve</a>(experimentId) -> Experiment</code>
- <code title="patch /v1/experiment/{experiment_id}">client.experiment.<a href="./src/resources/experiment.ts">update</a>(experimentId, { ...params }) -> Experiment</code>
- <code title="get /v1/experiment">client.experiment.<a href="./src/resources/experiment.ts">list</a>({ ...params }) -> ExperimentListResponse</code>
- <code title="delete /v1/experiment/{experiment_id}">client.experiment.<a href="./src/resources/experiment.ts">delete</a>(experimentId) -> Experiment</code>
- <code title="post /v1/experiment/{experiment_id}/feedback">client.experiment.<a href="./src/resources/experiment.ts">feedback</a>(experimentId, { ...params }) -> void</code>
- <code title="get /v1/experiment/{experiment_id}/fetch">client.experiment.<a href="./src/resources/experiment.ts">fetch</a>(experimentId, { ...params }) -> ExperimentFetchResponse</code>
- <code title="post /v1/experiment/{experiment_id}/fetch">client.experiment.<a href="./src/resources/experiment.ts">fetchPost</a>(experimentId, { ...params }) -> ExperimentFetchPostResponse</code>
- <code title="post /v1/experiment/{experiment_id}/insert">client.experiment.<a href="./src/resources/experiment.ts">insert</a>(experimentId, { ...params }) -> ExperimentInsertResponse</code>
- <code title="put /v1/experiment">client.experiment.<a href="./src/resources/experiment.ts">replace</a>({ ...params }) -> Experiment</code>

# Dataset

Types:

- <code><a href="./src/resources/dataset.ts">Dataset</a></code>
- <code><a href="./src/resources/dataset.ts">DatasetListResponse</a></code>
- <code><a href="./src/resources/dataset.ts">DatasetFetchResponse</a></code>
- <code><a href="./src/resources/dataset.ts">DatasetFetchPostResponse</a></code>
- <code><a href="./src/resources/dataset.ts">DatasetInsertResponse</a></code>

Methods:

- <code title="post /v1/dataset">client.dataset.<a href="./src/resources/dataset.ts">create</a>({ ...params }) -> Dataset</code>
- <code title="get /v1/dataset/{dataset_id}">client.dataset.<a href="./src/resources/dataset.ts">retrieve</a>(datasetId) -> Dataset</code>
- <code title="patch /v1/dataset/{dataset_id}">client.dataset.<a href="./src/resources/dataset.ts">update</a>(datasetId, { ...params }) -> Dataset</code>
- <code title="get /v1/dataset">client.dataset.<a href="./src/resources/dataset.ts">list</a>({ ...params }) -> DatasetListResponse</code>
- <code title="delete /v1/dataset/{dataset_id}">client.dataset.<a href="./src/resources/dataset.ts">delete</a>(datasetId) -> Dataset</code>
- <code title="post /v1/dataset/{dataset_id}/feedback">client.dataset.<a href="./src/resources/dataset.ts">feedback</a>(datasetId, { ...params }) -> void</code>
- <code title="get /v1/dataset/{dataset_id}/fetch">client.dataset.<a href="./src/resources/dataset.ts">fetch</a>(datasetId, { ...params }) -> DatasetFetchResponse</code>
- <code title="post /v1/dataset/{dataset_id}/fetch">client.dataset.<a href="./src/resources/dataset.ts">fetchPost</a>(datasetId, { ...params }) -> DatasetFetchPostResponse</code>
- <code title="post /v1/dataset/{dataset_id}/insert">client.dataset.<a href="./src/resources/dataset.ts">insert</a>(datasetId, { ...params }) -> DatasetInsertResponse</code>
- <code title="put /v1/dataset">client.dataset.<a href="./src/resources/dataset.ts">replace</a>({ ...params }) -> Dataset</code>

# TopLevel

Types:

- <code><a href="./src/resources/top-level.ts">TopLevelHelloWorldResponse</a></code>

Methods:

- <code title="get /v1">client.topLevel.<a href="./src/resources/top-level.ts">helloWorld</a>() -> string</code>
