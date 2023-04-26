FROM nginx:latest AS ngi

COPY dist/scsp-frontend /usr/share/nginx/html
COPY nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 8050
