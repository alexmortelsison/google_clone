import { Results } from "@/app/types/Results";
import WebSearchResult from "@/components/WebSearchResult";
import { SearchParams } from "next/dist/server/request/search-params";
import React from "react";

export default async function WebSearchPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );
  if (!response.ok) throw new Error("Something went wrong");
  const data: Results = await response.json();
  const results = data.items;
  return <div>{results && <WebSearchResult results={data} />}</div>;
}
