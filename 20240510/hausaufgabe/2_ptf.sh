#Author:Christian Fröchtenicht fc1(at)gmx.net
#License: MIT
#Version: 1.0.1
#CreateDate: 2024/05/10 ISO
#EditDate: 2024/05/11 ISO
#Name: ptf - processes to file 
#Description: write the current processes to a file named (date)-ptf

currentDate=$(date +%Y_%m_%d-%H_%M_%S-ptf)
currentPs=$(ps -e)
echo "$currentPs" > $currentDate

