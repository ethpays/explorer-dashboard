import StorageIcon from '@mui/icons-material/Storage';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PublicIcon from '@mui/icons-material/Public';

export default function BlockHero() {
  return (
    <>
      <div className="mt-12 col-span-full lg:col-span-2 w-[100%] overflow-hidden flex justify-between items-center py-3 px-4 rounded-[10px] border border-[--ui-dark-border-color] bg-ethpays">
        <div className="w-1/3 border-r border-[--ui-dark-border-color]">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[--ui-dark-border-color] rounded-full flex items-center justify-center">
                <StorageIcon className="text-[--text-dark-title-color]" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg text-ethpays_white-50">Total Transactions</h3>
                <p className="text-sm font-semibold text-[--text-dark-body-color]">25'343 Tranasctions</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 border-r border-[--ui-dark-border-color]">
          <div className="flex items-center justify-between ml-5">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[--ui-dark-border-color] rounded-full flex items-center justify-center">
                <PublicIcon className="text-[--text-dark-title-color]" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg text-ethpays_white-50">Ethpays Mkt Cap</h3>
                <p className="text-sm font-semibold text-[--text-dark-body-color]">$11'233'641.22</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="flex items-center justify-between ml-5">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[--ui-dark-border-color] rounded-full flex items-center justify-center">
                <EqualizerIcon className="text-[--text-dark-title-color]" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg text-ethpays_white-50">Total Volume</h3>
                <p className="text-sm font-semibold text-[--text-dark-body-color]">$55.33 M (usdt)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}