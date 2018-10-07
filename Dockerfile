FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY certificates/localhost.crt /etc/nginx/certificates/localhost.crt
COPY certificates/localhost.key /etc/nginx/certificates/localhost.key

WORKDIR /usr/share/nginx/html
COPY projects/angular-demo/dist/angular angular
COPY projects/react-demo/build react
