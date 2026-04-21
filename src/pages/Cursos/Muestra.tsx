import { Estilos } from "./Estilos";
import { useCursos } from "@/hooks/UseCursos/useCursos";

// Definicion de propiedades de entrada

export const Muestra = ( ) => {
    const { cursos, loading, } = useCursos();

    if (loading) return <div className="text-white bg-slate-950 min-h-screen pt-24 px-6">Cargando servicios...</div>;
    // Muesta el listado de cartas (La informacion de los servicions)
    return(
        // 1 grid Activarlo
        // 2 Grap-6 espacion entre targetas
        // 3 sm:grid-cols-2 en pantallas pequeñas
        // 4 lg:grid-col-3 en pantallas gradnes
        // 5 bg-slate-950 color de fondo
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 bg-slate-950 p-30">
        {
            cursos.map((curso) => (
            <Estilos
            key={curso.id}
            // paramentro de entrada del componente ServicioCard, que es un objeto con la informacion de un servicon concreto
            servicio = {curso}
            />
            ))
        }
        </div>
    )
}