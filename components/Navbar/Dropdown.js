import React, { useState } from "react";
// import "./Dropdown.css";
// import { MenuItems } from "./MenuItems";

import { Link } from "next/link";

const MenuItems = [
  {
    id: 1,
    title: "ThermoFisher",
    path: "/products/thermo",
    cName: "dropdown-link",
  },
  {
    id: 2,
    title: "VWR",
    path: "/products/vwr",
    cName: "dropdown-link",
  },
  {
    id: 3,
    title: "QLIMS",
    path: "/products/qlims",
    cName: "dropdown-link",
  },
  {
    id: 4,
    title: "Microsoft Dynamics 365",
    path: "/products/isystems",
    cName: "dropdown-link",
  },
  {
    id: 5,
    title: "Honeywell",
    path: "/products/honeywell",
    cName: "dropdown-link",
  },
  {
    id: 6,
    title: "MySCADA",
    path: "/products/myscada",
    cName: "dropdown-link",
  },
  {
    id: 7,
    title: "Perkin Elmer",
    path: "/products/perkin",
    cName: "dropdown-link",
  },
  {
    id: 8,
    title: "Gester",
    path: "/products/gester",
    cName: "dropdown-link",
  },
  {
    id: 9,
    title: "Galvano",
    path: "/products/galvano",
    cName: "dropdown-link",
  },
];

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <ul
      onClick={handleClick}
      className={click ? "dropdown-menu clicked" : "dropdown-menu"}
    >
      {MenuItems.map((item) => {
        return (
          <li key={item.id}>
            <a
              className={item.cName}
              href={item.path}
              onClick={() => setClick(false)}
            >
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
