import { useState } from 'react';

// 1. Este es nuestro Array de Objetos inicial (tus cursos de prueba)
const cursosIniciales = [
  { id: 1, nombre: 'Curso de React', descripcion: 'Aprende hooks y estado.' },
  { id: 2, nombre: 'Curso de Tailwind', descripcion: 'Diseño moderno y rápido.' }
];

export default function GestionCursos() {
  const [cursos, setCursos] = useState(cursosIniciales);
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevaDesc, setNuevaDesc] = useState('');
  const [editandoId, setEditandoId] = useState<number | null>(null);

  // ➕ AÑADIR un objeto al array
  const añadirCurso = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nuevoNombre) return;

    const nuevoCurso = {
      id: Date.now(), // Genera un ID único temporal
      nombre: nuevoNombre,
      descripcion: nuevaDesc
    };

    setCursos([...cursos, nuevoCurso]); // Guadamos el nuevo array con el objeto añadido
    setNuevoNombre('');
    setNuevaDesc('');
  };

  // ❌ QUITAR/BORRAR un objeto del array
  const borrarCurso = (id: number) => {
    // Filtramos el array para quedarnos con todos MENOS el que queremos borrar
    const arrayFiltrado = cursos.filter(curso => curso.id !== id);
    setCursos(arrayFiltrado);
  };

  // 📝 MODIFICAR/ACTUALIZAR un objeto del array
  const guardarEdicion = (id: number) => {
    const arrayModificado = cursos.map(curso => {
      if (curso.id === id) {
        return { ...curso, nombre: nuevoNombre || curso.nombre, descripcion: nuevaDesc || curso.descripcion };
      }
      return curso;
    });

    setCursos(arrayModificado);
    setEditandoId(null);
    setNuevoNombre('');
    setNuevaDesc('');
  };

  return (
    <div className="pt-28 px-6 max-w-4xl mx-auto text-zinc-800">
      <h2 className="text-3xl font-black mb-6">Gestión de Cursos (Array de Objetos)</h2>

      {/* Formulario para Añadir */}
      <form onSubmit={añadirCurso} className="bg-white/80 p-6 rounded-2xl border border-gray-200 mb-8 space-y-4">
        <h3 className="font-bold text-lg">Añadir o Editar Curso</h3>
        <input 
          type="text" 
          placeholder="Nombre del curso" 
          value={nuevoNombre} 
          onChange={(e) => setNuevoNombre(e.target.value)}
          className="w-full p-2 border border-gray-200 rounded-xl"
        />
        <input 
          type="text" 
          placeholder="Descripción" 
          value={nuevaDesc} 
          onChange={(e) => setNuevaDesc(e.target.value)}
          className="w-full p-2 border border-gray-200 rounded-xl"
        />
        <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded-xl font-bold">
          {editandoId ? 'Guardar Cambios' : 'Añadir al Array'}
        </button>
      </form>

      {/* Lista de Cursos del Array */}
      <div className="space-y-4">
        {cursos.map(curso => (
          <div key={curso.id} className="bg-white p-4 rounded-xl border border-gray-100 flex justify-between items-center shadow-sm">
            <div>
              <h4 className="font-bold text-zinc-900">{curso.nombre}</h4>
              <p className="text-sm text-zinc-500">{curso.descripcion}</p>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => { setEditandoId(curso.id); setNuevoNombre(curso.nombre); setNuevaDesc(curso.descripcion); }}
                className="text-xs bg-amber-100 text-amber-700 px-3 py-1.5 rounded-lg font-bold"
              >
                Editar
              </button>
              {editandoId === curso.id && (
                <button 
                  onClick={() => guardarEdicion(curso.id)}
                  className="text-xs bg-green-500 text-white px-3 py-1.5 rounded-lg font-bold"
                >
                  Confirmar
                </button>
              )}
              <button 
                onClick={() => borrarCurso(curso.id)}
                className="text-xs bg-red-100 text-red-700 px-3 py-1.5 rounded-lg font-bold"
              >
                Quitar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}