import { SearchParams } from "next/dist/server/request/search-params";
import Link from "next/link";
import React from "react";

export default async function WebSearchPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=searchTerm=${searchParams.searchTerm}`
  );
  if (!response.ok) throw new Error("Something went wrong");
  const data = await response.json();
  const results: SearchResults[] = data.items;

  if (!results) {
    return (
      <div>
        <h1>No results found for {searchParams.searchTerm}</h1>
        <p>Try searching the web for Something else</p>
        <Link href={"/"}>Home</Link>
      </div>
    );
  }

  return (
    <div>{results && results.map((result) => <h1>{result.title}</h1>)}</div>
  );
}
