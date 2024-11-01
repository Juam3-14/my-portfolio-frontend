import Footer from "@/components/layouts/Footer"
import Header from "@/components/layouts/Header"
import LandingSection from "@/components/home/landing"
import Projects from "@/components/home/projects"
import ContactMe from "@/components/home/contactMe"
import ExpandableAboutMe from "@/components/home/expandableAboutMe"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">

        <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <LandingSection />
        </section>
        
        <ExpandableAboutMe/>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <Projects />
        </section>

        <section id="contactMe" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <ContactMe />
        </section>

      </main>
      <Footer />
    </div>
  )
}