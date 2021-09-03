# Testing

**TO-DO**: review this document

## Microservice Testing

### Determinism
Automated test must be fully deterministic. Not statiscally deterministic, really deterministic. For example: use a random value and assuming there will be no collision is not deterministic. An other example: relying on a thread finishing after an other because it has a lot more business logic is not deterministic. Performance test are generally not deterministic.

Automated test with non-deterministic elements should be identified as such. They can be launched on demand. 

### Test Suite
A test suite is a group of one or more test cases. A single failure of a test case in a test suite cases the test suite result status to be a failure. Even when a test case failure occurs, the other test cases of a test suite should be executed.

### Test Suite Value
The value of a test suite is directly proportional to how often it can be run. How often you can run a test suite is directly proportional to its test cases execution time. A test suite can be run at each commit, at each developer push, at each master branch merge, or at each microservice deployment. Its run time spped will determine at which level it be run. The lower the level the faster the bugs are found, the more value the test cases have.

### Report
Individual test case statuses must be reported as well as global test suite result status.

## Smoke Tests

### Scope
Smoke tests run at the REST API level. They require a full deployment of the microservice and its dependencies.

### State
Smoke tests should create all the state that they require at runtime using REST invocations. If they rely on state being present in the environment, the state must available in all environments by default.

### Duration
The smoke tests are slow tests compare to integration and unit tests. Their count is limitted by the total execution time which should be less than a minute.

### Coverage
Smoke tests are generally limited to minimal happy path test cases. Minimal means using as few REST parameters as accepted. A typical coverage will have one smoke test per method of each controller.

### Health Check
Every microservice must provide a global health check smoke test.

### Execution
Smoke tests are executed in deployment environments on standby microservice instances prior to them being made active. The smoke test success is a precondition for microservice instances to be made active. If one smoke tests fails, the deployment is unsuccessful and the standby instances are un-deployed.

## Integration tests

### Running Instance
Integration tests are used to test running microservice instances. A test suite can only test a single running microservice instance. If there are no state dependencies, test cases can share a single running instance of a microservice without restarting it between invocations.

The test cases must run collocated with the microservice to have access to its objects at run time.

### Dependencies
Integration tests should not have external dependencies that they do not set up and control. For example, an integration test can launch a database instance for an execution of it test cases but cannot use a shared database instance. To run in a limited amount of time, integration tests should use in memory dependencies.

### Entry Points
Any microservice methods can be called as part of a test case. Test cases should be group based on their entry points. For example: a REST API test suite or a class X group where X is a testable class in the microservice.

### Level
A test should only be an integration test if it requires it. Its test logic requirements must not be met by a unit test. Tests that encompass more than one class need to be at the integration or higher level.

### Duration
Integration tests must run quickly. They will be slower than unit tests but should be much faster than smoke tests. The execution time for the integration tests of a microservice should be under a minute.

### Quality Verification
Quality verification of a microservice should rely heavily on integration tests to verify the microservice edge cases. Development should provide starting test case templates to help people write integration tests.

## Certification Tests

### Third Party Services Testing
Microservices can sometimes depend on third party services. To ensure a microservice will run successfully in a given environment the third party services might need to be tested. Dedicated test cases called certification tests should be used to test the third party APIs. All third party behavior used by a microservice should be tested by its certification tests. Unfortunately, the synchronization between what the application uses and the certification must be maintained manually.

### Automated vs Manual
Depending on if the certification tests require custom state from the environment or not, they will be invoked manually or automatically as part of the deployment process. When state is required, it is up to the runner to ensure it is present prior to the manual invocation. Automated certification tests only need to run in one deployment environment, usually development environment. An other reason certification tests might need to be run manually is if the third party service is not reliable.