import { Link } from "react-router-dom";

import "../styles/info-card.scss";

type InfoCardProps = {
  text: string;
  image: string;
};

export const InfoCard = ({ text, image }: InfoCardProps) => {
  return (
    <Link to={`/produtos/${text}`}>
      <div className="info-card" style={{ background: `url(${image})` }}>
        <p>{text}</p>
      </div>
    </Link>
  );
};
