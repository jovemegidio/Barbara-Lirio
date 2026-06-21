import { Hero } from "@/components/hero"
import { QuickInfo } from "@/components/quick-info"
import { About } from "@/components/about"
import { HowHelps } from "@/components/how-helps"
import { Services } from "@/components/services"
import { Experience } from "@/components/experience"
import { Audience } from "@/components/audience"
import { Process } from "@/components/process"
import { Faq } from "@/components/faq"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <>
      <Hero />
      <QuickInfo />
      <About />
      <HowHelps />
      <Services />
      <Experience />
      <Audience />
      <Process />
      <Faq />
      <Contact />
    </>
  )
}
