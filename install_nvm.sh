#!/bin/bash

# nvm setup
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
source ~/.bashrc
nvm install v11.2.0
nvm alias default v11.2.0

# yarn setup
npm install -g yarn

# project setup
yarn