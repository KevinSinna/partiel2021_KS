FROM node
WORKDIR /app2
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
COPY . ./
RUN npm install
RUN npm run build
CMD ["npm", "start"]  