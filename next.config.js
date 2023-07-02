/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		NEXT_PUBLIC_AUTH_URL: process.env.NEXT_PUBLIC_AUTH_URL,
		MONGODB_URI: process.env.MONGODB_URI,
	},
};

module.exports = nextConfig;
