FROM node:alpine3.20

WORKDIR /attendance

copy . .

RUN npm install

CMD ["npm", "start"]