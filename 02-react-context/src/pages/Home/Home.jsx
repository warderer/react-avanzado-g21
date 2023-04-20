import SongList from '@/components/SongList'
import SongDetails from '@/components/SongDetails'
import { SongProvider } from '@/context/SongContext'
import Header from '@/components/Header'
import './home.css'

const Home = () => {
  return (
    <SongProvider>
      <Header />
      <div className='home-container'>
        <div className='izquierdo'>
          <SongList />
        </div>

        <div className='derecho'>
          <SongDetails />
        </div>

      </div>
    </SongProvider>
  )
}
export default Home
