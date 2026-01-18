import Link from "next/link";
import { Fade } from "../Fade";
import { DoubleArrow } from "../icons/DoubleArrow";

export const SectionHeading = ({
  image,
  title,
  breadcrumbs,
}: {
  image: React.ReactNode;
  title: string;
  breadcrumbs: string[];
}) => {
  return (
    <div
      className="relative bg-cover bg-center min-h-[360px] md:min-h-[600px] flex items-center justify-center mt-26"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="relative z-10 text-center text-white mt-30 px-4 lg:px-0">
        <h1 className="text-4xl sm:text-5xl md:text-64 lg:text-90 font-bold tracking-minus-3">{title}</h1>
        <Link href="/" passHref>
          <nav
            className="mb-4 rounded-[100px] border border-white/50 inline-flex px-6 py-3 cursor-pointer mt-7"
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-3 text-xs sm:text-base">
                {crumb}
                {index < breadcrumbs.length - 1 && (
                  <div className="w-[11px] mr-3">
                    <DoubleArrow />
                  </div>
                )}
              </span>
            ))}
          </nav>
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full">
        <Fade />
      </div>
    </div>
  );
};
