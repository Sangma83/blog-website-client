import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from './routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className="max-w-7xl mx-auto font-lato">
   <React.StrictMode>
   <QueryClientProvider client={queryClient}>
   <HelmetProvider><AuthProvider> <RouterProvider router={router} /></AuthProvider></HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
 </div>
)
