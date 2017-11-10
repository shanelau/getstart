package main
import (
	"fmt"
)
var x = 100

func SumAndProduct(A, B int) (add int, Multiplied int) {
	add = A+B
	Multiplied = A*B
	return
}

func main() {
	if(x>10){
		fmt.Println(">")
	}else {
		fmt.Println('<')
	}

	sum := 0;
	for index:=0; index< 10; index++ {
		sum += index;
	}
	fmt.Println(sum)

	resultA,resultB := SumAndProduct(2,3)
	fmt.Println(resultA, resultB)

	var sum2 = 1
	for sum2 < 100 {
		sum2 += sum2;
	}
	fmt.Println("sum2:", sum2)
}