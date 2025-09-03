import  CredentialsProvider  from "next-auth/providers/credentials";
import NextAuth from "next-auth";


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "lOGIN whith email",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;
        console.log(username);
        console.log(password);

     const user = {
       id: "1",
       name: "Nitin",
       email: "nitinkirola1701@gmail.com",
     };

        if (username && password) {
          return user;
        }
        else {
          return null
        }
      }
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET
});

export {handler as POST, handler as GET}