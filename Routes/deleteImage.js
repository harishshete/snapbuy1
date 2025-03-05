// const multer = require("multer");
// const GridFsStorage = require("multer-gridfs-storage");

// const storage = new GridFsStorage({
//     url: process.env.LOCAL_URL,
//     options: { useNewUrlParser: true, useUnifiedTopology: true },
//     file: (req, file) => {
//         const match = ["image/png", "image/jpeg"];

//         if (match.indexOf(file.mimetype) === -1) {
//             const filename = `${Date.now()}-any-name-${file.originalname}`;
//             return filename;
//         }

//         return {
//             bucketName: "photos",
//             filename: `${Date.now()}-any-name-${file.originalname}`,
//         };
//     },
// });

// module.exports = multer({ storage });

const fs = require("fs");

fs.unlink( "productImages/1673345273915robo_Image copy.jpg", (err) => {
    if (err) {
        throw err;
    }
    console.log("Delete File successfully.");
});





