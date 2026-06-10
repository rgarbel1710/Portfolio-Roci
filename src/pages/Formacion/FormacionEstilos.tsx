// src/pages/Formacion/FormacionEstilos.tsx
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"
import type { IFormacion } from "@/model/interfaces/IFormacion"

interface Props {
  servicio: IFormacion
}

export const FormacionEstilos = ({ servicio }: Props) => {
  return (
    // DISEÑO ACTUALIZADO: Tarjeta idéntica a la de cursos, redondeada, con fondo blanco limpio y efectos interactivos
    <Card className="bg-white/70 backdrop-blur-md border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between">
      
      <div>
        {/* Contenedor del Logo de la Institución con fondo gris claro */}
        <div className="aspect-video w-full bg-zinc-50 border-b border-gray-100 flex items-center justify-center overflow-hidden p-6">
          {servicio.imagen_url ? (
            <img 
              src={servicio.imagen_url} 
              alt={servicio.institucion} 
              className="w-full h-full object-contain" 
            />
          ) : (
            <span className="text-5xl">🎓</span>
          )}
        </div>
        
        <CardHeader className="space-y-3">
          <div className="flex justify-between items-center">
            {/* Badge adaptado a los tonos rositas */}
            <Badge className="bg-pink-50 text-pink-600 border border-pink-100 hover:bg-pink-100 font-bold w-fit rounded-lg px-2.5 py-0.5 text-xs">
              {servicio.titulo.toLowerCase().includes("inglés") || servicio.titulo.toLowerCase().includes("trinity") ? "Idioma" : "Educación"}
            </Badge>
            {/* Fecha del estudio */}
            <span className="text-xs font-semibold text-zinc-400">{servicio.fecha || "Presente"}</span>
          </div>

          <CardTitle className="text-zinc-900 text-xl font-bold tracking-tight line-clamp-1">
            {servicio.titulo}
          </CardTitle>
          
          {/* Nombre de la institución en rosa destacado */}
          <p className="text-xs font-bold uppercase tracking-wider text-pink-600">
            {servicio.institucion}
          </p>

          <CardDescription className="text-zinc-500 line-clamp-3 text-sm leading-relaxed">
            {servicio.descripcion}
          </CardDescription>
        </CardHeader>
      </div>

      <CardFooter className="pt-0">
        <Link to={`/formacion/${servicio.id}`} className="w-full">
          {/* Botón con el mismo degradado exacto de Cursos */}
          <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold rounded-xl shadow-md shadow-pink-500/10 transition-all border-none">
            Ver Detalles
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}