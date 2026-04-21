// src/pages/trabajos/CursoDetalleEstilos.tsx
import type { ICursos } from "@/model/interfaces/ICursos";

interface Props {
  servicio: ICursos;
}

export const CursoDetalleEstilos = ({ servicio }: Props) => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        {servicio.titulo}
      </h1>
      
      <div className="relative group mb-8">
        <img 
          src={servicio.Imagen} 
          alt={servicio.titulo} 
          className="w-full h-[400px] object-cover rounded-2xl shadow-2xl border border-slate-800"
        />
        <div className="absolute top-4 left-4 bg-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
          {servicio.certificado}
        </div>
      </div>

      <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm">
        <h2 className="text-xl font-semibold mb-4 text-blue-300">Descripción del Proyecto</h2>
        <p className="text-slate-300 text-lg leading-relaxed italic">
          "{servicio.descripcion}"
        </p>
      </div>
    </div>
  );
};
