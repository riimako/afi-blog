import React from "react";
import { AFI_NAME } from "../../lib/constants";
import { List, ListItem } from "flowbite-react";

const Cookies: React.FC = () => {
  return (
    <div>
      <p>
        Benvinguts/des a la pàgina web de {AFI_NAME}. Aquesta política de
        cookies us informa sobre l'ús de cookies al nostre lloc web i les
        vostres opcions per gestionar-les.
      </p>
      <section>
        <h2 className="mb-1 text-lg md:text-xl md:m-2">
          {" "}
          Què són les cookies?
        </h2>
        <p>
          Les cookies són petits fitxers de text que es desen al vostre
          dispositiu (ordinador, mòbil o tauleta) quan visiteu el nostre lloc
          web. Aquestes cookies ens ajuden a millorar la vostra experiència
          d'usuari, recordant les vostres preferències i proporcionant-nos
          informació sobre com s'utilitza el lloc web.
        </p>
      </section>

      <section>
        <h2 className="mb-1 text-lg md:text-xl md:m-2">
          {" "}
          Tipus de cookies que utilitzem
        </h2>
        <p>Al nostre lloc web utilitzem els següents tipus de cookies:</p>
        <List>
          <ListItem>
            Cookies tècniques: Són necessàries per al funcionament bàsic del
            lloc web i us permeten navegar i utilitzar les seves funcionalitats.
          </ListItem>
          <ListItem>
            Cookies d'anàlisi: Utilitzem Google Analytics per recopilar
            informació anònima sobre com els usuaris interactuen amb el nostre
            lloc web (per exemple, pàgines visitades, temps de permanència,
            etc.). Aquestes dades ens ajuden a millorar el nostre contingut i
            serveis.
          </ListItem>
          <ListItem>
            Cookies de preferències: Recorden les vostres eleccions (com
            l'idioma) per oferir-vos una experiència més personalitzada.
          </ListItem>
        </List>
      </section>

      <section>
        <h2 className="mb-1 text-lg md:text-xl md:m-2">
          {" "}
          Consentiment de cookies
        </h2>
        <p>
          En accedir al nostre lloc web, se us informarà sobre l'ús de cookies
          mitjançant un banner o pop-up. Si continueu navegant, entendrem que
          esteu d'acord amb el nostre ús de cookies. No obstant això, podeu
          gestionar o desactivar les cookies en qualsevol moment a través de la
          configuració del vostre navegador.
        </p>
      </section>

      <section>
        <h2 className="mb-1 text-lg md:text-xl md:m-2">
          {" "}
          Com gestionar les cookies
        </h2>
        <p>Podeu configurar el vostre navegador per:</p>
        <List>
          <ListItem>Acceptar o rebutjar totes les cookies.</ListItem>
          <ListItem>
            Rebre una notificació quan s'instal·li una cookie.
          </ListItem>
          <ListItem>Eliminar les cookies existents.</ListItem>
        </List>
        <p>
          Tingueu en compte que, si desactiveu les cookies, algunes parts del
          lloc web podrien no funcionar correctament.
        </p>
      </section>

      <section>
        <h2 className="mb-1 text-lg md:text-xl md:m-2"> Cookies de tercers</h2>
        <p>
          Utilitzem Google Analytics, una eina de tercers, per analitzar el
          trànsit al nostre lloc web. Google pot utilitzar cookies pròpies per
          recopilar informació anònima. Podeu consultar la política de
          privacitat de Google a https://policies.google.com/privacy.
        </p>
      </section>
      <section>
        <h2 className="mb-1 text-lg md:text-xl md:m-2">
          Canvis en la política de cookies
        </h2>
        <p>
          Ens reservem el dret de modificar aquesta política en qualsevol
          moment. Qualsevol canvi serà publicat en aquesta pàgina, i us
          recomanem que la reviseu periòdicament.
        </p>
      </section>
      <p>
        Si teniu qualsevol pregunta sobre l'ús de cookies, no dubteu a
        contactar-nos a{" "}
        <a
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href="mailto:soporte@afi-gerbert.cat"
        >
          soporte@afi-gerbert.cat
        </a>
        .
      </p>
      <p className="mt-2">Gràcies per confiar en {AFI_NAME}.</p>
    </div>
  );
};

export default Cookies;
