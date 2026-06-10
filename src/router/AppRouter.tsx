import { BrowserRouter, Route, Routes } from "react-router-dom"; // Esto es un paquete npm install react-router-dom
import { MainLayout } from "../Layouts/MainLayout";
import  Home  from "../pages/Home";
import { Muestra } from "../pages/Cursos/Muestra";
import  Contacto  from "../pages/Contacto";
import { CursoDetalleMuestra } from "../pages/Cursos/DetalleCursos/CursoDetalleMuestra";
import { FormacionMuestra } from "@/pages/Formacion/FormacionMuestra";
// 1. IMPORTAMOS EL COMPONENTE DE GESTIÓN AQUÍ ARRIBA:
import GestionCursos from "../pages/Gestion/GestionCursos";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* 1. Abrimos la ruta del Layout (sin el "/" inicial aquí) */}
                <Route path="/" element={<MainLayout />}>
                    
                    {/* Estos son los elemenentos que vayamos a tocar y nos cambiaran de pagina*/}
                    {/* Esto se renderiza en el <Outlet /> */}
                    <Route index element={<Home />} /> {/* Importante el index hace que la ruta por defecto sea la raiz en este caso /*/}
                    <Route path="/cursos" element={<Muestra />} />
                    {/* <Route path="/trabajos/:id" element={<TrabajoDetalle  />} /> */}
                    <Route path="/cursos/:id" element={<CursoDetalleMuestra />} />
                    <Route path="/Formacion" element={<FormacionMuestra />} />
                    <Route path="/contacto" element={<Contacto />} />
                    
                    {/* 2. AÑADIMOS LA NUEVA RUTA AQUÍ ABAJO: */}
                    <Route path="/gestion" element={<GestionCursos />} />
                    
                </Route> 
            </Routes>
        </BrowserRouter>
    )
}