import { About } from "./About";
import { FAQ } from "./Faq";
import { Gains } from "./Gains";
import { Heading } from "./Heading";
import { Industries } from "./Industries";
import { Media } from "./Media";
import { OurTeam } from "./OurTeam";
import { Services } from "./Services";

export const Homepage = () => {
  return (
    <section>
      <Heading />
      <Industries />
      <Gains />
      <Services />
      <OurTeam />
      <About />
      <Media />
      <FAQ />
    </section>
  );
};
