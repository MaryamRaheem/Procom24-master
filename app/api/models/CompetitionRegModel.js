import mongoose from 'mongoose'

const {Schema} = mongoose

const memberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cnic: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    institute: {
        type: String,
        required: true
    }
})

const competitionRegModel = new Schema({
    noOfParticipants: {
        type: Number,
        required: true
    },

    imageUrl: {
        type: String,
        required: true
    },
    competition: {
        type: String,
        required: true
        // type: Schema.Types.ObjectId,
        // ref: 'Competition'
    },
    members: [memberSchema],
    timeStamp: {
        type: Date,
        default: Date.now
    }
    
        
})

const CompetitionReg = mongoose.models.CompetitionReg || mongoose.model('CompetitionReg', competitionRegModel)

export default CompetitionReg