//라우팅하는 것들들
"use strict";
const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl"); //현재폴더에 있는 home.ctrl을 가져오겠다.

router.get("/",ctrl.home); // /경로로 왔다면 ctrl 안에 있는 home변수를 찾아가게됨
router.get("/login",ctrl.login);

//라우터를 외부파일에서 사용할 수 있도록 하는법
module.exports = router; //외부로 내보내게하는 코드
