import { NextApiRequest, NextApiResponse } from "next";
import { CheerioCrawler, purgeDefaultStorages } from "crawlee";
import { deleteLinks, getLinks, superbaseClient } from "@lib/superbase";
import { isUrlValid } from "@lib/url";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  if (method === "POST") {
    const { url, debug, refreshDatabase } = body;

    const allUrls: string[] = [];

    if (refreshDatabase) {
      await purgeDefaultStorages();
      await deleteLinks(url);
    }

    const crawler = new CheerioCrawler({
      async requestHandler({ request, enqueueLinks, log }) {
        log.info(request.url);
        await enqueueLinks();
        allUrls.push(request.url);
      },
    });

    if (!isUrlValid(url))
      return res.status(400).json({ message: "Invalid url" });

    const storedLinks = await getLinks(url);

    // if url found in database, return it
    if (storedLinks.length > 0) {
      // unified response for both cases (found in database or not)
      if (!debug) return res.status(200).json({ links: storedLinks });

      return res.status(200).json({
        debugMessage: "link found in database",
        refreshDatabase,
        url,
        allUrls,
        storedLinks,
      });
    }

    // if url not found in database, crawl it
    const crawlerResult = await crawler.run([url]);

    // store crawled links in database
    const { data, error } = await superbaseClient
      .from("links")
      .insert([{ url, allUrls }]);

    // unified response for both cases (found in database or not)
    if (!debug) return res.status(200).json({ links: allUrls });

    return res.status(200).json({
      debugMessage: "link not found in database",
      url,
      refreshDatabase,
      crawlerResult,
      allUrls,
      storedLinks,
      superbase: {
        data,
        error,
      },
    });
  }
  return res
    .status(405)
    .json({ success: false, message: "Method not allowed" });
}
