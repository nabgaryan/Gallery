import { useLoaderData, useNavigation } from "react-router-dom";
import Gallery from "./Gallery";
import Loader from "./Loader";

const Container = () => {
  const navigation = useNavigation();
  const data = useLoaderData();
  const images = data.photos.photo;

  return (
    <div className="photo-container">
      {navigation.state === "loading" ? <Loader /> : <Gallery data={images} />}
    </div>
  );
};

export default Container;
