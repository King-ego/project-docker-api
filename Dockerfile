FROM node:latest

# Create app directory
WORKDIR /usr/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the app
CMD npm run dev