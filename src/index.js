import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(`%c
    ________  __    ____                  
   / ____/ /_/ /_  / __ \\____ ___  _______
  / __/ / __/ __ \\/ /_/ / __ \`/ / / / ___/
 / /___/ /_/ / / / ____/ /_/ / /_/ (__  ) 
/_____/\\__/ /_/ /_/    \\__,_/\\__, /____/  
                            /____/        
`, 'color: #768d5c; font-size: 12px; font-weight: bold;');

//make a waring console log printing in red
console.log(
  '%cPasting code into the console can be dangerous to your computer. If someone told you to copy-paste something here to enable a feature or "hack" someone\'s account, it is a scam and will give them access to your computer',
  'color: red; font-size: 18px; font-weight: semibold;'
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
