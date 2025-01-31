"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    const req = {
        id : id.value,
        name : name.value,
        psword : psword.value,
        confirmPsword : confirm-psword.value, 
    };

    fetch("/register", {
        method : "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req), //json객체로 문자열로 반환시킴
    } )
    .then((res)=>res.json())
    .then((res)=>{
       if(res.success){
        location.href = "/login";
       } else{
        alert(res.msg);
       }
    })
    .catch((err)=>{
        console.error("회원가입 중 에러 발생");
    })//에러를 처리해줌
};