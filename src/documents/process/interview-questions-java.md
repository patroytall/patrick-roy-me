# Interview Questions - Java

## Constructor

**Can a constructor call an other? How?**

`this(x)` and `super(x)`.

**What are the limit of constructor chaining?**

Can only call one as the first statement.

[Stack Overflow](https://stackoverflow.com/questions/285177/how-do-i-call-one-constructor-from-another-in-java).


## Generic

**What is the syntax to declare a generic type? Generics can be used in the definition of which elements? Which two types can be passed as parameters to generics?**

`ClassName<T>`. Definition of classes, interfaces and methods. Classes and interfaces as parameters.

**In a generic `class X<T>`, can you create an instance of type T? For example, `new T()`**

No, unless you have a reference to a class object of T.

[Stack Overflow](https://stackoverflow.com/questions/75175/create-instance-of-generic-type-in-java) and [Oracle](https://docs.oracle.com/javase/tutorial/java/generics/why.html)


## Primitives

**Can autoboxing or unboxing return a null pointer exception? If yes, when?**

Yes, unboxing a Long null value used in long context.

## Variables

**What is a transient variable?**

Transient variables are not serialized.

**Can you pass a list to method with a variable arguments?**

Yes, as an array. `T...` is syntactic sugar for a `T[]`.

[Stack Overflow](https://stackoverflow.com/questions/9863742/how-to-pass-an-arraylist-to-a-varargs-method-parameter)

**What is local variable type inference? Syntax? Introduced in which version of Java? Is var a keyword?**

Explicit type can be replaced by the reserved type name var for local variable declarations that have initializers. var. Java 10. No.

[Oracle documentation](https://docs.oracle.com/en/java/javase/13/language/local-variable-type-inference.html)


## Reflection

**What is reflection? Give an example.**

ability to inspect and dynamically call classes, methods, attributes, etc. at runtime. Extensibility: load a class by name.

**What are reflection's drawbacks?**

Performance: code cannot be optimized. Security: permission required. Internals exposure: private can be modified.

[Stack Overflow](https://stackoverflow.com/questions/37628/what-is-reflection-and-why-is-it-useful) and [GeeksForGeeks](https://www.geeksforgeeks.org/reflection-in-java/)


## Collections

**When should a linked list be used instead of an array list?**

Mostly never.

[Stack Overflow](https://stackoverflow.com/questions/322715/when-to-use-linkedlist-over-arraylist-in-java)

**Explain how `equals` and `hashCode` methods are used by a hash map. What is the consequence of a poor `hashCode`?**

`hashCode` group in buckets. `equals` find the exact element. Poor `hashCode results` in linear search.


## Strings

**How is `String str3 = "a" + str1 + "b" + str2 + "c"` handled by the JVM? Should it be used? Performance optimization?**

Slower string builder performance compare to explicit string builder. Should be used because clear and simple syntax. Java 9 introduced `invokedynamic`.

**Why are Java strings immutable? How are string literals handled by the JVM?**

Increases system predictability, even across threads. Cached hash code. Can be re-used. Greater security. Literals are pooled in JVM scope.


## Class & methods

**How do you create a singleton class?**

Private constructor.

**What are the two categories of nested classes?**

Static nested classes and non-static inner classes.

**Can you overload a method using different return types?**

No. Call binding is based on parameter signature.

**Can you override a private or static method in Java?**

No. You can hide a static method.

[Stack Overflow](https://stackoverflow.com/questions/16313649/what-is-method-hiding-in-java-even-the-javadoc-explanation-is-confusing)

**Why does Java not support multiple inheritance?**

Diamond ambiguity. Design complexity with low real world value.


## Final

**Can an interface be declared final**

No. Interfaces must be implemented.

**What is the advantage of final fields? Give Java limits with final fields initialization?**

Final fields lead to immutable objects. Class logic is easy to understand. Only the field reference is final, object can still be modified. Final fields cannot be initialized in methods other than constructor.


## JVM

**How does Java achieve "write once and run anywhere"?**

Portable byte code.

**What is Just In Time (JIT) compilation ?**

Byte code compiled at runtime to improve performance


## Exceptions

**What are Java's two exception types? Explain their behavior.**

Checked and unchecked. Check you have to handle. Uncheck bubble to the top transparently.

**When should checked exceptions be used? When should unchecked exceptions be caught?**

Only when the caller needs to handle an expected failure. Catch uncheck to communicate the exception or recover from it.

**When should an exception be silenced?**

When the behavior of an external component is optional. Even then, a log entry is often required. Exception in normal logic can have a
performance cost and are misleading.

## Threads

**What is the difference between volatile and atomic variables?**

Volatile ensure correct thread visibility. Atomic guaranties read/write atomicity.

**How does synchronized on a static method work?**

The class instance is locked.

## Closeable

**What is the `Closeable/AutoCloseable` interface used for? What syntax can take advantage of it?**

A Closeable is a source or destination of data that can be closed. Try with resource.

**What is the difference between a Closeable and AutoCloseable?**

AutoCloseable is not idempotent.

[GeeksForGeeks](https://www.geeksforgeeks.org/closeable-interface-in-java/#:~:text=Closeable%20extends%20IOException%20whereas%20AutoCloseable,try%2Dwith%2Dresources%20statements.)
