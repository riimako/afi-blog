export default function Page() {
  return (
    <main className="justify-center flex-col flex organigrama">
      <h1 className="text-lg md:text-xl m-4">
        Ens plau presentar-te el nostre organigrama, que representa l'estructura
        organitzativa de la nostra comunitat de famílies compromeses.
      </h1>
      <p className="mb-1 text-md text-gray-700 md:text-lg dark:text-gray-400 m-2">
        A través d'aquesta imatge, podràs explorar com treballem junts per donar
        suport i reforçar els lligams familiars dins de la nostra comunitat. Des
        de pares i mares fins a voluntaris i líders, cada membre juga un paper
        vital en el nostre objectiu comú de promoure el benestar familiar i el
        creixement col·lectiu. Descobreix-ho i uneix-te a nosaltres en aquest
        emocionant viatge!
      </p>
      <img
        src={"/assets/img/organigrama.png"}
        loading="eager"
        className="mb-3"
        alt="Organigrama de l'AFI"
      />
      <p className="text-gray-700 text-base">
        La junta actual del curs 2023-2024 la formen
      </p>
    </main>
  );
}
