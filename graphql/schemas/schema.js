const {buildSchema}=require('graphql');


module.exports= buildSchema(
  `
  type NewUser{
    id:ID!
    firstName:String
    lastName:String
    email:String
    password:String
  }

  
  type RootQuery{

  }
  type RootMutation{

  }
  schema{
    query:RootQuery
    mutation:RootMutation
  }
  `
)