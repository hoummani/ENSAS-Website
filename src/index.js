var express = require('express');
var app = express();

//--------  Routers  ---------//
var serverRouter=require('./routers/main');



app.use('/', serverRouter);
//-------- end routers  -----//

//--------- Database  --------//


//--------- end database   ----//




//----------  app config  ------ //
app.listen(4200,()=>{
    console.log("Your app is listen now to port 4200 !");
});