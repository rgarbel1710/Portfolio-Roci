// src/pages/Formacion/FormacionMuestra.tsx
import { FormacionEstilos } from "./FormacionEstilos";
import { useFormacion } from "../../hooks/useFormacion/useFormacion";
import type { IFormacion } from "../../model/interfaces/IFormacion";

export const FormacionMuestra = () => {
  const { formacion, loading, error } = useFormacion(); 

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-pink-500 animate-pulse text-xl font-bold tracking-widest">CARGANDO FORMACIÓN...</span>
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
          Historial Académico
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight">
          MI FORMACIÓN <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-fucsia-500">PROFESIONAL</span>
        </h1>
        <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full"></div>
      </div>

      {formacion.length === 0 ? (
        <p className="text-zinc-400 text-center font-medium">No hay datos de formación disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formacion.map((item: IFormacion) => (
            <FormacionEstilos key={item.id} servicio={item} />
          ))}
        </div>
      )}
    </div>
  );
};