export const className = (obj: { [key: string]: boolean }): string => {
  return Object.keys(obj)
    .filter((key) => obj[key])
    .join(" ");
};
