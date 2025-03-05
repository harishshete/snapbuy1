const multer = require("multer");

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'productImages')
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, `${Date.now()}${file.originalname.split(" ").join("_")}`);
    }
});

const upload = multer({ storage: Storage });

module.exports = upload;