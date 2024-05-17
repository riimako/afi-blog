import { ComissionCard } from "../_components/comission-card";

export default function Page() {
  return (
    <div>
      <ComissionCard
        slug="afes-en-xarxa"
        title="AFES en xarxa"
        excerpt="Encarregada de reunir-se amb la resta d’AFIs dels col·legis de Sant Cugat per organitzar xerrades i recursos de temes d’interès comú. "
      />
      <ComissionCard
        slug="affairs-exteriors"
        title="AFERS EXTERIORS I BENESTAR: "
        excerpt="Vetlla pel benestar dels infants, millorant l’entorn, contribuint a la creació d’un pati més naturalitzat, coeducatiu i comunitari i defensant la importància del contacte amb la natura i l’espai exterior."
      />
      <ComissionCard
        slug="festes"
        title="Festes/Carnaval"
        excerpt="Contribuir a crear i enfortir el vincle entre les famílies dels infants i l'escola, organitzant i donant suport a diferents festes."
      />
      <ComissionCard
        slug="menjador"
        title="Menjador/ extraescolars"
        excerpt="Garantir una alimentació saludable i de qualitat, promocionar i donar a conèixer l’alimentació ecològica i de proximitat , així com promoure uns bons hàbits i una alimentació saludable.
•	Proveir una oferta d'activitats extraescolars variada que respongui a la demanda de les famílies de l’escola."
      />
      <ComissionCard
        title="CoCobe – Comissió de Coeducació i
        Benestar emocional"
        excerpt=" Ajudar a l’alumnat a relacionar-se amb ell mateix, amb els altres i amb el món, introduir la educación socioafectiva i la diversitat com a forma de prevenir el abús."
        slug="cocobe"
      />
      <ComissionCard
        slug="comunicacio"
        title="Comunicació i Difusió"
        excerpt="Encarregada de les XXSS de l’AFI i de nutrir el blog d’informació
        "
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
  );
}
