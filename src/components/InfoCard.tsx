import { Link } from "react-router-dom";

import "../styles/info-card.scss";

type InfoCardProps = {
  text: string;
  image: string;
};

export const InfoCard = ({ text, image }: InfoCardProps) => {
  const handleClick = () => {
    let element;
    const a = document.getElementsByTagName("a");

    for (let i = 0; i < a.length; i++) {
      a[i].classList.remove("active");
      if (a[i].text === "PRODUTOS") {
        element = a[i];
      }
    }

    element?.classList.add("active");
  };

  return (
    <Link onClick={handleClick} to={`/produtos/${text}`}>
      <div
        className="info-card"
        style={{ background: `url(${image}) center center / cover no-repeat` }}
      >
        <p>{text}</p>
      </div>
    </Link>
  );
};
