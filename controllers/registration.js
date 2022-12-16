const usersR = require("../models/registration");
const path = require("path");
const express = require("express");
let alert = require('alert'); 
exports.addUser = (req, res) => {
    let {  rname, remail,rphno, rpwd } = req.body;
    const userROb = new usersR({
      name:rname,
      email:remail,
      phno:rphno,
      pwd:rpwd,
    });
console.log(userROb)

      userROb.save((err) => {
        if (err) {
          console.log(err);
          res.status(400).json({ msg: "Error while adding user", data: err });
        } else {
          res.sendFile(path.resolve(__dirname, "../front-end/home.html"));
        }
      });
    }

exports.loginUser = async(req,res) => {
  const {lemail,lpwd} = req.body;
  let a = await usersR.findOne({
    email:lemail,
  })
  console.log(a)
  if(a.email === lemail && a.pwd === lpwd){
    res.sendFile(path.resolve(__dirname, "../front-end/profile.html"));
  }else{
    res.send("user not found try again")
  }
}


