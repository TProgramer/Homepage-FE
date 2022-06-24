#!/bin/bash
cd /home/ec2-user/server

sudo yum install git
git clone https://github.com/Network-Leader/Homepage-FE.git
cd Homepage-FE
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 16
node -e "console.log('Running Node.js ' + process.version)" // 잘 깔렸는지 확인
npm install