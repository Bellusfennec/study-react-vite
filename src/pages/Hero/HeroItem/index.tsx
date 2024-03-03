import { Navigate, useParams } from "react-router-dom";
import heroList from "../../../mock/characters.json";
import CardWrapper from "../../../components/common/wrappers/CardWrapper";

const HeroItem = () => {
  const { heroId } = useParams();
  const item = heroList.find((f) => heroId && f.id === +heroId);

  if (!item) return <Navigate to="/hero" />;

  return (
    <CardWrapper>
      <h1>{item.name}</h1>
      <p>id: {item.id}</p>
      <p>Статус: {item.status}</p>
      <p>{item.gender}</p>
      <p>{item.image}</p>
      <p>{item.species}</p>
      <p>{item.created}</p>
      <p>{item.type}</p>
    </CardWrapper>
  );
};

export default HeroItem;
