"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "../../shared/Container";
import { Coins } from "../../shared/icons/Coins";
import { Like } from "../../shared/icons/Like";
import { LockSmall } from "../../shared/icons/LockSmall";
import { Navigation } from "swiper/modules";

const gainData = [
  {
    icon: <Coins />,
    title: "Podporíte svoj biznis",
    description:
      "Dobre nastavená kyberbezpečnosť chráni procesy a tým podporuje rast firmy.",
  },
  {
    icon: <Like />,
    title: "Získate konkurenčnú výhodu",
    description:
      "Väčšie certifikované firmy si vyberajú certifikovaných dodávateľov, kde sú ich dáta v bezpečí.",
    className: "top-12",
  },
  {
    icon: <LockSmall />,
    title: "Ochránite cenné dáta",
    description:
      "Tak ako potrebujete účtovníka, potrebujete aj odborníka na kybernetickú bezpečnosť",
  },
];

const Gain = ({
  icon,
  title,
  description,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}) => (
  <div className={`relative group cursor-pointer ${className}`}>
    {/* Rotated background */}
    <div
      className="
        absolute inset-0 rounded-30 bg-[#D8FBFD]
        transition-transform duration-300 ease-out
        origin-center
        group-hover:rotate-[2.49deg]
      "
    />

    {/* Main card */}
    <div
      className="
        relative flex flex-col items-center text-center
        bg-primary-background rounded-30 px-8 py-13
        transition-transform duration-300 ease-out
      "
    >
      <div className="w-25 h-25 flex items-center justify-center bg-white rounded-[10px] mb-8">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-5 tracking-minus-1">{title}</h3>
      <p className="text-base text-light">{description}</p>
    </div>
  </div>
);

export const Gains = () => (
  <section className="pb-25 pt-20 2xl:pt-25 bg-white overflow-hidden">
    <Container>
      <h2 className="text-4xl sm:text-48 2xl:text-60 text-primary font-bold text-center tracking-tight">
        Čo tým získate:
      </h2>
      <div className="grid-cols-3 gap-10 mt-10 items-start hidden lg:grid">
        {gainData.map((item, index) => (
          <Gain
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            className={item.className}
          />
        ))}
      </div>
      <div className="block lg:hidden mt-8">
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
          {gainData.map((item, index) => (
            <SwiperSlide key={index}>
              <Gain
                icon={item.icon}
                title={item.title}
                description={item.description}
                className={item.className}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  </section>
);
