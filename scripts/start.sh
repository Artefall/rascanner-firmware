#!/bin/bash

if [ -z "$1" ]; then
    echo "ERROR: You have not entered interface you want to listen to"
    exit 1
fi

sudo ./switch-to-managed-mode.sh $1
sudo ./change-channel.sh
sudo node src/index.js $1