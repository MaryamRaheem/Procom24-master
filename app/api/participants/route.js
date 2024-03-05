import {NextResponse} from 'next/server'
import ParticipantsDetails from '../models/ParticipantDetails.js';
import { getServerSession } from 'next-auth';
import connectToDB from '../config/db.js';
import CompetitionReg from '../models/CompetitionRegModel.js';



export async function GET(request) {
    await connectToDB();
    const session = await getServerSession({req: request})
    if(!session) {
        return NextResponse.json({message: "You are not authenticated"})
    }
    console.log('hello');
    try {
        const participants = await CompetitionReg.find({})
        console.log('participants', participants)
        return NextResponse.json(participants)

    }   
    catch(err) {
        console.log(err, 'err')
        return NextResponse.json({message: err})
    }
}
