FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
EXPOSE 3000
CMD [ "npm", "start" ]

# The Dockerfile is pretty simple. It starts with the node:latest image, creates a directory, sets the working directory, copies the package.json file, installs the dependencies, copies the rest of the files, exposes port 3000, and starts the application.