# create an alias for the container built from the node:10.16.3 base image
FROM node:10.16.3

# set the working directory inside the container
WORKDIR /uxboom-client

# add `/uxboom-client/node_modules/.bin` to $PATH
ENV PATH /uxboom-client/node_modules/.bin:$PATH

# copy package.json, package-lock.json from local to docker container
COPY package*.json /uxboom-client/

# install dependencies listed in package.json
RUN npm install

# copy project files from local to working directory in our container
COPY . /uxboom-client

EXPOSE 3000

RUN ls -la

ENTRYPOINT [ "npm", "start" ]