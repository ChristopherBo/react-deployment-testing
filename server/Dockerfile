FROM alpine:3.21.3

RUN apk update && \
    apk add nginx

RUN echo "@edge https://dl-cdn.alpinelinux.org/alpine/edge/community" \
    >> /etc/apk/repositories

RUN apk update && apk add go@edge
RUN go install github.com/air-verse/air@latest
RUN mkdir /build

RUN addgroup -S contrax && \
    adduser -S contrax -G contrax

COPY etc/default.conf /etc/nginx/http.d/default.conf
COPY etc/docker-entrypoint.sh /opt/docker-entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/opt/docker-entrypoint.sh"]
