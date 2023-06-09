FROM node
WORKDIR /backend
COPY package*.json .
RUN npm install 
COPY . .
EXPOSE 7003
CMD node Server.js
