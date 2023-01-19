FROM node:latest

WORKDIR /app


COPY . .

RUN npm install 

EXPOSE 5001

CMD ["node" , "index.js"]
