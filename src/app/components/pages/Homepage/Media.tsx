import Image from "next/image";
import { Container } from "../../shared/Container";
import { ArrowRight } from "../../shared/icons/ArrowRight";
import { Play } from "../../shared/icons/Play";
import { PrimaryLink } from "../../shared/Button";
import { ArrowLink } from "../../shared";
import { ROUTES } from "@/app/constants";

const VideoItem = ({
  image,
  url,
  title,
}: {
  image: string;
  url: string;
  title: string;
}) => (
  <a href={url} className="block w-full group" target="_blank" rel="noreferrer">
    <div className="relative">
      {/* Image wrapper */}
      <div className="relative w-full aspect-[360/220] xl:aspect-[420/542] rounded-[20px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute right-1/2 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-[100px] group-hover:scale-110 transition">
          <Play />
        </div>
      </div>

      {/* Content */}
      <div className="mt-10 flex items-end">
        <h3 className="text-2xl leading-[32px] font-semibold tracking-minus-1">
          <span dangerouslySetInnerHTML={{ __html: title }} />
          <span className="w-[22px] inline-block ml-3 relative top-1">
            <ArrowRight />
          </span>
        </h3>
      </div>
    </div>
  </a>
);

const BlogItem = ({
  image,
  title,
  url,
}: {
  image: string;
  title: string;
  url: string;
}) => (
  <a
    href={url}
    className="block mb-10 last:mb-0"
    target="_blank"
    rel="noreferrer"
  >
    <div>
      {/* Image wrapper */}
      <div className="relative w-full aspect-[296/199] rounded-20 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="mt-5">
        <h3 className="text-2xl leading-[32px] font-semibold tracking-minus-1">
          {title}
        </h3>
        <p className="underline mt-4">prečítať článok</p>
      </div>
    </div>
  </a>
);

export const Media = () => (
  <section className="pt-40 pb-24 2xl:pb-40 relative bg-white">
    <Container>
      <h2 className="text-4xl sm:text-5xl xl:text-60 text-primary tracking-minus-3 font-semibold text-center">
        Zmienky v médiách
      </h2>
      <div className="block md:flex gap-14 mt-20">
        <div className="w-full max-w-full md:max-w-[296px]">
          <BlogItem
            title="Podvody v online priestore"
            image="/podvody-v-online-priestore.jpg"
            url="https://mykysuce.sme.sk/c/23541733/utoky-cez-inteligentne-hracky-aj-fotky-nahych-deti-ake-podvody-na-nas-cihaju-v-online-priestore.html"
          />
          <BlogItem
            title="Internet je ako veľké mesto. Do určitých štvrtí sa nechodí.."
            image="/internet-je-ako-velke-mesto.jpg"
            url="https://soda.o2.sk/bezpecnost-na-internete/odbornik-na-kyberbezpecnost-peter-pistek-internet-je-ako-velke-mesto-do-urcitych-stvrti-sa-nechodi-pretoze-viete-ze-riskujete/"
          />
        </div>
        <div className="self-stretch w-[1px] bg-light" />
        <div className="w-full flex gap-12 flex-col xl:flex-row mt-10 md:mt-0">
          <VideoItem
            image="/o-mytoch-a-pravdach-spojenych-s-ai.jpg"
            title="O mýtoch a pravdách <br /> spojených s AI"
            url="https://www.youtube.com/watch?v=WM_2lVCbA0M"
          />
          <VideoItem
            image="/sprievodca-digitalnou-bezpecnostou.jpg"
            title="Sprievodca digitálnou <br /> bezpečnosťou"
            url="https://www.youtube.com/watch?v=RlK6zAvLpG0"
          />
        </div>
      </div>
      <PrimaryLink
        href={ROUTES.CONTACT}
        className="mt-18 mx-auto group"
        icon={
          <div className="w-[22px] group-hover:transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">
            <ArrowLink />
          </div>
        }
      >
        Chcem službu IT bezpečnosti
      </PrimaryLink>
    </Container>
  </section>
);
