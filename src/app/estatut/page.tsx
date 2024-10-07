export default function Page() {
  return (
    <section className="my-7 border-green estatuts-page">
      <h2 className="mb-3 text-xl md:text-2xl tracking-tighter leading-tight">
        A continuació podeu visualitzar i accedir als actuals estatuts del
        nostre AFI.
      </h2>
      <iframe
        className="mb-3"
        title="Estatuts AFI"
        allow="autoplay"
        src="https://drive.google.com/file/d/1rA-IkLk4lepZV4k9UVhKyDzW7EgYp6ZX/preview"
      ></iframe>
      <p>
        Per a qualsevol consulta o dubte relacionat amb els estatuts, podeu
        posar-vos en contacte amb l'AFI
      </p>
    </section>
  );
}
