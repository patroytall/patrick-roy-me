---
Description: This article builds on Martin Fowler article "Is High Quality Software Worth the Cost?". It gives details about scenarios I have experienced where software costs for equivalent features increases with project growth.
---

# Dive into enterprise software costs (WIP)

<br/>
<p align="center">
<img alt="Deterministic dices" width="400" src="https://cdn.jsdelivr.net/gh/patroytall/patrick-roy-me-asset/image/article//dive-into-enterprise-software-costs/galaxy-2.png"/>
</p>
<br/>

This article builds on Martin Fowler excellent article [Is High Quality Software Worth the Cost?](https://martinfowler.com/articles/is-quality-worth-cost.html). It explores scenarios I have experienced where software costs for equivalent features increased with project growth.

The fact that a growing system complexity taxes feature development more and more over time is taken as a given. I will dive into areas which had the highest impact on project velocity.

## Client illusion

When an application is demoed to a client its new features can enthrall him. He will start to think of everything else he wants the application to do then discuss it with product leadership. To the question "could we do this", he will inevitably get the answer "yes". Each "yes" answer is relatively true but the sum of the answers is most certainly false. The resulting perception from the client is thus an illusion.

Features are not stacked side by side. They are integrated together in a complex maelstrom of entangled logic. New features often impact previous features in unexpected ways.

The agile development approach primary emphasis is to only deliver what is being requested to increase speed to market. Thus what the client see is only and only what the application can do. Developers will pull ingenious engineering feats to deliver a narrow feature. Broadening such a feature can require a complete redesign. The client assumes that because a feature is present extending around it should be easy. This puts him deeper into the illusion.

The client state of illusion affects his cost perception. By keeping his expectations high, the illusion causes the actual delivered software to appear punny in comparison to what he perceives should have been delivered.

## Performance is a hard problem

The non-functional requirement for performance, and its sibling scalability, are the internal quality factors which have the most impact on a project. If your system needs to improve its performance, scale to a larger audience or handle more data, it will have a broad and profound effect on the architecture.

You can throw more hardware at the problem for a while but eventually you will reach the point where data flows have to be modified, where architecture elements have to be added, replaced, or updated, where you need new testing, or where you need to put in place new processes.

The development team might tell management that the system can scale but this is likely a half truth. Every component in the system has a limit. As in security, performance is limited by the weakest link. Identifying the weakest link is difficult.

You will test for performance but that will not prevent you from being surprised when the actual load occurs in production.

People with experience building a similar system can help mitigated the performance headaches. In my experience though, there are always enough differences from system to system that the topic remains a major concern. The best practices you will have followed along the way will keep the issues a hard problem instead of a catastrophe if you had had no experience at all.

Building an architecture focused on performance preemptively is generally a sure way to miss time to market dead lines. You will incur large costs early in the product life which on average will not be recuperated since many products change significantly in their early stage or never see the light of day.

## Work coordination is non-linear

Here is a trivial example of the non-linearity of work coordination in a growing system. When designing a new feature which involves N components you will consult with the component owners to ensure the design is sound. When things get complicated, you will try to gather everyone at the same time to resolve the issues. You will look at everyone's agenda and find a time slot. Your meeting will occur a few days later. Someone will not show up to the meeting but you will proceed anyway. A decision will be made. The person not present will eventually hear about the outcome and come up with an argument that invalidates the decision.

The previous example was only in the scope of the development team. An organization has many professions intertwined to deliver products. The combinatorial explosion of collaborations required to deliver features has a major impact on the cost of software.

## Backward compatibility deceleration

Backward compatibility is to ensure that everything added to the system preserves existing behavior for the feature set to be unaffected. In a system without downtime, this multiplies the cost of delivering a given feature. There is no limit to the multiplier factor. I have seen changes ten times more costly because of backward compatibility.

Cost of features before backward compatibility is a requirement versus after cannot be compared. Once it is a requirement, the multiplier factor will go up slightly over time in function of system coupling but not in a drastic manner.

External third-party backward compatibility is the most constraining because you need to preserve APIs for extended periods of time. The code complexity associated to supporting long lasting APIs will cause important costs.

## Architecture refactoring

As the number of components increases in a system duplication will start to occur. You can also witness deviations from agreed global standards. These can go one for a while but there is a point where the costs of the duplication and divergence will justify an architectural refactoring to rectify the situation. A common symptom is system bugs where the lack of alignment makes feature development difficult because of the confusion from the multiple sources of truth. This situation can be detected when single logical changes have to be made in multiple locations.

When sharing of common logic is required you might share the code through a library or introduce a dedicated service for example. Regardless of the approach, the cost will be important. Ensuring the shared logic is fully compatible with its consumers requires skilled resources.

The greatest effort arises when state needs to be unified. Extracting state from multiple locations and exposing it through a new common interface is so difficult you will wish you had been reassigned to a green field project. A derivative scenario of the state unification is the migration of legacy applications state to a new architecture. This happens when a system grows and replaces old systems. 

### Product owners

The long term vision of product owners determines the success of the products. It is intangible and sometimes difficult to explain but you can feel it in their day to day decisions. Numerous road-map documents will be produced to concretize this vision. They are needed to reassure the people paying for the software. In an agile environnement though, change is so rapid that it is the vision of the product owners that guides the teams.

Aligning a large amount of visions is impossible; it would take a ridiculous amount of time. Growing projects thus have to account for constant deviations toward loosely defined goals. Once implemented, paid for, it becomes possible to realign for the next stretch. Unnecessary functionality will be left dormant or removed if an organization is courageous. I remember a case of an unused functionality in a product. I raised it as a candidate for removal. I got a strong no response; it was paid for and could be useful in the future. I then started to record the additional complexity, cost, caused by the presence of this functionality. Over six months time, I demonstrated that 10% of my team efforts had been to support the unused functionality which finally permitted its removal.

## No one knows it all

In the early phases of a project, key individuals have broad knowledge of the system. They can steer the decision processes for most topics. As more and more components are added to the system, the decision processes needs to be democratized into committees. Analysis and debates and required for these committees to make decisions.

As a project grows even more, it gets difficult to identify the people with the knowledge to make a decision about a topic. You need people who have the knowledge about who should be contacted for a given topic.

## Workforce and skills inadequacy

The people who are good at starting projects are not necessarily the people that are adequate to bring you to the next phases. Creativity and innovation rapidly have to be supported with new skills: versioned APIs, system debugging, horizontal scaling, database optimization, etc. When the customer base grows, attention to details to prevent bugs becomes a must. Some will step up and grow with the system needs. Others will feel overwhelmed by the scope increase and hide in a bubble by oversimplifying the issues. They will hurt your growth by dragging down your key people.

The most difficult part about the workforce is to complement the organic team growth with external elements; to introduce people who will drive growth solutions. Hiring these people is challenging because you have to trust their expertize without much verification. Uncertainty will be high because no one will have a clear idea of where these new solutions lead. The constant is that they will be expensive. Many will be throw away because what worked somewhere is by no mean guarantied to work somewhere else.

## Testing times increase

The test suites grow to match the component sizes. They take longer to run. The objective is to protect against regression issues. Your development and deployment processes or hindered by the slowing testing.

## Conclusion

The client dreams of a system that does everything. Unless his pockets are infinitely deep, cruel prioritization of the feature set is the only way to success.

<br/>
<p align="center">
<img alt="Deterministic dices" width="400" src="https://cdn.jsdelivr.net/gh/patroytall/patrick-roy-me-asset/image/article//dive-into-enterprise-software-costs/pyramid-1.png"/>
</p>
