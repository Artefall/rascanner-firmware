#!/bin/bash

if [ -z "$1" ]; then
    echo "No net interface declared"
    exit 1
fi

echo "Switching to managed mode..."

sudo ip link set $1 down
sudo iw $1 set type managed
sudo ip link set $1 up

echo "Switched successfuly"