// set up ======================================================================
        var express = require('express');
        var cors = require('cors');
        var bodyParser = require('body-parser');
        var app = express();                                       // create our app w/ express

	 
        var user = require('./controller/user');
        var form = require('./controller/form');
        var project = require('./controller/project');
	 


        app.use('/user_image', express.static('public/image/users'));        // set the static files location /public/images/(user)
	app.use(cors());
        app.use(bodyParser.json());                                       // pull information from html in POST
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
        });

// Controller Routing =========================================================

        app.use("/user",user);
        app.use("/form",form);
        app.use("/project",project);

//if we are here then the specified request is not found ======================
	app.use((req,res,next)=> {
	    const err = new Error("Not Found");
	    err.status = 404;
	    next(err);
	});
 
//all other requests are not implemented.======================================
	app.use((err,req, res, next) => {
	   res.status(err.status || 501);
	   res.json({
	       error: {
		   code: err.status || 501,
		   message: err.message
	       }
	   });
	});




// listen (start app with node app.js) ======================================
      var server = app.listen(8008, function () {
      var host = server.address().address
      var port = server.address().port

      console.log("requesting", host, port)
      })    

      module.exports = app;


