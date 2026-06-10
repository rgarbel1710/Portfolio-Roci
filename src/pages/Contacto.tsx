import { useState } from 'react';
// 1. Importamos el cliente de Supabase que acabas de crear una carpeta atrás
import { supabase } from '../supabaseClient'; 
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contacto() {
  // 2. Creamos los estados para guardar los datos del formulario y los mensajes de éxito/error
  const [formData, setFormData] = useState({ name: '', lastname: '', email: '', message: '' });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; msg: string }>({ type: null, msg: '' });

  // 3. Función para leer lo que escribe el usuario en tiempo real
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 4. Función que se ejecuta al pulsar el botón de enviar
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, msg: '' });
    
    // Conectamos con tu tabla 'contactos' de Supabase e insertamos los campos
    const { error } = await supabase
      .from('contactos')
      .insert([
        { 
          nombre: formData.name, 
          apellido: formData.lastname, 
          email: formData.email, 
          mensaje: formData.message 
        }
      ]);

    if (!error) {
      setStatus({ type: 'success', msg: '¡Mensaje enviado correctamente a la base de datos de Supabase!' });
      setFormData({ name: '', lastname: '', email: '', message: '' }); // Limpia el formulario
    } else {
      setStatus({ type: 'error', msg: 'Hubo un error al conectar con el backend de Supabase.' });
      console.error(error);
    }
  };

  return (
    <div id="contacto" className="relative isolate bg-transparent px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        <div className="mx-auto max-w-2xl text-center mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-pink-500 uppercase bg-pink-100/60 px-3 py-1 rounded-full">
            ¿Hablamos?
          </span>
          <h2 className="text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl uppercase">
            CON<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">TACTO</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg leading-8 text-zinc-600">¿Tienes un proyecto en mente? ¡Ponte en contacto conmigo!</p>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
          
          {/* Datos de contacto y Mapa */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-black tracking-tight text-zinc-900">Ubicación y Datos</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Ubicada en Albox, Almería. Siempre abierta a nuevas ideas y colaboraciones.
              </p>

              <dl className="mt-10 space-y-6 text-base text-zinc-700 font-medium">
                <div className="flex gap-x-4 items-center">
                  <div className="p-2 bg-pink-50 border border-pink-100 rounded-xl text-pink-500">
                    <MapPinIcon className="h-6 w-6" />
                  </div>
                  <span>Albox, Almería (España)</span>
                </div>
                <div className="flex gap-x-4 items-center">
                  <div className="p-2 bg-pink-50 border border-pink-100 rounded-xl text-pink-500">
                    <PhoneIcon className="h-6 w-6" />
                  </div>
                  <a href="tel:+34722819839" className="hover:text-pink-600 transition-colors">+34 722 81 98 39</a>
                </div>
                <div className="flex gap-x-4 items-center">
                  <div className="p-2 bg-pink-50 border border-pink-100 rounded-xl text-pink-500">
                    <EnvelopeIcon className="h-6 w-6" />
                  </div>
                  <a href="mailto:rociogarciabelmonte28@gmail.com" className="hover:text-pink-600 transition-colors break-all">
                    rociogarciabelmonte28@gmail.com
                  </a>
                </div>
              </dl>
            </div>

            <div className="mt-10 h-80 w-full rounded-3xl overflow-hidden border border-gray-200/60 shadow-lg">
              <iframe
                title="Mapa Albox"
                src="http://googleusercontent.com/maps.google.com/2"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Formulario conectado a Supabase */}
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-3xl border border-gray-100 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Alertas de éxito o error */}
              {status.type && (
                <div className={`p-4 rounded-xl text-sm font-semibold ${status.type === 'success' ? 'bg-green-50 text-green-600 border border-green-200' : 'bg-red-50 text-red-600 border border-red-200'}`}>
                  {status.msg}
                </div>
              )}

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-zinc-700">Nombre</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="mt-2 w-full rounded-xl bg-gray-50/50 border border-gray-200 text-zinc-800 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 focus:outline-none py-2.5 px-4 transition-all" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-zinc-700">Apellido</label>
                  <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} className="mt-2 w-full rounded-xl bg-gray-50/50 border border-gray-200 text-zinc-800 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 focus:outline-none py-2.5 px-4 transition-all" />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-zinc-700">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="mt-2 w-full rounded-xl bg-gray-50/50 border border-gray-200 text-zinc-800 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 focus:outline-none py-2.5 px-4 transition-all" />
              </div>
              <div>
                <label className="text-sm font-semibold text-zinc-700">Mensaje</label>
                <textarea name="message" rows={4} value={formData.message} onChange={handleChange} required className="mt-2 w-full rounded-xl bg-gray-50/50 border border-gray-200 text-zinc-800 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 focus:outline-none py-2.5 px-4 transition-all"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 py-3.5 rounded-2xl font-bold text-white shadow-md shadow-pink-500/10 transition-all transform hover:-translate-y-0.5 border-none cursor-pointer">
                Enviar Mensaje
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}