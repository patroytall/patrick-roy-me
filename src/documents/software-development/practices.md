# Practices

## Monitoring

Development teams should be able to monitor and measure the behavior of their software in the end user environment.

## Scheduling

Services in a continuous delivery system should not rely on an external scheduling service. They must incorporate the scheduler within their deployment. The service owner thus owns the configuration of the scheduling. This fits with the Infrastructure as Code approach. It decouples the service maintenance from infrastructure central services.

[Martin Fowler- Infrastructure as Code](https://martinfowler.com/bliki/InfrastructureAsCode.html)

In Kubernetese environments, services can use the infrastructure scheduling scheme as long as it is configured as part of the micro service. The scheduled component can either invoke the service using a REST call for example or the a stand alone instance of the service can be used. It is often preferable to use stand alone instances for performance reasons.

## Software System Version in microservice environment

The concept of software version is only relevant at the service scope since it is the deployment entity. There is no global software system version that can be advertised to the end user. Through project management tools there can still be the concept of releases which encompass as set of defined features but this is a loose definition as each part of the release is deployed continuously until the total set reaches production. The delivery of a feature is closely tied to the definition of done which most of the time will include deployment to production.


## Feature Branches

Developer make changes to an application using feature branches. This includes bug fix, new feature, feature update, or any change other change the application requires. Every time a new set of changes is required, a new feature branch is created.

Based on continuous integration and agile, change sets should be small enough to be merged every few days. Ideally, the change set includes all of the feature elements: implementation, tests, deployment, and documentation.

Typical feature branch:

A feature branch is created off the master branch. Changes are made in the branch until they are ready to be reviewed. The build system will ensure the branch builds properly with tests and verification tools running successfully. Once it builds successfully and it is approved by reviewers, the feature branch can be merged back into the master branch. Merges are typically done by the originator of the branch.

Feature branches can be branched off other feature branches. This allows isolation for a large feature branch. Because of its complexity, this scenario should be avoided. Large changes should be divided into independent smaller changes even if there is some work overhead in doing so. For example, a graphic user interface change might have to be hidden from the end user until it is complete. Smaller changes get integrated more often, are easier to review, and are easier to deploy thus lead to higher quality software.

## Library Documentation

Libraries must have a README documentation file. The file must contain:

a getting started section describing who to make use of the library
the history of versions of the library and information about the changes between each version. This information will be referred as change information.
When a major change is done in a library, its change information must contain an entry describing the migration steps required. This migration documentation must give the reader the exact steps needed to migrate from the previous version to the new version. The migration entry should go at the end of the change information.

When an intermediate library upgrades the major version of one of its dependency, it must document this upgrade in one of its change information entry. The entry must give the full name of the dependency, the current version and the version being upgraded to.

## Site Reliability Engineering (SRE)
What is SRE?
https://landing.google.com/sre/

SRE insider
https://cloudplatform.googleblog.com/2016/07/adventures-in-SRE-land-welcome-to-Google-Mission-Control.html

Toil – what we should move away from
“If a human operator needs to touch your system during normal operations, you have a bug. The definition of normal changes as your systems grow."

https://landing.google.com/sre/book/chapters/eliminating-toil.html

## Remote development

[Martin Fowler - Remote versus Co-located Work](https://martinfowler.com/articles/remote-or-co-located.html)

## Honesty

[Brutal Honesty: Daniel Roth](https://www.linkedin.com/pulse/worlds-most-successful-investor-insists-brutal-honesty-daniel-roth/) - worlds most successful investor insists brutal honesty