import { List } from "flowbite-react";

export default function Page() {
  return (
    <>
      <section className="flex flex-col">
        <h1 className="mb-1 text-lg md:text-xl md:m-2">
          Associació de Famílies d'Infants
        </h1>
        <p>
          Som una entitat que intervé activament en la vida escolar del centre
          Gerbert d'Orlhac, realitzant tasques d'organització, participació,
          representació i formació.
        </p>
        <p>
          Representem totes les famílies i fa de pont entre elles i l'escola.
          Gestiona els diners de les persones associades i els inverteix en
          activitats o material que beneficien a l'escola.
        </p>
      </section>

      <section className="flex flex-col mt-2">
        <h2 className="mb-1 text-lg md:text-xl md:m-2">Objectius</h2>
        <List>
          <List.Item>Representar a les famílies de l’escola.</List.Item>
          <List.Item>
            Donar suport a l’escola arribant on aquesta no pot.
          </List.Item>
          <List.Item>
            Promoure la participació de les famílies en activitats.
          </List.Item>
          <List.Item>Fomentar el sentiment de pertinença.</List.Item>
          <List.Item>Donar suport a les famílies que ho necessitin.</List.Item>
          <List.Item>Coordinar les activitats de les comissions.</List.Item>
        </List>
      </section>

      <section className="flex flex-col mt-2">
        <h2 className="mb-1 text-lg md:text-xl md:m-2">Funcions</h2>
        <List>
          <List.Item>
            Treballar de la mà de l’escola amb decisions consensuades.
          </List.Item>
          <List.Item>
            Mantenir transparència amb l’escola i les famílies.
          </List.Item>
          <List.Item>Presa de decisions per votació.</List.Item>
          <List.Item>
            Proactivitat en la informació de projectes i activitats.
          </List.Item>
          <List.Item>Fer partícips a les famílies en les decisions.</List.Item>
          <List.Item>
            Ser receptius amb queixes i suggeriments de les famílies.
          </List.Item>
        </List>
      </section>

      <section className="flex flex-col mt-2">
        <h2 className="mb-1 text-lg md:text-xl md:m-2">
          Alguns de nostres projectes
        </h2>
        <List>
          <List.Item>
            Participar conjuntament amb altres escolas al grup de treball per
            "Ombres per les escoles".
          </List.Item>
          <List.Item>Organitzar els diferents festes de la escola.</List.Item>
          <List.Item>Gestionar amb Paidos extraescolars i menjador</List.Item>
        </List>
      </section>
    </>
  );
}
