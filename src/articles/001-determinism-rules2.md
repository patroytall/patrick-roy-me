---
description: We have rules, best practices, conventions, and standards about everything. Exceptions are the bulky annoyances. Instead of keeping track of them why not ignore them in some cases?
---

# Determinism rules
*2021*-*01*-*01*

<p align="center">
<img alt="Deterministic dices" width="250" src="https://cdn.jsdelivr.net/gh/patroytall/patrick-roy-me-asset/image/article/determinism-rules/dice-6times6-1.png"/>
</p>

When faced with a decision facts line up on both sides. Your gut feeling sometimes interferes by pushing you in one direction but more often than not you are stuck in the middle needing to make a choice. A day of work is a sequence of these moments. A career is an infinite repetition of this.

Determinism is appeasing. Having a clear path to resolve decision points is equivalent to voiding them. The result is a gain of efficiency because making decisions takes time and is demanding.

## Absolute for simplicity

We have rules, best practices, conventions, and standards about everything. Exceptions are the bulky annoyances. Exceptions grow from seeds of uncertainty watered by optimistic perfectionism.

Instead of keeping track of exceptions why not ignore them in some cases? A rule without exception is a best friend. It helps you when you need it without a burden. Absolute rules are simple.

But "we" are different you say! Of course, you are different. Step back. Is your difference worth the cost of your exceptions? Because at the end of the day, "WE" run a business. Informing of the merits will go a long way in striving toward absolutes.

Absolute can be applied at multiple levels: organization, division, project, or team. The limit on freedom caused by enforcing an absolute must be carefully assessed especially at the higher levels. IBM is the company I know who enforced the most absolute standards at the organization level. This was referred as being blue or blue washed when you were acquired. Because IBM was competing in almost every market it felt it had to use its own technology for everything. This resulted in painful productivity deficiencies. I say painful to underline the fact people knew work could be accomplish more effectively but could not because IBM dictated its standards. In some area, like single sign-on, it paid off but in most it was a frustrating experience. My take on it is that absolutes should rise bottom up because they are believed to be the correct path. For example, by professionals sharing similar interest in guilds.

Enforcing absolutes is a hard task. Even when well communicated, adopting a standard requires coordination and dedication. The goal is to create a movement toward the objective. To get champions to propagate practices which augments the organization. In a previous organization, we had two primary development tools for the same language. The split was about 50/50. Even though one of the tool was clearly superior, it took 15 months to adopt it; one developer at a time voluntarily. The gain was substantial in the long run as only one set of configuration and plugins needed to be supported.

I had the chance to join a start-up at its beginning once and set many absolutes. The culmination of efficiency was demonstrated one day when a developer had to rebuild his environment starting with a newly formatted disk. Within one hour, he was able to submit a fully tested code change to the product. The standardization allowed for extensive automation and up to date documentation of the operating system, development tools and micro services of the organization.

Absolute is great when there are no exceptions but even if your absolute scenario only brings the number of exceptions down it is still a win. Once the count is reduced, it will allow you to document them to make it a semi-absolute.

Once a new absolute is agreed upon in an existing system, how do you introduce it? Progressively. But what about consistency? Life is a compromise. The absolute being simple you can migrate areas that are changed trivially. Over time, the knowledge gets shared and applied. The amount of time is less than you might expect since changes tend to be made in some areas much more frequently than others. This state becomes the new template. It documents your practices even though remote areas are still in an inconsistent state.

### Code formatting convention

Code formatting has triggered debates throughout computer programming history. Individuals have not relinquish their individuality for years in the name of betterness. Code formatters have evolved and become a blessing but still you can configure them to your project liking which leads to debates.

Take the time to resolve this topic expediently. Arm wrestle, cry, or yell but get it done, then close this topic forever. Adopting the default settings of your development tool is a simple way out.

The tool has to rule. Do not let humans do special formatting here and there because it is supposedly needed. Let the tool act and miss-align if need be. Always ensure you can reformat your whole project with a single action. Go have a beer with the people feeling hurt.

Global formatting conventions seem to be emerging. Code published on the web appears to be converging toward similar formatting. Eventually, we should be able to analyze the sum of the code published, weighted on relevancy, to extract this wisdom.

### Less code is more

When coding, there is often multiple way to express the same logic. An approach is to always use the expressions with the least syntactic elements. It might not be ideal is some cases but you will not spend time wondering which one to use. The team will align to the convention rapidly because of its simplicity.

Modern development tools will suggest transformations to your code to convert it into its shortest form. This seems an indicator that less is becoming a defacto standard. Making it an absolute agreed standard is the next logical step.

