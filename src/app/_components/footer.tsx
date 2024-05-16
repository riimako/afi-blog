import Container from "@/app/_components/container";
import { AFI_NAME } from "../../lib/constants";
import { Button } from "flowbite-react";

export function Footer() {
  return (
    <footer className="border-t border-green">
      <Container>
        <div className="py-5 flex flex-col lg:flex-row items-center">
          <h3 className="text-2xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-5 lg:mb-0 lg:pr-4 lg:w-1/2">
            {AFI_NAME}
          </h3>
          <div className="flex items-center lg:w-1/2">
            <h5>US ESPEREM, L'ESCOLA US ESPERA</h5>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4">
              <Button color="yellow" size="lg" className="font-bold">
                <a href="mailto:afi.gerbert@gmail.com"> Contacta'ns</a>
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
