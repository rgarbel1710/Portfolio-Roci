import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase'; // Asegúrate de que la ruta a tu cliente de Supabase sea la correcta
import type { IFormacion } from '../../model/interfaces/IFormacion';

export const useFormacion = () => {
  const [formacion, setFormacion] = useState<IFormacion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFormacion = async () => {
      try {
        setLoading(true);
        
        // Aquí le pedimos a Supabase los datos de tu nueva tabla 'formacion'
        const { data, error: supabaseError } = await supabase
          .from('formacion')
          .select('*');

        if (supabaseError) throw supabaseError;
        
        setFormacion(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFormacion();
  }, []);

  return { formacion, loading, error };
};