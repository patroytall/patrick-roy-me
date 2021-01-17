# Unit tests TDD

## [Robert C. Martin - Three Laws of Test Driven Development (TDD)](http://butunclebob.com/ArticleS.UncleBob.TheThreeRulesOfTdd)
1. You are not allowed to write any production code unless it is to make a failing unit test pass.
2. You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.
3. You are not allowed to write any more production code than is sufficient to pass the one failing unit test.

Link: [codementor - test driven workflow in two easy steps](https://www.codementor.io/copperstarconsulting/test-driven-workflow-in-two-easy-steps-bfjln9sl4)

## How much TDD do you need?

The TDD methodology is absolute. Its laws requires all code to be unit tested. I do not believe that in the case of trivial code for certain kind of businesses it is not an optimal solution. This leaves two grey areas to assess: what is trivial code and what kind of business are you.

Code without condition testing is a candidate for triviality. If a method simply calls an associated method of an other object, it would result in a test which would be logically identical to the code itself. Even code that calls a sequence of associated methods is a candidate.

TODO: add state to condition

The cost of a bug in production defines the kind of business you are in. If the cost is prohibitive, for example life and death situations, you cannot leave rely on programmer's judgement to assess if a part of the code needs to be tested or not. Most business do not fall into this category. Because of the significant cost of testing everything, exceptions should be made. This can often reduce the amount of unit tests by 50%.

Links:
- [Robert C. Martin - Symmetry Breaking](http://blog.cleancoder.com/uncle-bob/2017/03/07/SymmetryBreaking.html)
- [Martin Fowler - is TDD dead](https://martinfowler.com/articles/is-tdd-dead/)
- [James O Coplien - why most unit testing is waste](http://rbcs-us.com/documents/Why-Most-Unit-Testing-is-Waste.pdf)

## Red Green Refactor cycle

When doing TDD, you will go from failing test, Red, to passing tests, Green, to refactoring your code. You will repeat this cycle of quick changes constantly. This is referred as the Red Green Refactor cycle.

Links:
- [James Shore - Red Green Refactor](http://www.jamesshore.com/Blog/Red-Green-Refactor.html)
- [Robert C. Martin - The Cycles Of TDD](http://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html)

TDD sample code

The Calculator classes under package patroytall.training.samples.tdd.calculator of this [GitHub repository](https://github.com/patroytall/training) are a step by step example of TDD coding.