# Code Quality

Famous and funny illustration of code quality: [WTFs per minute](https://www.osnews.com/story/19266/WTFs_m) .

## Code is read by other people
Why is code quality needed? As said in Kent Beck Implementations Patterns book:

> This is a book about programming - specifically, about programming so other people can understand your code. There is no magic to writing code other people can read. It's like all writing - know your audience, have a clear overall structure in mind, express the details so they contribute to the whole story.

## Clean code impact on development speed

Does writing clean code take more time than writing dirty code? See [Ron Jeffries - Too Much of a Good Thing](http://ronjeffries.com/xprog/articles/too-much-of-a-good-thing/) for a simple definition of clean versus dirty.

When learning better coding practices, it will take more time to develop cleaner code but once the learning is over, there is no significant difference. Clean code pays off immediately. The next day you come to work it pays. When people review your changes it pays. So unless you are writing code that will never be modified, writing clean code is faster.

You are writing code for other people to read and understand. Because code is inherently complex, "other people" are also you about six months later.

## The Boy Scout Rule

The Boy Scouts have a rule: "Always leave the campground cleaner than you found it". This translates in programming to "Always leave a module in cleaner state than when you started working on it".

Why is this needed if everyone is writing clean code all the time? Because when you add new code you impact the code around it. The implementation pattern that was clean prior to your change might not be clean anymore. For example, classes sometimes need to be redesigned when new behavior is added. Because production dead lines sometimes prevail, there will always be code that is not clean to improve when making changes.

In contrast to continuous improvements part of the normal change process, there are broad test coverage and refactoring initiatives. These should be generally avoided, especially test coverage initiatives. Without the focus around a module behavior from a normal change, such broad changes can easily introduce regression issues. They are difficult to review because of the large scope. They can improve code that will never be modified again.

How much cleaner should you leave a module when making a change? There is no absolute answer. A rough ball park answer is to spend the same amount of time cleaning as the time spent making the change. Allowing for an hour of cleaning when doing a quick change is also reasonable. A better answer is to factor in how dirty the code is. The dirtier the more time is justified assuming the module will be modified in the future.