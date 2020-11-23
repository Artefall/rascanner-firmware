#!/bin/bash


while true
do
    for channelNumber in {1..13}
    do
        sudo iwconfig $1 channel $channelNumber
        sleep 0.05s
    done

done