import { ArrowLink } from "./components/shared";
import { PrimaryLink } from "./components/shared/Button";
import { SectionHeading } from "./components/shared/SectionHeading";
import { NotFound as NotFoundIcon } from "./components/shared/icons/NotFound";
import { ROUTES } from "./constants";

export default function NotFound() {
  return (
    <div>
      <SectionHeading
        title="Stránka sa nenašla"
        breadcrumbs={["Úvodná stránka", "404"]}
        image="/404.jpg"
      />
      <div className="bg-white pt-20 md:pt-40 pb-24 md:pb-30">
        <div className="flex justify-center items-center px-4">
          <div className="max-w-[658px] w-full">
            <NotFoundIcon />
          </div>
        </div>
        <div className="mt-12">
          <p className="text-2xl text-center font-semibold">
            Ups, stránka sa nenašla.
          </p>
          <p className="text-2xl text-center font-semibold">
            Možno je práve na bezpečnostnom školení.
          </p>
        </div>
        <PrimaryLink
          href={ROUTES.HOME}
          className="mt-12 mx-auto group"
          icon={
            <div className="w-[22px] group-hover:transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">
              <ArrowLink />
            </div>
          }
        >
          Späť do bezpečia
        </PrimaryLink>
      </div>
    </div>
  );
}
