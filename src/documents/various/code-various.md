# Code Various

## Review comments

### Certainty modifier

When wording your review comments, you can indicate a level of certainty based on how likely you are to be correct and the importance of the request:

- [MAY], Maybe, I believe, or I think - 40-70% correct - optional change
- [SHOULD], Should, or I suggest - 70-90% correct - would be better
- [MUST], Must, or no certainty modifier - 90+% correct - required

This scheme is useful when reviewing across teams and to avoid blocking a merge. Teams can choose not to use such a scheme and treat all comments as blocking. Change without a certainty modifier should be considered blocking.

### Investigation comments

A reviewer can ask you to investigate or look deeper into a code change because he feels there might be a better way to implement it but he may not necessarily know precisely how.

## Switch statement smell
Switch statements in object oriented code are often a sign of lack of proper design. They can create methods with a high [cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity).

Link: [Stack Overflow - Ways to eliminate switch in code](https://stackoverflow.com/questions/126409/ways-to-eliminate-switch-in-code)

## Naming

### Camel case

Names in code should follow a strict pure camel case convention. For example:

- isReadyForProcessing
- htlmContent
- usDate (where us is US the country)
- workAround (which is often written as workaround)
- stakeHolder (which is written as stakeholder)
- userName
- userId
The reason to use camel case even in stakeHolder is to make the process deterministic.

In Java, class and enumeration names start with an upper case. For example:
- BorderProtector
- CarDriver
- Color

#### Links: 
- [WIKIPEDIA - CAMEL CASE](https://en.wikipedia.org/wiki/Camel_case)
- [STACK OVERFLOW - ACRONYMS IN CAMEL CASE](https://stackoverflow.com/questions/15526107/acronyms-in-camelcase)

### Get vs Create for methods creating object

To avoid conflicting with the Command Query Separation principle, it is a good idea to prefix methods creating new objects with "create" instead of "get". Enforce this convention to avoid creativity like "build", "make", "setup", "init", etc. The create methods are common in test classes where fixture state needs to be created.

```java
public class greatestClassEver() {
  public getFact() {
    return fact == null ? "none" : fact
  }

  private String createLatestNews() {
    LatestNews latestNews = new LatestNews();
    latestNews.setFilter("everyone");
    return latestNews;
  }
```
Queries must be idempotent. Create methods do not change the state of the object but they return a different object on every invocation.

Create in the context of a class method names should not be confused with the "create" of the Create Read Update Delete principle of data persistence.

## Java programming

### Static keyword for private methods without state

Using the static keyword for private methods which do not make use of class state has these benefits:
- Method can be moved easily to a different class if needed
- Reduces the state complexity as the only scope to be aware of is the method. This is especially useful when reviewing code changes when an IDE not available.
- Methods can be easily tested in isolation. In this case this access will be set to default, no keyword, instead of private which is logically equivalent.

This is an unconventional scheme. I shifted to it only a few years ago after seeing its great value in my projects. Many people have refused to adopt the scheme because they say it encourages static behavior classes. I agree that there should be no static state and as few public static methods as possible but I believe that the gain is greater than the risk which can be caught at code review.