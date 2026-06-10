import { Link, useLocation } from "react-router-dom";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const opciones = [
  { title: 'Home', href: '/', current: false },
  { title: 'Cursos', href: '/cursos', current: false },
  { title: 'Formación', href: '/formacion', current: false },
  { title: 'Contacto', href: '/contacto', current: false },
  { title: 'Gestión', href: '/gestion', current: false },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

function NavBar() {
  const location = useLocation();

  return (
    // CAMBIADO: Ahora el contenedor exterior centra la barra y la separa del techo de la web
    <div className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 flex justify-center">
      
      {/* NAVBAR REDONDEADO: Añadimos max-w-7xl, rounded-2xl, un fondo blanco sutil con desenfoque y sombra */}
      <Disclosure as="nav" className="w-full max-w-7xl bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl shadow-md transition-all duration-300">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            
            {/* Botón menú móvil */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-xl p-2 text-zinc-600 hover:bg-pink-50 hover:text-pink-500 focus:outline-none">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <Link to="/">
                  <img
                    alt="Logo"
                    src="https://cdn-icons-png.freepik.com/512/17966/17966738.png"
                    className="h-9 w-auto cursor-pointer"
                  />
                </Link>
              </div>

              {/* Menú Desktop */}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-1">
                  {opciones.map((item) => {
                    const isCurrent = location.pathname === item.href;
                    return (
                      <Link
                        key={item.title}
                        to={item.href}
                        className={classNames(
                          // Botones del menú con bordes redondeados bonitos
                          isCurrent 
                            ? 'bg-pink-100 text-pink-600 font-bold' 
                            : 'text-zinc-600 hover:bg-pink-50/60 hover:text-pink-500',
                          'rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200'
                        )}
                      >
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Lado derecho */}
            <div className="flex items-center pr-2 sm:static sm:ml-6 sm:pr-0">
              <button type="button" className="text-zinc-500 hover:text-pink-500 transition-colors p-2 rounded-xl hover:bg-pink-50/50">
                <BellIcon className="size-5" />
              </button>

              <Menu as="div" className="relative ml-3">
                <MenuButton className="flex rounded-full bg-zinc-200 text-sm focus:outline-none ring-2 ring-transparent hover:ring-pink-400 transition-all">
                  <img
                    alt="Perfil"
                    src="https://i.pinimg.com/736x/fd/3d/17/fd3d176fe202c8a6a644488f1a91c144.jpg"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-2xl bg-white/95 backdrop-blur-md py-1 shadow-xl border border-zinc-100 focus:outline-none">
                  <MenuItem>
                    <Link to="/perfil" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-pink-50 hover:text-pink-600 transition-colors">Profile</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/settings" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-pink-50 hover:text-pink-600 transition-colors">Settings</Link>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        {/* Menú móvil adaptado al diseño redondeado */}
        <DisclosurePanel className="sm:hidden bg-white/95 backdrop-blur-lg border-t border-zinc-100 rounded-b-2xl overflow-hidden">
          <div className="space-y-1 px-3 pt-2 pb-3">
            {opciones.map((item) => {
              const isCurrent = location.pathname === item.href;
              return (
                <DisclosureButton
                  key={item.title}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    isCurrent ? 'bg-pink-100 text-pink-600 font-bold' : 'text-zinc-600 hover:bg-pink-50 hover:text-pink-500',
                    'block rounded-xl px-3 py-2 text-base font-semibold transition-colors'
                  )}
                >
                  {item.title}
                </DisclosureButton>
              );
            })}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}

export default NavBar;