echo "1: $1";
echo "2: $2";
echo "3: $#";

name="$@"
echo "#1233"
users=("a" "b" "c")
echo "users length: ${#users[@]}"

for i in "$@"; do
    echo $i
done

val=`expr 2 + 2`
echo "两数之和为 : $val"

a=10
b=20

if [ $a -lt $b ]
then
  echo "$a 小于 $b"
fi