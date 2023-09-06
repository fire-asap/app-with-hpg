FROM nginx:1.24.0

COPY default.conf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY ./build /usr/share/nginx/html