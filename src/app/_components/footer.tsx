import Container from "@/app/_components/container";
import { AFI_NAME } from "../../lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-green">
      <Container>
        <div className="py-5 flex flex-col lg:flex-row items-center">
          <h3 className="text-2xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-5 lg:mb-0 lg:pr-4 lg:w-1/2">
            {AFI_NAME}
          </h3>
          <h5 className="mb-2">US ESPEREM, L'ESCOLA US ESPERA</h5>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="mailto:afi.gerbert@gmail.com"
              className="mx-3 bg-yellow hover:bg-white hover:text-black border border-green text-black font-bold py-3 px-12 lg:px-8 duration-200 transition-colors rounded lg:mb-0"
            >
              Contacta'ns
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
