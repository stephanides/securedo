"use client";

import Link from "next/link";
import { Container } from "../Container";
import { LogoLarge } from "../icons";
import { Pin } from "../icons/Pin";
import { Phone } from "../icons/Phone";
import { EnvelopePrimary } from "../icons/EnvelopePrimary";
import { ROUTES } from "@/app/constants";
import { usePathname } from "next/navigation";
import { handleScrollToContent } from "../Navigation";

const NavItem = ({
  href,
  children,
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <li className="text-white cursor-pointer group">
    {href ? (
      <Link href={href} onClick={onClick}>
        {children}
      </Link>
    ) : (
      <span onClick={onClick}>{children}</span>
    )}
  </li>
);

const Item = ({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}) => {
  return (
    <div className="flex items-center gap-4 flex-col lg:flex-row text-center lg:text-left lg:items-start">
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex-1">
        <h4 className="text-base font-semibold text-white">{title}</h4>
        <p className="text-sm text-white">{content}</p>
      </div>
    </div>
  );
};

export const Footer = () => {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <footer className="bg-primary-dark ">
      <Container>
        <div className="flex justify-between items-center py-12 flex-col lg:flex-row gap-8 lg:gap-0">
          <div className="flex items-center gap-12">
            <div className="w-[116px]">
              <LogoLarge />
            </div>
            <div className="self-stretch w-[1px] bg-primary" />
            <ul className="text-white flex flex-col gap-1 text-sm list-none">
              <NavItem href="/">Hlavná stránka</NavItem>
              <NavItem
                onClick={() =>
                  handleScrollToContent({ content: "sluzby", isHomePage })
                }
              >
                Služby
              </NavItem>
              <NavItem
                onClick={() =>
                  handleScrollToContent({ content: "nas-tim", isHomePage })
                }
              >
                O nás
              </NavItem>
              <NavItem
                onClick={() =>
                  handleScrollToContent({ content: "faq", isHomePage })
                }
              >
                Časté otázky
              </NavItem>
              <NavItem href={ROUTES.CONTACT}>Kontakt</NavItem>
            </ul>
          </div>
          <Item
            icon={<Pin />}
            title="Sídlo spoločnosti:"
            content="Lenardova 1153/2, 85101 Bratislava"
          />
          <Item
            icon={
              <div className="w-[40px] text-primary">
                <Phone />
              </div>
            }
            title="Telefonický kontakt:"
            content="+421 908 511 475"
          />
          <Item
            icon={<EnvelopePrimary />}
            title="Email:"
            content="info@securedo.sk"
          />
        </div>
      </Container>
      <div className="flex justify-center items-center bg-primary-dark-card py-3 gap-2 flex-col sm:flex-row">
        <p className="text-xs text-white">
          © {year} Securedo. Všetky práva vyhradené.
        </p>
        <div className="self-stretch w-[1px] bg-primary" />
        <Link href={ROUTES.PRIVACY_POLICY} className="text-xs text-white">
          Ochrana osobných údajov
        </Link>
      </div>
    </footer>
  );
};
