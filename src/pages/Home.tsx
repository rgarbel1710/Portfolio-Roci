import { Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    // CAMBIADO: Fuera el bg-slate-950 oscuro. Ahora usamos un degradado luminoso que va de blanco a rosa pastel
    <section id="qsomos" className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-white via-pink-50/20 to-rose-50/50 text-zinc-800 px-6 pt-20 relative overflow-hidden">
      
      {/* Luces sutiles de fondo de color rosa para darle profundidad y belleza a la pantalla */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Lado Izquierdo: Texto adaptado con alto contraste y degradado en las letras */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 leading-none">
            Rocío García Belmonte, <br />
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-600 bg-clip-text text-transparent">
              desarrolladora web
            </span>
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed font-normal max-w-xl">
            Freelance dedicada a la creación de interfaces profesionales. <br />
            Especialista en el ecosistema de React y soluciones modernas.
          </p>
          
          {/* Botones de acción / Iconos en color rosa y gris carbón */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-3.5 rounded-2xl font-bold shadow-md shadow-pink-500/10 transitiontransform hover:-translate-y-0.5 border-none">
              Ver proyectos
            </button>
            
            <div className="flex items-center gap-4 ml-2">
              <a href="https://github.com/rgarbel1710" target="_blank" rel="noopener noreferrer">
                <Github className="cursor-pointer text-zinc-500 hover:text-pink-500 transition-colors w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="cursor-pointer text-zinc-500 hover:text-pink-500 transition-colors w-6 h-6" />
              </a>
              <a href="mailto:rociogarciabelmonte28@gmail.com">
                <Mail className="cursor-pointer text-zinc-500 hover:text-pink-500 transition-colors w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Tu imagen con el efecto de escala gris adaptado a fondo claro */}
        <div className="relative flex justify-center">
          {/* Sombra difuminada rosa detrás de la foto */}
          <div className="absolute inset-0 bg-pink-400/10 blur-3xl rounded-full -z-10"></div>
          
          <div className="w-full max-w-sm rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white/40 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]">
            <img 
              src="https://i.pinimg.com/736x/9b/ef/e9/9befe9d77c6b3fa45c5ac8de016608e1.jpg" 
              alt="Rocío García"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}