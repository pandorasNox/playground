
FROM node:8.10.0-alpine

RUN mkdir /nodeconsumer

COPY package.json /nodeconsumer

RUN cd /nodeconsumer; yarn install;

COPY receive.js /nodeconsumer
