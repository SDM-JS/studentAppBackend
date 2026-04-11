# Use a Debian-based slim image for better compatibility with Prisma native binaries
FROM node:22-bookworm-slim

# Install OpenSSL (required by Prisma Engine)
RUN apt-get update -y && \
    apt-get install -y openssl && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory inside the container
WORKDIR /app

# Enable pnpm via Node.js corepack
RUN corepack enable pnpm

# Copy package configurations
COPY package.json pnpm-lock.yaml ./

# Install project dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Generate the Prisma client
RUN pnpm dlx prisma generate

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["pnpm", "start"]
