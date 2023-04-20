import { useSongContext } from '@/context/SongContext'

const Header = () => {
  const context = useSongContext()
  const song = context.selectedSong

  return (
    <>
      {
        context.selectedSong.title
          ? <div>
            Now playing... {song.title} - {song.artist}
          </div>
          : <h2>Selecciona una canción</h2>
        }
    </>
  )
}
export default Header
