## GIT WORKFLOW

Please refer to this to get the general idea of how to handle working together

PLEASE NOTE!!
* Everyone is a contributor. So you have admin privileges.
* Rule of thumb is to work on a branch and push that branch
```git
  git push origin <your_branchname>
```
* Go onto the github platform where you will see your branch.
* Create a new pull request. If no conflicts are expected (by github and your inspection), go ahead and merge.
* Otherwise, if conflicts exist, please verify with whoever developed the part that you may conflict with before going ahead. If you have good undestanding of the change and are confident of your additions/changes despite the conflict merge and take note of the changes.
* Please test the code to verify all is working. If not please escalate the issue as soon as possible
* Aim to have a unit test for each new feature to minimise use of trial and error and to allow easier conflict resolution. This is particularly important for the LAS Reader gem and the JSON packaging code.
* Pull the remote master and proceed with other features/bugfixes

