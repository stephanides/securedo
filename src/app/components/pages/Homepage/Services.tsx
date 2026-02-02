"use client";

import { Navigation } from "swiper/modules";
import { Container } from "../../shared/Container";
import { Shape } from "../../shared/Shape";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronRight } from "../../shared/icons/ChevronRight";
import { PrimaryLink } from "../../shared/Button";
import { ArrowLink } from "../../shared";
import { ROUTES } from "@/app/constants";
import { Element } from "react-scroll";

type ServiceData = {
  title: string;
  descriptions: string[];
};

const services: ServiceData[] = [
  {
    title: "Audit a posúdenie <br />kybernetickej bezpečnosti",
    descriptions: [
      "Začíname GAP analýzou.",
      "Slabé miesta zistíme auditom kybernetickej bezpečnosti podľa zákona 69/2018 Z. z.",
      "Posudzuje sa napríklad riadenie informačnej bezpečnosti podľa štandardu ISO 27001 a súlad so Zákonom o kybernetickej bezpečnosti (ZoKB).",
      "<strong>Výsledok:</strong> Auditná správa podľa požiadaviek vybranej regulácie alebo normy. V prípade GAP analýzy je výsledkom správa poukazujúca na rozdiely medzi implementovanou bezpečnosťou v organizácii a požiadavkami zvolenej normy alebo regulácie. O zavedení krokov do praxe rozhodujete vy.",
    ],
  },
  {
    title: "Zavedenie systému bezpečnosti <br />(ISO 27001, ISO 42001, ZoKB)",
    descriptions: [
      "Na základe GAP analýzy navrhneme a implementujeme systém riadenia informačnej bezpečnosti podľa zvolenej regulácie alebo normy.",
      "Pripravíme vás na certifikáciu podľa hlavných štandardov a regulácií. ",
      "<strong>Výsledok:</strong> Funkčný systém, ktorý chráni vaše dáta a spĺňa požiadavky zvolenej normy alebo regulácie.",
    ],
  },
  {
    title: "Outsorcing externých špecialistov na kyberbezpečnosť",
    descriptions: [
      "Nemáte interného bexpečnostného experta? Ponúkame služby interného audítora ISO 27001, ISO 22301, manažéra rizík a manažéra kybernetickej bezpečnosti.",
      "<strong>Výsledok:</strong> Splnenie požiadaviek hlavných štandardov alebo regulácie bez potreby obsadenia požadovanej funkcie.",
    ],
  },
  {
    title: "Školenia a vzdelávanie zamestnancov",
    descriptions: [
      "Školenia IT bezpečnosti pre vedenie, IT aj bežných zamestnancov",
      "<strong>Výsledok:</strong> Školenia prispôsobené na mieru vašej kybernetickej bezpečnosti a povedomie o kyberbezpečnosti.",
    ],
  },
  {
    title: "Konzultácie a poradenstvo",
    descriptions: [
      "Pomôžeme vám zorientovať sa v požiadavkách zákona alebo iných noriem so zameraním na kybernetickú bezpečnosť.",
      "Zanalyzujeme riziká, dopad na biznis, produkt z pohľadu zákazníka.",
      "<strong>Výsledok:</strong> Zistíte, čo naozaj potrebujete riešiť na mieru pre vašu firmu.",
    ],
  },
  // {
  //   title: "Pomoc pri automatizácii kybernetickej bezpečnosti",
  //   descriptions: [],
  // },
];

const Service = ({
  title,
  descriptions,
  index,
}: ServiceData & { index: number }) => (
  <div className="text-light min-h-[200px] h-full group cursor-pointer relative">
    <div
      className="
        absolute inset-0 rounded-30 bg-primary
        transition-transform duration-300 ease-out
        origin-center
        group-hover:rotate-[2.49deg]
      "
    />
    <div className="relative z-1 bg-primary-dark-card px-3 py-6 sm:py-8 sm:px-8 h-full rounded-[18px]">
      <div className="flex gap-8 items-center flex-col sm:flex-row">
        <div className="w-16 h-16 min-w-16 sm:w-20 sm:h-20 sm:min-w-20 flex items-center justify-center bg-[rgba(255,255,255,0.1)] rounded-[8px] group-hover:bg-primary transition">
          <span className="text-3xl sm:text-60 text-white font-semibold">
            {index + 1}.
          </span>
        </div>
        <span
          className="block text-[20px] font-semibold leading-minus-1 text-white text-center sm:text-left"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>

      <ul className="list-disc pl-5 space-y-2 pt-4 sm:pt-8">
        {descriptions.map((desc, i) => (
          <li
            className="pt-1 sm:pt-2 text-text-light text-sm sm:text-lg"
            key={i}
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        ))}
      </ul>
    </div>
  </div>
);

export const Services = () => {
  return (
    <section className="py-25 bg-primary-dark relative overflow-hidden">
      <Element name="sluzbu" id="sluzby">
        <Container>
          <div className="flex items-center justify-between flex-col sm:flex-row gap-6">
            <h2 className="text-white text-4xl md:text-48 2xl:text-60 font-semibold tracking-minus3">
              Naše služby pre vás
            </h2>
            <div className="flex gap-4">
              <button
                className="services-prev relative z-1 cursor-pointer w-13 h-13 rounded-full bg-white flex items-center justify-center hover:bg-primary group transition"
                aria-label="Previous"
              >
                <div className="text-primary transform rotate-180 group-hover:text-white transition">
                  <ChevronRight />
                </div>
              </button>
              <button
                className="services-next relative z-1 cursor-pointer w-13 h-13 rounded-full bg-white flex items-center justify-center hover:bg-primary group transition"
                aria-label="Next"
              >
                <div className="text-primary group-hover:text-white transition">
                  <ChevronRight />
                </div>
              </button>
            </div>
          </div>

          {/* Background shapes */}
          <div className="absolute inset-0 pointer-events-none slow-spin top-0 left-0">
            <Shape />
          </div>

          {/* Swiper */}
          <div className="relative mt-10">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".services-prev",
                nextEl: ".services-next",
              }}
              spaceBetween={16}
              slidesPerView={1.1}
              breakpoints={{
                640: { slidesPerView: 1.3, spaceBetween: 20 },
                1024: { slidesPerView: 2.2, spaceBetween: 24 },
                1536: { slidesPerView: 2.4, spaceBetween: 30 },
              }}
              style={{ overflow: "visible" }}
            >
              {services.map((service, i) => (
                <SwiperSlide key={i}>
                  <Service {...service} index={i} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <PrimaryLink
            href={ROUTES.CONTACT}
            className="mt-18 mx-auto group"
            icon={
              <div className="w-[22px] group-hover:transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">
                <ArrowLink />
              </div>
            }
          >
            Chcem službu IT bezpečnosti
          </PrimaryLink>
        </Container>
      </Element>
    </section>
  );
};
