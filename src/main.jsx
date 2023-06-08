import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Folder1/Routes/Routes.jsx'
import AuthProvider from './Folder2/Authentication/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='max-w-6xl mx-auto'>
  <AuthProvider>
   <React.StrictMode>
  <RouterProvider router={router} >

  </RouterProvider>
  </React.StrictMode>
 </AuthProvider>
 </div>
)
