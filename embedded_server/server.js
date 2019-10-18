const http = require('http');
const app = require('./app');
const port = process.env.PORT;
const server = http.createServer(app);
const mongoose = require('mongoose');



mongoose.connect(`${process.env.MONGO_CONNECTION}`,()=>{
  server.listen(port,()=>{
    console.log("Your Embedded server is run ...!");
  });

});

mongoose.Promise= global.Promise;
