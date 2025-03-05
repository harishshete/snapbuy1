const verifyJWTToken= require('./verifyJWTToken');

const VerifyAndAuthorizeShopper = (req,res,next)=>{
    verifyJWTToken(req,res,()=>{
        if(res.user.id === req.params.id || req.user.isAdmin ){
            next();
        }
        else{
            res.status(403).json("Access Denied");
        }     
    })
}

module.exports = VerifyAndAuthorizeShopper;
