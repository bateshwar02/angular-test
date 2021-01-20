
    var express = require('express');
    var sha1 = require('sha1');
    var db = require('../config/database');
    var User = require('../model/user');
    var Auth = require('../model/auth');
    let fs = require('fs');
    var jwt = require('jsonwebtoken');
    var upload = require('../config/imageUpload');

	const router = express.Router();

//User Login =====================================================================================

	router.post("/login",(req,res,next)=>{
            db.query(User.getLogin(req.body.userName,sha1(req.body.password)),(err,data)=>{
                if(!err){
				var token = Auth.getToken(req.body.userName);
					res.json({
                        status:200,
                        message:"Logged in successfully",
						userData:data,
						userToken:token   
                    });
                }

            });
          
	});

	router.post("/addUser",(req,res,next)=>{
		upload(req, res, function (err) {
			db.query(User.addUser(req.body.fname,req.body.lname,req.body.email,sha1(req.body.pass),req.file.filename,req.body.age),(err,data)=>{
				if(!err){
					res.json({
						status:200,
						message:"user add successfully",
						userData:data   
					});
				}else{
					res.json({
						status:000,
						message:"something wents wronge",
					});
				}
			});
		})
	});
	
	router.get("/getUserList", (req, res, next) => {
	    db.query(User.getAllUser(), (err, data)=> {
		if(!err) {
			res.json({
				status:200,
				message:"User listed.",
		        data:data 
			});
		}
	    });    
	});

	router.post("/add", (req, res, next) => {
        //read product information from request ====================================================

	    let user = new User(req.body.name, req.body.email,sha1(req.body.password),req.body.mobile);
        db.query(user.getAddUser(), (err, data)=> {
		res.status(200).json({
		    message:"User added.",
		    productId: data.insertId
		});
	    });
	});

	router.get("getUserById/:userId", (req, res, next) => {
	    let uid = req.params.userId;
	    db.query(User.getUserById(uid), (err, data)=> {
		if(!err) {
		    if(data && data.length > 0) {
		        res.json({
		            message:"User found.",
		            user: data
		        });
		    } else {
		        res.status(200).json({
		            message:"User Not found."
		        });
		    }
		} 
	    });    
	});

	router.post("/delete", (req, res, next) => {
	    var uid = req.body.userId;
	    db.query(User.deleteUserById(uid), (err, data)=> {
		if(!err) {
		    if(data && data.affectedRows > 0) {
		        res.status(200).json({
		            message:`User deleted with id = ${pid}.`,
		            affectedRows: data.affectedRows
		        });
		    } else {
		        res.status(200).json({
		            message:"User Not found."
		        });
		    }
		} 
	    });   
	});

	module.exports = router;
