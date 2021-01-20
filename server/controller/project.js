
	var express = require('express');
	var db = require('../config/database');
	var Project = require('../model/project');
	var User = require('../model/user');

	const router = express.Router();

//Product add =====================================================================================

	router.post("/addProduct",(req,res,next)=>{
		
		var i=0;var j =0;
		var usr =[];var frm =[];
		for (i ; i<req.body.user.length ;i++){
            usr[i]=req.body.user[i].id;
		}
		for (j ; j<req.body.forms.length ;j++){
            frm[j]=req.body.forms[j].id;
		}

		db.query(Project.addProduct(req.body.pname,req.body.description,frm.join('|'),usr.join('|'),req.body.symbol,
			req.body.formssubmitted,req.body.count,req.body.total),(err,data)=>{
				if(!err){
					res.json({
						status:200,
						message:"Project added",
						data:data   
					});
				}
		});
          
	});

	router.get("/getProjectList",async(req, res) => {
		// console.log('1')
		// logNumbers(); 
		// console.log('3')
		console.log('start')
		// await db.query(Project.getProjectList(),(err,resss)=>{
		// 	console.log(resss[0])
		// });
		await getProject();
console.log('end')
// await db.query(Project.getProjectList(), async(err, data)=> {
// 			if(!err){
// 				await getUser(data[0].profile,(err,ress)=>{
// 					console.log('2')
// 			   })
// 				// const ar = data[0].profile.split('|');
// 				// var userArr = []; var i = 0;
// 				// for (i; i < ar.length; i++){
					

// 				// }
// 				// console.log(userArr);
				
// 			}
// 		});
// 		console.log('6')
	});
        
        router.get("/getProjectDetailsByid/:id", (req, res, next) => {
	    var pid = req.params.id;
	    db.query(Project.getProjectDetailsByid(pid), (err, data)=> {
		if(!err) {
		    if(data.length> 0) {
		        res.json({
		            message:`Project Details.`,
		            data:data[0]
		        });
		    } else {
		        res.json({
		            message:"No Data."
		        });
		    }
		} 
	    });   
	});   
	
	router.get("/deleteContactById/:id", (req, res, next) => {
	    var cid = req.params.id;
	    db.query(Project.deleteContactById(cid), (err, data)=> {
		if(!err) {
		    if(data && data.affectedRows > 0) {
		        res.json({
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

	router.get("/getProjectAssignUser/:id", (req, res, next) => {
	    var uid = req.params.id;
	    db.query(Project.userDataById(uid), (err, data)=> {
		if(!err) {
		        res.json({
		            status:'200',
		            data: data[0]
		        });
		    } 
	    });   
	});

	const getUser = async(data, callback)=>{
		const ar = data.split('|');
		var userArr = []; 
		console.log('3')
		var i = 0;
		userArr.push('asdsagjfasf')
		for (i; i < ar.length; i++){
			await db.query(User.getUserById(ar[i]), async(err, res)=>{
			console.log('4')
			// await userArr.push('sdfsdjkfgjsdg') ;
		})
		  }
		console.log('5')
	    }
	

		const doWork = async() =>{
			const sam1 = await add(10,20);
			const sam2 = await add(sam1,30);
			const sam3 = await add(sam2,60);
			return sam3
		}

		const add = (a,b)=>{
			return new Promise((resolve, reject)=>{
				setTimeout(()=>{
					if(a <0 || b<0){
						return reject('number must non negative number')
					}
					resolve (a+b);
				},500)
			})
		}

		function getRandomNumber() {
			return new Promise(function(resolve, reject) {
			  setTimeout(function() {
				const randomValue = Math.random();
				resolve(randomValue);
			  }, 2000);
			}); 
		  }
		  async function logNumbers() {
			for (let x = 0; x < 3; x += 1) {
			//   console.log(await getRandomNumber());
               console.log(x)
			// setTimeout(function() {
			// 	const randomValue = Math.random();
			// 	console.log(randomValue);
			//   }, 2000);
			}
		  }
		  
		  function getProject() {
			return new Promise(async function(resolve, reject) {
				console.log('1st ')
				db.query(Project.getProjectList(),(err,resss)=>{
					resolve(resss[0])
					});
			 
			});
		  }
		  
		  


	module.exports = router;

