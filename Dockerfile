# FROM node:alpine 

# WORKDIR /client

# COPY package*.json ./

# RUN npm i

# COPY . .

# EXPOSE 3000

# CMD ["npm", "start","--host", "0.0.0.0"]

# build stage
FROM node:alpine as build-stage
WORKDIR /app 
COPY ./frontend/package*.json ./
COPY ./frontend . 
RUN npm i
RUN npm run build 

# production build
FROM nginx:stable-alpine as production-stage
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/build /var/www/html 
EXPOSE 80 
CMD ["nginx", "-g", "daemon off;"] 
