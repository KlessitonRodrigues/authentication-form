const dotenv = {
  GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
  API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3005",
  REDIRECT_URL: process.env.NEXT_PUBLIC_REDIRECT_URL || "",
};

export default dotenv;
