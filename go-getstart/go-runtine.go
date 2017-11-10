package main

import (
	"fmt"
	"runtime"
)
func say(s string) {
	for i := 0; i < 5; i++ {
		fmt.Println(s)
		runtime.Gosched()
	}
}

func main() {
	runtime.GOMAXPROCS(2)

	go say("world") //开一个新的Goroutines执行
	say("hello") //当前Goroutines执行
}