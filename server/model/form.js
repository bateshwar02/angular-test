class Form {
 
    static addForm(name='',shape='') {
         this.date  = new Date().toJSON().slice(0,10).replace(/-/g,'-');
        let sql = `INSERT INTO master_forms(name,shape,updateddate) VALUES('${name}','${shape}','${this.date}')`;
        return sql;           
    }
 
    // static getUserById(urd_id) {
    // let sql = `SELECT * FROM master_user WHERE id = ${urd_id}`;
    // return sql;           
    // }
 
    static deleteFormById(fid) {
    let sql = `DELETE FROM master_forms WHERE id = ${fid}`;
    return sql;           
    }
 
    static getAllForm() {
    let sql = `SELECT *,name as itemName FROM master_forms`;
    return sql;           
    } 
   
}
 
module.exports = Form;

