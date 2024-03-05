import {NextResponse} from 'next/server'
import { getServerSession } from 'next-auth';
import CompetitionReg from '../../models/CompetitionRegModel.js';

export async function GET(request, {params}) {
    
    const session = await getServerSession({req: request})
    if(!session) {
        return NextResponse.json({message: "You are not authenticated"})
    }
    const { id } = params
    try {
        const participants = await CompetitionReg.findById(id)
        console.log('participants', participants)
        return NextResponse.json(participants)

    }
    catch (error) {
        return NextResponse.json({message: error.message})
    }

}