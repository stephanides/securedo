import { Metadata } from "next";
import { Container } from "../components/shared/Container";
import { SectionHeading } from "../components/shared/SectionHeading";
import { SEO_IMAGE } from "../constants";

const BASE_URL = process.env.BASE_URL || "https://securedo.sk";

export const metadata: Metadata = {
  title: "Zásady ochrany osobných údajov | Securedo",
  description: "Ozvite sa nám, aby dáta vašej firmy boli v bezpečí.",
  openGraph: {
    title: "Zásady ochrany osobných údajov | Securedo",
    description: "Ozvite sa nám, aby dáta vašej firmy boli v bezpečí.",
    url: `${BASE_URL}/ochrana-osobnych-udajov`,
    type: "website",
    images: [
      {
        url: SEO_IMAGE,
        width: 1200,
        height: 630,
        alt: "Securedo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zásady ochrany osobných údajov | Securedo",
    description: "Ozvite sa nám, aby dáta vašej firmy boli v bezpečí.",
    images: [SEO_IMAGE],
  },
};


const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2 className={`text-xl mb-1 sm:text-2xl font-bold text-text-dark ${className}`}>
    {children}
  </h2>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base sm:text-lg text-text-dark mb-5">{children}</p>
);

export default function PrivacyPolicyPage() {
  return (
    <div>
      <SectionHeading
        title="Zásady ochrany osobných údajov"
        breadcrumbs={["Úvodná stránka", "Zásady ochrany osobných údajov"]}
        image="/pocitac.jpg"
      />
      <div className="bg-white py-16 sm:py-25">
        <Container>
          <Title>Informácie k spracovaniu osobných dát</Title>
          <Paragraph>
            Firma Securedo, s.r.o., Lenardova 1153/2, 851 01 Bratislava,
            Slovensko dbá na ochranu osobných údajov, ktoré nám odovzdávate. Je
            dôležité, aby ste vedeli, že osobné údaje, ktoré nám poskytujete,
            spracovávame zodpovedne, transparentne a v súlade s Nariadením
            Európskeho parlamentu a Rady (EÚ) 2016/679 a zákona o ochrane
            osobných údajov 18/2018. Máte nárok požiadať o informácie o
            evidovaných osobných údajoch, ich opravu, či výmaz, ak sú udelené na
            základe vami udeleného súhlasu. Ak dochádza k automatizovanému
            spracovaniu, máte právo na prenositeľnosť údajov a nebyť predmetom
            rozhodnutia založeného výhradne na tomto rozhodovaní. V prípade
            akýchkoľvek otázok a žiadostí týkajúcich sa spracovania vašich
            osobných údajov sa na nás môžete obrátiť písomne na adrese sídla
            spoločnosti.
          </Paragraph>
          <Title>Zabezpečenie vašich osobných dát</Title>
          <Paragraph>
            Securedo, s.r.o. dbá na bezpečnosť osobných dát, ktoré nám
            odovzdávate. Prijali sme vhodné technické a organizačné opatrenia,
            aby sme vaše dáta dostatočne chránili s ohľadom na závažnosť ich
            spracovania. K vašim osobným údajom, ktoré sme od vás získali, nemá
            prístup žiadna neoprávnená osoba a neodovzdávame ich bez vášho
            súhlasu ďalším subjektom na ďalšie spracovanie, ak to nevyžaduje
            zákon, alebo v prípade ochrany našich právnych záujmov.
          </Paragraph>
          <Title>Právo na informácie</Title>
          <Paragraph>
            Vaším právom je požiadať nás o informácie, aké osobné údaje a v akom
            rozsahu a na aký účel o vás spracovávame. Tieto informácie vám
            poskytneme zadarmo v lehote najneskôr 30 dní, v mimoriadnych
            situáciách potom najneskôr v lehote 90 dní. O predĺžení lehoty v
            mimoriadnych prípadoch vás budeme včas informovať. Ak budete
            požadovať oznámenie informácií, ktoré o vás evidujeme, budeme najprv
            potrebovať overiť, že ste skutočne osoba, ktorej patrí táto
            informácia. Vo vašej žiadosti teda uveďte dostatočnú identifikáciu
            vašej osoby. V prípade potreby máme právo vyžiadať si doplňujúce
            informácie na vašu identifikáciu, než vám poskytneme osobné údaje,
            ktoré spracovávame k vašej osobe.
          </Paragraph>
          <Paragraph>
            Naším právom potom je odôvodnene zamietnuť požiadavky na informácie,
            ktoré sú bezdôvodné či sa neprimerane opakujú, prípadne ich získanie
            vyžaduje neprimerané úsilie, alebo by boli ťažko získateľné (typicky
            zo záložných systémov, archiválií a pod.).
          </Paragraph>
          <Title>Právo na prenositeľnosť údajov</Title>
          <Paragraph>
            Máte právo získať osobné údaje, ktoré o vás evidujeme, v
            štruktúrovanom, bežne používanom a strojovo čitateľnom formáte. Na
            základe vašej žiadosti môžu byť tieto dáta odovzdané inému
            prevádzkovateľovi.
          </Paragraph>
          <Title>Aktualizácia údajov, právo na opravu</Title>
          <Paragraph>
            Pretože sa môžu osobné údaje v priebehu času meniť (napríklad zmena
            Priezviska), budeme radi, ak nás informujete, že u vás nastala
            nejaká zmena, tak aby sme vaše osobné údaje mali aktuálne a
            nedochádzalo k prípadným omylom. Podanie informácie o zmene údajov
            je potrebné na to, aby sme mohli riadne vykonávať svoju činnosť
            prevádzkovateľa. S tým súvisí aj vaše právo na opravu osobných
            údajov, ktoré o vás evidujeme. Ak zistíte, že naše údaje už nie sú
            aktuálne, máte právo požadovať ich opravu.
          </Paragraph>
          <Title>Námietky</Title>
          <Paragraph>
            Ak sa domnievate, že vaše osobné údaje nespracovávame v súlade s
            platnou legislatívou ČR a Únie, máte právo vzniesť námietku a my
            následne preveríme oprávnenosť vašej požiadavky. V okamihu podania
            námietky bude spracovanie vašich osobných údajov obmedzené, dokiaľ
            nebude overené, či je námietka oprávnená. Informujeme vás, že vaším
            právom je obrátiť sa tiež s námietkou proti spracovávaným osobným
            údajom, ktoré o vás spracovávame, na príslušný dozorný úrad na
            Ochranu Osobných Údajov na adrese:
          </Paragraph>
          <Title>Úrad na ochranu osobných údajov</Title>
          <Title>Hraničná 12</Title>
          <Title>820 07 Bratislava 27</Title>
          <Title className="mb-5">Slovenská republika</Title>
          <Title>Právo na obmedzenie spracovania</Title>
          <Paragraph>
            Máte právo na obmedzenie spracovania vašich osobných údajov v
            prípade, že sa domnievate, že takto evidované nie sú presné,
            prípadne ich spracovávame protiprávne, a ďalej ak sa domnievate, že
            tieto údaje už nepotrebujeme na účely ich spracovania.
          </Paragraph>
          <Title>Právo na výmaz</Title>
          <Paragraph>
            Ak ste nám niekedy udelili súhlas so spracovaním svojich osobných
            údajov (napríklad e-mailovú adresu v rámci zasielaného newsletteru),
            máte právo ho kedykoľvek odvolať a my údaje, ktoré spracovávame
            výhradne na základe vášho súhlasu, máme povinnosť vymazať. Právo na
            výmaz sa nevzťahuje na spracovávané údaje v rámci povinnosti plnenia
            zmluvy, zákonných dôvodov či oprávnených záujmov. Ak sú niektoré
            vaše dáta uchovávané v záložných systémoch, ktoré automatizovane
            zaisťujú odolnosť všetkých našich systémov a plnia funkciu ochrany
            straty dát pre prípady havárií, nie je v našich silách vymazať tieto
            dáta aj zo záložných systémov a nezriedka to nie je ani technicky
            uskutočniteľné. Ale tieto dáta nie sú ďalej nijako aktívne
            spracovávané a nebudú slúžiť na ďalšie účely spracovania.
          </Paragraph>
          <Title>Kam sa môžete obrátiť</Title>
          <Paragraph>
            So svojimi otázkami na ochranu osobných údajov sa môžete obrátiť na
            e-mail:{" "}
            <a href="mailto:info@securedo.sk" className="font-bold">
              info@securedo.sk
            </a>{" "}
            alebo na sídlo našej spoločnosti:
          </Paragraph>
          <p className="text-2xl text-text-dark">Securedo, s.r.o.</p>
          <p className="text-2xl text-text-dark">Lenardova 1153/2</p>
          <p className="text-2xl text-text-dark">85101 Bratislava</p>
          <p className="text-2xl text-text-dark">Slovensko</p>
          <Title className="mt-5">Webové stránky – súbory protokolov</Title>
          <Paragraph>
            Ak pristúpite na naše webové stránky a prezeráte si ich,
            spracovávame nasledujúce protokolové súbory a ukladáme ich na našich
            serveroch. Medzi informácie, ktoré ukladáme patrí:
          </Paragraph>
          <ul className="my-5 list-disc list-inside text-lg text-text-dark">
            <li>Vaša Adresa IP</li>
            <li>Otváraná stránka nášho webu</li>
            <li>Kód odpovede http</li>
            <li>Identifikácia vášho prehliadača</li>
          </ul>
          <Paragraph>
            Tieto informácie spracovávame po dobu maximálne jedného roka a len
            na účely našej právnej ochrany.
          </Paragraph>
          <Title className="mt-5">Súbory cookie</Title>
          <Paragraph>
            Keď navštívite naše webové stránky, ste informovaní, že využívame
            technológie na zhromažďovanie a ukladanie informácií pomocou súborov
            cookie do vášho zariadenia. Súbory cookie sú malé textové súbory,
            ktoré nikam neodosielame, tieto súbory môžete z prehliadača
            odstrániť, alebo ich využitie zakázať úplne. Súbory cookie
            nezhromažďujú žiadne vaše osobné údaje, bez týchto súborov však
            nedokážeme zaistiť plnohodnotnú funkčnosť webových stránok.
          </Paragraph>
          <Title>Analýza a štatistiky</Title>
          <Paragraph>
            Webové stránky monitorujeme a analyzujeme pomocou analytických
            služieb. Žiadne z údajov, ktoré pomocou tejto služby analyzujeme nie
            sú vašimi osobnými údajmi. Pomocou tejto služby zisťujeme
            návštevnosť a geografické údaje, informácie o prehliadači a
            operačnom systéme, z ktorého na naše webové stránky pristupujete.
            Všetky tieto informácie využívame na marketingové účely, na účely
            ďalšieho zlepšovania webových stránok a obsahu a tiež na účely
            právnej ochrany.
          </Paragraph>
          <p className="text-lg text-text-dark font-bold">
            Zásady ochrany osobných údajov sú pravidelne revidované a môžu sa v
            prípade potreby aktualizovať. Posledná zmena týchto zásad ochrany
            osobných údajov prebehla dňa streda, 23. mája, 2018.
          </p>
        </Container>
      </div>
    </div>
  );
}
