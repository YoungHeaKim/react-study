# 노드버전 띠바
FROM node:dubnium-alpine

# 디렉토리 띠바
WORKDIR /usr/src/app

# 패키지
COPY package*.json ./

# 패키지 설치
RUN npm ci

COPY . .

# 연결될 포트
EXPOSE 3000

# 실행 스크립트
CMD [ "npm", "start" ]