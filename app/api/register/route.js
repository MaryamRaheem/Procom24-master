import {NextResponse} from 'next/server'
import connectToDB from '../config/db.js';
import ParticipantDetails from '../models/ParticipantDetails.js';
import CompetitionReg from '../models/CompetitionRegModel.js';

// Connect to the database
connectToDB();

// export async function GET(request) {
//     try {
//         const participants = await ParticipantDetails.find()
//         return NextResponse.json(participants)

//     }   
//     catch(err) {
//         return NextResponse.json({message: err})
//     }
// }

export async function POST(request) {
    const body = await request.json()

    const existingMemberEmails = (await CompetitionReg.distinct('members.email')).map(email => email.toLowerCase());
    const newMemberEmails = body.memberDetails.map(member => member.email.toLowerCase());

    const duplicateEmails = newMemberEmails.filter(email => existingMemberEmails.includes(email));
    if (duplicateEmails.length > 0) {
        console.log("Duplicate emails found:", duplicateEmails);
        // You can handle this case as per your requirement, like sending an error response
        return NextResponse.json({ message: "Email may exist. One person is allowed to get registered in only one competition" }, { status: 400 });
    }
    let closedCompetitions = ['AI Showdown', 'Speed Debugging', 'Scavenger Hunt','Hackathon']
    if(closedCompetitions.includes(body.competition)){
        return NextResponse.json({ message: "Registration for this competition is closed" }, { status: 400 });
    }

    // Create a new register
    const competition_reg = new CompetitionReg({
        
        imageUrl: body.imageUrl,
        noOfParticipants: body.noOfParticipants,
        competition: body.competition,
        members: body.memberDetails
    })

    // Save the register
    try {
        const savedRegistraion = await competition_reg.save()
        return NextResponse.json(savedRegistraion, {status: 201})
    }
    catch(err) {
        return NextResponse.json({message: err}, {status: 500})
    }
}