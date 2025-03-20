# the-podman-files

# A webpage/personal-fileserver

# The Podman Files

## Overview

The Podman Files is my personal website and portfolio project, powered by containerized services using Podman. This project includes a web server for hosting my portfolio and personal files with authentication to protect private content.

## Purpose

This repository contains the containerized infrastructure for my personal web presence, allowing me to:

- Showcase my portfolio and projects
- Host personal files securely with authentication
- Learn and demonstrate containerization best practices with Podman

## Features

- **Portfolio Website**: A showcase of my work, skills, and projects
- **Secure File Hosting**: Personal file storage with authentication
- **Containerized Architecture**: Everything runs in Podman containers for isolation and portability
- **Authentication System**: Protects private content from unauthorized access
- **Automated Deployment**: Scripts for easy setup and maintenance

## Technology Stack

- **Frontend**: React with Tailwind CSS
- **Backend**: Node.js/Express
- **Container Runtime**: Podman
- **Authentication**: JWT-based authentication
- **Reverse Proxy**: Nginx
- **Automation**: Ansible for infrastructure provisioning and deployment
- **CI/CD**: Option for Vercel deployment

## Getting Started

### Prerequisites

- Podman installed on your system
- Node.js and npm
- Ansible (for automated deployment)
- Basic understanding of React and Tailwind CSS
- Git (for cloning this repository)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/the-podman-files.git

# Navigate to the project directory
cd the-podman-files

# Install dependencies for React frontend
cd website
npm install

# Run the setup script for containers
./scripts/setup.sh
```

## Development

### Running the React App Locally

```bash
# In the website directory
npm start
```

### Running the Backend with Auto-Reload

```bash
# In the server directory
pnpm run dev:watch
```

This will:

- Start the server on port 4002 with nodemon for auto-restart on code changes
- Start browser-sync on port 3002 that will auto-reload the browser when backend files change
- Access your application at http://localhost:3002

### Building for Production

```bash
# In the website directory
npm run build
```

## Usage

### Starting the Services

```bash
./scripts/start-services.sh
```

### Accessing the Website

Once running, the website is available at:

- Portfolio: <http://localhost:8080>
- File Server: <http://localhost:8081> (requires authentication)

### Managing Content

```bash
./scripts/update-content.sh [options]
```

## Deployment Options

### Vercel Deployment for Testing

For quick testing and initial deployment, Vercel provides an excellent starting point:

```bash
# Install Vercel CLI if not already installed
npm install -g vercel

# Deploy from the project directory
vercel

