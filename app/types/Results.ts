export interface Results {
  searchinformation?: {
    formattedSearchTime: string;
    formattedTotalResults: string;
  };
  items?: {
    formattedUrl: string;
    title: string;
    htmlSnippet?: string;
    link?: string;
  }[];
}
