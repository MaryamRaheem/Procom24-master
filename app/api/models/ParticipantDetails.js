import mongoose from 'mongoose'

const {Schema} = mongoose

const participantDetailsSchema = new Schema({
    leaderName: {
        type: String,
        required: true
    },
    leaderEmail: {
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
    imageUrl: {
        type: String,
        required: true
    },
    noOfParticipants: {
        type: Number,
        required: true
    },

    competition: {
        type: String,
        required: true
        // type: Schema.Types.ObjectId,
        // ref: 'Competition'
    },
    members: [
        {
            name: {
                type: String,
            },
            email: {
                type: String,
            },
            cnic: {
                type: String,
            }
        }
    ]
})

const ParticipantsDetails = mongoose.models.ParticipantsDetails || mongoose.model('ParticipantsDetails', participantDetailsSchema)

export default ParticipantsDetails