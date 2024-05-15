#Author:Christian Fröchtenicht fc1(at)gmx.net
#License: MIT
#Version: 1.0.0
#CreateDate: 2024/05/11 ISO 
#EditDate: 2024/05/11 ISO
#Name: nol - number of lines
#Description: expects an argument as filename and print put the number of lines

if [ $# -ne 1 ] 
then
	echo "expects one argument"
	exit 1
fi
filename=$(find $1 2>&1)
if [ $? -ne 0 ]
then
	echo $filename
	exit 1
fi
nol=$(wc -l < $filename)
echo $nol
