import { ROUTES } from "@/app/constants";
import { ArrowLink } from "../../shared";
import { PrimaryLink } from "../../shared/Button";
import { Circles } from "../../shared/Circles";
import { Container } from "../../shared/Container";
import { Fade } from "../../shared/Fade";

const InfoItem = ({ text }: { text: string }) => (
  <li className="text-white font-bold text-xl 2xl:text-2xl before:content-['•'] before:text-primary before:mr-3">
    {text}
  </li>
);

export const Heading = () => {
  return (
    <div className="w-full bg-cover bg-no-repeat bg-top-right bg-[url('/securedo-bg-mobile.jpg')] sm:bg-[url('/securedo-bg.jpg')] pt-36 sm:pt-48 2xl:pt-55 pb-24 sm:pb-30 relative">
      <Container className="relative z-2">
        <div className="text-xs sm:text-base 2xl:text-lg text-white bg-white/15 py-3 px-4 rounded-[30px] inline-block">
          Riadenie kybernetickej bezpečnosti pre firmy
        </div>
        <h1 className="text-white font-bold text-4xl sm:text-5xl xl:text-64 2xl:text-90 leading-[48px] sm:leading-[56px] xl:leading-72 2xl:leading-104 mt-8 2xl:mt-12 tracking-minus-3">
          <strong className="text-primary">
            Postaráme sa, aby
            <br /> dáta
          </strong>{" "}
          vašej firmy
          <br /> boli v bezpečí
        </h1>
        <p className="text-white mt-8 2xl:mt-12 text-base sm:text-xl 2xl:text-2xl hidden sm:block">
          Vašej firme pomôžeme odhaliť a odstrániť slabé miesta <br /> v
          kybernetickej bezpečnosti z rôznych pohľadov:
        </p>
        <p className="text-white mt-8 2xl:mt-12 text-base sm:text-xl 2xl:text-2xl block sm:hidden">
          Vašej firme pomôžeme odhaliť a odstrániť slabé miesta v kybernetickej
          bezpečnosti z rôznych pohľadov:
        </p>
        <ul className="flex flex-col sm:flex-row gap-1 sm:gap-10 mt-8">
          <InfoItem text="ako konzultanti" />
          <InfoItem text="ako audítori" />
          <InfoItem text="ako manažéri" />
        </ul>
        <PrimaryLink
          href={ROUTES.CONTACT}
          className="mt-12 2xl:mt-18"
          icon={
            <div className="w-[22px]">
              <ArrowLink />
            </div>
          }
        >
          CHCEM CHRÁNIŤ MOJU FIRMU
        </PrimaryLink>
      </Container>
      <div className="w-full max-w-[864px] absolute right-0 top-20 sm:bottom-0 z-1">
        <Circles />
      </div>

      <div className="block md:hidden absolute bottom-0 left-0 w-full">
        <Fade />
      </div>
    </div>
  );
};
