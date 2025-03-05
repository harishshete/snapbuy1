const jwt = require('jsonwebtoken');

function generateJWTToken(req, res) {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        userId: 12,
    }

    const token = jwt.sign(data, jwtSecretKey);
    res.send(token);
}

module.exports = generateJWTToken;