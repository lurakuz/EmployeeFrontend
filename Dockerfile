FROM node:16.13.2

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm install -g @angular/cli 
