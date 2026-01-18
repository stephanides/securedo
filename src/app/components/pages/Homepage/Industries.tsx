"use client";

import { ArrowLink } from "../../shared";
import { PrimaryLink } from "../../shared/Button";
import { Container } from "../../shared/Container";
import { ChemickeLatky } from "../../shared/icons/ChemickeLatky";
import { DigitalnaInfrastruktura } from "../../shared/icons/DigitalnaInfrastruktura";
import { DigitalneSluzby } from "../../shared/icons/DigitalneSluzby";
import { DistribuciaPotravin } from "../../shared/icons/DistribuciaPotravin";
import { Doprava } from "../../shared/icons/Doprava";
import { Energetika } from "../../shared/icons/Energetika";
import { Financie } from "../../shared/icons/Financie";
import { Lock } from "../../shared/icons/Lock";
import { OdpadoveHospodarstvo } from "../../shared/icons/OdpadoveHospodarstvo";
import { PostoveSluzby } from "../../shared/icons/PostoveSluzby";
import { RiadenieSluzieb } from "../../shared/icons/RiadenieSluzieb";
import { VerejnaSprava } from "../../shared/icons/VerejneSprava";
import { Vesmir } from "../../shared/icons/Vesmir";
import { VodaAAtmosfera } from "../../shared/icons/VodaAAtmosfera";
import { Vyroba } from "../../shared/icons/Vyroba";
import { Vyskum } from "../../shared/icons/Vyskum";
import { Zdravotnictvo } from "../../shared/icons/Zdravotnictvo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronRight } from "../../shared/icons/ChevronRight";

type IndustryData = {
  icon: React.ReactNode;
  name: string;
};

const industriesData: IndustryData[] = [
  {
    icon: <Energetika />,
    name: "Energetika",
  },
  { icon: <Doprava />, name: "Doprava" },
  { icon: <Financie />, name: "Financie" },
  { icon: <Zdravotnictvo />, name: "Zdravotníctvo" },
  { icon: <VodaAAtmosfera />, name: "Voda a atmosféra" },
  { icon: <DigitalnaInfrastruktura />, name: "Digitálna infraštruktúra" },
  { icon: <RiadenieSluzieb />, name: "Riadenie služieb IKT (medzi podnikmi)" },
  { icon: <VerejnaSprava />, name: "Verejná správa" },
  { icon: <Vesmir />, name: "Vesmír" },
  { icon: <PostoveSluzby />, name: "Poštové a kuriérske služby" },
  { icon: <OdpadoveHospodarstvo />, name: "Odpadové hospodárstvo" },
  { icon: <ChemickeLatky />, name: "Výroba a distribúcia chemických látok" },
  {
    icon: <DistribuciaPotravin />,
    name: "Výroba, spracovanie a distribúcia potravín",
  },
  { icon: <Vyroba />, name: "Výroba" },
  { icon: <DigitalneSluzby />, name: "Poskytovatelia digitálnych služieb" },
  { icon: <Vyskum />, name: "Výskum" },
];

