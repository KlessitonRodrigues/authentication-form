const dotenv = {
  GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
  GITHUB_CLIENT_ID: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || '',
  GITHUB_REDIRECT: process.env.NEXT_PUBLIC_GITHUB_REDIRECT || '',
  API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3005',
  REDIRECT_URL: process.env.NEXT_PUBLIC_REDIRECT_URL || 'http://localhost:3001',
};

export default dotenv;
