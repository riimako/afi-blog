import Container from "@/app/_components/container";
import { AFI_NAME } from "../../lib/constants";
import { Button } from "flowbite-react";

export function Footer() {
  return (
    <footer className="border-t border-green bg-white">
      <Container>
        <div className="py-5 flex flex-col lg:flex-row items-center">
          <h3 className="text-2xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-5 lg:mb-0 lg:pr-4 lg:w-1/2">
            {AFI_NAME}
          </h3>
          <div className="flex items-center flex-col  lg:w-1/2">
            <h5>US ESPEREM, L'ESCOLA US ESPERA</h5>
            <h6>
              Escriu-nos un email a{" "}
              <a
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                href="mailto:junta@afi-gerbert.cat"
              >
                junta@afi-gerbert.cat
              </a>
            </h6>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
