import NextAuth, { Awaitable, NextAuthOptions, RequestInternal, User } from 'next-auth'
import { nextAuthOptions } from '@/types/auth'

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }