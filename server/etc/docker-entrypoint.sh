#!/usr/bin/env sh

nginx

if [ ! -e /src ]; then
    printf 'error: sources @ /src do not exist!\n'
    exit 1
fi

if [ ! -e /air.toml ]; then
    printf 'error: air configuration @ /air.toml does not exist!\n'
    exit 1
fi

cd /src
/root/go/bin/air -c /air.toml
