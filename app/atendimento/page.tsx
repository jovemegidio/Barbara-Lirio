import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Services } from "@/components/services"
import { QuickInfo } from "@/components/quick-info"
import { Contact } from "@/components/contact"

export const metadata: Metadata = {
  title: "Atendimento | Bárbara Lírio — Psicóloga Clínica",
  description:
    "Atendimento psicológico presencial no Tatuapé e online para todo o Brasil. Conheça as modalidades e como funciona a agenda.",
}

export default function AtendimentoPage() {
  return (
    <>
      <PageHero
        eyebrow="Atendimento"
        title="Um espaço seguro, do seu jeito"
        description="Escolha entre o atendimento presencial no Tatuapé ou online por videochamada — com o mesmo cuidado, sigilo e qualidade."
      />
      <Services />
      <QuickInfo />
      <Contact />
    </>
  )
}
