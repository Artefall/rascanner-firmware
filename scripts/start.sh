#!/bin/bash

if [ -z "$1" ]; then
    echo "ERROR: You have not entered interface you want to listen to";
    exit 1;
fi

./switch-to-monitor-mode.sh $1 2>/dev/null;