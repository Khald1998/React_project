FROM node
WORKDIR /backend
COPY package*.json .
RUN npm install 
COPY . .
EXPOSE 7005
CMD node Server.js
