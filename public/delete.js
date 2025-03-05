const fs = require("fs");

fs.unlink( "productImages/1673345273915robo_Image copy.jpg", (err) => {
    if (err) {
        throw err;
    }
    console.log("Delete File successfully.");
});
