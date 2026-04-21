// src/hooks/useFormacion/useFormacion.ts
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import type { IFormacion } from '../../model/interfaces/IFormacion';

export const useFormacion = () => {
  const [formaciones, setFormaciones] = useState<IFormacion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFormacion = async () => {
      try {
        setLoading(true);
        const { data, error: supabaseError } = await supabase
          .from('formacion') // Asegúrate que en Supabase se llame así
          .select('*');

        if (supabaseError) throw supabaseError;
        setFormaciones(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFormacion();
  }, []);

  return { formaciones, loading, error };
};