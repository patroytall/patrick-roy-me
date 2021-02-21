# Holistic Microservice Logging Strategy (WIP)

<p align="center">
<img alt="Deterministic dices" width="400" src="https://cdn.jsdelivr.net/gh/patroytall/patrick-roy-me-asset/image/article/holistic-microservice-logging-strategy/road-view-1.jpg"/>
</p>

## Observability and monitoring

Software observability and monitoring are a must have for large software systems. Underlying both are data producing components which can nourish the tooling. One such component data is microservice logging.

I will present a broad strategy to organize logging across a microservice system so that it can come together to increase its usefulness. The value can come from multiple purposes: issue debugging, performance analysis, feature behavior, testing, etc.

Some application platforms provide sophisticated log management tooling that offer the same services I describe in this article. You should consider this a major benefit of your platform as it will save you from implementing it yourself.

Understanding the behavior of a microservice system in production is difficult. Debugging issues even more. Investing in a coordinated logging strategy can bring you much needed visibility in your system.

## Structured format

For the longest time, applications logs have been in the form of text lines whitespace separated. This format was convenient for humans to consult the logs either directly in consoles or persisted in files. Different applications have slightly different conventions as to the layout and information present in log lines. Log aggregation tool have evolved to parse and understand these loosely structured log lines.

Multi-line log entries have always been problematic because they can appear as new log lines. They are difficult to parse as well. Very long single log entries are also inconvenient.

Adopting a standardized structured format addresses traditional logs weaknesses. JSON is a common solution that is supported by many log aggregators. A structured format with named properties carries more semantic possibilities than whitespace separated columns log lines. People though will find JSON more difficult to read and resist its adoption. Some log libraries will support outputting to traditional log lines in local environments and in JSON format in deployment environments.

Many third-parties components do not offer the possibility to produce structured logs. Sometimes the logs can be intercepted and wrapped into a structured format by the consuming component.

## Log model

Once you have a structure format, you can define a log model with mandatory and optional properties. This data model will be shared in all microservices. Because the logs will get aggregated in centralized locations, the model must be enforced strictly.

The log model should be flexible though. Microservice of different nature must be able to express their specifics. It should be clear within the model which sections are common to all services and which ones resulted from custom extensions by a service.

Common high level mandatory properties are highly desirable. A few examples: timestamp, status, environment, microservice name, and message.

## Alerting

Logs can be used to trigger different level of alerts. Properties in the log model can be used by alerting tools to trigger alerts based on conditions.

## Shared logic

Because many different microservices will be logging, it often a good idea to share the logging logic. For example, using a code library. The library makes it easy to enforce the log model and log conventions.

If alert log triggers are used, the shared logic will facilitate the usage of the alerting logic. For example, method or parameters can be used to defined which kind of alerts can be triggered.

Equivalent shared logic can written for different languages. Special attention must be paid to backward compatibility when the logic is updated since adoption across languages is not likely to be simultaneous. 

## Size

In this section, I discuss log entries size. This does not cover log verbosity and log levels as they are a full subject on their own.

Logs will be gathered from the services toward centralized locations for consumption. The tools performing the gathering can have size limits. It is important the structured log format not be truncated by the tooling for it to be parsable.

### Truncation

Assuming your tooling has a size lime, the shared logic can offer smart truncation for the content of the structured format. Because it understands the data, it can truncate values without breaking the structure. What matters is the total size of the log entries thus the logic to prune a structure is not trivial.

### Compression

Some log values can have high semantic value distributed evenly. In those cases, truncation is not desirable. Compression can be used to make the values available to the log recipients. For example, using a Gzip base64 compression. This is a last resort approach as the tooling is not likely to understand this compression thus it will have to be decoded manually.

### Temporary verbose logging

Although I stated above I would not discuss frequency and level, there is one aspect that relates to the global strategy: total volume. Many tools will be priced based on total log sizes. For this reason and others, you will want to control the amount of logs from services.

It is useful, to be able to selectively enable more verbose logging on a specific service for a period of time in the production environment. For example, frameworks like Sprint Actuator offer the capability to change the log level of a class at runtime. Ensure the verbosity expires in time. Without this capability, your teams will have a tendency to log more "in case" they need it. In some scenario, they will even push "temporary" logging which will be forgotten about.

## Atomic logging

Software components can produce many logs for a single logical events. In a single process single threaded system, the log entries will appear as a sequence which will be useful. This practice falls apart with high concurrency systems as the logs entries will be intertwined. The volume of logs often requires consumers to use filters for specific events which will not gather multiples log entries easily. 

Developers need to change how they build log entries. Single logical events should produce a single log entry. A common case is an error log. The log entry for the error should be the aggregation of all the messages produced by the different areas of code. For example, in Java this can be achieved by enriching an exception as it is re-thrown and log it once at the top.


## Pay off

When an alert on a log is triggered before customers have noticed a system failure, you win. When you save countless hours of debugging because a correlation of logs pinpoints the root cause, you win again.


<p align="center">
<img alt="Deterministic dices" width="400" src="https://cdn.jsdelivr.net/gh/patroytall/patrick-roy-me-asset/image/article//holistic-microservice-logging-strategy/america-lights-1.jpg"/>
</p>