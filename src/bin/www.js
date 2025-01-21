"use strict"; //이크마 스크립트 문법을 준수하겠다
//서버를 띄어주는 코드

const app = require("../app"); // 상위폴더로 가서 app을 불러옴
const PORT = 3000;


app.listen(PORT,()=>{ // 3000을 PORT라는 변수로 저장하면 더 좋다
    console.log("서버가동");
});

/*
app.listen(PORT,function(){ // 3000을 PORT라는 변수로 저장하면 더 좋다
    console.log("서버가동");
});*/