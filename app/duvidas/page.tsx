import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Faq } from "@/components/faq"
import { Contact } from "@/components/contact"

export const metadata: Metadata = {
  title: "Dúvidas frequentes | Bárbara Lírio — Psicóloga Clínica",
  description:
    "Respostas para as principais dúvidas sobre psicoterapia: como saber se preciso de terapia, duração das sessões, sigilo e mais.",
}

export default function DuvidasPage() {
  return (
    <>
      <PageHero
        eyebrow="Dúvidas frequentes"
        title="Respostas para começar com clareza"
        description="Reuni as perguntas mais comuns de quem está pensando em iniciar a terapia. Se a sua não estiver aqui, é só me chamar."
      />
      <Faq hideHeader />
      <Contact />
    </>
  )
}
