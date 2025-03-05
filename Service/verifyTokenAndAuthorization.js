const verifyJWTToken= require('./verifyJWTToken');

const verifyTokenAndAuthorization = (req,res,next)=>{
    verifyJWTToken(req,res,()=>{
        // console.log(res.user.id === req.params.id);

        if(res.user.id === req.params.id || req.user.isAdmin ){
            next();
        }
        else{
            res.status(403).json("Access Denied");
        }     
    })
}

module.exports = verifyTokenAndAuthorization;
