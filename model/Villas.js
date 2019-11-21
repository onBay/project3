const mongoose = require('mongoose')

const villaSchema = mongoose.Schema({
    Name:
    {
        type: String,
        required: true
    },
    Owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    City:{
        type:String
    },
    pricePerNight:{type: Number},
    description:{type:String},
    guests:{type:String},
    image:{type:String},
    rateNum:{type:Number},
    ratingSum:{type:Number},
    x:{type:String},
    y:{type:String}
    
},{ timestamps: true })

module.exports = mongoose.model('Villas',villaSchema)