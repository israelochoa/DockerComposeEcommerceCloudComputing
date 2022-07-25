FROM node:16.14.0
WORKDIR /app
COPY  package*.json .
RUN npm install -g npm@8.15.0
RUN npm install --force
COPY . .
EXPOSE 3000
CMD ["npm","start"]