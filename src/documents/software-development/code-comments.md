# Code Comments

**"Don't comment bad code - rewrite it."** - Brian W. Kernighan and P. J. Plaugher

Comments often do not get updated when code changes. They become misleading. Readable code is the ultimate comment. Except for specific use cases lists below avoid comments whenever you can.

## Author comments

In enterprise code, do not use author comments. That is comments specifying one or more authors having worked on the code. Enterprise code is owned by everyone. People change role, leave the company. These types of comments can be misleading and do not age well. Modern source control provides the history of changes and their authors.

Link: Stack Overflow - is code with authors name absolute necessary

## Methods as comments
``` java
// Determine if apple can be used in pie
if (apple.color == Color.RED && apple.sizeCentimeters > 5 && apple.ageDays > 7)
```

versus

``` java
private boolean isAppleUsableInPie() {
  return apple.color == Color.RED && apple.sizeCentimeters > 5 && apple.ageDays > 7;
}
```

## Unit tests as comments

When a class behavior is public it can also be documented with well named Unit tests.

```java
@Test(expected = RuntimeException.class)
public void processPurchase_withQuantityOf0_throws() {

@Test(expected = RuntimeException.class)
public void processPurchase_withNullName_throws() {

@Test(expected = RuntimeException.class)
public void processPurchase_with0Items_throws() {
```

## Acceptable comments

### Class methods comments

Public methods in classes should often have comments explaining the class behavior. As the unit test do for the writer of the class, they document the proper way to use the methods for external consumers. These comments should cover the valid states for the parameters. They should should also described the expected output of the methods based on its inputs and the class state. Of special importance is the handling of null values which is often left undefined.

In Java, interfaces, like public class methods, should often have comments explaining the behavior their implementation will provide.

### Legal comments

A legal notice at the top of classes is still mandatory in many enterprises. A more factored approach is to use a license file at the root of the project.

### Cryptic syntax comments

Regular expressions for example can be difficult to read. A comment summarizing the regular expression intent is often useful. It must be close to the regular expression so to be kept synchronized.

## Unacceptable comments

### Dead code
Commented code should not be present. The version control tool used to persist the code can be used to trace older code.

### TODO
Code base is not a project management tool. The practice of leaving TODOs in code does not scale well. TODOs pill up quickly and become a constant noise.

### Redundant and trivial comments
```java
/**
 * Get the quantity.
 */
public long getQuantity() {
```

## Comments format
Code files can reformatted at any time. Do not use custom indentation to make a comment look nice. It will be lost when code is reformatted.

## Comments scope
In this example, the Apple class should not document how the Pie class is going to use it.

```java
public class Apple {
  /**
   * Return the apple age so the maker of the pie can determine how many apples are needed.
   */
  public long getAge() {
```

## References

Clean Code book - Chapter 4: Comments