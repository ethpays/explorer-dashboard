import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchHero() {
  return (
    <>
      <h1 className="text-3xl font-medium mb-4">The EthPays Explorer</h1>
      <TextField
        className="border text-sm rounded-lg mt block w-[650px] dark:bg-ethpays-50 dark:border-ethpays-50 dark:placeholder-ethpays dark:text-ethpays_white dark:focus:ring-ethpays_green dark:focus:border-ethpays_green"
        sx={{
          input: {
            color: 'white',
          },
          '& label.Mui-focused': {
            color: 'transparent',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'transparent',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'transparent',
            },
            '&:hover fieldset': {
              borderColor: 'transparent',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent',
            },
          },
        }}
        placeholder="Search by Address, or Transaction"
        size='small'
        InputProps={{
          endAdornment: (
            <>
              <InputAdornment position="end">
                <button className="text-ethpays_white bg-ethpays-100 -mr-1 p-1 rounded-[8px] hover:text-ethpays_white-50">
                  <SearchIcon />
                </button>
              </InputAdornment>
            </>
          ),
        }}
      />
    </>
  )
}