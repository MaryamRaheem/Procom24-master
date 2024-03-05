import connectToDB from "../../config/db"
import CredentialsProvider from "next-auth/providers/credentials"
import User from "../../models/UserModel";
import { compare } from "bcrypt";

connectToDB();

export const options = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials,req) => {
                const user = await User.findOne({username: credentials.username});
                if(user){
                    const isValid = await compare(credentials.password, user.password);
                    if(isValid){
                        return Promise.resolve(user);
                    }
                    return Promise.resolve(null);
                }
            }
        })
    ],
}