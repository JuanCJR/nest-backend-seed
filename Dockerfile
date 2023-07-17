# Start from the node image v16
FROM registrysecaas.azurecr.io/secaas/node:16-latest

# Change the work directory app
WORKDIR /app

COPY ./package.json .
# Install dependencies
RUN npm install

# Copy the directory
COPY . .

# Compile files in the dist folder
RUN npm run build


#COPY dist ./dist
# Expose the port 3000
EXPOSE 3000

# install to datadog agent

# Run the server
CMD ["npm","run","start:prod"]