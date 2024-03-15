import React, { useState } from 'react';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import StorageIcon from '@mui/icons-material/Storage';
import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function BlockHero2() {
  const [loading, setLoading] = useState(false);

  const transactionId = "a8c4a726-b1fc-4f6c-a383-74f23e2a5188";
  return (
    <div className="flex flex-col items-start mt-12 text-ethpays_white w-[75%]">
      <div className="col-span-full lg:col-span-2 w-full overflow-hidden flex justify-between items-center py-3 px-4 rounded-t-[10px] border border-[--ui-dark-border-color] bg-ethpays">
        <>
          <div className="space-y-3 w-full">
            <div className="flex items-center justify-between">
              <div className="text-ethpays_white flex items-center">
                <div className="w-8 h-8 bg-[--ui-dark-border-color] rounded-full flex items-center justify-center mr-1">
                  <StorageIcon sx={{fontSize: '18px'}}/>
                </div>
                <p className="ml-1 tracking-wide text-lg">Latest Transactions</p>
              </div>
              <div className="flex items-center text-ethpays_white">
                <button className="bg-ethpays-50 text-ethpays_white pt-1 pb-1 pl-2 pr-2 text-xs hover:text-ethpays_white-50" style={{borderRadius: '4px'}}>
                  View More
                </button>
              </div>
            </div>
          </div>
        </>
      </div
      >
      {Array(7).fill(0).map((_, i) => (
      <div className="col-span-full lg:col-span-2 w-full overflow-hidden flex justify-between items-center py-2 px-4 border border-[--ui-dark-border-color] bg-ethpays">
        <>
          <div className="space-y-3 w-full">
            <div className="flex items-center justify-between">
              <div className="text-ethpays_white flex items-center">
                <div className="w-8 h-8 bg-[--ui-dark-border-color] rounded-lg flex items-center justify-center text-ethpays_white-50">
                  <ReceiptLongIcon sx={{fontSize: '22px'}}/>
                </div>
                <div className="text-ethpays_white text-sm font-medium ml-4">
                  <p className="text-ethpays_white font-medium">
                    <Link to={`/transaction/${transactionId}`} className="text-ethpays_green hover:text-ethpays_green-50">
                      {transactionId.substring(0, 8) + '... ' + transactionId.slice(-8)}
                    </Link>
                  </p>
                  <p className="text-ethpays_white-50 text-[10px]">12 Sec. ago</p>
                </div>
              </div>
              <p className={`text-ethpays_white pt-1 pb-1 pl-2 pr-2 text-xs border rounded-md border-ethpays-50`}>
                3'112.23 Usdt
              </p>
            </div>
          </div>
        </>
      </div>
      ))}

      <div className="col-span-full lg:col-span-2 w-full overflow-hidden flex justify-center items-center rounded-b-[10px] py-2 px-4 border border-[--ui-dark-border-color] bg-ethpays">
        <button className="flex items-center text-ethpays_white-50 py-1 hover:text-ethpays_white">
          View All
          <ArrowRightAltIcon sx={{fontSize: '18px'}} className='ml-1'/>
        </button>
      </div>
    </div>
  )
}