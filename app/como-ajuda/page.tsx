import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { HowHelps } from "@/components/how-helps"
import { Contact } from "@/components/contact"

export const metadata: Metadata = {
  title: "Como a terapia ajuda | Bárbara Lírio — Psicóloga Clínica",
  description:
    "Descubra como a psicoterapia pode apoiar você em ansiedade, autoconhecimento, relacionamentos e momentos de transição.",
}

export default function ComoAjudaPage() {
  return (
    <>
      <PageHero
        eyebrow="Como a terapia ajuda"
        title="Um espaço para o que você sente"
        description="A terapia apoia você em diferentes momentos da vida. Veja alguns dos temas frequentemente trabalhados em consultório."
      />
      <HowHelps hideHeader />
      <Contact />
    </>
  )
}
