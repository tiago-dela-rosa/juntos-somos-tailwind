import Qrcode from "../../../assets/qr-code.svg";

export default function BannerCode() {
  return (
    <section className="bg-orange-1 bottom-20 right-32 p-[14px] h-[250px] w-[170px] rounded-xl absolute">
      <img className="rounded-lg" src={Qrcode} alt="QR Code" />
      <p className=" mt-2 mb-[10px] font-bold text-white">
        aponte a câmera do seu celular e baixe nosso app
      </p>
    </section>
  );
}
