#!/bin/sh
mkdir shell_tut
cd shell_tut

for ((i=0; i<10; i++)); do
	touch test_$i.txt
done

# your_name="qinjx"
# echo $your_name
# echo ${your_name}