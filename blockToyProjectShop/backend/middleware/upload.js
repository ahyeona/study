const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, "public/")
    },
    filename : (req, file, done) => {
        const ext = path.extname(file.originalname);
        const filename = path.basename(file.originalname,ext) + "_" + Date.now() + ext;

        done(null,filename);
    }
});

exports.upload = multer({storage});