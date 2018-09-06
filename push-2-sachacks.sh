#!/bin/bash

#### Create config file for ssh key
CONFIG_FILE=$(find ~/.ssh -name "config")

## Helper - create config file
function createConfig() {
  echo ""
  echo "Host github-sachacks" >> ~/.ssh/config
  echo "  HostName github.com" >> ~/.ssh/config
  echo "  User git" >> ~/.ssh/config
  echo "  IdentityFile ~/.ssh/id_rsa_sachacks" >> ~/.ssh/config
}

if [[ $CONFIG_FILE ]]
then
  SACHACKS=$(grep -rnw ${CONFIG_FILE} -e "github-sachacks")
  if [ "$SACHACKS" == "" ]
  then
    echo "----- Add New Account to Config File ----"
    createConfig
  fi
else
  echo "----- Create Config File ----"
  touch ~/.ssh/config
  createConfig
fi


#### Check if remote to sachack exists
# get a list of git remote
REMOTE=$(git remote -v)
IS_LINKED=false

# loop through item to check if sachacks remote is linked
for item in $REMOTE
do
  if [ "$item" = "sachacks" ]
  then
    IS_LINKED=true
  fi
done


# if not, then link it to current git repo
if [ "$IS_LINKED" = false ]
then
  echo "----Link sachacks remote----"
  git remote add sachacks git@github-sachacks:sachacks/sachacks.git
fi

#### Merge gh-pages
echo "----Merge gh-pages branch with master branch ----"
git checkout gh-pages
git merge master
git push origin gh-pages

#### Switch git account
echo "----Switch from origin to remote github account ----"
git fetch sachacks
git checkout sachacks/gh-pages

#### Merge with the origin
echo "----Merge gh-pages in origin to remote account ----"
git pull https://github.com/LambertTran/sachacks.git gh-pages

#### Push
git push sachacks gh-pages

#### Switch back to the original account
echo "---- Switch back to master branch ----"
git checkout master
