import { formatUrl } from "./url";

type getDocumentsArgs = {
  url: string;
  debug?: boolean;
  refreshDatabase?: boolean;
  maxRequestsPerCrawl?: number;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
};

export const getDocuments = async ({
  url,
  debug,
  refreshDatabase,
  maxRequestsPerCrawl,
  onSuccess,
  onError,
}: getDocumentsArgs) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    // open ai recommends using spaces instead of new line characters
    const formattedUrl = formatUrl(url);

    const body = JSON.stringify({
      url: formattedUrl,
      debug,
      refreshDatabase,
      maxRequestsPerCrawl,
    });

    const res = await fetch("/api/getDocuments", {
      method: "POST",
      headers,
      body,
    });
    const data = await res.json();
    onSuccess?.({ ...data });
  } catch (error) {
    onError?.(error);
  }
};
