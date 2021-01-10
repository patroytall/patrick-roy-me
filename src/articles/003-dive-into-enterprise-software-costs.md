# Dive into enterprise software costs (WIP)

<br/>
<p align="center">
<img alt="Deterministic dices" width="400" src="https://cdn.jsdelivr.net/gh/patroytall/patrick-roy-me-asset/image/article//dive-into-enterprise-software-costs/galaxy-2.png"/>
</p>
<br/>

This article extends on Martin Fowler excellent article [Is High Quality Software Worth the Cost?](https://martinfowler.com/articles/is-quality-worth-cost.html). It gives details about scenarios I have experienced where software costs for equivalent features increases with project growth.

The fact that system complexity taxes feature development more and more over time is taken as a given. I will dive into specific areas which have the highest impact on project velocity.

## Management illusion

TO-DO

## Performance is a hard problem

The non-functional requirement for performance, and its sibling scalability, are the internal quality factors which have the most impact on a project. If your system needs to improve its performance or scale to a larger audience, it will have a broad and profound effect on your architecture.

You can throw more hardware at the problem for a while but eventually you will reach the point where data flows have to be modified, where architecture elements have to be added, replaced, or updated, where you need new testing, or where you need to put in place new processes.

The development team will tell management that the system can scale but this is likely a half truth. Every component in the system has a limit. As in security, performance is limited by the weakest link.

You will test for performance but that will not prevent you from being surprised when the actual load occurs in production.

People with experience building a similar system can help mitigated the performance headaches. In my experience though, there are always enough differences from system to system that the topic remains a major concern. The best practices you will have followed along the way will keep the issue a problem instead of a catastrophe if you had had no experience at all.

## Architecture refactoring

As the number of components increases in a system duplication will start to occur. You can also witness deviations from agreed global standards. These can go one for a while but there is a point where the costs of the divergence will justify an architectural refactoring to bring them back inline. A common symptom is system bugs where the lack of alignment makes feature development difficult because of the confusion from the multiple source of truth. This situation can be detected when single logical changes have to be applied in multiple locations in the system.

TODO

## Coordination is not linear

### Product owners

TO-DO

## No one knows it all

TO-DO

## Skills inadequacy

To-DO

## Testing times increase