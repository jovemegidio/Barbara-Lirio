import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Audience } from "@/components/audience"
import { Contact } from "@/components/contact"

export const metadata: Metadata = {
  title: "Para quem é | Bárbara Lírio — Psicóloga Clínica",
  description:
    "Atendimento psicológico para adolescentes, adultos e casais. A terapia é para todos os momentos da vida.",
}

export default function ParaQuemPage() {
  return (
    <>
      <PageHero
        eyebrow="Para quem é"
        title="A terapia é para todos os momentos"
        description="Não é preciso esperar uma crise para buscar ajuda. Cuidar da saúde emocional é um ato de coragem e respeito consigo mesmo."
      />
      <Audience hideHeader />
      <Contact />
    </>
  )
}
