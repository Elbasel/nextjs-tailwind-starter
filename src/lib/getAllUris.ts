import * as cheerio from "cheerio";

const getAllSubLinks = async (url: string) => {
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  const links = $("a[href^='/']");
  const hrefs = links.map((i, link) => $(link).attr("href")).get();
  return hrefs;
};

const getAllLinks = async (url: string) => {
  const allLinks: string[] = [];
  const links = await getAllSubLinks(url);
  links.forEach(async (link) => {
    const subLinks = await getAllSubLinks(url + link);
    console.log({ subLinks });
    console.log({ allLinks });
    allLinks.push(...subLinks);
  });

  return allLinks;
  return links;
};

export default getAllLinks;
