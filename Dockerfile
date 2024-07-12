FROM node:20.12

RUN mkdir -p /home/server

COPY . /home/server

WORKDIR /home/server

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]
