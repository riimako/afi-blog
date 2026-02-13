import { List, ListItem } from "flowbite-react";

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
          <ListItem>Representar a les famílies de l’escola.</ListItem>
          <ListItem>
            Donar suport a l’escola arribant on aquesta no pot.
          </ListItem>
          <ListItem>
            Promoure la participació de les famílies en activitats.
          </ListItem>
          <ListItem>Fomentar el sentiment de pertinença.</ListItem>
          <ListItem>Donar suport a les famílies que ho necessitin.</ListItem>
          <ListItem>Coordinar les activitats de les comissions.</ListItem>
        </List>
      </section>

      <section className="flex flex-col mt-2">
        <h2 className="mb-1 text-lg md:text-xl md:m-2">Funcions</h2>
        <List>
          <ListItem>
            Treballar de la mà de l’escola amb decisions consensuades.
          </ListItem>
          <ListItem>
            Mantenir transparència amb l’escola i les famílies.
          </ListItem>
          <ListItem>Presa de decisions per votació.</ListItem>
          <ListItem>
            Proactivitat en la informació de projectes i activitats.
          </ListItem>
          <ListItem>Fer partícips a les famílies en les decisions.</ListItem>
          <ListItem>
            Ser receptius amb queixes i suggeriments de les famílies.
          </ListItem>
        </List>
      </section>

      <section className="flex flex-col mt-2">
        <h2 className="mb-1 text-lg md:text-xl md:m-2">
          Alguns de nostres projectes
        </h2>
        <List>
          <ListItem>
            Participar conjuntament amb altres escolas al grup de treball per
            "Ombres per les escoles".
          </ListItem>
          <ListItem>Organitzar els diferents festes de la escola.</ListItem>
          <ListItem>Gestionar amb Paidos extraescolars i menjador</ListItem>
        </List>
      </section>
    </>
  );
}
