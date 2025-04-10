import { connectDB } from "@/app/db/connection";
import { NextResponse } from "next/server";
import { User } from "@/app/db/model";

 export async function GET(req:Request, {params}:{params : {id : string}}){
    const connection = await connectDB()

    if(connection){
    const user = await User.findById({_id : params.id})
    if(!user) return NextResponse.json("user not found")
        return NextResponse.json({"user" : user})
        }
 }

 
export  function POST(req:Request){
return NextResponse.json({"status" : "post profile routes working" })
 }

 
export  function DELETE(req:Request){
return NextResponse.json({"status" : "delete profile routes working" })
 }

 
 export function PUT(req:Request){
return NextResponse.json({"status" : "update profile routes working" })
 }