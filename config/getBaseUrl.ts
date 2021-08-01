// BASE_URL should be set during development
// VERCEL_URL is automatically set during deployment to Vercel
export const getBaseUrl = () => process.env.VERCEL_URL ?? process.env.BASE_URL;
