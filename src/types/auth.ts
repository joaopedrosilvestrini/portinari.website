import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' }
            },

            async authorize(credentials) {
                const user = {
                    id: '1',
                    email: 'admin@admin.com',
                    password: 'admin',
                }

                const isValidEmail = user.email === credentials?.email
                const isValidPassword = user.password === credentials?.password

                if (!isValidEmail || !isValidPassword) {
                    return null
                } else {
                    return user
                }
            }
        })
    ],
    pages: {
        signIn: '/'
    }
}

export { nextAuthOptions }