"use strict"; //이크마 스크립트 문법을 준수하겠다

//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home");// home 이라는 곳을 지정


//앱세팅
app.set("views","./src/views"); //views라는 것을 쓸 폴더이름은 ./views이다
app.set("view engine","ejs"); //뷰 엔진을 ejs를 쓴다.

app.use("/",home); //use -> 미들 웨어를 들록해주는 메서드 /경로로 오게되면 home으로 이동하게함

module.exports = app; //app의 정보를 내보내겠다