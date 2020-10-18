#!/bin/bash

if [ -z "$1" ]; then
    echo "No net interface declared"
fi

sudo ip link set $1 down
sudo iw $1 set monitor control
sudo rfkill unblock all
sudo ip link set $1 up