import { StatusCodes } from "http-status-codes";
import userModel from "../../../../DB/model/User.model.js";
import { ErrorClass } from "../../../utils/ErrorClass.js";


export const logIn = async(req,res,next)=>{
  const {phone , password} = req.body;
  const phoneExist = await userModel.findOne({phone})
  if(!phoneExist){
    return next(new ErrorClass("phone not exist",StatusCodes.NOT_FOUND))
  }
  
}  