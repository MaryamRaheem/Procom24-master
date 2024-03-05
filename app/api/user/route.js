
import {NextResponse} from 'next/server'
import User from '../models/UserModel.js';
import { hash } from "bcrypt";

export async function POST(request) {
    

    return NextResponse.json({message: "You are not authenticated"})
//     const body = await request.json()

// //    encrypting the password
//     // const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await hash(body.password, 5);

//     // Create a new user
//     const user = new User({
//         username: body.username,
//         password: hashedPassword
//     })

//     // Save the user
//     try {
//         const savedUser = await user.save()
//         return NextResponse.json(savedUser)
//     }
//     catch(err) {
//         return NextResponse.json({message: err})
//     }
   
}