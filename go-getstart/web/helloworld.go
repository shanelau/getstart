package main

import (
	"fmt"
	"net/http"
	"html/template"
	"strings"
	"log"
)

func sayhelloName(w http.ResponseWriter, r *http.Request){
	r.ParseForm()  //解析参数，默认是不会解析的
	fmt.Println(r.Form)  //这些信息是输出到服务器端的打印信息
	fmt.Println("path", r.URL.Path)
	fmt.Println("scheme", r.URL.Scheme)
	fmt.Println(r.Form["url_long"])
	for k, v := range r.Form {
		fmt.Println("key:", k)
		fmt.Println("val:", strings.Join(v, ""))
	}
	fmt.Fprintf(w, "Hello astaxie!") //这个写入到w的是输出到客户端的
}

func hello(w http.ResponseWriter, r *http.Request)  {
		r.ParseForm()  //解析参数，默认是不会解析的

	fmt.Println("method:", r.Method) //获取请求的方法
	if r.Method == "GET" {
		t, _ := template.ParseFiles("./web/login.gtpl")
		log.Println(t.Execute(w, nil))
	} else {
		//请求的是登录数据，那么执行登录的逻辑判断
		fmt.Println("username:", r.Form["username"])
		fmt.Println("password:", r.Form["password"])
	}
}

func main(){
	http.HandleFunc("/login", hello)
	http.HandleFunc("/", sayhelloName)
	err := http.ListenAndServe(":9090", nil)

	if err!= nil {
		log.Fatal("Listen and server", err)
	}
}