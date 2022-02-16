FROM node:12

# Create app directory
WORKDIR /usr/src/app

COPY ./package.json /usr/src/app/package.json
RUN npm install
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
RUN npm install nodemon -g
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source

# RUN npm audit --force
EXPOSE 1337
CMD [ "nodemon", "index.js" ]