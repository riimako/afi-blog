import { ComissionCard } from "../_components/comission-card";

export default function Page() {
  return (
    <>
      <p className="mb-1 text-md text-gray-700 md:text-lg dark:text-gray-400 m-2">
        La nostra associació està organitzada en diverses comissions, cadascuna
        dedicada a àrees específiques d'interès i treball. Aquestes comissions
        són el motor que impulsa les nostres activitats i iniciatives,
        assegurant que tots els aspectes de la vida de la nostra comunitat
        estiguin ben atesos.
      </p>
      <p className="mb-1 text-md text-gray-700 md:text-lg dark:text-gray-400 m-2">
        A continuació, trobareu una descripció detallada de cadascuna de les
        nostres comissions, les seves funcions principals i els objectius que es
        proposen aconseguir. Us animem a conèixer més sobre el treball que
        realitzen i a considerar la vostra participació activa en aquelles àrees
        que més us interessin.{" "}
      </p>
      <p className="mb-1 text-md text-gray-700 md:text-lg dark:text-gray-400 m-2">
        La col·laboració i el compromís de tots els membres són essencials per a
        l'èxit de la nostra associació. Gràcies pel vostre suport i dedicació!
      </p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-4 md:gap-x-4 lg:gap-x-16 gap-y-4 md:gap-y-16 mb-2">
        <ComissionCard
          slug="afes-en-xarxa"
          title="Afes en xarxa"
          excerpt="Encarregada de reunir-se amb la resta d’AFIs dels col·legis de Sant Cugat per organitzar xerrades i recursos de temes d’interès comú. "
        />
        <ComissionCard
          slug="affairs-exteriors"
          title="Afers exteriors i benestar"
          excerpt="Vetlla pel benestar dels infants, millorant l’entorn, contribuint a la creació d’un pati més naturalitzat, coeducatiu i comunitari i defensant la importància del contacte amb la natura i l’espai exterior."
        />
        <ComissionCard
          slug="festes"
          title="Festes/Carnaval"
          excerpt="Contribuir a crear i enfortir el vincle entre les famílies dels infants i l'escola, organitzant i donant suport a diferents festes."
        />
        <ComissionCard
          slug="menjador"
          title="Menjador/Extraescolars"
          excerpt="Garantir una alimentació saludable i de qualitat, promocionar i donar a conèixer l’alimentació ecològica i de proximitat
i	proveir una oferta d'activitats extraescolars variada que respongui a la demanda de les famílies."
        />
        <ComissionCard
          title="CoCobe – Comissió de Coeducació i
        Benestar emocional"
          excerpt="Ajudar a l’alumnat a relacionar-se amb ell mateix, amb els altres i amb el món, introduir la educación socioafectiva i la diversitat com a forma de prevenir el abús."
          slug="cocobe"
        />
        <ComissionCard
          slug="comunicacio"
          title="Comunicació i Difusió"
          excerpt="Encarregada de les XXSS de l’AFI i de nutrir el blog d’informació"
        />
        <ComissionCard
          slug="extraordinaris"
          title="Comissió infants extraordinaris"
          excerpt="Representa aquelles famílies amb infants amb neurodivergències per treballar en la inclusió.        "
        />
        <ComissionCard
          slug="sostenibilitat"
          title="Comissió de sostenibilitat"
          excerpt="Concienciar sobre la cura del medi ambient, transmetent als infants la importància de mantenir una actitud respectuosa, responsable i solidària amb el entorn.treballar en els camins escolars.
        "
        />
      </div>
    </>
  );
}
