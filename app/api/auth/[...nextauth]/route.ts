import { API_URL } from "@/constants";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const bcrypt = require('bcrypt');
const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email_address : {label:"Email address", type: "text",placeholder: "mamamo"},
                password : {label:"Password", type: "password"},
            },
            async authorize (credentials){
                if(!credentials?.email_address || !credentials?.password){
                    return null
                }
                const options = {
                    method: 'POST',
                        headers: {
                            "Content-Type": 'application/json',
                        },
                        body: JSON.stringify({
                            'email_address': credentials.email_address,
                            'password': credentials.password
                        })
                    };
                    try {
                    const url = `${API_URL}/login`;
                    const res = await fetch(url, options);
                    const data = await res.json();
                    const user = data.data;
                    if(data.status == "success")  return user;
                    else return null;
                } catch (err) {
                        // console.log(err);
                }
            }

        })
    ],
    // session: {
    //     strategy:"jwt"
    // },
    secret: process.env.NEXTAUTH_URL,
};
const handler  = NextAuth(authOptions)


export {handler as GET, handler as POST}