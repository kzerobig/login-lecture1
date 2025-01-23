"use strict";
//컨트롤러 



const output = {
   home : (req, res) => {
        res.render("home/index");
    },
    
    login : (req,res)=>{
        res.render("home/login");
    },
};

const users = {
    id : ["rlaeodud"],
    psword : ["1234"],
};

const process = {
    login: (req,  res) => {
        const id = req.body.id,
            psword = req.body.psword;
 
        if (users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    success : true,
                });
            }
        }

        return res.json({
            success : false,
            msg : "로그인에 실패하셨습니다.",
        });
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