import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom"
import type { IFormacion } from "@/model/interfaces/IFormacion"

interface Props {
    servicio: IFormacion
}

export const FormacionEstilos = ({servicio}: Props) => {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 bg-slate-900 border-slate-800 overflow-hidden">
      {/* 1. Usamos el campo ICONO como un distintivo visual arriba */}
      <div className="relative z-20 aspect-video w-full bg-slate-800 flex items-center justify-center text-6xl">
        {servicio.icono || "🎓"}
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
           {/* 2. Mostramos el TIPO (ej: FP, BAC) en el Badge */}
          <Badge variant="secondary" className="bg-blue-600 text-white">
            {servicio.tipo}
          </Badge>
          <span className="text-xs text-slate-500">{servicio.fecha}</span>
        </div>

        {/* 3. El TITULO es el nombre del estudio */}
        <CardTitle className="text-white">{servicio.titulo}</CardTitle>
        
        {/* 4. El CENTRO es donde lo estudiaste */}
        <p className="text-sm text-blue-400 font-medium">{servicio.centro}</p>

        <CardDescription className="text-slate-400 line-clamp-3">
          {servicio.descripcion}
        </CardDescription>
      </CardHeader>

      <CardFooter>
        <Link to={`/Formacion/${servicio.id}`} className="w-full">
          <Button className="w-full bg-blue-600 hover:bg-blue-500">Ver Detalles</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}