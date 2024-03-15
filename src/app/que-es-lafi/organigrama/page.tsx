import Image from "next/image";
import HeaderNav from "../../_components/navbar";

export default function Page() {
  return (
    <main>
      <Image src={"/assets/img/organigrama.png"} alt="Organigrama de l'AFI" />
    </main>
  );
}
