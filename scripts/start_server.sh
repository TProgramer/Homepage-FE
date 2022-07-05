cd /home/ec2-user/server

npm install pm2 -g // pm2 설치하기
npm run build // build를 한번 해주고 추가 해줘야 동작함
pm2 start npm --name "dev" -- start // pm2 list에  추가하기
pm2 list // 현재 돌아가고 있는 인스턴스 목록 확인