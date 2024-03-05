import * as z from "zod";

export const registerFormSchema = z.object({
    // leaderName: z.string().min(3, 'Name must be at least 3 characters'),
    // leaderEmail: z.string().email(),
    noOfParticipants: z.string(),
    // phoneNo: z.string().min(11, 'Phone number must be at least 11 characters').max(11, 'Phone number cannot be more than 11 characters'),
    // cnic: z.string().min(13, 'CNIC must be at least 13 characters').max(13, 'CNIC cannot be more than 13 characters'),
    // imageUrl: z.string({
    //     required_error: "Screenshot of payment is required",
    // }).url("Screenshot of payment is required"),
    memberDetails: z
        .array(z.object({
            name: z.string({
                required_error: "Name is required",
            }).min(3, 'Name must be at least 3 characters'),
            email: z.string({
                required_error: "Email is required",
            }).email(),
            cnic: z.string({
                required_error: "CNIC is required",
            }).min(13, 'CNIC must be at least 13 characters').max(13, 'CNIC cannot be more than 13 characters'),
            phoneNo: z.string({
                required_error: "Phone number is required",
            }).min(11, 'Phone number must be at least 11 characters').max(11, 'Phone number cannot be more than 11 characters'),
            institute: z.string({
                required_error: "Institute is required",
            }).min(3, 'Institute must be at least 3 characters')

        })),
    
        // .refine((data) => {
        //     // Parse the string to a number if it's not already parsed.
        //     console.log(data);
        //     const noOfParticipants = parseInt(data.noOfParticipants);
        //     console.log(noOfParticipants, 'data length');
        //     // If noOfParticipants is 1, then no member details are required
        //     if (noOfParticipants === 1) {
        //         return data.length === 0;
        //     }
        //     // If noOfParticipants is greater than 1, then at least one member detail is required
        //     return data.length > 0;
        // }, {
        //     message: "Member details are required",
        //     path: ["memberDetails"],
        // }),
})
// .refine(data => {
//     const noOfParticipants = parseInt(data.noOfParticipants);
//     console.log(noOfParticipants, 'noOfParticipants');
//     if (noOfParticipants === 1) {
//         return data.memberDetails.length === 0;
//     }
//     return data.memberDetails.length > 0;
// });
