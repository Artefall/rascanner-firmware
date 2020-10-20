#!/bin/bash

if [ -z "$1" ]; then
    echo "No net interface declared"
fi
echo "Switching to monitor mode..."

sudo ip link set $1 down
sudo iw $1 set monitor control
sudo rfkill unblock all
sudo ip link set $1 up

echo "Switched successfuly"

while true  
do  
    for channel in {1..14}
    do
        sudo iwconfig wlp4s0 channel $channel
        sleep 0.05s
    done
done  