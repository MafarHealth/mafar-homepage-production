/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'mafar.com.my'],
  },
  env: {
    NEXT_PUBLIC_GOOGLE_SHEETS_API: process.env.GOOGLE_SHEETS_API,
    NEXT_PUBLIC_WEB3FORMS_KEY: process.env.WEB3FORMS_KEY,
  }
}

module.exports = nextConfig
