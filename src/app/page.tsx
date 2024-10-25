import { Button } from "@/components/ui/button"
import { EyeIcon } from "lucide-react"
import Footer from "@/components/layouts/Footer"
import Link from "next/link"
import AboutMe from "@/components/home/aboutMe"
import Header from "@/components/layouts/Header"
import LandingSection from "@/components/home/landing"
import Projects from "@/components/home/projects"
import ContactMe from "@/components/home/contactMe"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">

        <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <LandingSection />
        </section>

        <section id="aboutMe" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <AboutMe />
          <div className="flex justify-center mt-6">
            <Link href="/aboutme">
              <Button variant="outline" className="flex items-center space-x-2">
                <EyeIcon className="h-6 w-6" />
                <span>Know More</span>
              </Button>
            </Link>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <Projects />
        </section>

        <section id="contactMe" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <ContactMe title="Contact Me" subtitle="I will answer soon :)" />
        </section>

      </main>
      <Footer />
    </div>
  )
}