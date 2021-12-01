import { Link } from "react-router-dom";

import "../styles/infoCard.scss";

type InfoCardProps = {
  text: string;
  image: string;
};

export const InfoCard = (props: InfoCardProps) => {
  return (
    <Link to={`/produtos/${props.text}`}>
      <div className="info-card" style={{ background: `url(${props.image})` }}>
        <p>{props.text}</p>
      </div>
    </Link>
  );
};
