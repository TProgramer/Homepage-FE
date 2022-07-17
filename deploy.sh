#!/usr/bin/env bash

REPOSITORY=/home/ec2-user/FE
cd $REPOSITORY

npm install pm2 -g
npm install --legacy-peer-deps
npm run build
pm2 start npm --name "dev" -- start
pm2 list
