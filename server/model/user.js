	class User {
	    
	    constructor(fname='',lname='',email='',password='',image='',age='') {
		this.user_id=0;
				this.user_fname = fname;
				this.user_lname = lname;
		        this.user_email = email;
                this.user_password = password;
				this.user_image = image;
				this.user_age = age;
	    }
	 
	    static addUser(fname='',lname='',email='',password='',image='',age='') {
			this.user_fname = fname;
			this.user_lname = lname;
			this.user_email = email;
			this.user_password = password;
			this.user_image = image;
			this.user_age = age;
			let sql = `INSERT INTO master_user(firstName,lastName,email,password,imageURL,age) \
		           VALUES('${this.user_fname}','${this.user_lname}','${this.user_email}','${this.user_password}','${this.user_image}','${this.user_age}')`;
	               return sql;           
	    }
	 
	    static getUserById(urd_id) {
		let sql = `SELECT * FROM master_user WHERE id = ${urd_id}`;
		return sql;           
	    }
	 
	    static deleteUserById(urd_id) {
		let sql = `DELETE FROM master_user WHERE id = ${urd_id}`;
		return sql;           
	    }
	 
	    static getAllUser() {
		let sql = `SELECT *,id,firstName as itemName FROM master_user`;
		return sql;           
	    } 
        static getLogin(urs_username,urs_pass){
               let sql = `SELECT * FROM master_user where email = '${urs_username}' && password='${urs_pass}'`;
               return sql;
           }   
	}
	 
	module.exports = User;

