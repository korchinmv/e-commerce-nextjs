export const getWindowWidth = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth;
  } else {
    return 768;
  }
};
