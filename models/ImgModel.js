const mongoose = require("mongoose");

const ImageSchema = mongoose.Schema({
    name: {
        type: String
    },
    image : {
        data: Buffer,
        contentType : String
    }
});

module.exports = mongoose.model("Image", ImageSchema);