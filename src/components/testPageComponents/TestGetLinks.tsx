import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { getLinks } from "@lib/getLinks";
import { NextApiResponse } from "next/types";
import JSONPretty from "react-json-pretty";

import React, { ChangeEvent, useEffect, useState } from "react";
import { Heading } from "@components/Typography/Heading";
import { Divider } from "@components/Divider";
import { Checkbox } from "@components/Checkbox";
import { RangeInput } from "@components/RangeInput";
// import { TerminalOutput } from "@components/TerminalOutput";

type TestGetLinksProps = {};

export const TestGetLinks = ({}: TestGetLinksProps): React.ReactElement => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<any>(null);
  const [refreshDatabase, setRefreshDatabase] = useState(false);
  const [debug, setDebug] = useState(true);
  const [maxRequestsPerCrawl, setMaxRequestsPerCrawl] = useState<
    undefined | number
  >(0);
  const [crawling, setCrawling] = useState(false);
  const [fetchResponse, setFetchResponse] = useState<NextApiResponse | null>();

  const handleSuccess = (data: any) => {
    setCrawling(false);
    setFetchResponse(data);
    setError(null);
    console.log({ data });
  };

  const handleError = (err: any) => {
    setCrawling(false);
    setError(err);
    setFetchResponse(null);
    console.log({ err });
  };

  const handleFetchClick = async () => {
    setCrawling(true);

    await getLinks({
      url: inputValue,
      debug,
      refreshDatabase,
      maxRequestsPerCrawl, // Limitation for only 10 requests (do not use if you want to crawl all links)
      onSuccess: handleSuccess,
      onError: handleError,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (crawling) {
      setFetchResponse(null);
      setError(null);
    }
  }, [crawling]);

  return (
    <>
      <Heading level={2}>Cheerio API</Heading>
      <Divider />
      <Input
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter url..."
      />
      <RangeInput
        name="maxRequestsPerCrawl"
        label="Max requests per crawl"
        max={99}
        min={0}
        value={maxRequestsPerCrawl}
        className="mt-8"
        onChange={(event: undefined | ChangeEvent<HTMLInputElement>) => {
          const value = event?.target.value;
          setMaxRequestsPerCrawl(value ? parseInt(value) : undefined);
        }}
      />
      <div className="flex items-center gap-2 mt-4">
        <Button onClick={handleFetchClick} disabled={crawling}>
          {crawling ? "Crawling..." : "Crawl"}
        </Button>
        <div className="flex flex-col gap-2">
          <Checkbox
            label="Refresh database"
            checked={refreshDatabase}
            onChange={(event) => setRefreshDatabase(event.target.checked)}
            name="refreshDatabase"
            placeholder="Refresh database"
          />
          <Checkbox
            label="Debug"
            checked={debug}
            onChange={(event) => setDebug(event.target.checked)}
            name="debug"
            placeholder="Debug"
          />
        </div>
      </div>
      <div className="overflow-y-auto rounded-lg scrollbar-thin scrollbar-thumb-slate-900 scrollbar-track-slate-400 max-h-96">
        {/* TODO: Make this a readable stream
          <TerminalOutput className="line-clamp-3">
            The links that are crawled will be displayed here in real time, check the getDocuments Api endpoint for more info.
          </TerminalOutput> */}
        <JSONPretty
          mainStyle="line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;padding-inline: 1rem;padding-block: .5rem;"
          errorStyle="line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;"
          keyStyle="color:#f92672;"
          stringStyle="colorterm :#fd971f;"
          valueStyle="color:#a6e22e;"
          booleanStyle="color:#ac81fe;"
          id="json-pretty"
          data={
            (!!fetchResponse && fetchResponse) ||
            (!!error && { error: error.message })
          }
        ></JSONPretty>
      </div>
    </>
  );
};
