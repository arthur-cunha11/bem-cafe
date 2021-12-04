import "../styles/banner.scss";

type BannerProps = {
  text: string;
  image: string;
};

export const Banner = ({ text, image }: BannerProps) => {
  return (
    <section
      className="banner"
      style={{
        background: `url(${image}) no-repeat center`,
        backgroundSize: "cover",
      }}
    >
      <h1>{text}</h1>
    </section>
  );
};
