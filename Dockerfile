# build environment
FROM node:23-alpine as build
WORKDIR /app
COPY ./frontend .
RUN npm install
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/nginx/certs/fullchain.pem   /etc/ssl/certs/fullchain.pem
COPY --from=build /app/nginx/certs/privkey.pem  /etc/ssl/private/privkey.pem

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]