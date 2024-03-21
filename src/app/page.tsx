import Image from "next/image";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "../lib/api";
import Twitter from "./_components/twitter";

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
        <p>
          Com AFI tenim la tasca de continuar treballant i fent cada dia millor
          la nostra escola. És per això que us demanem la vostra col·laboració
          per construir junts aquest projecte que és el present i el futur dels
          nostres infants.
        </p>
        <div className="w-4/5">
          <Image
            src={"/assets/img/escuela.png"}
            width={200}
            height={200}
            alt="Organigrama de l'AFI"
          />
          <Image
            src={"/assets/img/mejora-continua.png"}
            height={200}
            width={200}
            alt=""
          />
          <Image
            src={"/assets/img/mesa-redonda.png"}
            width={200}
            height={200}
            alt="Organigrama de l'AFI"
          />
          <Image
            src={"/assets/img/trabajo-en-equipo.png"}
            width={200}
            height={200}
            alt="Organigrama de l'AFI"
          />
          <p>
            Tothom pot formar part de I'AFI i hi ha moltes maneres de fer-ho.
            Podeu entrar en una comissió, donar suport a activitats puntuals,
            involucrar-vos en la Junta... el que vulgueu o pugueu, però
            necessitem COMPROMÍS I AJUDA per part vostra, ja que està sent molt
            difícil tirar endavant sense suport de les mares i pares del
            Gerbert.
          </p>
          como participar, asamblea, comisiones, de manera puntual...
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
          alt="Organigrama de l'AFI"
        />
      </section>
      {allPosts.length > 0 && <MoreStories posts={allPosts} />}
      <Twitter />
    </>
  );
}
