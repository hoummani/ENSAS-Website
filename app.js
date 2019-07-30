var express = require('express');
var mongoose=require('mongoose');
const graphqlHTTP=require('express-graphql');



//app
var app = express();

//--------  GraphQL  ---------//




app.use('/eEnsas',graphqlHTTP({
    
    graphiql:true
}));
//-------- end GraphQL  -----//






//----------  app config  ------ //

mongoose.connect(process.env.MONGOOSE_URL).then((value) => {
    console.log('Your connection is fine !');
    app.listen(process.env.PORT,()=>{
        console.log(`Your app is listen now to port ${process.env.PORT} !`);
    });
})
.catch((err) => {
    console.log("-----------------------------");
    console.log(":( :( ==> "+err.message+" <== ): ):");
    console.log("-----------------------------");
    });

