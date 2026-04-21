import { useEffect, useState } from 'react';
import type { ICursos } from '@/model/interfaces/ICursos';
import { supabase } from '@/lib/supabase';

export const useCursos = () => {
  const [cursos, setCursos] = useState<ICursos[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCursos = async () => {
      const { data, error } = await supabase
        .from('cursos') 
        .select('*');

      if (!error && data) {
        setCursos(data);
      }
      setLoading(false);
    };

    fetchCursos();
  }, []);

  return { cursos, loading };
};
