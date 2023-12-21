import React from 'react'
import ReactDOM from 'react-dom/client'
import  { Toaster } from 'react-hot-toast';

import './index.css'
import { RouterProvider } from 'react-router-dom'
import createrouter from './Router/createrouter.jsx'
import AuthProvider from './Auth/AuthProvider.jsx'


import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={createrouter} />
    <Toaster />
    </AuthProvider>
    </QueryClientProvider>
    
  </React.StrictMode>,
)
