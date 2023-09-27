export const text_to_url = (text: string): string => {
  return text.split(" ").join("-");
};
