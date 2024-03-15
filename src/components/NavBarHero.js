import React, { useState, useEffect } from "react";
import { ButtonGroup } from "@mui/material";
import Dropdown from 'react-multilevel-dropdown';
import Logo from "../images/favicon.png";
import VerticalDivider from "./custom/VerticalDivider";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Skeleton } from "@mui/material";
import { Link, useLocation } from 'react-router-dom';
import { checkAuth } from "../hooks/useAuth";
import Cookies from "js-cookie";
import "../css/navbar.css";

export default function NavBarHero() {
  const [type, setType] = useState(0);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const [openTrading, setOpenTrading] = useState(false);
  const [openInstitutional, setOpenInstitutional] = useState(false);
  const [openDevelopers, setOpenDevelopers] = useState(false);
  const [openOthers, setOpenOthers] = useState(false);
  const [cryptoInfo, setCryptoInfo] = useState([]);

  const location = useLocation();
  const isUserAuthenticated = checkAuth();

  useEffect(() => {
    const fetchCryptoInfo = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_ETHPAYS_BACKEND_FU + "data/cryptocurrencies");
        const data = await response.json();
        setCryptoInfo(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching crypto info: ", error);
      }
    };
    fetchCryptoInfo();

    if (isUserAuthenticated) {
      const accessToken = Cookies.get("accessToken");
      const fetchUserData = async () => {
        try {
          const response = await fetch(process.env.REACT_APP_ETHPAYS_BACKEND_FU + "user/self?accessToken=" + accessToken, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
          });
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error("Error fetching user data: ", error);
        }
      };
      fetchUserData();
    }
  } , []);

  const handleType = (value) => {
    setType(value);
  };

  console.log("userData: ", userData);

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

          <div className="flex justify-center items-center text-center ml-2 w-[125px]">
            <ButtonGroup
              variant="outlined"
              aria-label="Basic button group"
              sx={{ backgroundColor: "#2e2e2e" }}
              className="w-[100%]"
            >
              <button
                onClick={() => handleType(0)}
                className={`w-full ${type === 0 ? "bg-white text-ethpays" : "text-ethpays_white"} p-1 text-sm`}
                style={{ borderRadius: "4px" }}
              >
                Futures
              </button>
              <button
                onClick={() => handleType(1)}
                className={`w-full ${type === 1 ? "bg-white text-ethpays" : "text-ethpays_white"} p-1 text-sm`}
                style={{ borderRadius: "4px" }}
              >
                Spot
              </button>
            </ButtonGroup>
          </div>
          <VerticalDivider />
          <div className="flex items-center space-x-2">
            <Link to="/markets" className={`flex items-center pl-[6px] pr-[6px] pt-[3px] pb-[3px] rounded-md hover:bg-ethpays-50 ${location.pathname === "/markets" ? "bg-ethpays-50" : ""}`}>
              <p className="text-ethpays_white">Markets</p>
            </Link>
            <Link to="/balance" className={`flex items-center pl-[6px] pr-[6px] pt-[3px] pb-[3px] rounded-md hover:bg-ethpays-50 ${location.pathname === "/balance" ? "bg-ethpays-50" : ""}`}>
              <p className="text-ethpays_white">Balance</p>
            </Link>

            <Dropdown
              title={
                <div className="flex items-center">
                  <p className="text-ethpays_white">Trading</p>
                  <div>
                    {openTrading ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                  </div>
                </div>
              }
              onClick={() => setOpenTrading(!openTrading)}
              className="flex items-center hover:bg-ethpays-50 pl-[6px] pr-[6px] pt-[3px] pb-[3px] rounded-md text-ethpays_white"
              position="right"
            >
              <Dropdown.Item>
                Perpetual
                <Dropdown.Submenu position="right">
                  {loading ? (
                    Array.from({ length: 6 }).map((_, index) => (
                      <Dropdown.Item key={index}>
                        <Skeleton variant="text" width={100} height={20} />
                      </Dropdown.Item>
                    ))
                  ) : (
                    Object.values(cryptoInfo).map((crypto) => (
                      <Dropdown.Item key={crypto.instrument_id}>
                        <Link to={`/trade/${crypto.instrument_id}`}>
                          {crypto.base}/{crypto.quote}
                          <span className="text-[#97b764] text-xs ml-1">Perp.</span>
                        </Link>
                      </Dropdown.Item>
                    ))
                  )}
                </Dropdown.Submenu>
              </Dropdown.Item>
              <Dropdown.Item
              isDisabled={true}
              >
                Options
                {/* <Dropdown.Submenu position="right">
                  <Dropdown.Item>
                    Subitem 2
                  </Dropdown.Item>
                </Dropdown.Submenu> */}
              </Dropdown.Item>
            </Dropdown> {/* Trading Dropdown */}

            <Dropdown
              title={
                <div className="flex items-center">
                  <p className="text-ethpays_white">Institutional</p>
                  <div>
                    {openInstitutional ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                  </div>
                </div>
              }
              onClick={() => setOpenInstitutional(!openInstitutional)}
              className="flex items-center hover:bg-ethpays-50 pl-[6px] pr-[6px] pt-[3px] pb-[3px] rounded-md text-ethpays_white -ml-1"
              position="right"
            >
              <Dropdown.Item>
                Institutional Dashboard
              </Dropdown.Item>
              <Dropdown.Item>
                Broker Program
              </Dropdown.Item>
              <Dropdown.Item>
                Managed Secondary Accounts
              </Dropdown.Item>
            </Dropdown> {/* Institutional Dropdown */}

            <Dropdown
              title={
                <div className="flex items-center">
                  <p className="text-ethpays_white">Developers</p>
                  <div>
                    {openDevelopers ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                  </div>
                </div>
              }
              onClick={() => setOpenDevelopers(!openDevelopers)}
              className="flex items-center hover:bg-ethpays-50 pl-[6px] pr-[6px] pt-[3px] pb-[3px] rounded-md text-ethpays_white -ml-1"
              position="right"
            >
              <Dropdown.Item>
                Developer Hub
              </Dropdown.Item>
              <Dropdown.Item>
                API Documentation
              </Dropdown.Item>
              <Dropdown.Item>
                Statistics
              </Dropdown.Item>
            </Dropdown> {/* Developers Dropdown */}

            <Dropdown
              title={
                <div className="flex items-center">
                  <p className="text-ethpays_white">Others</p>
                  <div>
                    {openOthers ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                  </div>
                </div>
              }
              onClick={() => setOpenOthers(!openOthers)}
              className="flex items-center hover:bg-ethpays-50 pl-[6px] pr-[6px] pt-[3px] pb-[3px] rounded-md text-ethpays_white -ml-1"
              position="right"
            >
              <Dropdown.Item>
                <Link to="/markets/futures-informations">Futures Informations</Link>
              </Dropdown.Item>
            </Dropdown> {/* Developers Dropdown */}
          </div>
        </div>
        {!isUserAuthenticated ? (
          <Link to="/login" className={`flex items-center pl-[10px] pr-[10px] pt-[3px] pb-[3px] rounded-md bg-ethpays_green hover:bg-ethpays_green-50`}>
            <p className="text-ethpays_white">Login</p>
          </Link>
        ) : (
          <div className="flex items-center">
            <Dropdown
              title={
                <div className="flex items-center space-x-1 justify-center">
                  <img src={userData.userLogo} alt="User" className="w-6 h-6 rounded-full" />
                  <p className="text-ethpays_white">{userData.username}</p>
                </div>
              }
              onClick={() => setOpenTrading(!openTrading)}
              className="flex items-center hover:bg-ethpays-50 pl-[15px] pr-[15px] pt-[3px] pb-[3px] rounded-md text-ethpays_white"
              position="left"
            >
              <Dropdown.Item className="flex justify-center">
                <Link to="/profile">Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item className="flex justify-center">
                <button onClick={() => {
                  Cookies.remove("accessToken");
                  window.location.reload();
                }}>Logout</button>
              </Dropdown.Item>
            </Dropdown> {/* User Dropdown */}
          </div>
        )}
      </div>
    </section>
  )
}