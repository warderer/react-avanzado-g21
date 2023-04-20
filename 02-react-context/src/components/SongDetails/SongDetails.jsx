/* eslint-disable react/jsx-indent */
import { useSongContext } from '@/context/SongContext'

const SongDetails = () => {
  const context = useSongContext()

  return (
    <>
      {
          context.selectedSong.title
            ? <div>
              <img src={`https://picsum.photos/seed/${context.selectedSong.id}/400/400`} />
              <h1>{context.selectedSong.title}</h1>
              <h2>{context.selectedSong.artist}</h2>
              <h6>{context.selectedSong.year}</h6>
              </div>
            : <h2>Selecciona una canción</h2>
    }

    </>
  )
}
export default SongDetails
