import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import OrganizingCommittee from '@/components/OrganizingCommittee'
import Speakers from '@/components/Speakers'
import InvitedSpeakers from '@/components/InvitedSpeakers'
import SubThemes from '@/components/SubThemes'
import Timeline from '@/components/Timeline'
import AbstractSubmission from '@/components/AbstractSubmission'
import Registration from '@/components/Registration'
import Awards from '@/components/Awards'
import PressRelease from '@/components/PressRelease'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <OrganizingCommittee />
      <Speakers />
      <InvitedSpeakers />
      <SubThemes />
      <Timeline />
      <AbstractSubmission />
      <Registration />
      <Awards />
      <PressRelease />
      <Contact />
      <Footer />
    </main>
  )
}

