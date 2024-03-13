import { AFI_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-12 mb-16 md:mb-12">
      <h1 className="w-5/12 text-2xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
        {AFI_NAME}
      </h1>
      <h4 className="w-7/12 text-center md:text-left text-lg mt-5 md:pl-8">
      Totes les famílies juntes podem
CONSTRUIR L'ESCOLA QUE VOLEM
i treballar perquè cada dia, els nostres nens i nenes
tinguin una millor educació i en millors condicions
      </h4>
    </section>
  );
}
