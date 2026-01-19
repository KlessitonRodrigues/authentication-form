export const dateInputToISO = (dateStr: string): string => {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toISOString();
};

export const isoToDateInput = (isoStr: string): string => {
  const date = new Date(isoStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const formatDateAndTime = (date: string, time: string) => {
  const monthObj = new Date(date).toLocaleString("pt-BR", {
    month: "short",
    day: "numeric",
  });
  const weekObj = new Date(date).toLocaleString("pt-BR", {
    weekday: "long",
  });
  const timeObj = time.slice(0, 2) + "h";
  return `${monthObj}, ${weekObj} às ${timeObj}`;
};
