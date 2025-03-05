const verifyJWTToken= require('./verifyJWTToken');

const VerifyAndAuthorizeSeller = (req,res,next)=>{

    verifyJWTToken(req,res,()=>{
        if(res.user.id === req.params.id || req.user.role==="seller" ){
            next();
        }
        else{
            res.status(403).json("Access Denied");
        }     
    })
}

module.exports = VerifyAndAuthorizeSeller;
