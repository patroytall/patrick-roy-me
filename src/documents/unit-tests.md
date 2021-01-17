# Unit Tests

## Unit test definition

A key element of the unit testing definition is the unit boundaries definition. Non-deterministic dependencies cannot be included in the unit. Difficult to set up dependencies should be excluded from the unit as well. Excluded dependencies will be mocked or stubbed to test the unit in isolation. The most common unit used for testing is a class context. 

Unit test should run quickly. The value of a test is directly proportional to its running speed. The Test Driven Development methodology requires quick execution.

State is often a major concern for tests. Building the state required for unit tests needs to be fully automated. Usage of global shared state is discouraged. It creates coupling between the test logic and the state. It has a tendency to limit the scope of the tests. More specifically, the tests tend to focus around the areas for which state is provided at the expense of coverage of the full test domain.

Testing behavior should be done a the lowest convenient level. That is as close to the implementation of the behavior. If this was done perfectly, a test suite could result in a single test failure for every possible bug introduced in the system.

Links: [Martin Fowler - Unit Test](https://martinfowler.com/bliki/UnitTest.html)

## Test organization

A common layout for unit test content is in three sections: arrange, act, and assess (AAA). See [Arrange Act Assert (AAA)](http://wiki.c2.com/?ArrangeActAssert). I also refer to this as fixtures, action, and verification.

In large tests it is sometimes desirable to use comments to highlight the sections. A common set is GIVEN, WHEN, and THEN. In smaller tests and empty line can be used to delimit the sections. Very small tests will sometimes combine some of the As on the same line.

## Test naming

I recommend this test naming format: methodName_stateUnderTest_expectedResult.

Having the methodName written in the test name can create higher maintenance when refactoring code. It is though, in most scenarios, the best way to keep the test focus clear.

A test name documents the module behavior. This documentation is worth as much as the test regression testing value. It gives humans trying to understand a module precious information as to the intended behavior. This understanding prevents behavior deviations when changes are made. Such behavior deviations will often break integration with other modules as they affect the application programming interface (API) of the module.

Good test names replace comments in the tested code. Test names are more likely to be maintained then code comments because they are visible and executed. They must be updated when their matching code is changed.

Logical group separation with underscore is concise compared to conventions with explicit "when" and "then". The shorter syntax often proves useful with long test names and maximum line length limits.

The test name should read like English. The test code assertion must line up one to one with the English expected result of the name. This is important when a test fails. The programmer must be able to understand without ambiguity what the test is suppose to do. I have seen tests which had to be deleted during maintenance because their expected result did not match their assertion. It was impossible to determine which of the two was correct.

Links:
- [StackOverflow - Unit test naming best practices](https://stackoverflow.com/questions/155436/unit-test-naming-best-practices)
- [Roy Osherove - Naming standards for unit tests](http://osherove.com/blog/2005/4/3/naming-standards-for-unit-tests.html)

## Code coverage

We know code coverage cannot be tied directly to code quality. From [does code coverage improve code quality](https://softwareengineering.stackexchange.com/questions/336081/does-code-coverage-improve-code-quality): “In short no, a Code Coverage metric does not improve the quality of a project at all.”

Unfortunately, managers tend to be fond of code coverage as a metric because it is something they understand.

I suggest using something in the range of 60% code coverage. The idea is that most domain do not need full Test Driven Development coverage. The 40% gap will avoid people writing low quality tests to achieve code coverage. At the same time, the 60% will ensure the code base has some amount of unit tests. 100% coverage should be encouraged for code bases where it makes sense. The 60% suggestion is just a realistic minimum to account for trivial code and low value exception code paths.

Elements to consider when choosing a minimum code coverage percentage:
- exception handling patterns; since testing all exception paths is of low value, heavy exception handling patterns will result in lower code coverage,
- amount of trivial code; for example, classes with only getters and setters,
- maturity of the application; achieving high code coverage in a rapidly changing application can be expensive as a lot of testing code is lost,
- application cyclomatic complexity index; an application with poorly written code might benefit from more code coverage,
- application business value; the investment in unit tests should be proportionally to the business value of the application.

Links:
- [Stack Overflow - what is a reasonable code coverage for unit tests and why](https://stackoverflow.com/questions/90002/what-is-a-reasonable-code-coverage-for-unit-tests-and-why)
- [Software Engineering Stackexchange - does code coverage improve code quality](https://softwareengineering.stackexchange.com/questions/336081/does-code-coverage-improve-code-quality)

## Static methods

Invocation of a static method in a class dependency is difficult to mock thus can make a class difficult to test. For that reason, invocation of static methods from dependencies should be avoided. Dependencies with static state are even more difficult since they introduce dependencies between tests.

Interfaces can be used to avoid direct usage of static methods in other classes. A singleton instance exposed through an interface can be used to implement the equivalent of static state. The singleton must be injected through its interface in its consumer classes.

Common utility libraries with static methods are an exception. They must be stateless and not involve the environment. For example, not involve the file system, time, or network access. Such libraries then become an extension of the class thus an intrinsic part of its implementation.

Private static methods part of the class are different. The static keyword in this case simply indicates that no state is modified by the method. The method can be tested if needed by using the logically equivalent package access instead of private.

Links:
- [Jan Amoyo - static methods and unit testing](http://www.jramoyo.com/2013/03/static-methods-and-unit-testing.html)
- [Stack Overflow - why does mockito not mock static methods](https://stackoverflow.com/questions/4482315/why-does-mockito-not-mock-static-methods)