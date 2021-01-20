const config = require('../config/config');
var jwt = require('jsonwebtoken');

class Auth {
    static getToken(username=''){
        var token = jwt.sign({username: username}, config.secret,{ expiresIn: 10* 60});
        return token;  
    }
    static verifyToken(token){
        var tk = token.slice(1, -1);
        jwt.verify(tk,config.secret, function(err, decoded) {
            console.log(decoded.iat)
            return decoded.iat;
            // if (err) {
            //     return false;
            // }else{
            //     console.log('dsfsf')
            //     return decoded;
            // }
          });
         
    }
}



    module.exports = Auth;