# Use official Node.js image as base
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if available) into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application files into the container
COPY . .

# Expose the port your app will run on
EXPOSE 8000

# Command to run your app
CMD ["npm", "start"]