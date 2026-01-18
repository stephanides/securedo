"use client";

import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../../shared/Container";
import { DotBackground as OriginalDotBackground } from "../../shared/DotBackground";
import { Element } from "react-scroll";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

const FAQS: FAQItem[] = [
  {
    id: "1",
    question: "Načo je to dobré? Nie sú to zbytočné papiere?",
    answer:
      "Audit podľa ZoKB: Nie. Audit je nezávislé posúdenie kyberbezpečnosti vašej firmy. Externý odborník vidí veci, ktoré si interne často ani nevšimnete – jednoducho nemá „autorskú slepotu“. Mnohí zákazníci a obchodní partneri dnes dokonca vyžadujú nezávislý audit ešte pred spoluprácou, alebo počas nej. Chcú mať istotu, že ich dáta sú u vás v bezpečí.",
  },
  {
    id: "2",
    question: "Čo všetko to bude obnášať?",
    answer:
      "V prvom rade záväzok vedenia, že kyberbezpečnosť berie vážne. Treba určiť zodpovedné osoby, čas a zdroje. Kyberbezpečnosť nie je jednorazový projekt, ale dlhodobý proces. Tak ako sa vyvíja váš biznis, menia sa aj hrozby. Aby váš biznis ostal v bezpečí, treba sa im prispôsobovať.",
  },
  {
    id: "3",
    question: "Potrebujem nutne implementovať všetky kroky z auditu?",
    answer:
      "Nie, nie je to nutné. Každý nález si treba prejsť, určiť priority a podľa nich naplánovať kroky. Pri prvom audite je bežné, že niektoré odporúčania by mohli presiahnuť váš rozpočet – preto je dôležitá prioritizácia. Niektoré riziká môžete aj vedome akceptovať, ak by ich odstránenie bolo neprimerané alebo v rozpore s vašou firemnou kultúrou. Dôležité je o rizikách vedieť a rozhodnúť sa informovane, ako s nimi naložiť.",
  },
];

const DotBackground = memo(() => (
  <div className="absolute left-0 top-0 h-full w-full max-w-[750px] overflow-hidden slow-spin pointer-events-none">
    <OriginalDotBackground />
  </div>
));
DotBackground.displayName = "DotBackground";

export const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  return (
    <Element name="faq" id="faq">
      <section className="relative bg-primary-background py-15 md:py-25 overflow-hidden">
        {/* Heavy spinning dots are now memoized and won't re-render */}
        <DotBackground />

        <Container>
          <div className="flex flex-wrap md:flex-nowrap flex-col lg:flex-row">
            {/* LEFT */}
            <div className="min-w-0 sm:min-w-[500px] md:pr-16 mb-12 md:mb-0">
              <span className="inline-block mb-6 rounded-full bg-primary-light px-4 py-2 text-lg">
                FAQ
              </span>
              <h2 className="text-4xl sm:text-48 font-bold leading-tight">
                Časté otázky <br /> od vás
              </h2>
            </div>

            {/* RIGHT */}
            <div className="relative flex-1 mt-2 sm:mt-8 lg:mt-0">
              {/* dashed vertical line */}
              <div className="absolute left-[6px] top-0 h-full border-l border-dashed border-slate-300" />

              <div className="space-y-12">
                {FAQS.map((item) => {
                  const open = openId === item.id;

                  return (
                    <div key={item.id} className="relative pl-10">
                      {/* Dot */}
                      <div
                        className={`absolute left-[6px] top-[2px] z-10 flex h-[30px] w-[30px] -translate-x-1/2 items-center justify-center rounded-full transition-colors ${
                          open
                            ? "bg-[rgba(13,206,218,0.15)]"
                            : "bg-primary-background"
                        }`}
                      >
                        <span
                          className={`h-3 w-3 rounded-full transition-colors ${
                            open ? "bg-teal-400" : "bg-slate-900"
                          }`}
                        />
                      </div>

                      {/* Question */}
                      <button
                        onClick={() => setOpenId(open ? null : item.id)}
                        className="w-full text-left text-2xl font-semibold tracking-minus-1 cursor-pointer"
                      >
                        {item.question}
                      </button>

                      {/* Animated answer */}
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <p className="mt-4 text-lg leading-relaxed">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Element>
  );
};
