import React from "react";
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
import { Link } from 'react-router-dom';

import NavBarHero from "../components/NavBarHero";

export default function Tx() {
  const { txid } = useParams();

  return (
    <div>
      <NavBarHero />
      <div className="flex flex-col items-start mt-12 text-ethpays_white illustration-section-01 w-full">
        <div className="2xl:px-72 lg:px-24 w-full sm:px-12 md:px-12">
          <h1 className="text-ethpays_white text-2xl font-bold">Transaction Overview</h1>
          <div className="mt-4 flex flex-col">
            <div className="w-full overflow-hidden flex flex-col space-y-3 py-3 px-4 rounded-[10px] border border-[--ui-dark-border-color] bg-ethpays">
              <div className="flex justify-start">
                <div className="min-w-[20%] flex items-center">
                  <ReceiptIcon className="text-ethpays_white-50 mr-1" />
                  <p className="text-ethpays_white-50 text-lg">Transaction id:</p>
                </div>
                <p className="text-ethpays_white text-base">{txid}</p>
              </div>
              <div className="flex justify-start">
                <div className="min-w-[20%] flex items-center">
                  <AccessTimeIcon className="text-ethpays_white-50 mr-1" />
                  <p className="text-ethpays_white-50 text-lg">Timestamp:</p>
                </div>
                <p className="text-ethpays_white text-base">1 day ago (2342342344)</p>
              </div>
              <div className="flex justify-start">
                <div className="min-w-[20%] flex items-center">
                  <DoneAllIcon className="text-ethpays_white-50 mr-1" />
                  <p className="text-ethpays_white-50 text-lg">Status:</p>
                </div>
                <p className="bg-[#00a18433] text-xs p-1 rounded-md border border-[#00a184] text-ethpays_green-100">Confirmed</p>
              </div>

              <div className="w-full border-t border-[--ui-dark-border-color] my-3"></div>
              
              <div className="flex justify-start">
                <div className="min-w-[20%] flex items-center">
                  <TurnLeftIcon className="text-ethpays_white-50 mr-1" />
                  <p className="text-ethpays_white-50 text-lg">From:</p>
                </div>
                <p className="text-ethpays_white text-base flex items-center">
                  etp08000000000000000000000000000000000usdt
                  <Tooltip title="Verified Employee Account">
                    <span className="flex items-center ml-2">
                      (<VerifiedIcon fontSize="10" className="text-ethpays_blue"/>EthPays: anto6314)
                    </span>
                  </Tooltip>
                </p>
              </div>
              <div className="flex justify-start">
                <div className="min-w-[20%] flex items-center">
                  <TurnRightIcon className="text-ethpays_white-50 mr-1" />
                  <p className="text-ethpays_white-50 text-lg">To:</p>
                </div>
                <p className="text-ethpays_white text-base flex items-center">
                  etp07000000000000000000000000000000000usdt 
                  <Tooltip title="Verified Employee Account">
                    <span className="flex items-center ml-2">
                      (<VerifiedIcon fontSize="10" className="text-ethpays_blue"/>EthPays: anto6314)
                    </span>
                  </Tooltip>
                </p>
              </div>

              <div className="w-full border-t border-[--ui-dark-border-color] my-3"></div>

              <div className="flex justify-start">
                <div className="min-w-[20%] flex items-center">
                  <AttachMoneyIcon className="text-ethpays_white-50 mr-1" />
                  <p className="text-ethpays_white-50 text-lg">Value:</p>
                </div>
                <p className="text-ethpays_white text-base">$333.12 Usdt</p>
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
                    333.12 Usdt
                  </span>
                  , From:
                  <Link to={`/tx/asd`} className="text-ethpays_green hover:text-ethpays_green-50 mx-1">
                    etp08...0usdt
                  </Link>
                  To:
                  <Link to={`/tx/asd`} className="text-ethpays_green hover:text-ethpays_green-50 mx-1">
                    etp07...0usdt
                  </Link>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}