# docker build --platform linux/amd64 -t <imageName:version> . 
# for Mac chip, need to set the platform if the image need to run on linux
FROM nginx:1.24.0-alpine

COPY default.conf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY ./build /usr/share/nginx/html