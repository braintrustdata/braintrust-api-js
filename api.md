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

## ProjectLogs

# ProjectLogs

Types:

- <code><a href="./src/resources/project-logs.ts">ProjectLogFetchResponse</a></code>
- <code><a href="./src/resources/project-logs.ts">ProjectLogFetchPostResponse</a></code>
- <code><a href="./src/resources/project-logs.ts">ProjectLogInsertResponse</a></code>

Methods:

- <code title="post /v1/project_logs/{project_id}/feedback">client.projectLogs.<a href="./src/resources/project-logs.ts">feedback</a>(projectId, { ...params }) -> void</code>
- <code title="get /v1/project_logs/{project_id}/fetch">client.projectLogs.<a href="./src/resources/project-logs.ts">fetch</a>(projectId, { ...params }) -> ProjectLogFetchResponse</code>
- <code title="post /v1/project_logs/{project_id}/fetch">client.projectLogs.<a href="./src/resources/project-logs.ts">fetchPost</a>(projectId, { ...params }) -> ProjectLogFetchPostResponse</code>
- <code title="post /v1/project_logs/{project_id}/insert">client.projectLogs.<a href="./src/resources/project-logs.ts">insert</a>(projectId, { ...params }) -> ProjectLogInsertResponse</code>

# Experiment

Types:

- <code><a href="./src/resources/experiment.ts">Experiment</a></code>
- <code><a href="./src/resources/experiment.ts">ExperimentFetchResponse</a></code>
- <code><a href="./src/resources/experiment.ts">ExperimentFetchPostResponse</a></code>
- <code><a href="./src/resources/experiment.ts">ExperimentInsertResponse</a></code>

Methods:

- <code title="post /v1/experiment">client.experiment.<a href="./src/resources/experiment.ts">create</a>({ ...params }) -> Experiment</code>
- <code title="get /v1/experiment/{experiment_id}">client.experiment.<a href="./src/resources/experiment.ts">retrieve</a>(experimentId) -> Experiment</code>
- <code title="put /v1/experiment">client.experiment.<a href="./src/resources/experiment.ts">update</a>({ ...params }) -> Experiment</code>
- <code title="delete /v1/experiment/{experiment_id}">client.experiment.<a href="./src/resources/experiment.ts">delete</a>(experimentId) -> Experiment</code>
- <code title="post /v1/experiment/{experiment_id}/feedback">client.experiment.<a href="./src/resources/experiment.ts">feedback</a>(experimentId, { ...params }) -> void</code>
- <code title="get /v1/experiment/{experiment_id}/fetch">client.experiment.<a href="./src/resources/experiment.ts">fetch</a>(experimentId, { ...params }) -> ExperimentFetchResponse</code>
- <code title="post /v1/experiment/{experiment_id}/fetch">client.experiment.<a href="./src/resources/experiment.ts">fetchPost</a>(experimentId, { ...params }) -> ExperimentFetchPostResponse</code>
- <code title="post /v1/experiment/{experiment_id}/insert">client.experiment.<a href="./src/resources/experiment.ts">insert</a>(experimentId, { ...params }) -> ExperimentInsertResponse</code>
- <code title="patch /v1/experiment/{experiment_id}">client.experiment.<a href="./src/resources/experiment.ts">updatePartial</a>(experimentId, { ...params }) -> Experiment</code>

# Experiments

Types:

- <code><a href="./src/resources/experiments.ts">ExperimentListResponse</a></code>

Methods:

- <code title="get /v1/experiment">client.experiments.<a href="./src/resources/experiments.ts">list</a>({ ...params }) -> ExperimentListResponse</code>

# Datasets

Types:

- <code><a href="./src/resources/datasets.ts">Dataset</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetListResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetFetchResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetInsertResponse</a></code>

Methods:

- <code title="put /v1/dataset">client.datasets.<a href="./src/resources/datasets.ts">create</a>({ ...params }) -> Dataset</code>
- <code title="get /v1/dataset/{dataset_id}">client.datasets.<a href="./src/resources/datasets.ts">retrieve</a>(datasetId) -> Dataset</code>
- <code title="patch /v1/dataset/{dataset_id}">client.datasets.<a href="./src/resources/datasets.ts">update</a>(datasetId, { ...params }) -> Dataset</code>
- <code title="get /v1/dataset">client.datasets.<a href="./src/resources/datasets.ts">list</a>({ ...params }) -> DatasetListResponse</code>
- <code title="post /v1/dataset/{dataset_id}/feedback">client.datasets.<a href="./src/resources/datasets.ts">feedback</a>(datasetId, { ...params }) -> void</code>
- <code title="get /v1/dataset/{dataset_id}/fetch">client.datasets.<a href="./src/resources/datasets.ts">fetch</a>(datasetId, { ...params }) -> DatasetFetchResponse</code>
- <code title="post /v1/dataset/{dataset_id}/insert">client.datasets.<a href="./src/resources/datasets.ts">insert</a>(datasetId, { ...params }) -> DatasetInsertResponse</code>

# TopLevel

Methods:

- <code title="delete /v1/dataset/{dataset_id}">client.topLevel.<a href="./src/resources/top-level.ts">datasets</a>(datasetId) -> Dataset</code>

# V1

Types:

- <code><a href="./src/resources/v1.ts">V1HelloWorldResponse</a></code>

Methods:

- <code title="get /v1">client.v1.<a href="./src/resources/v1.ts">helloWorld</a>() -> string</code>
