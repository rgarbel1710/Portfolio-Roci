// src/pages/Cursos/Estilos.tsx
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"
import type { ICursos } from "@/model/interfaces/ICursos"

interface Props {
  curso: ICursos
}

export const Estilos = ({ curso }: Props) => {
  return (
    <Card className="bg-white/70 backdrop-blur-md border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between">
      
      <div>
        {/* Contenedor de Imagen */}
        <div className="aspect-video w-full bg-zinc-50 border-b border-gray-100 flex items-center justify-center overflow-hidden">
          {curso.imagen_url ? (
            <img src={curso.imagen_url} alt={curso.nombre} className="w-full h-full object-cover" />
          ) : (
            <span className="text-5xl">💻</span>
          )}
        </div>
        
        <CardHeader className="space-y-3">
          <Badge className="bg-pink-50 text-pink-600 border border-pink-100 hover:bg-pink-100 font-bold w-fit rounded-lg px-2.5 py-0.5 text-xs">
            Certificación
          </Badge>
          <CardTitle className="text-zinc-900 text-xl font-bold tracking-tight line-clamp-2 min-h-[56px]">
            {curso.nombre}
          </CardTitle>
          <CardDescription className="text-zinc-500 line-clamp-3 text-sm leading-relaxed">
            {curso.descripcion_corta}
          </CardDescription>
        </CardHeader>
      </div>

      <CardFooter className="pt-0">
        <Link to={`/cursos/${curso.id}`} className="w-full">
          <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold rounded-xl shadow-md shadow-pink-500/10 transition-all border-none">
            Ver Credencial
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}