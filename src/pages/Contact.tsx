import { Banner } from "../components/Banner";

import bannerSecondary from "../images/banner-primary.jpg";

import "../styles/contact.scss";

type ContactPropsProps = {
  text: string;
};

export const Contact = ({ text }: ContactPropsProps) => {
  return (
    <main id="contact">
      <Banner text={text} image={bannerSecondary} />
      <div className="container">
        <section></section>
      </div>
    </main>
  );
};
