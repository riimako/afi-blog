import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "../lib/api";
import ReasonCard from "./_components/reason-card";
import Link from "next/link";
import { Button } from "flowbite-react";
import { CarouselComponent } from "./_components/carousel";
import InstagramCarousel from "./_components/instagram";

export default async function Index() {
  const allPosts = getAllPosts();

  return (
    <>
      <section className="flex w-100 header">
        <img src={"/assets/img/escola.jpg"} alt="Nostre escola" />
      </section>
      <Intro />
      <section className="flex flex-col section">
        <h2 className="mb-3 text-2xl md:text-4xl font-bold tracking-tighter leading-tight">
          Qué es l'AFI?
        </h2>
        <div className="reason-card-container flex flex-col md:flex-row md:justify-around items-center gap-4">
          <ReasonCard
            src="/assets/img/escuela.png"
            text=" Com AFI tenim la tasca de continuar treballant i fent cada dia millor
            la nostra escola. Intervenim activament en la vida escolar del nostre centre. Som un membre més de la comunitat educativa."
          />
          <ReasonCard
            src="/assets/img/mejora-continua.png"
            text="Som persones que, de forma voluntària, treballem per construir junts aquest projecte que és el present i el futur dels
            nostres infants"
          />
          <ReasonCard
            src="/assets/img/mesa-redonda.png"
            text="Tothom pot formar part de I'AFI.
            Podeu entrar en una comissió, donar suport a activitats puntuals,
            involucrar-vos en la Junta... el que vulgueu o pugueu, però
            us necessitem!"
          />
        </div>
        <div className="mt-5 flex justify-center flex-col items-center">
          <p className="md:text-xl md:w-2/3 mb-3">Vols saber-ne més?</p>
          <p className="md:text-xl md:w-2/3 mb-3">
            Fes clic en el següent enllaç per obtenir informació detallada sobre
            tota la feina que hem realitzat fins ara i en què estem treballant
            actualment:
          </p>
          <Link href="/que-es-lafi">
            <Button color="yellow" size="xl" className="">
              Obtén més informació aquí
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Link>
        </div>
      </section>
      <section className="bg-background  section">
        <InstagramCarousel />
      </section>
      <CarouselComponent />

      
    </>
  );
}
