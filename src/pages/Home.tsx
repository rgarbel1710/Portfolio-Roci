import { Github, Linkedin, Mail } from 'lucide-react'; // Tus nuevos iconos

export default function Home() {
  return (
    <section id="qsomos" className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Lado Izquierdo: Texto */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Rocío García Belmonte, <span className="text-blue-500">desarrolladora web</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Freelance dedicada a la creación de interfaces profesionales. 
            Especialista en el ecosistema de React y soluciones modernas.
          </p>
          
          {/* Botones de acción / Iconos */}
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition">
              Ver proyectos
            </button>
            <div className="flex items-center gap-4 ml-4">
              <Github className="cursor-pointer hover:text-blue-500 transition" />
              <Linkedin className="cursor-pointer hover:text-blue-500 transition" />
              <Mail className="cursor-pointer hover:text-blue-500 transition" />
            </div>
          </div>
        </div>

        {/* Lado Derecho: Imagen con efecto */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
          <img 
            src="https://i.pinimg.com/736x/9b/ef/e9/9befe9d77c6b3fa45c5ac8de016608e1.jpg" 
            alt="Rocío García"
            className="relative z-10 w-full max-w-sm rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition duration-500"
          />
        </div>

      </div>
    </section>
  );
}