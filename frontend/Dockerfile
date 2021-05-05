FROM node:alpine

ADD yarn.lock /yarn.lock
ADD package.json /package.json

ENV PATH /app/node_modules/.bin:$PATH
RUN yarn

COPY . /frontend
WORKDIR /frontend

EXPOSE 3000

CMD npm start