// src/Layouts/MainLayout.tsx
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'

export const MainLayout = () => {
  return (
    // DEGRADADO MAESTRO: Controla el fondo de TODA la web de arriba a abajo
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white via-pink-50/40 to-rose-100/70 text-zinc-800 antialiased">
      <header>
        <NavBar />
      </header>
      
      {/* Las páginas se cargan aquí transparentes para adoptar el degradado */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}