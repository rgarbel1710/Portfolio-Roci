// src/pages/trabajos/TrabajoDetalleMuestra.tsx
import { useParams } from "react-router-dom";
import { useCurso } from "@/hooks/UseCursos/useCurso";
import { CursoDetalleEstilos } from "./CursoDetalleEstilos";

export const CursoDetalleMuestra = () => {
  const { id } = useParams();
  const { curso, loading, error } = useCurso(id);

  return (
    <div className="bg-slate-950 min-h-screen text-white pt-24 px-6 pb-12">

      {error && (
        <div className="text-center p-10 bg-red-900/20 rounded-xl border border-red-500/50">
          <p className="text-red-400 font-bold">Error al cargar: {error}</p>
        </div>
      )}

      {curso ? (
        <CursoDetalleEstilos servicio={curso} />
      ) : (
        !loading && <p className="text-center text-slate-500">No se encontró el curso solicitado.</p>
      )}
    </div>
  );
};
