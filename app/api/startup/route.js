import {NextResponse} from 'next/server'
import connectToDB from '../config/db.js';
import Startup from '../models/StartupModel.js';

export async function POST(request) {
    const body = await request.json()

    // Create a new register
    const startup = new Startup({
        name: body.name,
        website: body.website,
        industry: body.industry,
        noOfMembers: body.noOfMembers,
        team: body.team,
        stage: body.stage,
        description: body.description,
        problem: body.problem,
        targetMarket: body.targetMarket,
        uniqueValue: body.uniqueValue,
        objectives: body.objectives,
        expectations: body.expectations,
        societyImpact: body.societyImpact,
        imageUrl: body.imageUrl,
    })

    // Save the register
    try {
        await connectToDB()
        
        // check if any member with the same email exists
        const startupExists = await Startup.findOne({name: body.name})
        
        
        const savedStartup = await startup.save()
        
        console.log('Successed')
        return NextResponse.json(savedStartup, {status: 201})
    }
    catch(err) {
        return NextResponse.json({message: err}, {status: 500})
    }
}