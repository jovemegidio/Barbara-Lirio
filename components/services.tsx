import Image from "next/image"
import { CtaButton } from "@/components/cta-button"
import { whatsappLink } from "@/lib/site"
import { MapPin, Video } from "lucide-react"
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"

const services = [
  {
    title: "Atendimento Presencial",
    description:
      "Sessões em consultório acolhedor e reservado, pensado para que você se sinta seguro e à vontade durante todo o processo terapêutico.",
    image: "/images/consultorio-real.jpg",
    alt: "Consultório aconchegante com sofá cinza, poltrona caramelo e mesa de madeira",
    icon: MapPin,
  },
  {
    title: "Atendimento Online",
    description:
      "Terapia por videochamada com o mesmo cuidado e qualidade do presencial, onde quer que você esteja. Flexibilidade e sigilo garantidos.",
    image: "/images/como-funciona.jpg",
    alt: "Bárbara Lírio em atendimento online por videochamada",
    icon: Video,
  },
]

export function Services() {
  return (
    <section id="atendimento" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-sm uppercase tracking-[0.25em] text-primary">Modalidades</p>
          <h2 className="mt-3 text-balance text-3xl text-foreground md:text-4xl">
            Como podemos cuidar de você
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Escolha o formato que melhor se adapta à sua rotina. Em ambos, o compromisso é o mesmo: oferecer um espaço
            seguro para o seu desenvolvimento.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-8 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <StaggerItem
                as="article"
                key={service.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-2xl text-foreground">{service.title}</h3>
                  </div>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>

        <Reveal className="mt-12 flex justify-center">
          <CtaButton href={whatsappLink()} variant="primary">
            Agendar minha sessão
          </CtaButton>
        </Reveal>
      </div>
    </section>
  )
}
