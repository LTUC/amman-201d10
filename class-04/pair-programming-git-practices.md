# Best practices for git workflow in pair programming - specific to Code 201

This workflow should work fine with our 201 class, when you work with a pair. In industry there is many other practices depending on the project and collaborators.

## Assumption

Assume that two developes (A and B) are working on a project. A already started and B will start working with A on it.

## Workflow

1. Pre-requisite step: A push the code to their master branch on Github: `git push origin master`
2. B visits A's Github repo and fork it by clicking on the fork button located on top-right of the page. Note that the forked repo should appear on B's Github and it says that the repo is forked from A's Github.
3. B clones the **forked repo** on B's computer: `git clone https://github.com/B/repo_name`
4. B and A continue working on B's computer, B is the driver and A is the navigator, and keep the work flow as normal following these steps:
   1. Create a branch for the new feature: `git checkout -b "feature_branch_name"`
   2. Add and commit as usual: `git add .` then `git commit -m "the message"`
   3. Merge the new branch with master: `git checkout master` then `git merge feature_branch_name`
5. B pushes the changes to B's Github: `git push origin master`
6. B sends a pull request to A's Github by clicking the "pull request" button
7. A checks their Github to review an accept the chnages:
   1. A clicks on "pull requests" tab
   2. A accepts the pull request and merge changes
8. A should have the changes locally so they need to run this command on their computer: `git pull`
