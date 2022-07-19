#!/bin/bash

REPOSITORY=/home/ubuntu/FE
cd $REPOSITORY
sudo rm -rf node-moduels
sudo npm install --legacy-peer-deps
npm run build
pm2 start npm --name "dev" -- start
pm2 list
