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
    register : (req,res)=>{
        res.render("home/register");
    },
};



const process = {
     login: async (req,  res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
        
    
    },
    register : async (req ,res) => {
        const user = new User(req.body);
        const response =await user.register();
        return res.json(response);
        
    }
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