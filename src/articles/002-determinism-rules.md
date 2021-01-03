# Determinism rules (work in progress)
*2020*-*12*-*13*

<p align="center">
<img alt="Deterministic dices" width="250" src="https://cdn.jsdelivr.net/gh/patroytall/patrick-roy-me-asset/image/article/determinism-rules/dice-6times6-1.png"/>
</p>

When faced with a decision facts line up on both sides. Your gut feeling sometimes interferes by pushing you in one direction but more often than not you are stuck in the middle needing to make a choice. A day of work is a sequence of these moments. A career is an infinite repetition of this.

Determinism is appeasing. Having a clear path to resolve decision points is equivalent to voiding them. The result is a gain of efficiency because making decisions takes time and is demanding.

## Absolute for simplicity

We have rules, best practices, and conventions about everything. Exceptions are the bulky annoyance. Exceptions grow from seeds of uncertainty watered by demanded perfectionism.

Instead of keeping track of exceptions why not ignore them in some cases? A rule without exception is a best friend. It helps you when you need it without a burden. Absolute rules are simple.

But "we" are different you say! Of course, you are different. Step back. Is your difference worth the cost of your exceptions? Because at the end of the day, "WE" run a business. Informing of the merits will go a long way in striving toward absolutes.

### Code formatting convention

Code formatting has triggered debates throughout computer programming history. Individuals have not relinquish their individuality for years in the name of betterness. Code formatters have evolved and become a blessing but still you can configure them to your project liking which leads to debates.

Take the time to resolve this topic expediently. Arm wrestle, cry, or yell but get it done, then close this topic forever. Adopting the default settings of your development tool is a simple way out.

The tool has to rule. Do not let humans do special formatting here and there because it is supposedly needed. Let the tool act and miss-align if need be. Always ensure you can reformat your whole project with a single action. Go have a beer with the people feeling hurt.

Global formatting conventions seem to be emerging. Code published on the web appears to be converging toward similar formatting. Eventually, we should be able to analyze the sum of the code published, weighted based on relevancy, to extract this wisdom.

### Less is more

#### Ternary operator

### Extreme camel case naming

### 0 warning policy

What happens when you leave a warning in a project? A second one appears. Then more. The first tolerable or ignored warning is the justification people are waiting for to leave more.

Bug hides in warning lists because once a few warnings become permanent nobody looks at the list anymore.

Every warning should be addressed be it in the start up sequence, build or deployment. Block your build or deployments if they have warnings.

If you cannot disable a third party warning by any mean, document it in the project's README for example.

Tools being imperfect will produce warnings that are not relevant to your context; security tools for example often do. Use the broadest configuration possible to disable them. In code, you can often disable a warning locally. Do not permit this because you will have no way of tracking what justified the bypass. When disabling warnings, document why you did close to the disabling configuration. This is important because you do not want to second guess the bypasses. Configuring broadly will likely cause a few legit cases to be missed but the lack of pollution from fine grained disabling will benefit the system as a whole.

## Tests are allergic to time

Intermittent test failures are a plague. A frequent cause of intermittency is timing. A test will run fine on a developer machine but not on someone else's and even less on the build server. This lack of determinism brings the value of timing related test cases close to none.

An example of a test relying on timing, is a test writing to an eventually consistent database which reads the value later. This is just one of many pattern of timing dependencies for tests.

An approach to writing timing dependent test cases is to add a time buffer. How much should the buffer be? 2x, 10x, 100x? I ran into a famous case where an operation took a few milliseconds so we added a second of buffer. A few days later, the build failed again. Over the weeks, we brought the buffer to 10 seconds. We really liked that test. Believe it or not, six months later the test failed on a build server because a thread was starved. Deleting the test was a boon. Buffers slow down your test and cost you precious delivery time.

Separate your slow timing dependent tests from your fast and deterministic ones. False positive investigation are expensive. Non deterministic tests are like mine in a field. You always have to worry about stepping on one. The partitioning will save you costly debugging.

The value of tests is based on numbers. Deleting a few does not have a significant impact on quality.

It is often possible to mock time to implement time dependent tests. This is a great solution since it makes the tests fast and deterministic without loosing much accuracy.