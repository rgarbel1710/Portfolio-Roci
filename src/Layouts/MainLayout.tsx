import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer' // Importación añadida

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <header>
        <NavBar />
      </header>
      
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Aquí ya no usamos etiquetas footer manuales, usamos el componente Footer */}
      <Footer />
    </div>
  )
}