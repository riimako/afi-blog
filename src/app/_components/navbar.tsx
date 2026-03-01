import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { AFI_NAME } from "../../lib/constants";
import { CustomFlowbiteTheme } from "flowbite-react/types";

const customTheme: CustomFlowbiteTheme["navbar"] = {
  root: {
    base: "bg-white px-2 pb-2 pt-4 sm:px-4",
    rounded: {
      on: "rounded-sm",
      off: "",
    },
    bordered: {
      on: "border",
      off: "",
    },
    inner: {
      base: "mx-auto flex flex-wrap items-center justify-between",
      fluid: {
        on: "",
        off: "container",
      },
    },
  },
  brand: {
    base: "flex items-center",
  },
  collapse: {
    base: "w-full md:block md:w-auto",
    list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-md md:text-xl border-t border-green md:border-t-0 md:border-transparent",
    hidden: {
      on: "hidden",
      off: "",
    },
  },
  link: {
    base: "block py-2 pr-4 pl-3 md:p-0 md:text-lg",
    active: {
      on: "bg-green-700 text-white  md:bg-transparent md:text-green-700",
      off: "border-b border-green text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-green-700",
    },
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm text-green-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  md:hidden",
    icon: "h-6 w-6 shrink-0",
  },
};
const HeaderNav = () => {
  return (
    <Navbar className="header" theme={customTheme} fluid rounded>
      <NavbarBrand href="/">
        <img
          alt="nostre logo"
          className="navbarLogo"
          src="/assets/img/logo-transparent.png"
        />
      </NavbarBrand>
      <NavbarToggle className="lg:hidden" />
      <NavbarCollapse>
        <NavbarLink href="/">Inici</NavbarLink>
        <NavbarLink href="/que-es-lafi">Qué es l'AFI?</NavbarLink>
        {/* <NavbarLink href="/que-es-lafi/organigrama">Organigrama</NavbarLink> */}
        {/*  <NavbarLink href="/comissions">Comissions</NavbarLink> */}
        {/* <NavbarLink href="/newsletters">Newsletters</NavbarLink> */}
        {/* <NavbarLink href="/agenda">Agenda</NavbarLink> */}
        <NavbarLink href="/actes">Actes</NavbarLink>
        <NavbarLink href="/estatut">Estatut</NavbarLink>
        <NavbarLink href="https://agora.xtec.cat/ceip-gerbert-d-orlhac/">
          L'escola
        </NavbarLink>
        <NavbarLink href="https://paidos.fundesplai.org/escoles/escola-gerbert-dorlhac/">
          Paidos
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default HeaderNav;
