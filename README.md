# Spotify Clone - DevOps Assessment

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app), containerized with Docker, and deployed to Kubernetes using GitHub Actions.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Docker Containerization

This application is containerized using Docker with a multi-stage build process for optimized image size and security.

### Building the Docker Image Locally

```bash
# Build the image
docker build -t spotify-clone .

# Run the container locally
docker run -p 3000:3000 spotify-clone
```

## GitHub Actions Workflow

The repository includes a GitHub Actions workflow that automatically:
1. Builds the Docker image on push to the main branch
2. Pushes the image to GitHub Container Registry (GHCR)
3. Tags the image with the commit SHA, branch name, and 'latest' for the default branch

### Prerequisites for GitHub Actions

- Ensure your repository has proper permissions set for GitHub Actions to push to GHCR
- The workflow uses the built-in `GITHUB_TOKEN` secret for authentication

## Kubernetes Deployment

### Prerequisites

- [Minikube](https://minikube.sigs.k8s.io/docs/start/) installed
- [kubectl](https://kubernetes.io/docs/tasks/tools/) installed

### Deployment Steps

1. Start Minikube:
   ```bash
   minikube start
   ```

2. Update the image name in `k8s/deployment.yaml` with your GitHub username:
   ```yaml
   image: ghcr.io/YOUR_GITHUB_USERNAME/spotify-clone:latest
   ```

3. Apply the Kubernetes manifests:
   ```bash
   kubectl apply -f k8s/
   ```

4. Check the deployment status:
   ```bash
   kubectl get deployments
   kubectl get pods
   ```

### Accessing the Application

1. Get the URL to access the application:
   ```bash
   minikube service spotify-clone --url
   ```

2. Open the URL in your browser to access the application

## Cleaning Up

```bash
# Delete the Kubernetes resources
kubectl delete -f k8s/

# Stop Minikube
minikube stop
```
