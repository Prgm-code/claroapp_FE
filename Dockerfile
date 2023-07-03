FROM nginx
COPY public/manifest.json /usr/share/nginx/html/manifest.json
COPY build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
