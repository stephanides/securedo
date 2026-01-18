"use client";

import { ArrowLink } from "../../shared";
import { Container } from "../../shared/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ArrowRight } from "../../shared/icons/ArrowRight";

const certificates = [
  "/m_o_r.jpg",
  "/aaia.jpg",
  "/security+.jpg",
  "/cisa.jpg",
  "/cism.jpg",
  "/aaism.jpeg",
];

const Certificate = ({ src }: { src: string }) => (
  <div className="flex items-center justify-center">
    <img
      src={src}
      alt="Certificate"
      className="h-[120px] w-auto object-contain"
    />
  </div>
);

const Organization = ({
  title,
  description,
  url,
  index,
  total,
}: {
  title: string;
  description: string;
  url: string;
  index: number;
  total: number;
}) => {
  const paddingClass =
    index === 0
      ? "pr-0 sm:pr-10"
      : index === total - 1
      ? "pl-0 sm:pl-10"
      : "px-0 sm:px-10 border-0  sm:border-l sm:border-r border-light";

  return (
    <a href={url} className="group" target="_blank" rel="noreferrer">
      <div className={`${paddingClass}`}>
        <div className="flex items-center justify-between gap-3">
          <p className="text-white text-xl xl:text-2xl tracking-minus-1 font-semibold">
            {title}
          </p>

          <div className="bg-white rounded-full flex items-center justify-center w-[42px] h-[42px] sm:w-[50px] sm:h-[50px]">
            <div className="w-[22px] group-hover:transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">
              <ArrowLink />
            </div>
          </div>
        </div>
        <p className="text-white mt-4">{description}</p>
      </div>
    </a>
  );
};

export const About = () => (
  <section className="pt-16 sm:pt-20 2xl:pt-25 pb-40 bg-primary-dark relative">
    <Container>
      <h2 className="text-4xl sm:text-48 2xl:text-60 text-white tracking-minus-3 font-semibold text-center">
        So Securedo <span className="text-primary whitespace-nowrap">ste v bezpečí</span>
      </h2>
      <div className="grid grid-cols-3 mt-14 hidden lg:grid">
        <Organization
          title="Člen SAPIE"
          description="Máme prístup k aktuálnym informáciám, trendom z inovačného sektora."
          url="https://sapie.sk/associated-members"
          index={0}
          total={3}
        />
        <Organization
          title="Člen kyberkomunity"
          description="Patríme do komunity organizácii a odborníkov na kyberbezpečnosť. Zdieľame navzájom skúsenosti a poznatky a novinky v legislatíve EÚ."
          url="https://www.kyberkomunita.sk/kyberkomunita/"
          index={1}
          total={3}
        />
        <Organization
          title="V zozname auditorov NBÚ"
          description="Spĺňame odborné a technické  požiadavky pre realizáciu auditov podľa zákona č. 69/2018 Z. z. "
          url="https://www.nbu.gov.sk/informativny-zoznam-auditorov/"
          index={2}
          total={3}
        />
      </div>
      <div className="block lg:hidden mt-8 overflow-hidden relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".gains-prev",
            nextEl: ".gains-next",
          }}
          spaceBetween={30}
          slidesPerView={1.2}
          breakpoints={{
            576: { slidesPerView: 1.6, spaceBetween: 20 },
          }}
          style={{ overflow: "visible" }}
        >
          <SwiperSlide>
            <Organization
              title="Člen SAPIE"
              description="Máme prístup k aktuálnym informáciám, trendom z inovačného sektora."
              url="https://sapie.sk/associated-members"
              index={0}
              total={3}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Organization
              title="Člen kyberkomunity"
              description="Patríme do komunity organizácii a odborníkov na kyberbezpečnosť. Zdieľame navzájom skúsenosti a poznatky a novinky v legislatíve EÚ."
              url="https://www.kyberkomunita.sk/kyberkomunita/"
              index={1}
              total={3}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Organization
              title="V zozname auditorov NBÚ"
              description="Spĺňame odborné a technické  požiadavky pre realizáciu auditov podľa zákona č. 69/2018 Z. z. "
              url="https://www.nbu.gov.sk/informativny-zoznam-auditorov/"
              index={2}
              total={3}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full absolute left-0 bottom-0 transform translate-y-1/2 z-3">
        <Container>
          <div className="py-4 sm:py-13 px-8 md:px-30 bg-white rounded-30 overflow-visible relative shadow-[-11px_14px_60px_15px_rgba(0,0,0,0.12)]">
            <button
              className="cert-prev cursor-pointer absolute left-10 top-1/2 -translate-y-1/2 z-10
               w-12 h-12 
               hidden md:flex items-center justify-center
               transition"
              aria-label="Previous"
            >
              <div className="w-5 transform rotate-180">
                <ArrowRight />
              </div>
            </button>
            <button
              className="cert-next cursor-pointer absolute right-10 top-1/2 -translate-y-1/2 z-10
               w-12 h-12 rounded-full 
               hidden md:flex items-center justify-center
              transition"
              aria-label="Next"
            >
              <div className="w-5">
                <ArrowRight />
              </div>
            </button>

            <Swiper
              modules={[Autoplay, Navigation]}
              loop
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".cert-prev",
                nextEl: ".cert-next",
              }}
              spaceBetween={20}
              slidesPerView={3}
              breakpoints={{
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1440: { slidesPerView: 5 },
              }}
              className="overflow-visible"
            >
              {certificates.map((cert, i) => (
                <SwiperSlide
                  key={i}
                  className="flex items-center justify-center"
                >
                  <Certificate src={cert} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </div>
    </Container>
  </section>
);
