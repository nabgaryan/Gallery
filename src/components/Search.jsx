import React from "react";
import { useParams } from "react-router-dom";

import Container from "./Container";

const Search = () => {
  const params = useParams();
  const term = params.searchInput;

  return (
    <div>
      <h2>{term} Images</h2>
      <Container />
    </div>
  );
};

export default Search;

export const loader = async ({ params }) => {
  let url = params.searchInput;
  const response = await fetch(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${url}&per_page=24&format=json&nojsoncallback=1`
  );
  if (!response.ok) {
    throw new Error();
  }
  return await response.json();
};
