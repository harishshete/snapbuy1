const jwt = require('jsonwebtoken');
function verifyJWTToken(req, res, next) {
    try {
        const token = req.headers['authorization'];
         jwt.verify(token, process.env.JWT_SECRET_KEY,(err, authData) => {
            if(err)
            {
                return res.status(403).json("Token is not valid");;
            } else
            {
                res.user = authData;
                next();
            }
        });
    } catch (error) {
        // Access Denied
        console.log(error);
        return res.status(401).send("you are not authenticated");
    }
}

module.exports = verifyJWTToken


