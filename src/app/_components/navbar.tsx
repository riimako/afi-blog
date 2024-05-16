import React from "react";
import {
  CustomFlowbiteTheme,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { AFI_NAME } from "../../lib/constants";

const customTheme: CustomFlowbiteTheme["navbar"] = {
  root: {
    base: "bg-white px-2 pb-2 pt-4 sm:px-4",
    rounded: {
      on: "rounded",
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
    list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-md md:text-xl",
    hidden: {
      on: "hidden",
      off: "",
    },
  },
  link: {
    base: "block py-2 pr-4 pl-3 md:p-0 md:text-lg",
    active: {
      on: "bg-green-700 text-white  md:bg-transparent md:text-green-700",
      off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50  md:border-0 md:hover:bg-transparent md:hover:text-green-700",
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
        <span className="self-center whitespace-nowrap text-3xl font-semibold">
          {AFI_NAME}
        </span>
      </NavbarBrand>
      <div className="flex order-2 md:hidden">
        <NavbarToggle />
      </div>
      <NavbarCollapse className="">
        <NavbarLink href="/que-es-lafi">Qué es l'AFI?</NavbarLink>
        <NavbarLink href="/que-es-lafi/organigrama">Organigrama</NavbarLink>
        <NavbarLink href="/comissions">Commissions</NavbarLink>
        <NavbarLink href="/newsletters">Newsletters</NavbarLink>
        <NavbarLink href="/agenda">Agenda</NavbarLink>
        <NavbarLink href="/actes">Actes</NavbarLink>
        <NavbarLink href="/estatut">Estatut</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default HeaderNav;
