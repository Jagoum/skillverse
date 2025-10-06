# Use official Node.js 18 Alpine image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json package-lock.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose port
EXPOSE 4000

# Start the server
CMD ["node", "server.js"]
