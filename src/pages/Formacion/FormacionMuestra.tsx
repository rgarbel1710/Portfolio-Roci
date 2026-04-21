import { FormacionEstilos } from "./FormacionEstilos";
// Importación corregida con la nueva ruta en minúsculas
import { useFormacion } from "../../hooks/useFormacion/useFormacion";
import type { IFormacion } from "../../model/interfaces/IFormacion";

export const FormacionMuestra = () => {
  // Extraemos 'formaciones' (plural) tal como lo definiste en tu hook
  const { formaciones, loading } = useFormacion(); 

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <span className="text-blue-400 animate-pulse text-xl">Cargando formación...</span>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen pt-24 px-6 pb-12">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Mi Formación</h1>
        <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Usamos 'formaciones' que es el array que viene de Supabase */}
        {formaciones.map((item: IFormacion) => (
          <FormacionEstilos key={item.id} servicio={item} />
        ))}
      </div>
    </div>
  );
};