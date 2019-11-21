const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({
    customer:{
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      villa:{
        type: Schema.Types.ObjectId,
        ref: "Villas"
      },
      startAt:{type:Date},
      endAt:{type:Date},
      

    
},{ timestamps: true })

module.exports = mongoose.model('Villas',villaSchema)