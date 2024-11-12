import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router-dom";

import Init from './init'
import { CombinedDataProvider } from './DATA/CombinedDataContext';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./index.css"
import "./assets/universal-style/uni-style.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <CombinedDataProvider>
    <HashRouter>
      <Init />
    </HashRouter>
  </CombinedDataProvider>
</StrictMode>,
)
