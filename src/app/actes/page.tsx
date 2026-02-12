"use client";
import { Accordion } from "flowbite-react";

export default function Page() {
  return (
    <div className="actes-page">
      <h1 className="text-lg md:text-xl m-4">
        Benvinguts a la web d'actes de les reunions i assemblees.
      </h1>
      <p className="mb-1 text-md text-gray-700 md:text-lg dark:text-gray-400 m-2">
        Aquí trobareu un arxiu complet i actualitzat de totes les sessions, on
        es detallen les decisions preses, les propostes discutides i els
        projectes en curs.
      </p>
      <p className="mb-1 text-md text-gray-700 md:text-lg dark:text-gray-400 m-2">
        La transparència i la comunicació són valors fonamentals per a
        nosaltres, i esperem que aquest recurs sigui útil per a tots els membres
        de la nostra comunitat. Us convidem a explorar les diferents seccions i
        a mantenir-vos informats sobre les activitats i els temes que ens
        afecten a tots.
      </p>
      <p>Gràcies per la vostra participació i suport continuat!</p>
      <Accordion className="mt-4 mb-3"><Accordion.Panel>
          <Accordion.Title className="text-xl">2025-2026</Accordion.Title>
          <Accordion.Content className="bg-white">
            <iframe
              allow="autoplay"
              src="https://drive.google.com/file/d/1w3m6816k6W1FHJT1kPYV0RCA08Ju9onL/preview"
              title="16 d'octubre 2026"
            />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-xl">2024-2025</Accordion.Title>
          <Accordion.Content className="bg-white">
            <iframe
              allow="autoplay"
              src="https://drive.google.com/file/d/1DWX6qXnlbDElEIF6jbT6ag7nEFSv8G-k/preview"
              title="22 d'abril 2025"
            />
            <iframe
              allow="autoplay"
              src="https://drive.google.com/file/d/1aamlBJCwUxOCzv33h3WOmgLfJtqfqKrk/preview"
              title="28 de gener 2025"
            />
            <iframe
              allow="autoplay"
              src="https://drive.google.com/file/d/1_e2ZIh0KyG3aGi3Fo-29G8SoY1_BC9Vg/preview"
              title="22 d'octubre 2024"
            />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-xl">2023-2024</Accordion.Title>
          <Accordion.Content className=" bg-white">
            <iframe
              allow="autoplay"
              src="https://drive.google.com/file/d/1MN1ydhh0oZL2jRheBuiqY_A-8pCrdlUb/preview"
              title="28 de maig 2024"
            />
            <iframe
              allow="autoplay"
              src="https://drive.google.com/file/d/1CVOHBajEcUiJlkckFpAQKXLATlpP2_8C/preview"
              title="21 de març 2024"
            />
            <iframe
              allow="autoplay"
              src="https://drive.google.com/file/d/1-7GOVrgZszosh1jDyKSdGo_2ohLZGb62/preview"
              title="6 de febrer 2024"
            />
            <iframe
              src="https://drive.google.com/file/d/1buiS4OrSIpZAywC8lPso2M3agEQ__GQg/preview"
              allow="autoplay"
              title="2 de novembre 2023"
            />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-xl">2022-2023</Accordion.Title>
          <Accordion.Content className=" bg-white">
            <iframe
              src="https://drive.google.com/file/d/1Oa-d6v3UFWpvPrOX44DDQZj2X9hdfqgB/preview"
              allow="autoplay"
              title="27 septembre 22 presentació"
            />
            <iframe
              src="https://drive.google.com/file/d/1ynqgnqjaWtaXIm_E9u4QBYutB9EF6Cuc/preview"
              allow="autoplay"
              title="27 septembre 22 acta"
            />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-xl">2021-2022</Accordion.Title>
          <Accordion.Content className=" bg-white">
            <iframe
              src="https://drive.google.com/file/d/1wn3_NKURByEFl4mjijxhI3caAGFw3yPv/preview"
              allow="autoplay"
              title="presentació 16 desembre 2021"
            />
            <iframe
              src="https://drive.google.com/file/d/1NazabDvm10puMkut7Yji2EEIMUnxSV3o/preview"
              allow="autoplay"
              title="acta 16 desembre 21"
            />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-xl">2020-2021</Accordion.Title>
          <Accordion.Content className=" bg-white">
            <iframe
              src="https://drive.google.com/file/d/19xZ5VIo21VedVI9Nbk0gB23PeetsfZuq/preview"
              allow="autoplay"
              title="25 de febrer 2021"
            />
            <br />
            <iframe
              src="https://drive.google.com/file/d/1SfTLtiAm2-SnBFljmVRbCPmyXORBv2Rl/preview"
              allow="autoplay"
              title="7 de octubre 2020"
            />
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
