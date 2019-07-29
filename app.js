var express = require('express');
var mongoose=require('mongoose');



//app
var app = express();

//--------  GraphQL  ---------//




app.use('/', (req,res,next)=>{
    res.send('Preparing to graphql !');
});
//-------- end GraphQL  -----//

//--------- Database  --------//


//--------- end database   ----//




//----------  app config  ------ //

mongoose.connect(process.env.MONGOOSE_URL).then((value) => {
    console.log('Your connection is fine !');
    app.listen(process.env.PORT,()=>{
        console.log(`Your app is listen now to port ${process.env.PORT} !`);
    });
})
.catch((err) => {
    console.log("-----------------------------");
    console.log(":( :("+err.message+" ): ):");
    console.log("-----------------------------");
    });

