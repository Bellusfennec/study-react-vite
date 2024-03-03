import { Navigate, useParams } from "react-router-dom";
import episodeList from "../../../mock/episode.json";
import CardWrapper from "../../../components/common/wrappers/CardWrapper";

const EpisodeItem = () => {
  const { episodeId } = useParams();
  const item = episodeList.find((f) => episodeId && f.id === +episodeId);

  if (!item) return <Navigate to="/episode" />;

  return (
    <CardWrapper>
      <h1>{item.name}</h1>
      <p>id: {item.id}</p>
      <p>{item.air_date}</p>
      <p>{item.created}</p>
      <p>{item.episode}</p>
    </CardWrapper>
  );
};

export default EpisodeItem;
