"use strict";
const User = require("../../models/User"); 
const UserStorage = require("../../models/UserStorage");

//컨트롤러 

const output = {
   home : (req, res) => {
        res.render("home/index");
    },
    
    login : (req,res)=>{
        res.render("home/login");
    },
};



const process = {
    login: (req,  res) => {
        const user = new User(req.body);
        const response = user.login();
        console.log(response);
    //return res.json(response);

    //     const id = req.body.id,
    //         psword = req.body.psword;

        
    //     const users = UserStorage.getUsers("id","psword");

    //      const response = {};
 
    //     if (users.id.includes(id)){
    //         const idx = users.id.indexOf(id);
    //         if (users.psword[idx] === psword) {
    //             response.success = true;
    //             return res.json(response);
    //         }
    //     }
    //     response.success = false;
    //     response.msg = "로그인에 실패하셨습니다."
    //     return res.json(response);
    
    },
};

module.exports = {
    output,
    process,
};

/*
(key, key) 으로 저장된 것임
module.exports = {
    home:home,
    login:login,
};
*/