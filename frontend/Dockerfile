# Use the official Node.js image as a base image
FROM node:latest as react-build

# Set the working directory in the container
WORKDIR /app/frontend

# Copy package.json and package-lock.json to the working directory
COPY frontend/package.json frontend/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire frontend directory to the working directory
COPY frontend/ ./

# Build the React app
RUN npm run build

# Expose port 3000 for the React app
EXPOSE 3000

# Command to start the React app
CMD ["npm", "start", "--", "--port", "3000"]
