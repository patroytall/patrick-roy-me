Overview
From: https://www.atlassian.com/git/tutorials/what-is-git



By far, the most widely used modern version control system in the world today is Git. Git is a mature, actively maintained open source project originally developed in 2005 by Linus Torvalds, the famous creator of the Linux operating system kernel. A staggering number of software projects rely on Git for version control, including commercial projects as well as open source. Developers who have worked with Git are well represented in the pool of available software development talent and it works well on a wide range of operating systems and IDEs (Integrated Development Environments).Git is a quality open source project


Git is a very well supported open source project with over a decade of solid stewardship. The project maintainers have shown balanced judgment and a mature approach to meeting the long term needs of its users with regular releases that improve usability and functionality. The quality of the open source software is easily scrutinized and countless businesses rely heavily on that quality.

Git enjoys great community support and a vast user base. Documentation is excellent and plentiful, including books, tutorials and dedicated web sites. There are also podcasts and video tutorials.

Being open source lowers the cost for hobbyist developers as they can use Git without paying a fee. For use in open-source projects, Git is undoubtedly the successor to the previous generations of successful open source version control systems, SVN and CVS.



“Git is like English”. Popularity: https://rhodecode.com/insights/version-control-systems-2016

Server Client architecture
From: https://www.atlassian.com/git/tutorials/what-is-git

Having a distributed architecture, Git is an example of a DVCS (hence Distributed Version Control System). Rather than have only one single place for the full version history of the software as is common in once-popular version control systems like CVS or Subversion (also known as SVN), in Git, every developer's working copy of the code is also a repository that can contain the full history of all changes.

Performance
From: https://www.atlassian.com/git/tutorials/what-is-git/performance

The raw performance characteristics of Git are very strong when compared to many alternatives. Committing new changes, branching, merging and comparing past versions are all optimized for performance. The algorithms implemented inside Git take advantage of deep knowledge about common attributes of real source code file trees, how they are usually modified over time and what the access patterns are.



Being distributed enables significant performance benefits as well.


For example, say a developer, Alice, makes changes to source code, adding a feature for the upcoming 2.0 release, then commits those changes with descriptive messages. She then works on a second feature and commits those changes too. Naturally these are stored as separate pieces of work in the version history. Alice then switches to the version 1.3 branch of the same software to fix a bug that affects only that older version. The purpose of this is to enable Alice's team to ship a bug fix release, version 1.3.1, before version 2.0 is ready. Alice can then return to the 2.0 branch to continue working on new features for 2.0 and all of this can occur without any network access and is therefore fast and reliable. She could even do it on an airplane. When she is ready to send all of the individually committed changes to the remote repository, Alice can "push" them in one command

Funny
From: https://confluence.neterra.paysafe.com/display/OP/Using+Git+with+Bitbucket

Distributed Development
From: https://www.atlassian.com/git/tutorials/why-git/git-for-developers



In SVN, each developer gets a working copy that points back to a single central repository. Git, however, is a distributed version control system. Instead of a working copy, each developer gets their own local repository, complete with a full history of commits. See picture.



Having a full local history makes Git fast, since it means you don’t need a network connection to create commits, inspect previous versions of a file, or perform diffs between commits.

Pull Requests
Many source code management tools such as Bitbucket enhance core Git functionality with pull requests. A pull request is a way to ask another developer to merge one of your branches into their repository. This not only makes it easier for project leads to keep track of changes, but also lets developers initiate discussions around their work before integrating it with the rest of the codebase.

Setting up a repository
git init
From: https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-init



The git init command creates a new Git repository. It can be used to convert an existing, unversioned project to a Git repository or initialize a new empty repository. Most of the other Git commands are not available outside of an initialized repository, so this is usually the first command you’ll run in a new project.



