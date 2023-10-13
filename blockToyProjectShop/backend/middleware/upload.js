const multer = require("multer");
const path = require("path");

exports.upload = multer({
    storage : multer.diskStorage({
        destination : (req, file, cb) => {
            cb(null, "public/")
        },
        filename : (req, file, done) => {
            const ext = path.extname(file.originalname);
            const filename = path.basename(file.originalname,ext) +"_" + Date.now() + ext;

            done(null,filename);
        }
    }),
    limits : {fileSize : 5 * 1024 * 1024}
});