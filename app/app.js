"use strict"; //이크마 스크립트 문법을 준수하겠다

//모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//라우팅
const home = require("./src/routes/home");// home 이라는 곳을 지정


//앱세팅
app.set("views","./src/views"); //views라는 것을 쓸 폴더이름은 ./views이다
app.set("view engine","ejs"); //뷰 엔진을 ejs를 쓴다.
//app.use(express.static(__dirname+'/src/public'));
app.use(express.static(`${__dirname}/src/public`));
//express 메서드중에서 static이라는 메서드로 정적경로로 추가하고 현재 디렉토리 이름을 가져와서 src 파일안에 public 이라는 폴더로 만든다.
//app.js 안에있는 src폴더 안에있는 public 폴더를 정적 경로로 추가해주겠다.

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extened: true}));//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use("/",home); //use -> 미들 웨어를 들록해주는 메서드 /경로로 오게되면 home으로 이동하게함

module.exports = app; //app의 정보를 내보내겠다