Executing git init creates a .git subdirectory in the project root, which contains all of the necessary metadata for the repo. Aside from the .git directory, an existing project remains unaltered (unlike SVN, Git doesn't require a .git folder in every subdirectory).



However, for most projects, git init only needs to be executed once to create a central repository—developers typically don't use git init to create their local repositories. Instead, they'll usually use git clone to copy an existing repository onto their local machine.

HANDS-ON
mkdir /cygdrive/c/git

cd /cygdrive/c/git

mkdir myrepo

cd myrepo

git init

cd .git

ls -la

git clone
The git clone command copies an existing Git repository. This is sort of like svn checkout, except the “working copy” is a full-fledged Git repository—it has its own history, manages its own files, and is a completely isolated environment from the original repository.



As a convenience, cloning automatically creates a remote connection called origin pointing back to the original repository. This makes it very easy to interact with a central repository.

HANDS-ON
Open GiftCard in Bitbucket: https://bitbucket.neterra.paysafe.com/projects/OP/repos/oneplatform-sample-giftcard/browse

Show SSH keys set up under Manage account menu.

Get clone URL for drop down menu.

cd /cygdrive/c/git

git clone ssh://git@bitbucket.neterra.paysafe.com:7999/op/oneplatform-sample-giftcard.git

cd oneplatform-sample-giftcard

ls -l

git config
The git config command lets you configure your Git installation (or an individual repository) from the command line. This command can define everything from user info to preferences to the behavior of a repository.



See: https://confluence.neterra.paysafe.com/display/OP/DE+-+Windows

to configure user settings. These settings are enforced by Bitbucket commit hook. Show config in Bamboo. Configure you end of line handling to use Unix all the time.

Saving changes
From: https://www.atlassian.com/git/tutorials/saving-changes

git add
The git add command adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit. However, git add doesn't really affect the repository in any significant way—changes are not actually recorded until you run git commit.



In conjunction with these commands, you'll also need git status to view the state of the working directory and the staging area.



The git add and git commit commands compose the fundamental Git workflow. These are the two commands that every Git user needs to understand, regardless of their team’s collaboration model. They are the means to record versions of a project into the repository’s history.



Developing a project revolves around the basic edit/stage/commit pattern. First, you edit your files in the working directory. When you’re ready to save a copy of the current state of the project, you stage changes with git add. After you’re happy with the staged snapshot, you commit it to the project history with git commit.



The git add command should not be confused with svn add, which adds a file to the repository. Instead, git add works on the more abstract level of changes. This means that git add needs to be called every time you alter a file, whereas svn add only needs to be called once for each file. It may sound redundant, but this workflow makes it much easier to keep a project organized.

The Staging Area
The staging area is one of Git's more unique features, and it can take some time to wrap your head around it if you’re coming from an SVN (or even a Mercurial) background. It helps to think of it as a buffer between the working directory and the project history.



Instead of committing all of the changes you've made since the last commit, the stage lets you group related changes into highly focused snapshots before actually committing it to the project history. This means you can make all sorts of edits to unrelated files, then go back and split them up into logical commits by adding related changes to the stage and commit them piece-by-piece. As in any revision control system, it’s important to create atomic commits so that it’s easy to track down bugs and revert changes with minimal impact on the rest of the project.

git commit
The git commit command commits the staged snapshot to the project history. Committed snapshots can be thought of as “safe” versions of a project—Git will never change them unless you explicitly ask it to. Along with git add, this is one of the most important Git commands.



While they share the same name, this command is nothing like svn commit. Snapshots are committed to the local repository, and this requires absolutely no interaction with other Git repositories.

Git Stash
From: https://www.atlassian.com/git/tutorials/git-stash



git stash temporarily shelves (or stashes) changes you've made to your working copy so you can work on something else, and then come back and re-apply them later on. Stashing is handy if you need to quickly switch context and work on something else, but you're mid-way through a code change and aren't quite ready to commit.

.gitignore
From: https://www.atlassian.com/git/tutorials/gitignore



Git sees every file in your working copy as one of three things:

tracked - a file which has been previously staged or committed;

untracked - a file which has not been staged or committed; or

ignored - a file which Git has been explicitly told to ignore.



Ignored files are usually build artifacts and machine generated files that can be derived from your repository source or should otherwise not be committed. Some common examples are:

dependency caches, such as the contents of /node_modules or /packages

compiled code, such as .o, .pyc, and .class files

build output directories, such as /bin, /out, or /target

files generated at runtime, such as .log, .lock, or .tmp

hidden system files, such as .DS_Store or Thumbs.db

personal IDE config files, such as .idea/workspace.xml

Ignored files are tracked in a special file named .gitignore that is checked in at the root of your repository. There is no explicit git ignore command: instead the .gitignore file must be edited and committed by hand when you have new files that you wish to ignore. .gitignore files contain patterns that are matched against file names in your repository to determine whether or not they should be ignored.

Inspecting a repository
From: https://www.atlassian.com/git/tutorials/inspecting-a-repository

git status
The git status command displays the state of the working directory and the staging area. It lets you see which changes have been staged, which haven’t, and which files aren’t being tracked by Git. Status output does not show you any information regarding the committed project history. For this, you need to use git log.

git log
The git log command displays committed snapshots. It lets you list the project history, filter it, and search for specific changes. While git status lets you inspect the working directory and the staging area, git log only operates on the committed history.

HANDS-ON
mkdir people

cd people

vi file_<myname>.txt

cd ..

git status

git add .

git commit

git status

git log

Viewing old commits
From: https://www.atlassian.com/git/tutorials/viewing-old-commits

git checkout


The git checkout command serves three distinct functions: checking out files, checking out commits, and checking out branches. In this module, we’re only concerned with the first two configurations.



Checking out a commit makes the entire working directory match that commit. This can be used to view an old state of your project without altering your current state in any way. Checking out a file lets you see an old version of that particular file, leaving the rest of your working directory untouched.

HANDS-ON
git checkout 675002d800ae245d134a4b5964702a0b29365840

ls -l

git checkout master

Syncing
From: https://www.atlassian.com/git/tutorials/syncing



SVN uses a single central repository to serve as the communication hub for developers, and collaboration takes place by passing changesets between the developers’ working copies and the central repository. This is different from Git’s collaboration model, which gives every developer their own copy of the repository, complete with its own local history and branch structure. Users typically need to share a series of commits rather than a single changeset. Instead of committing a changeset from a working copy to the central repository, Git lets you share entire branches between repositories.

git remote
The git remote command lets you create, view, and delete connections to other repositories. Remote connections are more like bookmarks rather than direct links into other repositories. Instead of providing real-time access to another repository, they serve as convenient names that can be used to reference a not-so-convenient URL.

The origin Remote
When you clone a repository with git clone, it automatically creates a remote connection called origin pointing back to the cloned repository. This is useful for developers creating a local copy of a central repository, since it provides an easy way to pull upstream changes or publish local commits. This behavior is also why most Git-based projects call their central repository origin.

HANDS-ON
git remote -v

git fetch
The git fetch command imports commits from a remote repository into your local repo. The resulting commits are stored as remote branches instead of the normal local branches that we’ve been working with. This gives you a chance to review changes before integrating them into your copy of the project.



Fetching is what you do when you want to see what everybody else has been working on. Since fetched content is represented as a remote branch, it has absolutely no effect on your local development work. This makes fetching a safe way to review commits before integrating them with your local repository. It’s similar to svn update in that it lets you see how the central history has progressed, but it doesn’t force you to actually merge the changes into your repository.



Remote Branches



Remote branches are just like local branches, except they represent commits from somebody else’s repository. You can check out a remote branch just like a local one, but this puts you in a detached HEAD state (just like checking out an old commit). You can think of them as read-only branches. To view your remote branches, simply pass the -r flag to the git branch command. Remote branches are prefixed by the remote they belong to so that you don’t mix them up with local branches.



Again, you can inspect these branches with the usual git checkout and git log commands. If you approve the changes a remote branch contains, you can merge it into a local branch with a normal git merge. So, unlike SVN, synchronizing your local repository with a remote repository is actually a two-step process: fetch, then merge. The git pull command is a convenient shortcut for this process.

git pull
Merging upstream changes into your local repository is a common task in Git-based collaboration workflows. We already know how to do this with git fetch followed by git merge, but git pull rolls this into a single command.



You can think of git pull as Git's version of svn update. It’s an easy way to synchronize your local repository with upstream changes.

git push
Pushing is how you transfer commits from your local repository to a remote repo. It's the counterpart to git fetch, but whereas fetching imports commits to local branches, pushing exports commits to remote branches. This has the potential to overwrite changes, so you need to be careful how you use it.



The most common use case for git push is to publish your local changes to a central repository. After you’ve accumulated several local commits and are ready to share them with the rest of the team, you (optionally) clean them up with an interactive rebase, then push them to the central repository.

HANDS-ON
Trainer to create new file3.txt.

git pull

Trainer to remove file3.txt.

Rewriting history
From: https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase



Git's main job is to make sure you never lose a committed change. But, it's also designed to give you total control over your development workflow. This includes letting you define exactly what your project history looks like; however, it also creates the potential to lose commits. Git provides its history-rewriting commands under the disclaimer that using them may result in lost content.



This tutorial discusses some of the most common reasons for overwriting committed snapshots and shows you how to avoid the pitfalls of doing so.

git commit --amend


The git commit --amend command is a convenient way to fix up the most recent commit. It lets you combine staged changes with the previous commit instead of committing it as an entirely new snapshot. It can also be used to simply edit the previous commit message without changing its snapshot.



Premature commits happen all the time in the course of your everyday development. It’s easy to forget to stage a file or to format your commit message the wrong way. The --amend flag is a convenient way to fix these little mistakes.

Don’t Amend Public Commits
On the git reset page, we talked about how you should never reset commits that have been shared with other developers. The same goes for amending: never amend commits that have been pushed to a public repository.



Amended commits are actually entirely new commits, and the previous commit is removed from the project history. This has the same consequences as resetting a public snapshot. If you amend a commit that other developers have based their work on, it will look like the basis of their work vanished from the project history. This is a confusing situation for developers to be in and it’s complicated to recover from.

git rebase
Rebasing is the process of moving a branch to a new base commit.

Git Tutorial: Rebase to maintain a linear project history.
From a content perspective, rebasing really is just moving a branch from one commit to another. But internally, Git accomplishes this by creating new commits and applying them to the specified base—it’s literally rewriting your project history. It’s very important to understand that, even though the branch looks the same, it’s composed of entirely new commits.

Git Rebase Branch onto Master
You have two options for integrating your feature into the master branch: merging directly or rebasing and then merging. The former option results in a 3-way merge and a merge commit, while the latter results in a fast-forward merge and a perfectly linear history.

Don’t Rebase Public History
As we’ve discussed with git commit --amend and git reset, you should never rebase commits that have been pushed to a public repository. The rebase would replace the old commits with new ones, and it would look like that part of your project history abruptly vanished.



See also: https://www.atlassian.com/git/tutorials/merging-vs-rebasing/conceptual-overview

Making a Pull Request (PR)
Pull requests are a feature that makes it easier for developers to collaborate using Bitbucket. They provide a user-friendly web interface for discussing proposed changes before integrating them into the official project.



In their simplest form, pull requests are a mechanism for a developer to notify team members that they have completed a feature. Once their feature branch is ready, the developer files a pull request via their Bitbucket account. This lets everybody involved know that they need to review the code and merge it into the master branch.



But, the pull request is more than just a notification—it’s a dedicated forum for discussing the proposed feature. If there are any problems with the changes, teammates can post feedback in the pull request and even tweak the feature by pushing follow-up commits. All of this activity is tracked directly inside of the pull request.

Using Branches
From: https://www.atlassian.com/git/tutorials/using-branches



Remember that Git branches aren't like SVN branches. Whereas SVN branches are only used to capture the occasional large-scale development effort, Git branches are an integral part of your everyday workflow.

git branch
A branch represents an independent line of development. Branches serve as an abstraction for the edit/stage/commit process discussed earlier. You can think of them as a way to request a brand new working directory, staging area, and project history. New commits are recorded in the history for the current branch, which results in a fork in the history of the project.



The git branch command lets you create, list, rename, and delete branches. It doesn’t let you switch between branches or put a forked history back together again. For this reason, git branch is tightly integrated with the git checkout and git merge commands.



In Git, branches are a part of your everyday development process. When you want to add a new feature or fix a bug—no matter how big or how small—you spawn a new branch to encapsulate your changes. This makes sure that unstable code is never committed to the main code base, and it gives you the chance to clean up your feature’s history before merging it into the main branch.

Creating Branches
It's important to understand that branches are just pointers to commits. When you create a branch, all Git needs to do is create a new pointer—it doesn’t change the repository in any other way



To start adding commits to a branch, you need to select it with git checkout, and then use the standard git add and git commit commands.

Deleting Branches
Once you’ve finished working on a branch and have merged it into the main code base, you’re free to delete the branch without losing any history

git checkout
The git checkout command lets you navigate between the branches created by git branch. Checking out a branch updates the files in the working directory to match the version stored in that branch, and it tells Git to record all new commits on that branch. Think of it as a way to select which line of development you’re working on.



git checkout works hand-in-hand with git branch. When you want to start a new feature, you create a branch with git branch, then check it out with git checkout. You can work on multiple features in a single repository by switching between them with git checkout.



Having a dedicated branch for each new feature is a dramatic shift from the traditional SVN workflow. It makes it ridiculously easy to try new experiments without the fear of destroying existing functionality, and it makes it possible to work on many unrelated features at the same time. In addition, branches also facilitate several collaborative workflows.

git merge
Merging is Git's way of putting a forked history back together again. The git merge command lets you take the independent lines of development created by git branch and integrate them into a single branch.



Once you’ve finished developing a feature in an isolated branch, it's important to be able to get it back into the main code base. Depending on the structure of your repository, Git has several distinct algorithms to accomplish this: a fast-forward merge or a 3-way merge.



A fast-forward merge can occur when there is a linear path from the current branch tip to the target branch. Instead of “actually” merging the branches, all Git has to do to integrate the histories is move (i.e., “fast forward”) the current branch tip up to the target branch tip. This effectively combines the histories, since all of the commits reachable from the target branch are now available through the current one.



However, a fast-forward merge is not possible if the branches have diverged. When there is not a linear path to the target branch, Git has no choice but to combine them via a 3-way merge. 3-way merges use a dedicated commit to tie together the two histories. The nomenclature comes from the fact that Git uses three commits to generate the merge commit: the two branch tips and their common ancestor.

Resolving Conflicts
If the two branches you're trying to merge both changed the same part of the same file, Git won't be able to figure out which version to use. When such a situation occurs, it stops right before the merge commit so that you can resolve the conflicts manually.



The great part of Git's merging process is that it uses the familiar edit/stage/commit workflow to resolve merge conflicts. When you encounter a merge conflict, running the git status command shows you which files need to be resolved.

Branch Tracking
From: https://www.git-tower.com/learn/git/faq/track-remote-upstream-branch



By default, branches in Git have nothing to do with each other. However, when you tell a local branch to "track" a remote branch, you create a connection between these two branches. Your local branch now has a "counterpart" on the remote server.



Let's say your current local HEAD branch is named "dev". And let's also say that you have set it up to track the "dev" branch on the remote named "origin". This relationship is invaluable for two reasons:



Pushing and pulling becomes a lot easier. You can simply use the shorthand commands "git pull" and "git push" - instead of having to think about the exact parameters like in "git push origin dev". Even more importantly than being "easier", this also prevents you from making mistakes!



Git can now inform you about "unpushed" and "unpulled" commits. Let's make an example:

if you have 2 commits only locally that you haven't pushed to the remote yet, your local branch is "2 commits ahead" of its remote counterpart branch.

if, on the other hand, there are 4 commits on the remote branch that you haven't downloaded yet, then your local branch is "4 commits behind" its remote counterpart branch.



See also: http://stackoverflow.com/questions/2765421/how-to-push-a-new-local-branch-to-a-remote-git-repository-and-track-it-too and http://stackoverflow.com/questions/6089294/why-do-i-need-to-do-set-upstream-all-the-time

HANDS-ON
git checkout -b tr-111-<MyName>-branch

vi people/file2_<MyName>.txt

git add .

git commit

git push -u origin tr-111-<MyName>-branch

Show branches in Bitbucket: https://bitbucket.neterra.paysafe.com/projects/PLAYG/repos/training/branches

Create pull request.



Show Sample Gift Card repository settings: https://bitbucket.neterra.paysafe.com/projects/OP/repos/oneplatform-sample-giftcard/settings



Create a merge conflict in “file1.txt”. Replace “hello” with “good morning” in one PR and with “good night” in an other. Merge first PR then show conflict in the other.

Other
Great Git client: https://www.sourcetreeapp.com/