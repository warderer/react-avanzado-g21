import { createContext, useState, useEffect, useContext } from 'react'
// import canciones from '../../assets/listaCanciones.json'
import canciones from '@/assets/listaCanciones.json'
// CONTEXT tiene que ver con el manejo de estados globales en React.
// Es decir, poder compartir LA MISMA información entre diferentes niveles de componentes

// Para usar Context necesitamos seguir una serie de pasos

// #1 Creación del contexto
const SongContext = createContext()

// #2 Creación del Provider (proveedor del contexto)
function SongProvider (props) {
  const [list, setList] = useState([]) // Lista de canciones
  const [loading, setLoading] = useState(true) // Nos indica si estan disponibles los datos
  const [selectedSong, setSelectedSong] = useState({}) // Nos indica que canción esta seleccionada

  // Simular una llamada a la API
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  // Tenemos que indicar al Provider que datos queremos compartir
  // Estos datos son publicos para todos los componentes que esten dentro del Provider
  const values = {
    list,
    loading,
    selectedSong,
    setSelectedSong
  }

  return (
    // Siempre se llama value el prop del Provider con la data
    // value es un objeto que idnica que datos son globales
    <SongContext.Provider value={values}>
      {props.children}
    </SongContext.Provider>
  )
}

// #3 Consumidor del contexto
// Brinda el acceso a la información del contexto
const useSongContext = () => {
  const context = useContext(SongContext)
  return context
}

// #4 Exportar el contexto y el provider
export {
  SongProvider,
  useSongContext
}

// #5 Ir a componente superior (podria ser App o en este caso Home) y envolver a los componentes que haran uso del contexto con mi componente <SongProvider>
