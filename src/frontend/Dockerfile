FROM node:14.13.1-alpine

RUN mkdir -p /mdcim/src/frontend
WORKDIR /mdcim/src/frontend

ENV PATH /mdcim/src/frontend/node_modules/.bin:$PATH

COPY ./frontend/package.json /mdcim/src/frontend/package.json
# RUN apt-get update -qq && apt-get install -y build-essential nodejs
RUN npm install 

ENTRYPOINT ["npm", "start"]