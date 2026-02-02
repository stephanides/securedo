import { Envelope } from "../../../components/shared";
import { Container } from "../../../components/shared/Container";
import { Phone } from "../../../components/shared/icons/Phone";
import { SectionHeading } from "../../../components/shared/SectionHeading";
import { Bank } from "../../shared/icons/Bank";
import { Invoice } from "../../shared/icons/Invoice";
import { LogoMinimal } from "../../shared/icons/LogoMinimal";
import { ContactForm } from "./ContactForm";

const ContactCard = ({
  icon,
  title,
  label,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  label: string;
  href: string;
}) => {
  return (
    <a href={href} className="flex-1 h-full group">
      <div className="h-full flex items-center gap-5 sm:gap-12 bg-primary w-full rounded-30 px-6 sm:px-12 xl:px-22 py-7 sm:py-13 text-white group-hover:bg-primary-dark transition-colors">
        <div className="text-primary">{icon}</div>
        <div>
          <h4 className="font-semibold text-lg sm:text-2xl">{title}</h4>
          <p className="text-lg">{label}</p>
        </div>
      </div>
    </a>
  );
};

export const Contact = () => {
  return (
    <>
      <SectionHeading
        title="Ozvite sa nám"
        breadcrumbs={["Úvodná stránka", "Kontaktujte nás"]}
        image="/pocitac.jpg"
      />
      <div className="bg-white">
        <Container>
          <div className="relative pt-12 md:pt-25">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative md:absolute md:-top-23 left-0 w-full">
              <ContactCard
                icon={
                  <div className="w-[43px] lg:w-[62px] text-white">
                    <Phone />
                  </div>
                }
                title="Telefonický kontakt:"
                label="+421 908 511 475"
                href="tel:+421908511475"
              />
              <ContactCard
                icon={
                  <div className="w-[55px] lg:w-[79px] text-white">
                    <Envelope />
                  </div>
                }
                title="Email:"
                label="info@securedo.sk"
                href="mailto:info@securedo.sk"
              />
            </div>
          </div>
          <div className="bg-primary-background rounded-30 py-16 px-6 sm:px-12 xl:px-22 mt-10 flex gap-y-8 gap-x-17 flex-col lg:flex-row">
            <div className="w-full lg:w-[45%]">
              <div className="w-10 text-primary">
                <LogoMinimal />
              </div>
              <div className="mt-5">
                <h6 className="text-2xl font-semibold">Securedo s.r.o.</h6>
                <p className="text-lg">Lab 28 - Nivy Tower</p>
                <p className="text-lg">Mlynské nivy 5, 82109 Bratislava</p>
                <div className="mt-2">
                  <p className="text-[13px]">
                    Spoločnosť je zapísaná v Obchodnom registri Mestského súdu
                    Bratislava III, oddiel: Sro, vložka č. 175179/B. Konateľ:
                    Ing. Peter Pištek, PhD.
                  </p>
                  <p className="text-[13px] mt-2">
                    Partner verejného sektora, vložka č. 45243
                  </p>
                  <p className="text-[13px] mt-2">
                    Zoznam hospodárskych subjektov, registračné číslo:
                    2024/8-PO-G8422
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[2px] h-[194px] bg-primary-darker/20 hidden lg:block" />
            <div className="w-full lg:w-[30%]">
              <div className="w-[38px] text-primary">
                <Invoice />
              </div>
              <div className="mt-5">
                <h6 className="text-2xl font-semibold">Fakturačné údaje</h6>
                <p className="text-lg">IČO: 55 973 167</p>
                <p className="text-lg">DIČ: 2122148281</p>
                <p className="text-lg">IČ DPH: SK2122148281</p>
              </div>
            </div>
            <div className="w-[2px] h-[194px] bg-primary-darker/20 hidden lg:block" />
            <div className="w-full lg:w-[35%]">
              <div className="w-[43px] text-primary">
                <Bank />
              </div>
              <div className="mt-5">
                <h6 className="text-2xl font-semibold">Bankové spojenie</h6>
                <p className="text-lg">IBAN: SK92 1100 0000 0029 4916 3374</p>
                <p className="text-lg">Banka: Tatrabanka, a.s.</p>
                <p className="text-lg">Swift/BIC: TATRSKBX</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </Container>
      </div>
    </>
  );
};
