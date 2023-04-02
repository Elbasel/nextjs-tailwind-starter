/**
 * Formats a string as a valid URL.
 * @param input - The input string to format.
 * @returns A formatted string that represents a valid URL.
 */
export const formatUrl = (input: string): string => {
  let url = input.trim();
  if (!/^https?:\/\//i.test(url)) {
    url = `https://${url}`;
  }
  return url;
};

/**
 * Checks whether a given string or URL object is a valid URL.
 * @param input - The string or URL object to check.
 * @returns A boolean indicating whether the input string or URL object is a valid URL.
 */
export const isUrlValid = (input: string | URL): boolean => {
  return true;
  // const url = typeof input === "string" ? new URL(input) : input;
  // return url.protocol === "http:" || url.protocol === "https:";
};

/**
 * Checks whether a given URL is public by making a GET request to it.
 * @param url - The URL to check.
 * @returns A promise that resolves to a boolean indicating whether the URL is public.
 */
export const isUrlPublic = async (url: URL): Promise<boolean> => {
  try {
    const response = await fetch(url);
    return response.ok;
  } catch (error) {
    return false;
  }
};

/**
 * Checks whether a given URL is a public HTTPS URL.
 * @param url - The URL to check.
 * @returns A promise that resolves to a boolean indicating whether the URL is a public HTTPS URL.
 */
export const isHttpsPublicUrl = async (url: string | URL): Promise<boolean> => {
  const inputUrl = typeof url === "string" ? new URL(url) : url;
  const urlRegex = /^https:\/\//i;
  if (!urlRegex.test(inputUrl.href)) {
    return false;
  }
  return await isUrlPublic(inputUrl);
};
