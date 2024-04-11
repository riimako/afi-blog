import Image from "next/image";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "../lib/api";
import Twitter from "./_components/twitter";
import Card from "./_components/card";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <>
      <Intro />
      <section className="flex mt-5 mb-5">
        <div className="w-4/5">una imagen potente del cole</div>
      </section>
      <section className="flex mt-5 mb-5 flex-col">
        <div className="relative flex py-3 items-center header">
          <div className="flex-grow border-t border-green"></div>
        </div>

        <h2 className="mb-3 text-2xl md:text-4xl font-bold tracking-tighter leading-tight">
          L'escola que estimem, l'escola que volem, l'escola que construïm...{" "}
          <b>JUNTS</b>
        </h2>
        <div className="flex flex-col md:flex-row md:justify-around">
          <Card
            src="/assets/img/escuela.png"
            text=" Com AFI tenim la tasca de continuar treballant i fent cada dia millor
            la nostra escola. Intervenim activament en la vida escolar del nostre centre. Som un membre més de la comunitat educativa."
          />
          <Card
            src="/assets/img/mejora-continua.png"
            text="Som persones que, de forma voluntària, treballem per construir junts aquest projecte que és el present i el futur dels
            nostres infants"
          />
          <Card
            src="/assets/img/mesa-redonda.png"
            text="Tothom pot formar part de I'AFI i hi ha moltes maneres de fer-ho.
            Podeu entrar en una comissió, donar suport a activitats puntuals,
            involucrar-vos en la Junta... el que vulgueu o pugueu, però
            us necessitem!"
          />
        </div>
      </section>
      <section className="flex mt-5 mb-5 flex-col">
        <div className="relative flex py-3 items-center header">
          <div className="flex-grow border-t border-green"></div>
        </div>
        <div className="w-4/5">avantatges de ser socio</div>

        <Image
          src={"/assets/img/ejemploMotivos.png"}
          width={200}
          height={200}
          alt=""
        />
      </section>
      {allPosts.length > 0 && <MoreStories posts={allPosts} />}
      <Twitter />
    </>
  );
}
