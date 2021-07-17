import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../layouts/Hero'

export default function Home() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="min-h-screen relative">
          <Navbar />
          <Hero />
          <Footer />
        </div>
      </div>
    </>
  )
}
