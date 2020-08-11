FROM node:12.4.0-alpine

# create the application directory
WORKDIR /k8s/

# copy package (package.json and package-lock.json) files into application container
COPY ["package.json", "package-*", "./"]

# run the installer to install all dependencies
RUN npm install

# copy all local files into container
COPY . .

# start the application
CMD [ "npm", "start" ]
