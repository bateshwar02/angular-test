
var multer = require('multer');
var DIR = './public/image/users';
// User Image Upload

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, DIR);
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
    }
});


let upload = multer({ storage: storage }).single('imageFile');

module.exports = upload;


