//insert, delete, update, select
//Create - insert
//Read - select
//Update - Update
//Delete - delete

var http=require("http");
var express = require("express");
var ejs = require("ejs"); //동적 html생성모듈
var fs = require("fs"); // 파일 읽어들이는 모듈(내부)

var app= express(); //모듈생성
var server=http.createServer(app);

//express모듈의 최대 장점은 각종 미들웨어라 불리는 기능들을 지원
//미들웨어 사용시 use()호출

//정적파일들을 일일이 라우팅 시킬 필요없다
app.use(express.static(__dirname));

//list요청받기
app.use("/list",function (request, response) {
  fs.readFile("list.ejs","utf-8",function (error,data) {
    if(error){
      console.log("reading fail",error);
    }
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end(ejs.render(data));
  });
});

server.listen(8888,function () {
  console.log("web server is running")
});  //서버가동
