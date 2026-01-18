"use client";

import Link from "next/link";
import { Envelope, LogoDark, LogoLight } from "../icons";
import { Container } from "../Container";
import { useEffect, useState } from "react";
import { PrimaryLink } from "../Button";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/app/constants";
import { Menu, X } from "lucide-react";
import { scroller } from "react-scroll";

const NavItem = ({
  href,
  children,
  scrolled,
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  scrolled: boolean;
  onClick?: () => void;
}) => (
  <li className="text-white cursor-pointer group">
    {href ? (
      <Link
        href={href}
        onClick={onClick}
        className={`font-medium text-xl md:text-base group-hover:text-primary transition-colors ${
          scrolled ? "text-black" : ""
        }`}
      >
        {children}
      </Link>
    ) : (
      <span
        onClick={onClick}
        className={`font-medium text-xl md:text-base group-hover:text-primary transition-colors ${
          scrolled ? "text-black" : ""
        }`}
      >
        {children}
      </span>
    )}
  </li>
);

const handleScrollToContent = ({
  content,
  isHomePage,
}: {
  content: string;
  isHomePage: boolean;
}) => {
  if (isHomePage) {
    scroller.scrollTo(content, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -120,
    });
  } else {
    window.location.href = `/#${content}`;
  }
};

export const Navigation = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const variant = isHomePage ? "dark" : "light";
  const isScrolledVariant = scrolled || variant === "light";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 border-b border-white/20 ${
          isScrolledVariant ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        <Container>
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? "py-4" : "py-7"
            }`}
          >
            {/* Logo */}
            <Link href={ROUTES.HOME} onClick={() => setMobileOpen(false)}>
              <div className="w-[140px] sm:w-[210px]">
                {variant === "dark" && !scrolled ? <LogoLight /> : <LogoDark />}
              </div>
            </Link>

            {/* DESKTOP NAV (UNCHANGED) */}
            <nav aria-label="Main navigation" className="hidden lg:block">
              <ul className="flex gap-6">
                <NavItem
                  onClick={() =>
                    handleScrollToContent({ content: "sluzby", isHomePage })
                  }
                  scrolled={isScrolledVariant}
                >
                  Služby
                </NavItem>
                <NavItem
                  onClick={() =>
                    handleScrollToContent({ content: "nas-tim", isHomePage })
                  }
                  scrolled={isScrolledVariant}
                >
                  O nás
                </NavItem>
                <NavItem
                  onClick={() =>
                    handleScrollToContent({ content: "faq", isHomePage })
                  }
                  scrolled={isScrolledVariant}
                >
                  Časté otázky
                </NavItem>
              </ul>
            </nav>

            {/* DESKTOP CTA */}
            <div className="hidden lg:block">
              <PrimaryLink
                href={ROUTES.CONTACT}
                icon={
                  <div className="w-5 text-black">
                    <Envelope />
                  </div>
                }
                textClassName="normal-case!"
              >
                Kontaktujte nás
              </PrimaryLink>
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className={`lg:hidden cursor-pointer ${
                isScrolledVariant ? "text-black" : "text-white"
              }`}
            >
              <Menu size={32} className="text-primary" />
            </button>
          </div>
        </Container>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* MOBILE MENU */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-md transform transition-transform duration-300 ease-out bg-primary-dark ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <div className="w-[160px]">
            <LogoLight />
          </div>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X size={28} color="white" />
          </button>
        </div>

        <nav className="px-6 pt-10">
          <ul className="space-y-8">
            <NavItem
              scrolled={false}
              onClick={() => {
                handleScrollToContent({ content: "sluzby", isHomePage });
                setMobileOpen(false);
              }}
            >
              Služby
            </NavItem>
            <NavItem
              scrolled={false}
              onClick={() => {
                handleScrollToContent({ content: "nas-tim", isHomePage });
                setMobileOpen(false);
              }}
            >
              O nás
            </NavItem>
            <NavItem
              scrolled={false}
              onClick={() => {
                handleScrollToContent({ content: "faq", isHomePage });
                setMobileOpen(false);
              }}
            >
              Časté otázky
            </NavItem>
          </ul>

          <div className="mt-12">
            <PrimaryLink
              href={ROUTES.CONTACT}
              onClick={() => setMobileOpen(false)}
              icon={
                <div className="w-5 text-black">
                  <Envelope />
                </div>
              }
              textClassName="normal-case!"
            >
              Kontaktujte nás
            </PrimaryLink>
          </div>
        </nav>
      </aside>
    </>
  );
};
