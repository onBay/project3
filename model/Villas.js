const mongoose = require('mongoose')

const villaSchema = mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    city:{
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