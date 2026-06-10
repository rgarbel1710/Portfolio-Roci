// src/pages/Cursos/Muestra.tsx
import { Estilos as CursoEstilos } from "./Estilos"; 
import { useCursos } from "../../hooks/UseCursos/useCursos";
import type { ICursos } from "../../model/interfaces/ICursos";

export const Muestra = () => {
  const { cursos, loading, error } = useCursos(); 

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-pink-500 animate-pulse text-xl font-bold tracking-widest">CARGANDO CURSOS...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 font-semibold">
        Error al conectar: {error}
      </div>
    );
  }

  return (
    <div className="pt-28 px-6 pb-20 max-w-7xl mx-auto w-full">
      {/* Cabecera Estilizada */}
      <div className="text-center mb-16 space-y-3">
        <span className="text-xs font-bold tracking-widest text-pink-500 uppercase bg-pink-100/60 px-3 py-1 rounded-full">
          Formación Oficial
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight">
          MIS CURSOS Y <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-fucsia-500">CERTIFICACIONES</span>
        </h1>
        <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full"></div>
      </div>

      {cursos.length === 0 ? (
        <p className="text-zinc-400 text-center font-medium">No hay cursos disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cursos.map((item: ICursos) => (
            <CursoEstilos key={item.id} curso={item} />
          ))}
        </div>
      )}
    </div>
  );
};