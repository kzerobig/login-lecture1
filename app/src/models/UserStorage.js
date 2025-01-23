"use strict"
class UserStorage {
    static #users = {              //#은 은닉화를 도와줌
        id : ["rlaeodud"],
        psword : ["1234"],
        nams : ["김대영"],
    };
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        
        return newUsers;
    }
};
module.exports = UserStorage;