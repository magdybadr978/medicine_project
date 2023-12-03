import mongoose from "mongoose";
import { Schema, model } from "mongoose";


const userSchema = new Schema({
     userName: {
        type: String,
        required: [true, 'userName is required'],
        min: [2, 'minimum length 2 char'],
        max: [20, 'max length 2 char']
    },
    password: {
        type: String,
        required: [true, 'password is required'],
    },
    phone: {
        type: String,
        required : [true , 'phone is required'],
        unique : true,
        min : [11 , 'must be 11 digit'],
        max : [11,'must be 11 digit'],
        validate : {
          val : function(phone){
            return /^01$/.test(phone);
          },
          message: 'Phone must start with "01"'
        }
    },
    role: {
        type: String,
        enum: ['superAdmin', 'Admin','Owner','Driver']
    },
    image: {
      type : Object,
      required : false
    },
    confirmPhone :{
      type : Boolean,
      default : false
    }
    
}, {
    timestamps: true
})

const userModel = mongoose.model.User || model('User', userSchema)
export default userModel