# Link to your custom domain (after initial deployment)
vercel domains add aleksejunas.no
vercel domains add www.aleksejunas.no
```

### Production Deployment to aleksejunas.no

Once testing is complete, you have options for deploying to your domain:

1. **Continue with Vercel (Simplest)**

   - Connect your domain to Vercel
   - Set up CNAME/A records as instructed by Vercel
   - Add SSL certificate through Vercel's UI

2. **Self-hosted with Ansible and Podman (Learning Path)**
   - Setup a VPS or server with your provider of choice
   - Configure DNS records for aleksejunas.no to point to your server
   - Use Ansible playbooks to automate deployment
   - Configure Nginx as reverse proxy with Let's Encrypt SSL

### Domain Configuration

Regardless of hosting choice, you'll need to:

1. Access your domain registrar's dashboard for aleksejunas.no
2. Update nameservers or DNS records according to your hosting solution
3. Ensure SSL certificates are properly set up
4. Configure redirects from non-www to www or vice versa

### Deployment Strategy

Based on time constraints:

1. **Phase 1**: Deploy to Vercel connected to aleksejunas.no for immediate results
2. **Phase 2**: Gradually implement the Ansible+Podman solution as a learning project
3. **Phase 3**: Migrate from Vercel to your self-hosted solution when ready

This phased approach allows you to:

- Get your site live quickly on your domain
- Learn Ansible without deadline pressure
- Maintain uptime during the transition

## Repository Management

### Current Situation

Currently, the project is split across multiple git repositories:

- Frontend code (website)
- Backend code (server)
- Ansible configuration

## Project Structure

```
# Your actual project structure will go here
```

## Learning Resources

This project serves dual purposes:

1. As my personal website and file server
2. As a learning platform for technologies like:
   - React and Tailwind CSS
   - Containerization with Podman
   - Infrastructure as Code with Ansible
   - Modern deployment workflows (both self-hosted and cloud options)

For time-constrained learning:

- **Quick Start**: Deploy frontend to Vercel while studying the Ansible configurations
- **Gradual Approach**: Start with basic containers and incrementally implement Ansible automation
- **Hybrid Model**: Use Vercel for the frontend and Ansible+Podman for backend services

## Is Learning Ansible Worth It?

### Why Ansible Might Be Worth Your Time

1. **Automation at Scale**: If you work with multiple servers or complex deployments, Ansible can save significant time in the long run
2. **Infrastructure as Code**: Treating infrastructure setup as version-controlled code improves consistency and documentation
3. **Career Growth**: Ansible is widely used in DevOps roles and increasingly requested in job descriptions
4. **Transferable Knowledge**: Learning Ansible teaches principles that apply to other IaC tools
5. **Community and Resources**: Large community with extensive documentation and pre-built roles

### When Simpler Alternatives Might Be Better

1. **Single-Service Deployments**: For simple React sites, Vercel or Netlify offer near-zero configuration deployment
2. **Learning Curve vs. Immediate Needs**: The time invested in learning Ansible might not pay off for small-scale projects
3. **Maintenance Overhead**: Keeping Ansible playbooks updated requires ongoing attention
4. **Alternative Tools**: Docker Compose or Kubernetes might be more relevant depending on your specific goals
5. **Time Constraints**: Learning curve may be steep for quick deployment needs

### Middle-Ground Approach

Consider starting with a simpler deployment for your portfolio (Vercel) while incrementally learning Ansible through smaller, focused experiments. This hybrid approach lets you:

- Get your site up quickly
- Learn Ansible at a comfortable pace
- Apply Ansible first to your backend services
- Gradually build confidence before full implementation

### My Approach for aleksejunas.no

For my personal site at <www.aleksejunas.no>:

1. **Start with Vercel**: Deploy quickly to get the site live
2. **Learn in Parallel**: Study Ansible while the site is already operational
3. **Test on Staging**: Apply Ansible knowledge to a staging environment first
4. **Gradual Migration**: Move components from Vercel to self-hosted when ready

This pragmatic approach balances immediate results with long-term learning goals.

## Troubleshooting

### Backend Issues

#### "Command nodemon not found" Error

If you encounter the error: `"nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/server.ts" not found ELIFECYCLE Command failed with exit code 254`, try the following solutions:

1. **Install Nodemon and TS-Node locally**:

   ```bash
   cd server  # Navigate to your backend directory
   npm install --save-dev nodemon ts-node typescript @types/node
   ```

2. **Verify package.json script**:
   Ensure your package.json has the correct script configuration:

   ```json
   "scripts": {
     "dev": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/server.ts",
     "start": "ts-node src/server.ts"
   }
   ```

3. **Use npx to run the command**:

   ```bash
   npx nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/server.ts
   ```

4. **Check PATH environment**:
   If nodemon is installed globally, make sure your PATH includes the npm global packages:

   ```bash
   echo $PATH  # Verify npm global bin is in PATH
   npm config get prefix  # See where global packages are installed
   ```

5. **Try running with full paths**:

   ```bash
   ./node_modules/.bin/nodemon --watch 'src/**/*.ts' --exec './node_modules/.bin/ts-node' src/server.ts
   ```

### Common Backend Setup Issues

- **Node.js Version**: Ensure you're using a compatible Node.js version (recommended: v14 or later)
- **TypeScript Configuration**: Verify your tsconfig.json has appropriate settings
- **Dependencies**: Check all required dependencies are installed in your package.json
- **File Structure**: Confirm your project structure matches the expected paths in your import statements

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- The Podman development team for creating such an excellent tool
- React and Tailwind CSS communities
- Ansible community
- Vercel for simplified deployment options

---

**Note**: This project reflects my learning journey with containerization, automation, and web development. The implementation balances between learning goals and practical deployment needs.
