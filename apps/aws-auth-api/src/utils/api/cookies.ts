const createTokenCookie = (token: string, expiresIn: number) => {
  const expires = new Date(Date.now() + expiresIn * 1000).toUTCString();
  return `token=${token}; Expires=${expires}; HttpOnly; Path=/; SameSite=Lax`;
};
