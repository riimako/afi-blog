import React from "react";
import { AFI_NAME } from "../../lib/constants";
import { List } from "flowbite-react";

const PrivacitatPage: React.FC = () => {
  return (
    <div>
      <h1>
        Benvinguts/des a la pàgina web de {AFI_NAME}, una associació sense ànim
        de lucre dedicada a donar suport a les famílies amb infants.
      </h1>
      <p>
        La vostra privacitat és important per a nosaltres, i volem assegurar-vos
        que les vostres dades personals es tracten amb transparència i
        seguretat. A continuació, us expliquem com recopilem, utilitzem i
        protegim la vostra informació, així com les condicions d'ús del nostre
        lloc web.
      </p>
      <section>
        <h2 className="mb-1 text-lg md:text-xl md:m-2">
          Recopilació i Ús de Dades
        </h2>
        <p>
          Utilitzem Google Analytics per analitzar el trànsit i el comportament
          dels usuaris al nostre lloc web. Aquesta eina ens ajuda a millorar la
          vostra experiència i a comprendre com es fa servir la nostra pàgina.
          Google Analytics recopila informació anònima, com ara el tipus de
          navegador, el sistema operatiu, les pàgines visitades i el temps de
          permanència al lloc. Aquestes dades no identifiquen personalment els
          usuaris. Si us plau, tingueu en compte que Google Analytics utilitza
          cookies per recopilar aquesta informació. Podeu obtenir més informació
          sobre com Google tracta les dades a la seva Política de Privacitat.
        </p>
      </section>
      <section>
        <h2 className="mb-1 text-lg md:text-xl md:m-2">Cookies</h2>
        <p>
          Les cookies són petits fitxers que es desen al vostre dispositiu quan
          visiteu el nostre lloc web. Aquestes ens ajuden a millorar la
          funcionalitat i l'experiència de l'usuari. Al nostre lloc web
          utilitzem cookies per: Analitzar el trànsit i el comportament dels
          usuaris mitjançant Google Analytics. Recordar les vostres preferències
          (per exemple, l'idioma). Podeu gestionar o desactivar les cookies a
          través de la configuració del vostre navegador. Tingueu en compte que,
          si desactiveu les cookies, algunes parts del lloc web podrien no
          funcionar correctament.
        </p>
      </section>
      <section>
        <h2 className="mb-1 text-lg md:text-xl md:m-2">
          Consentiment de Cookies
        </h2>
        En accedir al nostre lloc web, se us informarà sobre l'ús de cookies i
        se us demanarà el vostre consentiment. Si accepteu, entendrem que esteu
        d'acord amb el nostre ús de cookies segons s'ha descrit anteriorment.
      </section>
      <section>
        <h2 className="mb-1 text-lg md:text-xl md:m-2">Protecció de Dades</h2>
        <p>
          Ens comprometem a protegir les vostres dades personals i a
          utilitzar-les únicament per als fins especificats. No compartim les
          vostres dades amb tercers, excepte quan sigui necessari per al
          funcionament del lloc web (com ara Google Analytics) o quan ho
          exigeixi la llei.
        </p>
      </section>
      <section>
        <h2 className="mb-1 text-lg md:text-xl md:m-2">Drets dels Usuaris</h2>
        <p>
          D'acord amb la legislació vigent en matèria de protecció de dades,
          teniu dret a:
        </p>
        <List>
          <List.Item>Accedir a les vostres dades personals.</List.Item>
          <List.Item>
            Sol·licitar la rectificació o eliminació de les vostres dades.
          </List.Item>
          <List.Item>Oposar-vos al tractament de les vostres dades.</List.Item>
          <List.Item>Revocar el consentiment en qualsevol moment.</List.Item>
        </List>
        <p>
          {" "}
          Per exercir aquests drets, podeu contactar-nos a través de [correu
          electrònic o adreça postal de l'associació].
        </p>
      </section>
      <section>
        <h2 className="mb-1 text-lg md:text-xl md:m-2">Condicions d'Ús</h2>
        <p>En utilitzar aquest lloc web, accepteu les següents condicions:</p>
        <List>
          <List.Item>
            El contingut del lloc web és per a ús informatiu i no constitueix
            assessorament professional.
          </List.Item>
          <List.Item>
            No ens fem responsables de danys o perjudicis derivats de l'ús del
            lloc web.
          </List.Item>
          <List.Item>
            Es prohibeix la còpia o distribució no autoritzada del contingut del
            lloc web.
          </List.Item>
        </List>
      </section>
      <section>
        <h2 className="mb-1 text-lg md:text-xl md:m-2">
          Canvis en la Política de Privacitat
        </h2>
        <p>
          Ens reservem el dret de modificar aquesta política en qualsevol
          moment. Qualsevol canvi serà publicat en aquesta pàgina, i es recomana
          als usuaris que la revisin periòdicament. Si teniu qualsevol pregunta
          o dubte sobre la nostra política de privacitat o l'ús de cookies, no
          dubteu a contactar-nos a{" "}
          <a
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href="mailto:soporte@afi-gerbert.cat"
          >
            soporte@afi-gerbert.cat
          </a>
          .
        </p>
      </section>
      <p>Gràcies per confiar en {AFI_NAME}.</p>
    </div>
  );
};

export default PrivacitatPage;
