FROM node:18-alpine
WORKDIR /user/src/app
COPY . .
RUN apt-get update && apt-get install curl -y
RUN npm install
RUN npm run build
USER node
CMD ["npm", "run", "start:prod"]