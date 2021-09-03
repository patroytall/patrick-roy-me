# Agile Software Development

**TO-DO:** review this document

### Agile in a nutshell
Overview of the whole agile software development: https://www.youtube.com/watch?v=vkYEqz_MA5Y

### Definition
Agile Software Development is defined in opposition to the waterfall development model. It is a set of guide lines where the following are encouraged:

The software requirements can be frequently updated. A set of requirements is frozen for a few weeks at a time to allow design and implementation cycles.
Developers are grouped in small teams. The teams are accountable for the quality of the delivered software.
Developers are versatile. They have the skill sets to handle the changing requirements optimally. 
Development status is publicly available and updated frequently.
The software is continuously in a deliverable state. The end user frequently receives changes.
Software behavior change
Delivering software is about changing a computer system state so it brings business value to its consumer. Each change to the software to deliver this value is a software behavior change. Every type of changes be it a removal, an update, an addition, or a different implementation of an existing behavior are considered software behavior changes.

A different implementation of an existing behavior occurs when development changes how an end user observable behavior is implemented but without changing the behavior from the end user perspective. It is considered a software behavior change since from a system point of view the observable behavior is delivered differently.

A behavior change will sometimes be referenced as a software change, or simply a change.

### Actors
#### Actor - End user
End user is defined as the consumer of the delivered software behaviors. It can be subdivides into more specific roles named personas.

End user can also be used loosely in a context relative to a component of the system. The end user of a service within a system can thus be an other component of the system.

#### Actor - Product owner
Person responsible for gathering the end user software requirements. The requirements must be prioritized to optimize the end user value.

The requirements must be decomposed in small increments delivering value to the end user. This decomposition can be referred as minimal viable product updates.

The word product in product owner should not be taken literally. The product is a high level abstraction for the software behavior delivered to the end user.

#### Actor - Development
Developers, managers, and architects responsible for building software.

WIKIPEDIA - AGILE SOFTWARE DEVELOPMENT: https://en.wikipedia.org/wiki/Agile_software_development
ACTORS DEFINITION
MOUNTAIN GOAT - PRODUCT OWNER: https://www.mountaingoatsoftware.com/agile/scrum/roles/product-owner
PERSONA DEFINITION: https://en.wikipedia.org/wiki/Persona_(user_experience)

## Development Workflow

An agile development work flow should keep the number of states and transitions to a minimal number to reduce complexity. Project managers, product owners, and other business stakeholders should not inject states, transitions or mandatory attributes into the workflow to meet limited scope requirements. The reason being that the simpler the workflow the more agile the teams can be. The workflow will be shared by many teams with different domain problems. There is often a strong temptation to add complexity to the work flow to handle edge use case scenarios. The workflow is involved in every agile change. It has deep impact on the development experience.

If stakeholders need more tracking about the work being performed, for reporting for example, they should incur the maintenance cost, not development. Optional attributes can be attached to a workflow implementation. The stakeholders are responsible for setting the values and keeping them accurate. The attributes should not become a development tax which reduces velocity.

### States
The word issue is used here to represent an artifact tracking an agile change to be done. An issue can contain sub issues. An issue can be freely transitioned from any state to any state.

### Created
A newly created issue. It is ready for development to work on. Sometimes an unfinished issue will be created. Its description should indicate this state. This is better than creating a full work flow state as it is an exception case.

### Open
When development starts working on an issue. It indicates to the stakeholders that active work is being performed toward its resolution. Open issues must be assigned to someone. Passing assignment from one person to an other should be documented with expected action to be taken if not obvious.

### Done
The issue change has been delivered to the end user. If an issue contains sub issues, all its sub issues should be in Done state before the issue is transitioned to Done. An issue should only be transitioned from Done state to an other state when the end user has not started using the change. If the end user has started using the change but the change is not adequate, a separate issue tracking the failure to properly deliver the change should be created.

## Defintion of Done
The definition of done for an agile behavior change is important. The complete done, sometimes referred as "done done", must be used in agile.

Done requires a behavior change to be end user ready:

- code complete
- acceptance criteria met
- test, manual and automated, executed successfully
- deployment ready or ideally deployed if deployment is automated

If the deployment automation allows it, the deployment of the behavior change available to the end user should be included in the definition of Done.