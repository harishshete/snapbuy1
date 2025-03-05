const mongoose = require("mongoose");

const AuthTokens = mongoose.Schema(
    {
        token: {
            type: String,
        }
    }
);

module.exports = mongoose.model("AuthTokens", AuthTokens);



