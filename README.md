# React with Vite

## Development Environment
**Node Version (OS X)**
```
use nvm

Nodejs > v16.14.x
npm > v6.14.x
yarn > v1.22.x (Default Used)
```

## Cert Setting

**In Terminal (OS X)**

- Use brew
```
# Step: 1
# Install mkcert tool - macOS; you can see the mkcert repo for details
brew install mkcert

# Step: 2
# Install nss (only needed if you use Firefox)
brew install nss

# Step: 3
# Setup mkcert on your machine (creates a CA)
mkcert -install

# Step: 4 (Final)
# at the project root directory run the following command
mkdir -p .cert && mkcert -key-file ./.cert/key.pem -cert-file ./.cert/cert.pem 'localhost'
```

- Use Yarn or NPM
```
> yarn run cert
```

## Env sample
**Create and write .env file to project root**
```
# .env
VITE_PORT=4000
```

## Run Script
```
# Local development server
## Default Port = 4000 < declared in ".env" file
> yarn install
> yarn run dev

# Production build
> yarn run build

# Preview production build
> yarn run preview
```