Extra brackets in conditions to clearly specify the order of precedent between `and` and `or` is [recommended](https://softwareengineering.stackexchange.com/questions/201175/should-i-use-parentheses-in-logical-statements-even-where-not-necessary). Unfortunately, it can lead to monstrosities like when developers become superstitious instead of knowledgeable about order of precedence: 
``` java
if ((!(done)) || ((!(first) && (myFunction(count) > 1) && (o instanceof MyClass))))
```

instead of

``` java
if (!done || !first && myFunction(count) > 1 && o instanceof MyClass)
```

I believe unit tests should be used to validate correctness not extra syntactic elements. Use of a well named function can also make it clearer:
``` java
if (!done || !first && countIsAcceptable(count) && o instanceof MyClass)
```
A complete re-organization of the code could likely have avoided the awful condition in the first place. Thus allowing for extra brackets to make things clearer can encourage poor coding practices.

If the scenario for conditions results in a semi-absolute, you will spend time to discuss, agree on the exceptions, and document them.

#### Ternary operator example

An example of less is more is the use of the ternary operator.

Code without ternary operator:
``` java
static String color(int position) {
    if (position > 1) {
        return "red";
    } else {
        return "green";
    }
}
```

Code with ternary operator
``` java
static String color(int position) {
    return position > 1 ? "red" : "green";
}
```
Although much more concise, I have found that developers tend to avoid the ternary operator. In this case, the vertical scrolling gain is significant: 5 lines to 1. As well as the single point of exit. It can take many months of code reviews for it to become a habit.

### Extreme camel case naming

Code identifiers and other names in computer systems can follow a convention for names called [camel case](https://en.wikipedia.org/wiki/Camel_case). The convention is easy to follow in most scenarios: `myGreatVariableName` or `ClassForEverything`. 

When acronyms are used in this convention people tend to write them in upper case: `siteURL` or `parseHTML`. A problem occurs when an acronym come firsts or when there are two consecutive acronyms. `HTMLand` looks like HTML but is really HTM followed by land. I experienced a similar case which took us three weeks to debug because our brain was fooled by the syntax. `HTMLURL` is obviously difficult and non-deterministic.

Other form of ambiguity arise in compound words like filename, bus stop, or ice-axe. They can have alternate valid syntaxes with or without spaces and hyphens.

Absolute solution is to camel case all words all the time: `htmlLand`, `fileName`, and `iceAxe`. The only time I have seen this absolute adopted is when I imposed it. I like it but it is clearly not a consensus.

### 0 warning policy

What happens when you leave a warning in a project? A second one appears. Then more. The first tolerable or ignored warning is the justification people are waiting for to leave more.

Bug hides in warning lists because once a few warnings become permanent nobody looks at the list anymore.

Every warning should be addressed be it in the start sequence, build or deployment. Block your builds or deployments if they have warnings.

If you cannot disable a third party warning by any means, document it in the project's README for example to ensure no one tries to silence it again.

Tools being imperfect will produce warnings that are not relevant to your context; security tools for example often do. Use the broadest configuration possible to disable them. In code, you can often disable a warning locally. Do not permit this because you will have no way of tracking what justified the bypass. When disabling warnings, document why you did close to the disabling configuration. This is important because you do not want to second guess the bypasses. Configuring broadly will likely cause a few legit cases to be missed but the lack of pollution from fine grained disabling will benefit the system as a whole.

## Tests are allergic to time

Intermittent test failures are a plague. A frequent cause of intermittency is timing. A test will run fine on a developer machine but not on someone else's and even less on the build server. This lack of determinism brings the value of timing related test cases close to none.

An example of a test relying on timing, is a test writing to an eventually consistent database which reads the value later. This is just one of many pattern of timing dependencies for tests.

An approach to writing timing dependent test cases is to add a time buffer. How much should the buffer be? 2x, 10x, 100x? We ran into a case where an operation could be off by a few milliseconds so we added a second of buffer. A few days later, the build failed again. Over the weeks, we brought the buffer to 10 seconds. We really liked that test. Believe it or not, six months later the test failed on a build server because a thread was starved. Deleting the test was a boon. Buffers slow down your tests and cost you precious delivery time.

Separate your slow timing dependent tests from your fast and deterministic ones. False positive investigation are expensive. Non deterministic tests are like mine in a field. You always have to worry about stepping on one. The partitioning will save you costly debugging.

The value of tests is based on numbers. Deleting a few does not have a significant impact on quality.

It is often possible to mock time to implement time dependent tests. This is a great solution since it makes the tests fast and deterministic without loosing much accuracy.

## Sum it up

You are driving on the U.S. Route 50 across thus desert in a convertible. The wind is refreshing. The road is straight without crossroads. You are cruising way above the speed limit. The sun rising on the left tells you it is going to be a beautiful day.

<br/>
<p align="center">
<img alt="Deterministic dices" width="400" src="https://cdn.jsdelivr.net/gh/patroytall/patrick-roy-me-asset/image/article/determinism-rules/us50road-1.png"/>
</p>
