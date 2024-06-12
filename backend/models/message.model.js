const mongoose = require('mongoose');


const messageSchema = new mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        type:String,
        required:true
    }
    //created_at , updated_at
},{timestamps:true})

const Message = mongoose.model("Message",messageSchema);

module.exports = Message;