# Use the official Node.js 18 image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Set environment variables
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# Build the Nuxt.js application
RUN npm run build

# Start the Nuxt.js application

CMD ["node", ".output/server/index.mjs"]
