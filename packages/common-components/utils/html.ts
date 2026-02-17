export const isDarkTheme = () => {
  const body = document.body;
  if (body.classList.contains("dark")) return true;
  return false;
};

export const setTheme = (theme: "light" | "dark") => {
  const body = document.body;
  if (theme === "dark") body.classList.add("dark");
  else body.classList.remove("dark");
  if (theme === "light") body.classList.add("light");
  else body.classList.remove("light");
};
