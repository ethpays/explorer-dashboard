import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Usa Routes invece di Switch
import './css/scrollbar.css';

import NotFound from './pages/not-found';

const theme = createTheme({
  palette: {
    primary: {
      main: '#768d5c',
    },
    secondary: {
      main: '#768d5c',
    },
    text: {
      primary: '#768d5c',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#768d5c',
            },
            '&:hover fieldset': {
              borderColor: '#768d5c',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#768d5c',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#768d5c',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#121212',
        },
      },
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Router>
            <Routes>
                <Route path="/" element={<h1>ciao</h1>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    </ThemeProvider>
  );
}

export default App;