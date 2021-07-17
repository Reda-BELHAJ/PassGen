import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="min-h-screen relative">
          <Navbar />
          <Footer />
        </div>
      </div>
    </>
  )
}
