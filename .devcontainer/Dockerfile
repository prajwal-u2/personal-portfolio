FROM node:20.15.1

# Install Vite globally for CLI access
RUN npm install -g vite

# Set working directory to the project root
WORKDIR /workspaces/personal-portfolio

# Install all project dependencies and dev dependencies
RUN npm install --save-dev vite @vitejs/plugin-react tailwindcss postcss autoprefixer prettier
RUN npm install animate.css gsap aos web-vitals
RUN npm install react react-dom
RUN npm install react-router-dom

# Install all dependencies listed in package.json (if any)
RUN npm install
