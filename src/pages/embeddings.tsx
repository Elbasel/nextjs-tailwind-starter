import { Main } from "@components/Main";
import { NextPage } from "next";
import { useState } from "react";

const Embeddings: NextPage = () => {
  const [urls, setUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/getEmbeddings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ urls }),
    });

    setLoading(false);

    if (!response.ok) {
      // Handle error
    }
  };

  return (
    <Main>
      <div className="flex flex-col items-center max-w-xl m-auto text-center">
        <h1 className="w-full my-5 text-2xl font-bold sm:text-4xl ">
          Generate embeddings
        </h1>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full h-[150px] textarea textarea-bordered"
            placeholder="Enter URLs here"
            value={urls.join("\n")}
            onChange={(e) => setUrls(e.target.value.split("\n"))}
          />
          <button
            className="my-4 btn btn-primary"
            type="submit"
            disabled={loading}
          >
            Generate Embeddings
          </button>
        </form>
        {loading && <div>Loading...</div>}
      </div>
    </Main>
  );
};

export default Embeddings;
