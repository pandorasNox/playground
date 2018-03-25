
FROM node:8.10.0-alpine

RUN mkdir /nodepublisher

COPY package.json /nodepublisher

RUN cd /nodepublisher; yarn install;

COPY send.js /nodepublisher
