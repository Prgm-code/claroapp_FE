FROM nginx
COPY build /usr/share/nginx/html
COPY public/manifest.json /usr/share/nginx/html/manifest.json
COPY nginx.conf /etc/nginx/nginx.conf
