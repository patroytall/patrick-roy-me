# Keep your fingers out of production
*2021*-*01*-*09*

<br/>
<p align="center">
<img alt="Deterministic dices" width="400" src="https://cdn.jsdelivr.net/gh/patroytall/patrick-roy-me-asset/image/article//keep-your-fingers-out-of-production/butterfly-effect-1.jpg"/>
</p>
<br/>

It is 2 a.m. . The team is performing a nightly maintenance following the predefined [standard operating procedure](https://en.wikipedia.org/wiki/Standard_operating_procedure). The configuration file is updated as planed. The maintenance is over. Everyone goes back to bed.

6 a.m. . The customers start to report that a major feature is not working. We immediately check the configuration file since it is the only thing we have changed that could affect the feature. The configuration is exactly as it should. We tested it many times. What is going on?

24 hours later, an unintended invisible character is found in the configuration file. The DevOps had done a copy and paste through his terminal instead of sending the file over to save a minute which caused the issue.

This is one of many stories I have lived where being human in a production system caused down time. We make mistakes. We interpret procedures. We forget what we did. We are human.

The objective is stability; for the production system to deliver its features without interruption. Many inevitable non-standard activities need to occur in production: network changes, data migration, configuration updates, performance tests, version upgrades, etc. How we preserve stability through those is the challenge.

Stability is expensive. It takes time and effort to achieve. It must be proportional to the impact of loosing it. In other words, invest slightly less in stability than the cost of having down time. As an organization builds its customer base and gains in maturity stability will justify itself naturally.

## Cowboy changes

We have impossible deadlines. A critical feature is late. Hey person with elevated permissions! Please make this change to the production system for me; it is very simple. Nothing might break this time but it will eventually.

It is not fair to move the onus of a production change to the person in charge of safeguarding the system stability because he has the permission to do so.

Changing a configuration file manually is one scenario but any form of manual state manipulation should be considered risky be it through a user interface, editing or commands.

We care about others. We want to help. Making an impromptu change though is not helping. It is encouraging further similar changes. It becomes a double standard for the people who do it properly.

## Predictability, traceability, and correctness

We put in place complex infrastructure as code frameworks to avoid doing manual changes in production. Unfortunately, some areas are difficult to automate. Some tools are not automation friendly. For example, when their configuration API is not idempotent. Creative solutions are required; stitching scripts. As a last resort, we can write procedures to meticulously record the changes to be made.

The goal is to get change predictability, traceability, and correctness. Automation is by far the best way to achieve this. It requires an investment; especially the first time a new type of change is introduced. Quickly, the templates and patterns will be in place and be reuseable. When and only if not possible, rigorous manual procedures should be used.

To reduce the cost of automation development, an acceptable approach is to test a change manually and then automate it. This is to avoid multiple iterations of the automation to get it right. It goes without saying that the return must justify the risk of doing this.

## Testability

An other benefit of automating production state manipulations is that they are easier to test prior to being applied in production. In some cases, they can be unit tested. When part of a delivery pipeline, the changes will be tested, to some extent, in the pre-production environments.

## People count

Keep the number of people with administrative write permissions to your production system to a minimum. In the case of a mysterious behavior, it will be easier to investigate who could have made the change. Ensure credentials are revoked on termination.

For emergency production issue debugging, temporary credentials can be created. 

## Bypass through administrative functionality

Production systems are intended to be changed by their applications. We need to differentiate user feature driven changes from administrative functionality. A way to bypass production state change control is to implement administrative functionality in the applications. The administrative functionality is not available to the system's users but can be invoked without elevated permissions to the data state; for example through a VPN access. This is a common compromise to give developers control of their applications in production.

Because administrative functionality in applications goes through the normal development life cycle, it has the warm fuzzy feeling of being safe. It does have a higher probability of being correct but will generally still lack proper predictability and traceability. For example, administrative functionality can be implemented through private REST end points which are only exposed to developers. The lack of predictability occurs when they are invoked manually. You cannot control when this occurs and how often. The fact it can be invoked in parallel by many people can also cause unexpected behavior.

## Bypass through special feature input

A more subtle way to bypass production state control is through normal feature's special input. It can be sent manually to applications to trigger administrative changes. For example, an end point might accept an optional hidden parameter which triggers the delete of history data. Security becomes an issue. A common scheme to limit access is to tie these administrative functionality to predefined accounts. Im many cases though, the only security will be by obscurity; that is not making anyone aware that it is is available.

Special input bypassed being hidden tend to get forgotten and stay in products. They suffer from the same predictability and traceability drawbacks as the administrative functionality bypasses.

## Summary

Production changes are needed but but they should follow a path of quietness without side effects. 

<br/>
<p align="center">
<img alt="Deterministic dices" width="400" src="https://cdn.jsdelivr.net/gh/patroytall/patrick-roy-me-asset/image/article//keep-your-fingers-out-of-production/stable-lake-1.jpg"/>
</p>