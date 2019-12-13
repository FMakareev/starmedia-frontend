FROM node:11.10-alpine
LABEL maintainer="fmakareev@gmail.com"
COPY . /app
WORKDIR /app
#RUN npm set registry https://registry.npmjs.org/
RUN yarn
RUN yarn build
CMD node dist/server/index.js
#CMD yarn start
