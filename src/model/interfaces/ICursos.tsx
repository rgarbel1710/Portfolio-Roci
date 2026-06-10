export interface ICursos {
  id: number;
  created_at?: string;
  nombre: string;
  descripcion_corta: string; // <-- Asegúrate de que esté esta línea
  descripcion_larga?: string;
  imagen_url: string;        // <-- Asegúrate de que esté esta línea
}