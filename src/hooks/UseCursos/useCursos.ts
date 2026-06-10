import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase'; // Ajusta la ruta según tu proyecto
import type { ICursos } from '../../model/interfaces/ICursos';

export const useCursos = () => {
  const [cursos, setCursos] = useState<ICursos[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        setLoading(true);
        // Pedimos todos los datos de la tabla 'cursos'
        const { data, error: supabaseError } = await supabase
          .from('cursos')
          .select('*'); 

        if (supabaseError) throw supabaseError;
        setCursos(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCursos();
  }, []);

  return { cursos, loading, error };
};