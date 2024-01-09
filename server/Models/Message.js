import { Schema,model } from "mongoose";

const messageSchema = new Schema({
    mesaage:String,
    sender:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    receiver:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
},
{
    timestamps:true
});

const Message = model ("Message",messageSchema);
export default Message