import { NextResponse } from "next/server"
import { connectDB } from "@/app/db/connection"
import { User, Profile } from "@/app/db/model"
import { logger } from "@/app/services/loggerService"
import {DATA} from "../../data"


export async function  POST(req: Request){
    try {
        const dummyData = DATA[0].profile
        if (await connectDB()){
       const user = await  req.json()
       const createdUser = await User.create({
        email : user.email,
        password : user.password,
        businessName : user.businessName,
        profile :[]
       })

       if(createdUser){
        let profileId = createdUser.businessName.split(" ").join("")
        dummyData.businessProfile.name = createdUser.businessName
           const profile = await Profile.create({
            user : createdUser._id,
            pid : profileId,
            ...dummyData
           })

           createdUser.profile.push(profile)
          const updatedUser = await  createdUser.save()
        //   const getUser = await User.findById({_id : createdUser._id})
        //   getUser.profile.push(profile)
        //   await getUser.save()
        return NextResponse.json({"user" : updatedUser })
       }
   }

    } catch (error) {
        logger.error(error)
    }
 
}