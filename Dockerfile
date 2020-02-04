# Set NodeJS version
FROM oraclelinux:7-slim

# Install Required Plugin
RUN yum update -y && \
	yum install -y nodejs && \
	yum install -y nano && \
	yum clean all && \
	node --version && \
	npm --version && \
	echo Installed

# User Setup
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app

# Install required packages
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Setup port
EXPOSE 4001

# Running command
CMD [ "node", "server.js" ]