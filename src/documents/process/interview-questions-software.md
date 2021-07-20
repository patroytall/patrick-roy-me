# Interview Questions - Software

## Software Development

**Describe your last difficult software design.**

The original problem, the process, and the solution.

**As a team lead, give key elements to delivering successful software.**

Clean code. Requirement alignment. Automated development tests. Great tools to manage tasks and code. Lightweight processes. Happy
developers.

**Name three favorite coding conventions**

Factorized code. Short methods. Camel casing. Mandatory code formatting. Class name as variable name. Short public method names, longer
privates. Comments for API and non-obvious logic.

**There is an article titled [Object-Oriented Programming — The Trillion Dollar Disaster](https://betterprogramming.pub/object-oriented-programming-the-trillion-dollar-disaster-92a4b666c7c7). What is your opion on OOP and its return on investment?**

State and function separation. Complexity. Real world modeling. Testing. Refactoring.


## JSON

**What does JSON stands for? What are its main advantages?**

JavaScript Object Notation. Data exchange. Simple easy to read (debugging) syntax. Easy to parse and create. Interoperability. Openness.

**What are JSON's limits?**

Difficult to extend and manage versions.

**How to express a unicode character in a JSON representation? JSON home site?**

"\ua1b2" in JSON's BNF at json.org.

**What is a BNF?**

Backus-Naur Form. Metasyntactic notation to specify syntax. Rule set with expressions, symbols, and terminals.


## Spring

**Can you instantiate a bean with the new operator?**

No. Beans must be instantiated by the spring context.

**Explain autowiring.**

Required beans from the application context container are automatically injected into the fields other beans.
Intermediate - How do you use encrypted passwords for authentication? What encryption types are
supported?
Provide a PasswordEncoder bean to the authenication manager. Standard and BCrypt.
Senior - On which class elements can the @Autowired annotation be used?
Field, setter, or constructor.


## Security

**How is a cross-site request forgery (CSRF) attack performed?**

CSRF is an attack which forces an end user to execute unwanted actions on a web application in which he is currently authenticated.

**Why is salting required when storing password hashes?**

To prevent dictionary attacks.


## REST

What are the typical REST HTTP methods? Other HTTP methods?

GET, POST, PUT, and DELETE. OPTIONS, HEAD, and PATCH.

**What should the return status of a DELETE invocation be?**

Usually 204 NO CONTENT.

**Explain the idempotence property of REST methods? Which methods have it?**

An idempotent method can be called many times without different outcomes. GET, PUT, and DELETE


## Aspect-oriented programming

**What is aspect-oriented programming? When is it useful?**

Handle crosscutting concerns. Global logging and validation.