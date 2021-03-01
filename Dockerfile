FROM node:15

WORKDIR /usr/app

COPY . /usr/app
RUN npm install
RUN npm run build

CMD ["npm", "start"]