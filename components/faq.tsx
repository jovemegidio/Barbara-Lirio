import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Reveal } from "@/components/motion/reveal"
import { cn } from "@/lib/utils"

const faqs = [
  {
    q: "Como sei se preciso de terapia?",
    a: "A terapia não é só para momentos de crise. Se você sente que algo te incomoda, deseja se conhecer melhor, lidar com a ansiedade, melhorar relações ou simplesmente ter um espaço seguro para falar, a terapia pode te ajudar.",
  },
  {
    q: "Qual a duração e a frequência das sessões?",
    a: "As sessões costumam durar cerca de 50 minutos e, em geral, acontecem semanalmente. A frequência pode ser ajustada de acordo com as suas necessidades e com o andamento do processo.",
  },
  {
    q: "O atendimento online funciona tão bem quanto o presencial?",
    a: "Sim. Diversos estudos mostram que a terapia online é tão eficaz quanto a presencial. O mais importante é o vínculo terapêutico e o seu comprometimento com o processo, que se mantêm em ambos os formatos.",
  },
  {
    q: "As sessões são sigilosas?",
    a: "Totalmente. O sigilo é um princípio ético fundamental da psicologia. Tudo o que é compartilhado durante as sessões permanece em absoluto sigilo profissional.",
  },
  {
    q: "Como faço para agendar a primeira sessão?",
    a: "Basta enviar uma mensagem pelo WhatsApp. Conversaremos sobre suas necessidades, disponibilidade de horários e definiremos juntos o melhor momento para começar.",
  },
]

export function Faq({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        {!hideHeader && (
          <Reveal className="text-center">
            <p className="font-sans text-sm uppercase tracking-[0.25em] text-primary">Dúvidas frequentes</p>
            <h2 className="mt-3 text-balance text-3xl text-foreground md:text-4xl">
              Respostas para começar com clareza
            </h2>
          </Reveal>
        )}

        <Reveal as="div" delay={0.1}>
          <Accordion className={cn("w-full", hideHeader ? "" : "mt-12")}>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-lg text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
