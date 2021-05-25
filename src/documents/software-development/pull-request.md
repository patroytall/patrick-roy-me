# Pull Request

**Document intent:** This document is not an article. It is a gathering of pull request process suggestions I have gathered in enterprise context to improve team productivity.

Pull requests (PR's) are created to merge a set of commits from one branch to an other. A key feature of PR's is that the set of commits can be reviewed using an aggregated view which can be compared to the previous version.

## Duration

A PR should generally not last more than a few days. Most PRs should be merged within a day or two. This is important because PRs have reviewers. Reviewers attention is precious. When they have the context of a PR in mind, it is better use of their time if it gets resolved quickly. If a PR requires longer than a few days to be resolved sometimes because of the number of changes to make or because of conflicting priorities, it should be removed from the reviewers radar by declining it. It can be re-opened when it is ready for review again. If a change needs to be abandoned completely, decline the PR and delete the matching branch. If you need to create a new PR to replace an existing one that has been declined, make sure to reference the previous PR in the description. Comments in PRs are valuable and need to be traceable.

## Review round

When a PR is created with reviewers, it starts the first review round. Reviewers will make comments on lines, files, or global to the PR. Once the author of the PR believes that no more comments are likely to be added, he should answer all comments by either (exclusive):

- Making a code change addressing the comment. Most PR tool will mark the comment as `addressed` automatically by the code change. There is generally no need to justify a code change with an additional comment. Making the code change speaks. Assume the reviewer understands your context and justifications. If he does not understand, he can easily ask a question.
- Reply to the reviewer. Replies must be made directly on the original comment; generally by clicking on a button of the comment. Only reply when you do not make a code change to answer a comment.

The idea is being terse. You will read and write thousands of comments in your career. Every comment saved helps.

In the rare cases where you need to answer a comment by making both a code change and a reply, make the reply first then push the code. 

Push all the commits as answers to comments in a single push. The act of pushing code in a PR starts the next review round. A normal configuration will have the reviewers receive an email when code is pushed. The reviewers will expect all comments to have been addressed either from a reply or a code change. If you are not answering all comments, explain why with a global comment.

## Comment level

PR reviewers will have different level of certainty when making comments. They will generally fall within these four categories:
- question - Reviewer needs more information to understand the PR.
- suggestion - Light comment suggesting a better way of doing something.
- should - Typical comment asking the author to make a change but welcoming opinions.
- must - Strong comment where the author is requiring the author to make a change. Not making the change will require a counter argument from the author. Sometimes used by senior team members to enforce various conformance. 

Some teams will adopt a wording conventions aligning to these levels. I do not believe this to be necessary. Informal conventions will automatically emerge from PRs based on the frequent exchanges within teams.

PR authors should keep in mind that some reviewers will have partial knowledge when reviewing PRs. Some comments will not be relevant due to this limited knowledge. They are still valuable and should not be discouraged as long as constructive. It is up to the reviewers to assess the impact vs knowledge ratio when make such comments. If the impact would be high even though the knowledge is low the comment can be justified.

## Friendly replies and justifications

PRs are not the place for polite or friendly replies since such replies will create noise for all reviewers. For example: replying "thank you" or clicking Like in a reply. When an issue is being debated and you want to vote in favor of a position it is correct to use the Like reply.

## Change size

PR should be as small as possible. Primary reason is to help reviewers get a complete understanding of the change being made. It also helps the author because large number of comments can be difficult to manage. A rough ball park estimates is 50 lines of changes across one or many files. If a lot of test code is present, up to 100 lines is still acceptable.

Changes that affect a large number of files should not be mixed with other changes. For example, moving a class called by many classes from one package to an other should usually be done in a dedicated PR.

## Approval

I suggest to use a minimum of only 1 approval for a PR to be merged. It is better to not have any specific mandatory reviewers as it reduces team ownership and can become a blocker.

The author of a PR should add as reviewers:
- people in the team of the PR author
- known owners or experts of the repository
- other people involved in the change being made

Although a single approval might be required, the author should give a reasonable amount of time for all reviewers to have a look. A day is generally enough. If the repository has an owner or a known expert, the author will often want to wait for their approval before merging. In the end, it is up to the PR author's judgement to decide when a PR is ready to be merged. He must ensure proper review has occurred based on the risk of the change being made.

## Default reviewers

Repositories can be configured to have default reviewers. Having them configured helps people from different teams making changes in a repository. When not specified, the history of merged PRs can be consulted to obtain the list of frequent reviewers of a repository.

## Utility PR
It is generally not a good idea to create utility PR. For example, a PR to discuss an idea. PRss are public and should be used when a merge is intended. If a PR is used for something other than a merge, its description should make this clear.

If you need to review a group of commits, PR tools allow you to view the aggregate of commits by looking at branches through the user interface.

## Comment context
Comments are made in the context of the line they are attached to. The comment author can assume this to keep the comment short. For example, a comment of "delete" would mean delete the line the comment has been made on.

Use file or global comments if they apply to more than a line.

## Optional Comments

If you want to give the author information but do not request for changes to be made to the pull requests, enter your comments then approve the PR. Author should ensure he reads all comments even when a pull request has been approved.

## Automatic approval removal

It is often a good idea to configure your repository to automatically remove approvals when new code is pushed.