FROM node:carbon

WORKDIR /Users/arthurmoore/GitHub/hrla22-airbnb-reviews
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "server"]



