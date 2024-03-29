import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import TurnLeftIcon from '@mui/icons-material/TurnLeft';
import TurnRightIcon from '@mui/icons-material/TurnRight';
import VerifiedIcon from '@mui/icons-material/Verified';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import BoltIcon from '@mui/icons-material/Bolt';
import { Link, useNavigate } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';

import NavBarHero from "../components/NavBarHero";
import FootBar from "../components/FootBar";

export default function Tx() {
  const navigate = useNavigate();
  const { txid } = useParams();
  const [loading, setLoading] = useState(true);
  const [txData, setTxData] = useState(null);

  useEffect(() => {
    async function fetchTxData() {
      const response = await fetch(process.env.REACT_APP_ETHPAYS_BACKEND_FU + `transaction/${txid}`);
      const data = await response.json();

      if (!data || data.ok === "false") {
        navigate("/not-found");
      } else if (data.ok === "true") {
        setTxData(data);
        setLoading(false);
      } else {
        console.error("Unknown error");
      }
    }
    fetchTxData();
  }, [txid]);

  if (loading) {
    return (
      <div>
        <NavBarHero />
        <div className="flex justify-center items-center h-screen">
          <p className="text-ethpays_white">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBarHero />
      <div className="flex flex-grow items-start mt-12 text-ethpays_white illustration-section-01 w-full">
        <div className="2xl:px-72 lg:px-24 w-full sm:px-12 md:px-12">
          <h1 className="text-ethpays_white text-2xl font-bold">Transaction Overview</h1>
          <div className="mt-4 flex flex-col">
            <div className="w-full overflow-hidden flex flex-col space-y-3 py-3 px-4 rounded-[10px] border border-[--ui-dark-border-color] bg-ethpays">
              <div className="flex justify-start">
                <div className="min-w-[20%] flex items-center">
                  <ReceiptIcon className="text-ethpays_white-50 mr-1" />
                  <p className="text-ethpays_white-50 text-lg">Transaction id:</p>
                </div>
                <p className="text-ethpays_white text-base">{txData.txid}</p>
              </div>
              <div className="flex justify-start">
                <div className="min-w-[20%] flex items-center">
                  <AccessTimeIcon className="text-ethpays_white-50 mr-1" />
                  <p className="text-ethpays_white-50 text-lg">Timestamp:</p>
                </div>
                <p className="text-ethpays_white text-base">{formatDistanceToNow(new Date(txData.timestamp * 1))} ago ({txData.timestamp})</p>
              </div>
              <div className="flex justify-start">
                <div className="min-w-[20%] flex items-center">
                  <DoneAllIcon className="text-ethpays_white-50 mr-1" />
                  <p className="text-ethpays_white-50 text-lg">Status:</p>
                </div>
                {txData.status === "completed" ?
                  <p className="bg-[#00a18433] text-xs p-1 rounded-md border border-[#00a184] text-ethpays_green-100">Completed</p>
                : txData.status === "pending" ?
                  <p className="bg-[#fffc6433] text-xs p-1 rounded-md border border-[#fffc00] text-ethpays_red-100">Pending</p>
                : txData.status === "failed" ?
                  <p className="bg-[#ff000033] text-xs p-1 rounded-md border border-[#ff0000] text-ethpays_red-100">Failed</p>
                :
                  <p className="bg-[#0093ff33] text-xs p-1 rounded-md border border-[#0093ff] text-ethpays_red-100">Unknown</p>
                }
              </div>

              <div className="w-full border-t border-[--ui-dark-border-color] my-3"></div>
              
              <div className="flex justify-start">
                <div className="min-w-[20%] flex items-center">
                  <TurnLeftIcon className="text-ethpays_white-50 mr-1" />
                  <p className="text-ethpays_white-50 text-lg">From:</p>
                </div>
                <p className="text-ethpays_white text-base flex items-center">
                  <Link to={`/address/` + txData.from} className="text-ethpays_green hover:text-ethpays_green-50 mx-1">
                    {txData.from}
                  </Link>
                  {txData.from_ethpays_username && (
                    <Tooltip title="Verified Employee Account">
                      <span className="flex items-center ml-2">
                        (<VerifiedIcon fontSize="10" className="text-ethpays_blue"/>EthPays: {txData.from_ethpays_username})
                      </span>
                    </Tooltip>
                  )}
                </p>
              </div>
              <div className="flex justify-start">
                <div className="min-w-[20%] flex items-center">
                  <TurnRightIcon className="text-ethpays_white-50 mr-1" />
                  <p className="text-ethpays_white-50 text-lg">To:</p>
                </div>
                <p className="text-ethpays_white text-base flex items-center">
                  <Link to={`/address/` + txData.to} className="text-ethpays_green hover:text-ethpays_green-50 mx-1">
                    {txData.to}
                  </Link>
                  {txData.to_ethpays_username && (
                    <Tooltip title="Verified Employee Account">
                      <span className="flex items-center ml-2">
                        (<VerifiedIcon fontSize="10" className="text-ethpays_blue"/>EthPays: {txData.to_ethpays_username})
                      </span>
                    </Tooltip>
                  )}
                </p>
              </div>

              <div className="w-full border-t border-[--ui-dark-border-color] my-3"></div>

              <div className="flex justify-start">
                <div className="min-w-[20%] flex items-center">
                  <AttachMoneyIcon className="text-ethpays_white-50 mr-1" />
                  <p className="text-ethpays_white-50 text-lg">Value:</p>
                </div>
                <p className="text-ethpays_white text-base">{parseFloat(txData.amount).toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {txData.currency.charAt(0).toUpperCase() + txData.currency.slice(1)}</p>
              </div>
              <div className="flex justify-start">
                <div className="min-w-[20%] flex items-center">
                  <RequestQuoteIcon fontSize="small" className="text-ethpays_white-50 mr-1" />
                  <p className="text-ethpays_white-50 text-lg">Transaction Fee:</p>
                </div>
                <p className="text-ethpays_white text-base">Free</p>
              </div>

              <div className="w-full border-t border-[--ui-dark-border-color] my-3"></div>

              <div className="flex justify-start">
                <div className="min-w-[20%] flex items-center">
                  <BoltIcon className="text-ethpays_white-50 mr-1" />
                  <p className="text-ethpays_white-50 text-lg">Summary:</p>
                </div>
                <p className="text-ethpays_white-50 text-base">
                  Transfer
                  <span className="text-ethpays_white ml-1">
                  {parseFloat(txData.amount).toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {txData.currency.charAt(0).toUpperCase() + txData.currency.slice(1)}
                  </span>
                  , From:
                  <Link to={`/address/` + txData.from} className="text-ethpays_green hover:text-ethpays_green-50 mx-1">
                    {txData.from.substring(0, 5) + '...' + txData.from.slice(-5)}
                  </Link>
                  To:
                  <Link to={`/address/` + txData.to} className="text-ethpays_green hover:text-ethpays_green-50 mx-1">
                    {txData.to.substring(0, 5) + '...' + txData.to.slice(-5)}
                  </Link>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <FootBar />
    </div>
  );
}