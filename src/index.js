import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/AleksandrFisun/goit-react-1-repeat">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
