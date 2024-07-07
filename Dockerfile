FROM node:20.12

ENV PORT=3002

RUN mkdir -p /home/server

COPY . /home/server

WORKDIR /home/server

RUN npm install

CMD ["npm", "run", "start"]
