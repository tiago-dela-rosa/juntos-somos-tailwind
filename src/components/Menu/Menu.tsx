import jsmLogo from "../../assets/jsm-logo.svg";
import MenuItem from "./MenuItem/MenuItem";
import Button from "../shared/Button/Button";
import UserIcon from "../../assets/user-icon.png";

export default function Menu() {
  return (
    <header className="container py-4 sm:px-3 md:px-3 lg:px-0">
      <nav className="flex items-center justify-end">
        <article className="flex items-center mr-auto">
          <img className=" w-[170px] sm:w-[125px] h-11" src={jsmLogo} />
          <ul className="flex ml-9 child:mx-4 menu sm:hidden">
            <MenuItem description="Como funciona" />
            <MenuItem description="Loja Virtual" />
            <MenuItem description="Dúvidas" />
            <MenuItem description="Marcas participantes" />
          </ul>
        </article>
        <div className="justify-end flex flex-row">
          <Button cName="mr-4 sm:hidden" type="primary">
            Quero participar
          </Button>

          <Button cName="flex flex-row" type="transparent">
            <img className="w-6 h-6 mr-2" src={UserIcon} alt="User Icon" />
            <span className="text-gray-5">Entrar</span>
          </Button>
        </div>
      </nav>
    </header>
  );
}
