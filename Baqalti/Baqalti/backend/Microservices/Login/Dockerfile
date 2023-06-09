FROM node
WORKDIR /backend
COPY package*.json .
RUN npm install 
COPY . .
EXPOSE 7002
CMD node Server.js
