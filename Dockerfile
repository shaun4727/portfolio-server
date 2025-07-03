FROM node:18-alpine
WORKDIR /
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm","run","dev"]