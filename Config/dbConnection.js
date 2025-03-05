require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(`${process.env.URL }/${process.env.DB_NAME}`, {
    useNewURLParser: true,
    useUnifiedTopology: true,
})
.then(()=>{console.log("DB Connected...");})
.catch((err)=>{console.log(err)});
