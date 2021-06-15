# Interview Questions

## Java

### Constructor

**Intermediate** - Can a constructor call an other? How?

Yes. `this(x)` and `super(x)`.

**Senior** - What are the limit of constructor chaining?

Can only call one as the first statement.

[Stack Overflow](https://stackoverflow.com/questions/285177/how-do-i-call-one-constructor-from-another-in-java).

### Generic

**Intermediate** - What is the syntax to declare a generic type? What are the two types of generic?

`ClassName<T>`. Class or interface.

**Senior** - In a generic `class X<T>`, can you create an instance of type T? For example, `new T()`

No, unless you have a reference to a class object of T.

[Stack Overflow](https://stackoverflow.com/questions/75175/create-instance-of-generic-type-in-java)

### Closeable

**Intermediate** - What is the `Closeable/AutoCloseable` interface used for? What syntax can take advantage of it?

A Closeable is a source or destination of data that can be closed. Try with resource.

**Senior** - What is the difference between a Closeable and AutoCloseable?

AutoCloseable is not idempotent.

[GeeksForGeeks](https://www.geeksforgeeks.org/closeable-interface-in-java/#:~:text=Closeable%20extends%20IOException%20whereas%20AutoCloseable,try%2Dwith%2Dresources%20statements.)

### Primitives

**Intermediate** - Can autoboxing or unboxing return a null pointer exception? If yes, when?

Yes, unboxing a Long null value used in long context.

### Variables and Arguments

**Intermediate** - What is a transient variable?

Transient variables are not serialized.

**Senior** - Can you pass a list to method with a variable arguments?

Yes, as an array. `T...` is syntactic sugar for a `T[]`.

[Stack Overflow](https://stackoverflow.com/questions/9863742/how-to-pass-an-arraylist-to-a-varargs-method-parameter)

### Reflexion

**Intermediate** - What is reflexion? Give an example.

Process of introspecting or dynamically manipulating the features and state of a class at runtime. Extensibility: load a class by name.

Senior - What are reflexion's drawbacks?
Performance: code cannot be optimized. Security: permission required. Internals exposure: private can be modified.


Collections
Junior - When should a linked list be used instead of an array list?
When objects need to be inserted other than at the end.
Intermediate - Explain how equals and hashCode methods are used by a hash map. What is the
consequence of a poor hashCode?
hashCode group in buckets. equals find the exact element. Poor hashCode results in linear search.
Senior - Compare the memory usage and performance of an array list to a linked list
Array list has higher initial memory foot print but each linked list item requires more. Array list faster for everything but inner list inserts. Even
adding items to the end is comparable.
Senior - How do you convert a list to an array using type safe statement?
list.toArray(new T[list.size()])


Senior - Why are Java strings immutable? How are string literals handled by the JVM?
Increases system predictability, even across threads. Cached hash code. Can be re-used. Greater security. Literals are pooled in JVM scope.

Class
Intermediate - What are the two categories of nested classes?
Static nested classes and non-static inner classes.

Final
Senior - What is the advantage of final fields? Give Java limits with final fields?
Final fields lead to immutable objects. Class logic is easy to understand. Only the field reference is final, object can still be modified. Final fields
cannot be initialized in methods other than constructor.


Exception
Junior - What are Java's two exception type? Explain their behavior.
Checked and unchecked. Check you have to handle. Uncheck bubble to the top transparently.
Senior - When should checked exceptions be used? When should unchecked exceptions be caught?
Why are checked exceptions commonly used in Java standard library?
Only when the caller needs to handle an expected failure. Catch uncheck to communicate the exception or recover from it.
Senior - When should exception be silenced?
When the behavior of an external component is optional. Even then, a log entry is often required. Exception in normal logic can have a
performance cost and are misleading.

Threads
Senior - What is the difference between volatile and atomic variables?
Volatile ensure correct thread visibility. Atomic guaranties read/write atomicity.
Senior - How does synchronized on a static method work?
The class instance is locked.

JSON
Junior - What does JSON stands for? When and why is it used?
JavaScript Object Notation. Data exchange. Simple easy to read (debugging) syntax. Easy to parse and create. Interoperability. Openness.
Intermediate - What are JSON's limits?
Difficult to extend and manage versions.
Intermediate - How to enter a unicode character in a JSON representation? How do you find the
answer.

"\ua1b2" in JSON's BNF at json.org.
Senior - What is a BNF?
Backus-Naur Form. Metasyntactic notation to specify syntax. Rule set with expressions, symbols, and terminals.


Spring
Junior - Can you instantiate a bean with the new operator?
No. Beans must be instantiated by the spring context.
Intermediate - Explain autowiring.
Required beans from the application context container are automatically injected into the fields other beans.
Intermediate - How do you use encrypted passwords for authentication? What encryption types are
supported?
Provide a PasswordEncoder bean to the authenication manager. Standard and BCrypt.
Senior - On which class elements can the @Autowired annotation be used?
Field, setter, or constructor.


Security
Intermediate - How is a cross-site request forgery (CSRF) attack performed?
CSRF is an attack which forces an end user to execute unwanted actions on a web application in which he is currently authenticated.
Intermediate - Why is salting required when storing password hashes?
To prevent dictionary attacks.
Senior - Why use BCrypt instead of standard hashing when storing passwords? Anything better?
BCrypt needs constant memory, thus more difficult to run concurrently on hardware, and runs configurable multiple iterations. SCrypt uses
exponential memory.

REST
Junior - What are the typical REST HTTP methods? Other HTTP methods?
GET, POST, PUT, and DELETE. OPTIONS, HEAD, and PATCH.
Intermediate - What should the return status of a DELETE invocation be?
Usually 204 NO CONTENT.
Senior - Explain the idempotence property of REST methods? Which methods have it?

An idempotent method can be called many times without different outcomes. GET, PUT, and DELETE

Aspect-oriented programming
Senior - What is aspect-oriented programming? When is it useful?
Handle crosscutting concerns. Global logging and validation.

Software Development
Junior - Describe your last difficult software design.
The original problem, the process, and the solution.
Intermediate - As a team lead, give key elements to delivering successful software.
Clean code. Requirement alignment. Automated development tests. Great tools to manage tasks and code. Lightweight processes. Happy
developers.
Intermediate - Three favorite coding conventions
Factorized code. Short methods. Camel casing. Mandatory code formatting. Class name as variable name. Short public method names, longer
privates. Comments for API and non-obvious logic.