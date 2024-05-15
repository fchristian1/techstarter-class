#Author:Christian Fröchtenicht fc1(at)gmx.net
#License: MIT
#Version: 1.0.0
#CreateDate: 2024/05/11 ISO
#EditDate: 2024/05/11 ISO
#Name: checkcat
#Description: check of the given filename exist and then cat it out tu the console

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
cat $filename

