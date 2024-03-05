import mongoose from 'mongoose'

const {Schema} = mongoose

const TeamSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    institute: {
        type: String,
        required: true
    },
    
})

const startupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    website: {
        type: String,
    },
    industry: {
        type: String,
        required: true
    },
    team: {
        type: [TeamSchema],
        required: true
    },
    noOfMembers: {
        type: Number,
    },
    stage: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    problem: {
        type: String,
        required: true
    },
    targetMarket: {
        type: String,
        required: true
    },
    uniqueValue: {
        type: String,
        required: true
    },
    societyImpact: {
        type: String,
        required: true
    },
    objectives: {
        type: String,
    },
    expectations: {
        type: String,
        required: true
    },
})

const Startup = mongoose.models.Startup || mongoose.model('Startup', startupSchema)

export default Startup