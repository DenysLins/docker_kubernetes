# Base image
FROM node:alpine

# Use a custom folder to avoid files in container root folder
WORKDIR /usr/app

# Install dependencies
COPY ./package.json ./
RUN npm install

# Copy web files to workdir
COPY ./index.html ./
COPY ./index.js ./

CMD [ "npm", "start" ]
