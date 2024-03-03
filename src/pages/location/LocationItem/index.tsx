import { Navigate, useParams } from "react-router-dom";
import locationList from "../../../mock/location.json";
import CardWrapper from "../../../components/common/wrappers/CardWrapper";

const LocationItem = () => {
  const { locationId } = useParams();
  const item = locationList.find((f) => locationId && f.id === +locationId);

  if (!item) return <Navigate to="/location" />;

  return (
    <CardWrapper>
      <h1>{item.name}</h1>
      <p>id: {item.id}</p>
      <p>{item.dimension}</p>
      <p>{item.created}</p>
      <p>{item.type}</p>
    </CardWrapper>
  );
};

export default LocationItem;
