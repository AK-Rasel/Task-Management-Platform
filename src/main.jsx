import React from 'react'
import ReactDOM from 'react-dom/client'
import  { Toaster } from 'react-hot-toast';

import './index.css'
import { RouterProvider } from 'react-router-dom'
import createrouter from './Router/createrouter.jsx'
import AuthProvider from './Auth/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={createrouter} />
    <Toaster />
    </AuthProvider>
    
  </React.StrictMode>,
)
