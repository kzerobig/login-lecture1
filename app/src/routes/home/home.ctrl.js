"use strict";
//컨프롤러 
const home = (req, res) => {
    res.render("home/index");
};


const login= (req,res)=>{
    res.render("home/login");
};

module.exports = {
    home,
    login,
};

/*
(key, key) 으로 저장된 것임
module.exports = {
    home:home,
    login:login,
};
*/