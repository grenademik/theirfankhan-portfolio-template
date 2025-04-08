# 1. Use official Node.js LTS image
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Install dependencies (separate copying package files for better caching)
COPY package.json package-lock.json* ./
RUN npm install

# 4. Copy the rest of the application code
COPY . .
# Copy the .env.production file to .env
# Before the build step
COPY .env.production .env

# Then build
RUN npm run build

# 5. Build the Next.js app
RUN npm run build

# 6. Expose the port Next.js will run on
EXPOSE 3053

# 7. Start the app
CMD ["npm", "start"]
