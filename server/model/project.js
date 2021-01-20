	class Project {
	 
	    static addProduct(pname='',description='',forms='',user='',symbol='',formssubmitted='',count='',total='') {
			this.date  = new Date().toJSON().slice(0,10).replace(/-/g,'-');
			this.pname = pname;
			this.description = description;
			this.forms = forms;
			this.user = user;
			this.symbol = symbol;
			this.formssubmitted = formssubmitted;
			this.count = count;
			this.total = total;
		    let sql = `INSERT INTO mster_project(project,formssubmitted,total,lastupdated,description,count,forms,profile,symbol) VALUES('${this.pname}','${this.formssubmitted}','${this.total}','${this.date}','${this.description}','${this.count}','${this.forms}','${this.user}','${this.symbol}')`;
				  return sql;           
	    }
	 
	    static getProjectList() {
		let sql = `SELECT * FROM mster_project order by id desc`;
		return sql;           
	    } 
          static deleteContactById(cid) {
		let sql = `DELETE FROM master_contact where id = '${cid}'`;
		return sql;           
	    }
          static getProjectDetailsByid(pid){
				//let sql = `SELECT mp.*,mu.*,mf.* FROM mster_project mp inner join master_forms mf on mf.id=mp.forms inner join master_user mu on mu.id =mp.profile  where mp.id = '${pid}'`;
				let sql = `SELECT * FROM mster_project where id = '${pid}'`;
                return sql; 
		  }
		  static userDataById(id){
			let sql = `SELECT * FROM master_user where id = '${id}'`;
			//console.log(sql);
			return sql; 
		  }
	}
	 
	module.exports = Project;

