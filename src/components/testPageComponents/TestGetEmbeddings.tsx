import { Button } from "@components/Button";
import { Divider } from "@components/Divider";
import { Input } from "@components/Input";
import { Heading } from "@components/Typography/Heading";
import React, { useState } from "react";

type TestGetEmbeddingsProps = {};

export const TestGetEmbeddings =
  ({}: TestGetEmbeddingsProps): React.ReactElement => {
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [links, setLinks] = useState<string[]>([]);
    const [linksReady, setLinksReady] = useState(false);
    const [secondaryResponse, setSecondaryResponse] = useState({});

    const getLinks = async (url: string) => {
      const links = await fetch("/api/getLinks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
      const data = await links.json();
      return data;
    };

    const handleSubmit = async () => {
      setLoading(true);
      try {
        const links = await getLinks(inputValue);
        setLinks(links.storedLinks[0].allUrls);
      } catch (error: any) {
        setError(error.message);
      }
      setLoading(false);
      setLinksReady(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };

    const handleSecondarySubmit = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/getEmbeddings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ urls: links }),
        });
        setSecondaryResponse(await response.json());
      } catch (error: any) {
        setError(error.message);
        console.dir(error)
        console.trace(error)
      }
      setLoading(false);
      setLinksReady(false);
      setLinks([])
    };

    return (
      <>
        <Heading level={2}>Embeddings API</Heading>
        <Divider />
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter url..."
        />
        {!linksReady && (
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Getting Links..." : "Get Links"}
          </Button>
        )}
        {linksReady && (
          <Button onClick={handleSecondarySubmit} disabled={loading}>
            {loading ? "Generating..." : "Generate Embeddings"}
          </Button>
        )}

        {!!secondaryResponse && <p>{JSON.stringify(secondaryResponse)}</p>}
        {!!error && <p>{JSON.stringify(error)}</p>}
        {!!links && <p>{JSON.stringify(links)}</p>}
      </>
    );
  };
