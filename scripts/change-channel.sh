#!/bin/bash

while true  
do  
    for channel in {1..14}
    do
        sudo iwconfig wlp4s0 channel $channel
        sleep 0.05s
    done
done  