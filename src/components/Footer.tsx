import { Github, Instagram, Mail, } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Lado Izquierdo: Nombre */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ROCÍO GARCÍA
            </h2>
            <p className="text-slate-500 text-sm mt-1">Desarrolladora Web</p>
          </div>

          {/* Centro: Iconos Redes Sociales */}
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/rgarbel1710" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-300 shadow-lg"
            >
              <Github size={22} />
            </a>
            
           <a 
            href="https://www.instagram.com/_.rocio.gb/" 
            target="_blank" 
            rel="noopener noreferrer" // Esto es clave para que el navegador no bloquee el salto a IG
            className="p-3 rounded-full bg-slate-900 text-slate-400 hover:text-pink-500 hover:bg-slate-800 transition-all duration-300 shadow-lg"
            >
                <Instagram size={22} />
            </a>

            <a 
              href="mailto:rociogarciabelmonte28@gmail.com" 
              className="p-3 rounded-full bg-slate-900 text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-all duration-300 shadow-lg"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* Línea inferior de Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900/50 text-center">
          <p className="text-slate-600 text-xs tracking-widest uppercase">
            © {year} ROCÍO GARCÍA BELMONTE • TODOS LOS DERECHOS RESERVADOS
          </p>
        </div>
      </div>
    </footer>
  );
};