import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "example@example.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // Fake user authentication for example
                const user = { id: "1", name: "John Doe", email: credentials?.email || "" };

                if (user) {
                    // Send email after login
                    await fetch(`${process.env.NEXTAUTH_URL}/api/send-email`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ email: user.email, name: user.name }),
                    });

                    return user;
                }

                return null;
            },
        }),
    ],
    pages: {
        signIn: "/auth/signin",
    },
});
