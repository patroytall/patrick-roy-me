# Holistic Microservice Logging Strategy (WIP)

<p align="center">
<img alt="Deterministic dices" width="400" src="https://cdn.jsdelivr.net/gh/patroytall/patrick-roy-me-asset/image/article/holistic-microservice-logging-strategy/road-view-1.jpg"/>
</p>

## Observability and monitoring

Software observability and monitoring are a must have for large software systems. Underlying both of these are data producing components to nourish the tooling. One such system pulse data is microservice logging.

I will present a general strategy to organize logging across a microservice system so that it can come together to deliver value. The value can come from multiple purposes: issue debugging, performance analysis, feature behavior, testing, etc.

Some application platforms provide sophisticated log management tooling that offer the same services as described in this article.

## Structured format

For the longest time, applications logs have been in the form of text lines space/tab separated. This format was convenient for humans to consult these logs either directly in consoles or persisted in files. Applications have slightly different conventions as to the layout and information present in log lines. Log aggregation tool have evolved to parse and understand these loosely structured log lines. 

Multi-line log entries have always been problematic because they can appear as new log lines. They are difficult to parse as well. Very long single log entries are also inconvenient.

Adopting a standardized structured format addresses traditional log weaknesses. JSON is a common solution that is supported by many log aggregators. A structured format with named properties carries more semantic possibilities than column based log lines. People though will not find it as easy to read. Some log libraries will support outputting to log lines in local environments and in JSON format in deployment environments.

Many third-parties components do not offer structured logs. Sometimes the logs can be intercepted and wrapped into a structured format.

## Log model

Once you have a structure format, you can define a log model with mandatory and optional properties. This data model will be distributed in all microservices. Because the logs will get aggregated in centralized locations, the model must be enforced strictly.

The log model should be flexible though. Microservice of different nature must be able to express their specifics. It should be clear within the model what sections are standard and which ones resulted from custom extensions.

Common high level mandatory properties are highly desirable. A few examples: timestamp, status, environment, microservice name, and message.

## Alerting

Logs can be used to trigger different level of alerts. Properties in the log model can be used by alerting tools to trigger alerts based on conditions.

## Shared logic

Because many different microservices will be logging, it often a good idea to share the logging logic. For example, using a code library. The library makes it easy to enforce the log model and log conventions.

If alert log triggers are used, the shared logic will facilitate the usage of the alerting logic. For example, method or parameters can be used to defined which kind of alerts can be triggered.

Equivalent shared logic can written for different languages. Special attention must be paid to backward compatibility when the logic is updated since adoption across languages is not likely to be simultaneous. 

## Size

### Truncation

### Compression

<p align="center">
<img alt="Deterministic dices" width="400" src="https://cdn.jsdelivr.net/gh/patroytall/patrick-roy-me-asset/image/article//holistic-microservice-logging-strategy/america-lights-1.jpg"/>
</p>