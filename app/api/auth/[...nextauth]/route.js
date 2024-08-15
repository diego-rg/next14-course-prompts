import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: "",
            clientSecret: ""
        })
    ], async session({ session }) { },
    async signIng({ profile }) { }
});

export { handler as GET, handler as POST };