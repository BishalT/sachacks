#!/bin/bash

#### Create config file for ssh key
CONFIG_FILE=$(find ~/.ssh -name "config")

function createConfig() {
  echo ""
  echo "Host github-sachacks" >> ~/.ssh/config
  echo "  HostName github" >> ~/.ssh/config
  echo "  User git" >> ~/.ssh/config
  echo "  IdentityFile ./id_rsa_sachacks" >> ~/.ssh/config
}

if [ !"$CONFIG_FILE" ]
then 
  touch ~/.ssh/config
  createConfig
else 
  SACHACKS=$(grep -rn ${CONFIG_FILE} -e "github-sachacks")
  if [ $SACHACKS ]
  then
    createConfig
  fi
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
if [ "IS_LINKED=false" ] 
then 
  git remote add sachacks git@github-sachacks:sachacks/sachacks.git
fi

#### Merge gh-pages
git checkout gh-pages
git merge master
git push origin 

#### Switch git account
git fetch sachacks
git checkout sachacks/gh-pages

#### Merge with the origin
git pull https://github.com/LambertTran/sachacks.git gh-pages

#### Push
git push sachacks gh-pages

#### Switch back to the original account
git checkout master