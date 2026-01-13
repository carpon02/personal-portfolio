import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from '@/App.tsx'
import { Sidebar } from '@/components/Sidebar'
import { FloatingMenu } from '@/components/FloatingMenu'
import { Profile } from '@/components/Profile'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className=" min-h-screen lg:flex lg:justify-center lg:items-start lg:gap-10">
      <Sidebar />
      <Profile/>
      <FloatingMenu/>
      <App />
    </div>
  </StrictMode>,
)
