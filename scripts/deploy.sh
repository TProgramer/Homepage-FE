#!/bin/bash
REPOSITORY=/home/ubuntu/FE
cd $REPOSITORY
npm install --legacy-peer-deps
npm run build
pm2 start npm --name "test" -- start
