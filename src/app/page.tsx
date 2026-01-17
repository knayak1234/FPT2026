import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Speakers from '@/components/Speakers'
import Timeline from '@/components/Timeline'
import Registration from '@/components/Registration'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Speakers />
      <Timeline />
      <Registration />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  )
}

