FROM node
WORKDIR /backend
COPY package*.json .
RUN npm install 
COPY . .
EXPOSE 7004
CMD node Server.js
