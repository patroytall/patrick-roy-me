# Git configuration

## User configuration

``` bash
git config --global user.email "name@company.com"

git config --global user.name "Firstname Lastname"
```

## Default editor

In .bashrc:

``` bash
export VISUAL=vi
export EDITOR="$VISUAL"
```

## Aliases

``` bash
alias gitAddUpstream='git remote add upstream'
alias gitCheckoutBranch='git checkout $(git branch | grep -v "^\*" | grep -v -E -m 1 "^[* ] (master|develop)")'
alias gitCheckoutBranch-doc='echo checkout the first non current, non master, and non develop branch'
alias gitDeleteBranches='git branch | grep -v -E "^[* ] (master|develop)" | grep -v "^\*" | while read branch; do git branch -d $branch; done'
alias gitDeleteBranches-doc='echo delete non current, non master and non develop branches without unpushed commits'
alias gitPushToOrigin='git push --set-upstream origin $(git branch | grep "^\*" | grep -v -E "^\* (master|develop)" | awk '\''{print $2}'\'')'
alias gitPushToOrigin-doc='echo push non master and non develop current branch and set up new upstream origin link'
alias gita='git add'
alias gitaD='git add .'
alias gitb='git branch'
alias gitc='git checkout'
alias gitcB='git checkout -b'
alias gitcD='git checkout develop'
alias gitcM='git checkout master'
alias gitco='git commit'
alias gitd='git diff'
alias gitmD='git merge develop'
alias gitmM='git merge master'
alias gitmU='git fetch upstream && git checkout master && git merge upstream/master'
alias gitpl='git pull --prune'
alias gitps='git push'
alias gits='git status'
alias gitst='git stash'
```

## SSH

To point at a different identity file, in `~/.ssh/config`:
```
IdentityFile ~/.ssh/id_rsa_alernate
```

[Personal and professional identities in single config](https://gist.github.com/bgauduch/06a8c4ec2fec8fef6354afe94358c89e) (not tested)