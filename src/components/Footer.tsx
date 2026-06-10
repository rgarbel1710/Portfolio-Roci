import { Github, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    // CAMBIADO: Fondo blanco, borde superior gris suave
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Lado Izquierdo: Nombre con el nuevo gradiente rosa/fucsia */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-black bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
              ROCÍO GARCÍA
            </h2>
            <p className="text-gray-500 text-sm font-medium mt-1">Desarrolladora Web</p>
          </div>

          {/* Centro: Iconos Redes Sociales adaptados a la estética clara */}
          <div className="flex items-center gap-6">
            {/* GitHub */}
            <a 
              href="https://github.com/rgarbel1710" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-50 border border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-gray-100 hover:border-gray-300 transition-all duration-300 shadow-sm"
            >
              <Github size={22} />
            </a>
            
            {/* Instagram: se ilumina en rosa */}
            <a 
              href="https://www.instagram.com/_.rocio.gb/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-50 border border-gray-200 text-gray-500 hover:text-pink-500 hover:bg-pink-50 hover:border-pink-200 transition-all duration-300 shadow-sm"
            >
              <Instagram size={22} />
            </a>

            {/* Email */}
            <a 
              href="mailto:rociogarciabelmonte28@gmail.com" 
              className="p-3 rounded-full bg-gray-50 border border-gray-200 text-gray-500 hover:text-rose-500 hover:bg-rose-50 hover:border-rose-200 transition-all duration-300 shadow-sm"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* Línea inferior de Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-400 text-xs tracking-widest uppercase font-semibold">
            © {year} ROCÍO GARCÍA BELMONTE • TODOS LOS DERECHOS RESERVADOS
          </p>
        </div>
      </div>
    </footer>
  );
};