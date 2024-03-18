import React, { useEffect, useState } from 'react';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import StorageIcon from '@mui/icons-material/Storage';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Skeleton } from '@mui/material';
import { formatDistanceToNow } from 'date-fns';

export default function BlockHero2() {
  const [latestTransactions, setLatestTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const transactionId = "a8c4a726-b1fc-4f6c-a383-74f23e2a5188";

  useEffect(() => {
    async function fetchLatestTransactions() {
      const response = await fetch(process.env.REACT_APP_ETHPAYS_BACKEND_FU + "transaction/latest7");
      const data = await response.json();
      setLatestTransactions(data);
      setLoading(false);
    }
    fetchLatestTransactions();
  }, []);

  return (
    <div className="flex flex-col items-start mt-12 text-ethpays_white 2xl:w-[100%] xl:w-[100%] lg:w-[100%]">
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
      </div>
      {loading ? (
        Array(7).fill(0).map((_, i) => (
          <div key={i} className="col-span-full lg:col-span-2 w-full overflow-hidden flex justify-between items-center py-2 px-4 border border-[--ui-dark-border-color] bg-ethpays">
            <>
              <div className="space-y-3 w-full">
                <div className="flex items-center justify-between">
                  <div className="text-ethpays_white flex items-center">
                    <div className="w-8 h-8 bg-[--ui-dark-border-color] rounded-lg flex items-center justify-center text-ethpays_white-50">
                      <ReceiptLongIcon sx={{fontSize: '22px'}}/>
                    </div>
                    <div className="text-ethpays_white text-sm font-medium ml-4">
                      <p className="text-ethpays_white font-medium">
                        <Skeleton width={100} />
                      </p>
                      <p className="text-ethpays_white-50 text-[10px]">
                        <Skeleton width={100} />
                      </p>
                    </div>
                  </div>
                  <p className={`text-ethpays_white pt-1 pb-1 pl-2 pr-2 text-xs border rounded-md border-ethpays-50`}>
                    <Skeleton width={50} />
                  </p>
                </div>
              </div>
            </>
          </div>
        ))
      ) : (
        latestTransactions.map((tx, i) => (
          <div key={i} className="col-span-full lg:col-span-2 w-full overflow-hidden flex justify-between items-center py-2 px-4 border border-[--ui-dark-border-color] bg-ethpays">
            <>
              <div className="space-y-3 w-full">
                <div className="flex items-center justify-between">
                  <div className="text-ethpays_white flex items-center">
                    <div className="w-8 h-8 bg-[--ui-dark-border-color] rounded-lg flex items-center justify-center text-ethpays_white-50">
                      <ReceiptLongIcon sx={{fontSize: '22px'}}/>
                    </div>
                    <div className="text-ethpays_white text-sm font-medium ml-4">
                      <p className="text-ethpays_white font-medium">
                        <Link to={`/tx/${tx.transactionId}`} className="text-ethpays_green hover:text-ethpays_green-50">
                          {tx.transactionId}
                        </Link>
                      </p>
                      <p className="text-ethpays_white-50 text-[10px]">{formatDistanceToNow(new Date(tx.createdAt * 1))} ago</p>
                    </div>
                  </div>
                  <p className={`text-ethpays_white pt-1 pb-1 pl-2 pr-2 text-xs border rounded-md border-ethpays-50`}>
                    {Math.abs(tx.amount)} {tx.currency}
                  </p>
                </div>
              </div>
            </>
          </div>
        ))
      )}

      <div className="col-span-full lg:col-span-2 w-full overflow-hidden flex justify-center items-center rounded-b-[10px] py-2 px-4 border border-[--ui-dark-border-color] bg-ethpays">
        <button className="flex items-center text-ethpays_white-50 py-1 hover:text-ethpays_white">
          View All
          <ArrowRightAltIcon sx={{fontSize: '18px'}} className='ml-1'/>
        </button>
      </div>
    </div>
  )
}