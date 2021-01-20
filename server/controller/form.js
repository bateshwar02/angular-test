
	var express = require('express');
	var jwt = require('jsonwebtoken');
	var db = require('../config/database');
	var Form = require('../model/form');
	var Auth = require('../model/auth');
	let fs = require('fs');
    var upload = require('../config/imageUpload');
	const config = require('../config/config');


	const router = express.Router();

//Form Login =====================================================================================

	router.post("/addForm",(req,res,next)=>{
		// res.json({'message':req.headers.token.slice(1, -1)});
		//console.log('========== '+req.headers.token.slice(1, -1));
		//var tk = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJubWtyaXNobmExMjNAZ21haWwuY29tIiwiaWF0IjoxNTQ5OTk2NTM3LCJleHAiOjE1NDk5OTcxMzd9.eng_HnzqCzkjHNVvYpP6pZ3e2MNbkQY9OsoL9ErrzIY';
 	    var ver= jwt.verify(req.headers.token.slice(1, -1),config.secret);
		if(ver){
			db.query(Form.addForm(req.body.name,req.body.shape),(err,data)=>{
						if(!err){
							res.json({
								status:200,
								message:"Logged in successfully",
								userToken:Auth.getToken(ver.username)
							});
						}else{
							res.json({
								status:000,
								message:"something wents wronge.",
							});
						}
					});
				}else{
					res.json({
						status:500,
						message:"Token expired",
						
					});
				}

        });

	router.get("/getFormList", (req, res, next) => {
	    db.query(Form.getAllForm(), (err, data)=> {
		if(!err) {
			res.json({
				status:200,
				message:"Form List",
		        data:data 
			});
		}
	    });    
	});
	
	router.get("/deleteForm/:id/", (req, res, next) => {
		var fid = req.params.id;
	    db.query(Form.deleteFormById(fid), (err, data)=> {
		if(!err) {
		    if(data && data.affectedRows > 0) {
		        res.status(200).json({
		            message:`User deleted with id = ${fid}.`,
		            affectedRows: data.affectedRows
		        });
		    } else {
		        res.status(200).json({
					message:" Not found.",
					affectedRows: ''
		        });
		    }
		} 
	    });   
	});

	module.exports = router;
