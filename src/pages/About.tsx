import { Banner } from "../components/Banner";

import bannerSecondary from "../images/banner-primary.jpg";

import "../styles/about.scss";

type AboutProps = {
  text: string;
};

export const About = ({ text }: AboutProps) => {
  return (
    <main id="about">
      <Banner text={text} image={bannerSecondary} />
      <div className="container">
        <section></section>
      </div>
    </main>
  );
};
