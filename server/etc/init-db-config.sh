#!/bin/bash
set -e

SOURCE="/etc/postgresql/postgresql.conf"
DESTINATION="/var/lib/postgresql/data/postgresql.conf"

cp -rp $SOURCE $DESTINATION
