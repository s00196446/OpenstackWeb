FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY dist/open-stack-pokemon /usr/share/nginx/html

CMD [ "nginx", "-g", "daemon off;"]