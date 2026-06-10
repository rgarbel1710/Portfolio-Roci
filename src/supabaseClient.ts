// src/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

// Aquí le decimos a Vite que vaya al archivo .env a buscar tus credenciales reales
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Si tus variables en el .env no empiezan por "VITE_", cámbialas por: process.env.REACT_APP_...

export const supabase = createClient(supabaseUrl, supabaseAnonKey)