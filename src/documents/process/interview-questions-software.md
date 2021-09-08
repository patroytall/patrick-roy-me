# Interview Questions - Software

## Software Development

**Describe your last difficult software design with technical details.**

The original problem, the process, and the solution.

**As a team lead, give key elements to delivering successful software.**

Clean code. Requirement alignment. Automated development tests. Great tools to manage tasks and code. Lightweight processes. Happy
developers.

**Name three favorite coding conventions**

Factorized code. Short methods. Camel casing. Mandatory code formatting. Class name as variable name. Short public method names, longer
privates. Comments for API and non-obvious logic.

**There is an article titled [Object-Oriented Programming — The Trillion Dollar Disaster](https://betterprogramming.pub/object-oriented-programming-the-trillion-dollar-disaster-92a4b666c7c7). What is your opion on OOP and its return on investment?**

State and function separation. Complexity. Real world modeling. Testing. Refactoring.

**Do you have a personnal programming projet? 

GitHub, Bitbucket or live site.

**Do you read, listen or watch training articles, podcasts, or videos?**

Hacker News, Slash Dot, YouTube, etc.


## Architecture

**Given an application system composed of backend services with databases fronted by an HTTP services serving clients load balanced by a reverse proxy, speculate on why clicking on a button in the client can freeze the application for 60 seconds.**

Database contention, erroneous load balancing, algoritmic complexity, service coupling, etc.

[YouTube](https://www.youtube.com/watch?v=bDIB2eIzIC8)


## JSON

**What does JSON stands for? What are its main advantages?**

JavaScript Object Notation. Data exchange. Simple easy to read (debugging) syntax. Easy to parse and create. Interoperability. Openness.

**How to express a unicode character in a JSON representation? Have you visited the JSON home site?**

"\ua1b2" in JSON's BNF at json.org.

**What is a BNF?**

Backus-Naur Form. Metasyntactic notation to specify syntax. Rule set with expressions, symbols, and terminals.

**What are JSON's limits? Why has JSON replaced XML in so many contexts? What does Protocol Buffers add?**

JSON is difficult to extend and manage versions. JSON fast and easy to read for humans.


## Spring

**Can you instantiate a bean with the new operator?**

No. Beans must be instantiated by the spring context.

**Explain autowiring.**

Required beans from the application context container are automatically injected into the fields other beans.

**On which class elements can the @Autowired annotation be used?**

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