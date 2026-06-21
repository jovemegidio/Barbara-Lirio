import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Process } from "@/components/process"
import { QuickInfo } from "@/components/quick-info"
import { Contact } from "@/components/contact"

export const metadata: Metadata = {
  title: "Como funciona | Bárbara Lírio — Psicóloga Clínica",
  description:
    "Entenda como dar o primeiro passo na terapia: do primeiro contato pelo WhatsApp à continuidade do processo terapêutico.",
}

export default function ComoFuncionaPage() {
  return (
    <>
      <PageHero
        eyebrow="Como funciona"
        title="Dar o primeiro passo é simples"
        description="Da primeira mensagem à continuidade do processo, cada etapa é conduzida com clareza, cuidado e previsibilidade."
      />
      <Process hideHeader />
      <QuickInfo />
      <Contact />
    </>
  )
}
