export const extractDomain = (url: string) => {
  const domain = url?.match(
    /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/\n]+)/im
  );
  return domain && domain[1];
};
