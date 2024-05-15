import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from './routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className="max-w-7xl mx-auto">
   <React.StrictMode>
   <HelmetProvider><AuthProvider> <RouterProvider router={router} /></AuthProvider></HelmetProvider>
  </React.StrictMode>,
 </div>
)
