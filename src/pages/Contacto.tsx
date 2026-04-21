import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contacto() {
  return (
    <div id="contacto" className="relative isolate bg-slate-950 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Contacto</h2>
          <p className="mt-2 text-lg leading-8 text-gray-400">¿Tienes un proyecto en mente? ¡Hablemos!</p>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
          
          {/* Columna Izquierda: Datos y Mapa */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-white">Ubicación y Datos</h3>
              <p className="mt-4 text-lg text-gray-400">
                Ubicada en Albox, Almería. Siempre abierta a nuevas ideas y colaboraciones, 
                ya sea con un café de por medio o a través de una pantalla.
              </p>

              <dl className="mt-10 space-y-6 text-base text-gray-300">
                <div className="flex gap-x-4 items-center">
                  <MapPinIcon className="h-6 w-6 text-indigo-400" />
                  <span>Albox, Almería (España)</span>
                </div>
                <div className="flex gap-x-4 items-center">
                  <PhoneIcon className="h-6 w-6 text-indigo-400" />
                  <a href="tel:+34722819839" className="hover:text-indigo-400 transition">+34 722 81 98 39</a>
                </div>
                <div className="flex gap-x-4 items-center">
                  <EnvelopeIcon className="h-6 w-6 text-indigo-400" />
                  <a href="mailto:rociogarciabelmonte28@gmail.com" className="hover:text-indigo-400 transition">
                    rociogarciabelmonte28@gmail.com
                  </a>
                </div>
              </dl>
            </div>

            {/* MAPA DE ALBOX OPTIMIZADO */}
            <div className="mt-10 h-80 w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                title="Mapa Albox"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12711.131102927233!2d-2.1384483!3d37.3879133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6fe07f28637777%3A0x403d650630b9680!2s04800%20Albox%2C%20Almer%C3%ADa!5e0!3m2!1ses!2ses!4v1710000000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Columna Derecha: Formulario (con corrección POST) */}
          <div className="bg-white/5 p-8 rounded-3xl ring-1 ring-white/10 shadow-xl">
            <form action="https://formspree.io/f/mlgoejyo" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-gray-300">Nombre</label>
                  <input type="text" name="name" required className="mt-2 w-full rounded-lg bg-white/5 border-white/10 text-white focus:ring-2 focus:ring-indigo-500 py-2 px-4" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300">Apellido</label>
                  <input type="text" name="lastname" className="mt-2 w-full rounded-lg bg-white/5 border-white/10 text-white focus:ring-2 focus:ring-indigo-500 py-2 px-4" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300">Email</label>
                <input type="email" name="email" required className="mt-2 w-full rounded-lg bg-white/5 border-white/10 text-white focus:ring-2 focus:ring-indigo-500 py-2 px-4" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300">Mensaje</label>
                <textarea name="message" rows={4} required className="mt-2 w-full rounded-lg bg-white/5 border-white/10 text-white focus:ring-2 focus:ring-indigo-500 py-2 px-4"></textarea>
              </div>
              <button type="submit" className="w-full bg-indigo-600 py-3 rounded-lg font-bold text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/20 transition-all">
                Enviar Mensaje
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}