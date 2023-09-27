export const limit = (text?: string): string => {
  return text?.substring(0, 100) + "...";
};
