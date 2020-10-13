FROM node:12.2.0-alpine

WORKDIR /mdcim

ENV PATH /mdcim/node_modules/.bin:$PATH

COPY package.json /mdcim/package.json
RUN npm install 
RUN npm install react-scripts@3.0.1 -g


CMD ["npm", "start"]