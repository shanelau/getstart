package main

import (
	"fmt"
)
const Pi = 3.14
const MaxThread = 10
var s = "hello"

const(
	Max = 100
	Min = 10
)

var(
	i int
	pi float32
	prefix string
)

var arr [10]int

func main() {
	s = "c" + s[1:]
	fmt.Printf("%s\n",s)


	// fmt.Printf("Hello, world or 你好，世界 or καλημ ́ρα κóσμ or こんにちはせかい\n")

	// err := errors.New("emit a new error: elf handle")
	// if err != nil{
	// 	fmt.Printf(err)
	// }

	arr[0] = 100
	arr[1] = 99
	fmt.Printf("The first element is %d\n", arr[0])  // 获取数据，返回42
	fmt.Printf("The last element is %d\n", arr[9]) //返回未赋值的最后一个元素，默认返回0

	var numbers map[string]int = make(map[string]int)
	numbers["one"] = 1
	numbers["two"] = 2
	fmt.Println("hello ", numbers["one"])
}