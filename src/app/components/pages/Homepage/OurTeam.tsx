"use client";

import Image from "next/image";
import { Container } from "../../shared/Container";
import { SecondaryLink } from "../../shared/Button";
import { LinkedIn } from "../../shared/icons/LinkedIn";
import { Element } from "react-scroll";

const Person = ({
  photo,
  title,
  position,
  subtitle,
  details,
  linkedIn,
}: {
  photo: string;
  title: string;
  position: string;
  subtitle?: string;
  details: string[];
  linkedIn: string;
}) => (
  <div className="mt-15">
    <div className="flex items-center flex-col lg:flex-row">
      <div className="relative w-full sm:w-295 aspect-square rounded-30 overflow-hidden max-w-full sm:max-w-[295px]">
        <Image
          src={photo}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 295px"
          unoptimized
        />
      </div>
      <SecondaryLink
        href={linkedIn}
        className="mt-5 justify-between flex lg:hidden"
        textClassName="normal-case!"
        icon={
          <div className="w-[22px]">
            <LinkedIn />
          </div>
        }
      >
        Pridajte si ma na LinkedIn
      </SecondaryLink>
      <div className="px-0 sm:px-15 w-full mt-8 lg:mt-0">
        <div className="mt-2">
          <h5 className="text-3xl xl:text-42 font-semibold tracking-minus-3 text-center lg:text-left">
            {title}
          </h5>
          <h6 className="text-xl xl:text-2xl font-bold tracking-minus-3 text-center lg:text-left">
            {position}
          </h6>
          {subtitle && (
            <p className="text-xl xl:text-2xl tracking-minus-3 mt-1 text-center lg:text-left">
              {subtitle}
            </p>
          )}
          <ul className="mt-4 [&>li]:text-light [&>li]:text-base xl:[&>li]:text-lg sm:list-disc pl-0 sm:pl-5 space-y-0.1 [&>li]:text-center lg:[&>li]:text-left list-inside">
            {details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <SecondaryLink
      href={linkedIn}
      className="mt-5 justify-between hidden lg:flex"
      textClassName="normal-case!"
      icon={
        <div className="w-[22px]">
          <LinkedIn />
        </div>
      }
    >
      Pridajte si ma na LinkedIn
    </SecondaryLink>
  </div>
);

export const OurTeam = () => (
  <section className="py-16 sm:py-25 bg-white">
    <Element name="nas-tim" id="nas-tim">
      <Container>
        <h2 className="text-4xl sm:text-5xl md:text-64 xl:text-[80px] 2xl:text-[100px] leading-[48px] md:leading-[64px] xl:leading-[80px] 2xl:leading-[100px] font-semibold text-primary-dark text-center tracking-minus-3">
          Tím odborníkov{" "}
          <span className="text-primary font-semibold">
            pre vašu bezpečnosť
          </span>
        </h2>
        <div className="flex mt-0 sm:mt-15 md:mt-25 border-t-0 border-b-0 sm:border-t sm:border-b border-[rgba(71,74,85,0.30)] flex-col lg:flex-row">
          <div className="w-full py-15 pr-0 lg:pr-8 xl:pr-15 mx-auto max-w-[340px] xl:max-w-[420px] border-r-0 lg:border-r border-[rgba(71,74,85,0.30)]">
            <div className="relative w-full aspect-[363/501] rounded-30 overflow-hidden">
              <Image
                src="/peter-pistek.jpg"
                alt="Peter Pištek"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 362px"
                priority
                unoptimized
              />
            </div>
            <SecondaryLink
              href="/"
              className="mt-8 w-full justify-between"
              textClassName="normal-case!"
              icon={
                <div className="w-[22px]">
                  <LinkedIn />
                </div>
              }
            >
              Pridajte si ma na LinkedIn
            </SecondaryLink>
          </div>
          <div className="pl-0 lg:pl-8 xl:pl-15 p-0 lg:p-15 w-full">
            <div className="px-4 py-[8px] bg-primary-light rounded-30 w-fit block mx-auto lg:mx-0">
              <span className="text-lg tracking-minus-1">Kto sme ?</span>
            </div>
            <div className="mt-2">
              <h5 className="text-3xl xl:text-42 font-semibold tracking-minus-3 text-center lg:text-left">
                Ing. Peter Pištek, PhD.
              </h5>
              <h6 className="text-xl xl:text-2xl font-bold tracking-minus-3 text-center lg:text-left">
                CISA, CISM, AAIA
              </h6>
              <p className="text-xl xl:text-2xl tracking-minus-3 mt-1 text-center lg:text-left">
                Certifikovaný audítor a manažér kybernetickej bezpečnosti
              </p>
              <ul className="mt-4 [&>li]:text-light [&>li]:text-base xl:[&>li]:text-lg sm:list-disc pl-0 md:pl-5 space-y-0.1 [&>li]:text-center lg:[&>li]:text-left list-inside">
                <li>Peter sa dlhé roky venuje kybernetickej bezpečnosti.</li>
                <li>Je interný audítor/implementátor ISO 27001 a 22301.</li>
                <li>Je členom poradného výboru konferencie IS2.</li>
                <li>Svoje skúsenosti zdieľa na odborných podujatiach.</li>
                <li>Má oprávnenie auditovať AI systémy (AAIA od ISACA).</li>
                <li>Expert NBÚ a SNAS pre certifikačnú schému EUCC. </li>
                <li>
                  Na LinkedIn rozoberá rôzne prípady kybernetickej bezpečnosti
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 h-auto sm:h-[148px] w-full rounded-30 overflow-hidden mt-9">
              <div className="flex flex-col justify-center items-center bg-primary-darker sm:bg-primary h-full px-6 min-h-[148px] sm:min-h-0">
                <h6 className="text-3xl xl:text-[42px] text-white font-semibold tracking-minus-3">
                  15+
                </h6>
                <p className="text-sm xl:text-base text-center text-white uppercase">
                  rokov <br /> skúseností
                </p>
              </div>
              <div className="flex flex-col justify-center items-center bg-primary sm:bg-primary-darker h-full px-6">
                <p className="text-sm xl:text-base text-center text-white uppercase">
                  konferencie, školenia{" "}
                  <span className="whitespace-nowrap">a odborné</span> články
                </p>
              </div>
              <div className="flex flex-col justify-center items-center bg-primary h-full px-6 min-h-[148px]">
                <h6 className="text-3xl xl:text-[42px] text-white tracking-minus-3 font-semibold">
                  12
                </h6>
                <p className="text-sm xl:text-base text-center text-white uppercase">
                  rokov pedagóg{" "}
                  <span className="whitespace-nowrap">na stu</span>
                </p>
              </div>
              <div className="flex flex-col justify-center items-center bg-primary-darker h-full px-6">
                <h6 className="text-3xl xl:text-[42px] text-white tracking-minus-3 font-semibold">
                  4
                </h6>
                <p className="text-sm xl:text-base text-center text-white uppercase">
                  roky výskum exkint
                </p>
              </div>
            </div>
          </div>
        </div>
        <Person
          photo="/tatiana-pongracz.jpg"
          title="Ing. Tatiána Pongrácz"
          position="M_o_R Fundation"
          subtitle="Certifikovaná manažérka kybernetickej bezpečnosti"
          details={[
            "Má bohaté skúsenosti z automotive sektora.",
            "Zameriava sa na súlad s požiadavkami ISO 27001 a právnymi normami a TISAX jej nie je cudzí.",
            "Je držiteľkou certifikácie M_o_R Foundation (Management of Risk).",
            "Klientom prináša praktické riešenia v reálnom prostredí výroby aj dodávateľských reťazcov.",
          ]}
          linkedIn="/"
        />
        <Person
          photo="/jakub-kosik.jpg"
          title="Jakub Kosík"
          position="Security +"
          details={[
            "Špecialista na technickú stránku kyberbezpečnosti.",
            "Ako držiteľ Security+ ovláda široké spektrum z kybernetickej bezpečnosti.",
            "Má vedomosti o riadení bezpečnostných operácií, monitorovaní udalostí, reakcii na incidenty.",
            "Chápe základy súladu s reguláciami a riadenia rizík (GRC) pre podporu celkovej bezpečnostnej pozície organizácie.",
          ]}
          linkedIn="/"
        />
      </Container>
    </Element>
  </section>
);
