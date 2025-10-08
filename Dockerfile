# # Build stage
# FROM node:20-alpine AS builder
# WORKDIR /app

# # Copy package files and install dependencies
# COPY package*.json ./
# RUN npm ci

# # Copy application code
# COPY . .

# # Build the application
# RUN npm run build

# # Production stage
# FROM node:20-alpine AS runner
# WORKDIR /app

# # Set environment to production
# ENV NODE_ENV=production

# # Create a non-root user
# RUN addgroup --system --gid 1001 nodejs \
#     && adduser --system --uid 1001 nextjs

# # Copy only necessary files from build stage
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next/standalone ./
# COPY --from=builder /app/.next/static ./.next/static

# # Set proper ownership
# RUN chown -R nextjs:nodejs /app

# # Switch to non-root user
# USER nextjs

# # Expose the port the app runs on
# EXPOSE 3000

# # Set the command to run the app
# CMD ["node", "server.js"]


# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy all source code
COPY . .

# Build the Next.js app
RUN npm run build

# Production stage
FROM node:20-alpine AS runner
WORKDIR /app

# Set environment variables
ENV NODE_ENV=production

# Copy required files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install only production dependencies
RUN npm ci --omit=dev

# Expose port
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
