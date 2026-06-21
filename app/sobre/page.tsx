import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"

export const metadata: Metadata = {
  title: "Sobre | Bárbara Lírio — Psicóloga Clínica",
  description:
    "Conheça a psicóloga Bárbara Lírio (CRP 06/230669), sua formação e abordagem em Análise do Comportamento, ACT e FAP.",
}

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre a Bárbara"
        title="Cuidado, escuta e ciência caminhando juntos"
        description="Psicóloga clínica dedicada a acompanhar adolescentes, adultos e casais em um processo terapêutico humano e baseado em evidências."
      />
      <About />
      <Experience />
      <Contact />
    </>
  )
}
