import { Link } from "react-router-dom";

import { underlineText } from "../utils/UnderlineMenuOptions";

import "../styles/info-card.scss";

type InfoCardProps = {
  text: string;
  image: string;
};

export const InfoCard = ({ text, image }: InfoCardProps) => {
  return (
    <Link onClick={() => underlineText("PRODUTOS")} to={`/produtos/${text}`}>
      <div
        className="info-card"
        style={{ background: `url(${image}) center center / cover no-repeat` }}
      >
        <p>{text}</p>
      </div>
    </Link>
  );
};
