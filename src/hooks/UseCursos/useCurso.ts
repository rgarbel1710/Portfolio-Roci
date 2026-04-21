// src/hooks/useServicio.ts
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import type { ICursos } from '../../model/interfaces/ICursos';

export const useCurso = (id: string | undefined) => {
  const [curso, setCurso] = useState<ICursos | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCurso = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const { data, error: supabaseError } = await supabase
          .from('cursos') // Nombre de tu tabla en minúsculas
          .select('*')
          .eq('id', id)
          .single(); // Solo un resultado

        if (supabaseError) throw supabaseError;
        setCurso(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCurso();
  }, [id]);

  return { curso, loading, error };
};