import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import { postAPI } from '@/services/fetchAPI'

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {},
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    encryption: true,
  },
  session: {
    strategy: 'jwt',
    maxAge: 1 * 24 * 60 * 60, // 1 days * 24 hours * 60 minutes * 60 seconds
  },
  callbacks: {
    // jwt fonksiyonu ile kullanıcı giriş yaptıktan sonra giriş yapan kullanıcının bilgilerini token değişkenine atıyoruz.
    // bu bilgileri session fonksiyonunda kullanacağız.
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    // session fonksiyonu ile kullanıcı giriş yaptıktan sonra giriş yapan kullanıcının bilgilerini session değişkenine atıyoruz.
    async session({ session, token }) {
      session.user = token
      return session
    },
  },
  pages: {
    // signIn fonksiyonu çalıştığında kulanıcıyı yönlendireceğimiz sayfayı belirtiyoruz.
    signIn: `/login/`,
    encryption: true,
  },
}
