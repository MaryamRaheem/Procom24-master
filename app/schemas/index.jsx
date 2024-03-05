import * as Yup from "yup";

export const registerSchema = Yup.object({
  teamName: Yup.string().min(2).max(30).required("Please enter team name."),
  instituteName: Yup.string()
    .min(2)
    .max(30)
    .required("Please enter institute name."),
  memberName: Yup.string(),
  memberEmail: Yup.string(),
  memberCnic: Yup.string()
    .min(13, "Cnic must be atleast 13 characters.")
    .max(13, "Cnic cannot be more than 13 characters"),
  memberPhone: Yup.string()
    .min(11, "Phone Number must be atleast 11 characters.")
    .max(11, "Phone Number cannot be more than 11 characters."),
});
