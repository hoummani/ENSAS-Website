const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const calendarSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    urls:[
        {
            type:String,
            required:false
        }
    ],
    begin_at:{
        type:Date,
        required:true
    },
    ended_at:{
        type:Date,
        required:true
    },
    alerts:[
        {
            level:{
                type:String,
                required:true
            },
            //filiere
            filiere:{
                type:Schema.Types.ObjectId,
                ref:'Filiere'
            }
        }
    ],
    actions:[
        {
            title:{
                type:String,
                required:true
            },
            content:[
                {
                    type:String,
                    required:false
                }
            ],
            urls:[
                {
                    type:String,
                    required:false
                }
            ]
        }
    ]
    
});

module.exports=mongoose.model('Calendar', calendarSchema);