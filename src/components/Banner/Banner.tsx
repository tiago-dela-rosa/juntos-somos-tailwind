import Button from "../shared/Button/Button";
import jsmLogo from "../../assets/banner-1-desktop.png";
import BannerCode from "./BannerCode/BannerCode";

export default function Banner() {
  return (
    <section className="bg-blue-3 flex flex-1 items-center h-[680px] relative">
      <article className="max-w-[50%] py-0 pr-8 pl-[152px]">
        <h1 className="font-black text-5xl leading-[58px] text-white mb-8">
          Junte pontos e troque por prêmios no nosso programa de relacionamento
        </h1>
        <Button type="primary">Quero participar</Button>
      </article>
      <div className="max-w-[50%] flex items-end flex-1 h-full">
        <img className="object-cover w-full h-full" src={jsmLogo} />
        <BannerCode />
      </div>
    </section>
  );
}
