#!/usr/bin/env bash

REPOSITORY=/home/ec2-user/FE
cd $REPOSITORY

sudo npm install pm2 -g
sudo npm install
sudo npm run build
sudo pm2 kill
sudo pm2 start npm --name "dev" -- start
sudo pm2 list
