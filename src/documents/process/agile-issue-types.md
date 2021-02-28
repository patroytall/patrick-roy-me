# Agile Issue Types

## Epic

Epics are large encompassing stories. Epics must reach a resolution within a reasonable time frame. A few months for example. Permanent epics must be avoided.

Epics must be decomposed into children stories to be usable in agile boards. The epics should be used to record common requirements between its stories.

High level context information can also be included in an epic but should be identified as such. For example, a customer Power Point presentation about feature can be attached to an epic and marked as context for the requirements given in the epic description.

Epics do not have relative priority to each other. An epic's priority can be derived from its stories priorities.

## Story

A story is used to track end user requirements for a behavior change. Stories should be written by product owners. Stories are implemented by development.

### Summary

A story summary (title) must cover the following elements:

- Who - Which end user requires the change
- What - What is required from the end user perspective
- Why - What business value does the change bring

The who element can be omitted when it is implicit. The what must be understandable by the end user. The why should be present as it is a key factor in determining priority.

### Description

The description must give enough details about the requirement for development to derive implementation tasks from the story.

The level of granularity of the requirements is up to the author of the story. When details are not specified by the author, development is free to act as it wants. When development believes the requirements are incomplete, it must ask the author to update the story.

Implementation suggestions can be given but must be identified as such.

Acceptance criteria should define the done conditions of the story.

### Priority
A story's priority is based on it position in the backlog. The highest the most important. Once in a sprint this order priority does not apply.

### Resolving
Stories should be resolved its associated code has been merge to the master, or equivalent, branch. If the stories has sub-tasks, all of its sub-tasks must be resolved prior to the story being resolved.

### Closing
Stories should be closed by the author when the requirements are considered met in a deployed version of the software. The requirements are met when the acceptance criterion are all satisfied. The author closing responsibility can be delegated to a verification team which will close the story after running test cases which covers the acceptance criterion. 

## Bug

Bugs are requests to have an intended behavior be provided, restored, or corrected. The definition of intended is critical as it sets the boundary between a new behavior, a story, or a bug. In the absence of a clear record of what was intended, the product owner is responsible for determining bug status.

Bugs should generally be fixed in priority before stories and improvements. The rational being that they incur a cost to the organization and that the end user will be dissatisfied by their presence. Delaying resolution of a bug in favor of new behavior is discouraged. It is better to fix a bug early since it avoids blockers for other people, improves release planning because of risk of resolution time, and ensures better continuous integration readiness. Lower priority bugs can be ignore for a period of time but should eventually be marked as no intention to fix or be addressed.

### Component

Bugs are created by various personas sometimes without much knowledge about the underlying implementation or even application behavior. To address this lack of knowledge bugs must go through triage by someone with more knowledge. The originator of a bug will set the component of a bug based on an educated guess. It is up to the person responsible for this component to assess if the investigation to resolve the bug should start in the set component or a different one. The component of a bug will change as it is investigated by different people in development.

## Improvement

Issue of type improvement are used to track requirements that do not originate from the business. Product owners create issue of type story based on business requirement originating from the end users. Improvements on the other hand, are intended for development to record product requirements that might not have a direct and/or immediate impact on the end user. Improvements closely relates to [Technical Stories](https://rgalen.com/agile-training-news/2013/11/10/technical-user-stories-what-when-and-how). Improvements track requirements of this nature:

- Test case creation - For example: a change is rushed to meet a dead line without proper test. 
- Code clean up - Minor code changes to, for example, make it more readable, remove unused, or change hierarchy/package.
- Refactoring - Ensure business logic is implemented in single location.
- Technology updates - For example, updating a component to its latest version to ensure latest fixes are present.
- Performance - development identifies an area where it can easily improve performance although it is not request by the end user 

The previous elements are all part, to a certain level, of the large Technical Debt bucket. When ignored, they cause applications to become more an more costly to maintain. Technical debt improvements can occur as part of the normal change process but sometimes they need to be isolated in a dedicated improvement to manage its risk or delivery. Technical Debt improvements should be logged with details about the correct implementation and why it is needed.

Some architecture changes will be of type improvement. See Architecture Changes.

Improvements follow most of the same guide lines as stories. Improvement differences:

The persona can be unspecified as it is implicitly the development team. 
Can provide a suggested a implementation as their originators are often intimate with the area of the application requiring improvement.

Product owners should allocate a minimum amount of velocity points for improvements. Development decide which improvements it wants to prioritized. In a typical team, at least 25% of the story points must be allocated to improvements. This assumes development assiduously logs improvements as they become known. Assiduity is required to ensure completeness, thus not have development work on low priority improvements. A team without release pressure could require less points as they will produce less technical Technical Debt.

## Task

Sub-task, referred as task, under a story to complete a part of the work necessary to complete it.