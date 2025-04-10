import { NextResponse } from "next/server"

export  function  POST(req: Request){
const user = req.json()
return NextResponse.json({"status" : "login routes working" })
}