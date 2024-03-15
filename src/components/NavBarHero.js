import React, { useState } from "react";
import Dropdown from 'react-multilevel-dropdown';
import Logo from "../images/favicon.png";
import VerticalDivider from "./custom/VerticalDivider";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Link, useLocation } from 'react-router-dom';
import "../css/navbar.css";

export default function NavBarHero() {
  const [type, setType] = useState(0);
  const [openTransaction, setOpenTransaction] = useState(false);

  const location = useLocation();

  const handleType = (value) => {
    setType(value);
  };

  return(
    <section id="navbar" className="sticky top-0 z-50">
      <div className="w-full h-12 bg-ethpays flex items-center justify-between px-4">
        <div className="flex items-center w-full">
          <div className="flex items-center">
            <Link to="/" className="flex items-center hover:bg-ethpays-50 pl-[6px] pr-[6px] pt-[3px] pb-[3px] rounded-md">
              <img src={Logo} alt="Ethpays" className="w-6 h-6" />
              <p className="ml-2 text-ethpays_white">Ethpays</p>
            </Link>
          </div>

          <VerticalDivider />
          <div className="flex items-center space-x-2">
            <Link to="/api" className={`flex items-center pl-[6px] pr-[6px] pt-[3px] pb-[3px] rounded-md hover:bg-ethpays-50 ${location.pathname === "/balance" ? "bg-ethpays-50" : ""}`}>
              <p className="text-ethpays_white">Api</p>
            </Link>

            <Dropdown
              title={
                <div className="flex items-center">
                  <p className="text-ethpays_white">Transactions</p>
                  <div>
                    {openTransaction ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                  </div>
                </div>
              }
              onClick={() => setOpenTransaction(!openTransaction)}
              className="flex items-center hover:bg-ethpays-50 pl-[6px] pr-[6px] pt-[3px] pb-[3px] rounded-md text-ethpays_white -ml-1"
              position="right"
            >
              <Dropdown.Item>
                Recent Transactions
              </Dropdown.Item>
              <Dropdown.Item>
                EthPays Transactions
              </Dropdown.Item>
              <Dropdown.Item>
                Top Transactions
              </Dropdown.Item>
            </Dropdown> {/* Institutional Dropdown */}
          </div>
        </div>
      </div>
    </section>
  )
}