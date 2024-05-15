#!/bin/bash

#Author:Christian Fröchtenicht fc1(at)gmx.net
#License: MIT
#Version: 1.0.0
#CreateDate: 20240513 ISO
#EditDate: 20240513
#Name: upl - user process list
#Description: show all processes by the current user and save this to a file upl.ps

ps -u $USER > upl.ps
cat upl.ps
