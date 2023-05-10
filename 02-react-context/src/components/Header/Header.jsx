import { useSongContext } from '@/context/SongContext'
import './header.css'

const Header = () => {
  const context = useSongContext()
  const song = context.selectedSong

  const handleSearch = (e) => {
    context.setSearch(e.target.value)
  }

  const nextSong = () => {
    const songIndex = context.list.findIndex(s => s.id === song.id)
    context.list.length > songIndex + 1
      ? context.setSelectedSong(context.list[songIndex + 1])
      : context.setSelectedSong(context.list[0])
  }

  const prevSong = () => {
    const songIndex = context.list.findIndex(s => s.id === song.id)
    songIndex > 0
      ? context.setSelectedSong(context.list[songIndex - 1])
      : context.setSelectedSong(context.list[context.list.length - 1])
  }

  return (
    song.title
      ? (
        <div className='header__container'>

          <input
            className='header__input-search'
            type='search'
            placeholder='Search a Song...'
            onChange={handleSearch}
          />
          <span>Now Playing... {song.title} - {song.artist}</span>
          <div>
            <button className='header__button' onClick={prevSong}> Prev </button>
            <button className='header__button' onClick={nextSong}> Next </button>
          </div>
        </div>)
      : <div>Selecciona una canción...</div>
  )
}

export default Header