const chunkIndustries = (arr: IndustryData[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const Industry = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
  <div
    className="
      group flex flex-1 items-center gap-5 rounded-[18px] bg-white p-5 min-h-[82px]
      transition-colors duration-300 ease-out
      hover:bg-primary
      cursor-pointer
    "
  >
    <div
      className="
        min-w-[42px]
        text-primary
        transition-colors duration-300 ease-out
        group-hover:text-white
      "
    >
      {icon}
    </div>

    <h6
      className="
        text-lg font-semibold leading-[22px] tracking-minus-1
        text-black
        transition-colors duration-300 ease-out
        group-hover:text-white
        unselectable
      "
    >
      {name}
    </h6>
  </div>
);

export const Industries = () => {
  return (
    <section className="bg-primary-background py-18 sm:py-22 overflow-hidden">
      <Container>
        <h2 className="text-4xl md:text-48 2xl:text-60 text-primary font-bold text-center tracking-tight">
          Potrebuje kyberbezpečnosť vaša firma?
        </h2>
        <p className="text-base sm:text-xl 2xl:text-2xl text-center mt-8 hidden sm:block">
          Ak ste firma nad 50 zamestnancov alebo 10 miliónov €<br /> obratu a
          pôsobíte v týchto odvetviach:
        </p>
        <p className="text-base sm:text-xl 2xl:text-2xl text-center mt-8 block sm:hidden">
          Ak ste firma nad 50 zamestnancov{" "}
          <span className="whitespace-nowrap">
            alebo 10 miliónov € obratu a
          </span>{" "}
          pôsobíte v týchto odvetviach:
        </p>
        <div className="hidden flex-col gap-6 mt-12 xl:flex">
          {chunkIndustries(industriesData, 4).map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-6">
              {row.map((item, itemIndex) => (
                <Industry key={itemIndex} icon={item.icon} name={item.name} />
              ))}
            </div>
          ))}
        </div>
        <div className="block xl:hidden mt-8">
          <div className="flex gap-4 items-center justify-center mb-6">
            <button
              className="industries-prev relative z-1 cursor-pointer w-13 h-13 rounded-full bg-white flex items-center justify-center hover:bg-primary group transition"
              aria-label="Previous"
            >
              <div className="text-primary transform rotate-180 group-hover:text-white transition">
                <ChevronRight />
              </div>
            </button>
            <button
              className="industries-next relative z-1 cursor-pointer w-13 h-13 rounded-full bg-white flex items-center justify-center hover:bg-primary group transition"
              aria-label="Next"
            >
              <div className="text-primary group-hover:text-white transition">
                <ChevronRight />
              </div>
            </button>
          </div>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".industries-prev",
              nextEl: ".industries-next",
            }}
            spaceBetween={16}
            slidesPerView={1.2}
            breakpoints={{
              576: { slidesPerView: 1.5, spaceBetween: 24 },
              768: { slidesPerView: 2.3, spaceBetween: 20 },
            }}
            style={{ overflow: "visible" }}
          >
            {chunkIndustries(industriesData, 4).map((row, rowIndex) => (
              <SwiperSlide key={rowIndex}>
                <div key={rowIndex} className="flex flex-col gap-4 sm:gap-6">
                  {row.map((item, itemIndex) => (
                    <Industry
                      key={itemIndex}
                      icon={item.icon}
                      name={item.name}
                    />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <p className="text-xl 2xl:text-2xl mt-12 text-center">
          ... spadáte pod zákon č. 69/2018 Z. z o kybernetickej bezpečnosti a
          máte povinnosť sa riadiť jeho požiadavkami.
        </p>
        <PrimaryLink
          href="https://nis2.nbu.gov.sk/indikativna-pomocka-na-urcenie-subjektu-ako-poskytovatela-zakladnej-sluzby/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-18 mx-auto group"
          icon={
            <div className="w-[22px] group-hover:transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">
              <ArrowLink />
            </div>
          }
        >
          Zistiť, či spadám pod zákonnú povinnosť
        </PrimaryLink>
        <div className="bg-primary-dark px-4 sm:px-10 md:px-25 py-16 sm:py-25 rounded-[50px] mt-12 sm:mt-25 flex flex-col-reverse lg:flex-row justify-between items-center">
          <div className="max-w-[712px]">
            <h2 className="text-primary text-3xl sm:text-5xl xl:text-60 font-bold tracking-tight leading-[48px] sm:leading-64 mt-10 lg:mt-0 text-center lg:text-left">
              Čo ak sa ma zákon{" "}
              <span className="whitespace-nowrap">č. 69/2018 Z.</span> netýka?
            </h2>
            <p className="text-xl 2xl:text-2xl text-white mt-8 text-center lg:text-left">
              V tom prípade nemáte zákonnú povinnosť splniť požiadavky
              kyberbezpečnosti uvedené vyššie. Avšak ochrana dát je a bude
              dôležitá pre každú firmu. Bezpečné digitálne prostredie tvorí
              pevnejšie základy vášho podnikania.
            </p>
          </div>
          <div className="w-[150px] md:w-[200px] lg:w-[120px] xl:w-[210px] lg:min-w-[120px] xl:min-w-[210px]">
            <Lock />
          </div>
        </div>
      </Container>
    </section>
  );
};
