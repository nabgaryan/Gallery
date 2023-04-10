import Container from "./Container";

const Item = ({ searchTerm }) => {
  return (
    <div>
      <h2>{searchTerm} Pictures</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Item;

export const loader = async ({ request }) => {
  const url = request.url.split("/").at(-1);
  const response = await fetch(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${url}&per_page=24&format=json&nojsoncallback=1`
  );
  if (!response.ok) {
    throw new Error();
  }
  return await response.json();
 
};
