FROM node:19-appine

COPY package.json /app/
COPY src /app/

WORKDIR /app

RUN npm install

EXPOSE 4040

CMD [ "node", "index.js" ]