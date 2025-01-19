import { Results } from "@/app/types/Results";
import React from "react";

export default function WebSearchResult({ results }: { results: Results }) {
  return (
    <div>
      {results.items?.map((result) => (
        <div key={result.link}>
          <h1>{result.title}</h1>
          <p>{result.htmlSnippet}</p>
        </div>
      ))}
    </div>
  );
}
