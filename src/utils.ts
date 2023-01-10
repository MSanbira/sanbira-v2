export const className = (obj: { [key: string]: boolean }): string => {
  return Object.keys(obj)
    .filter((key) => obj[key])
    .join(" ");
};

export function getSubPath(subPath: string) {
  return `/${subPath}`;
}

export function getRootPath() {
  return '/';
}

export function isCurrent(subPath: string) {
  return window.location.pathname.includes(subPath);
}
