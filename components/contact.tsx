import { CtaButton } from "@/components/cta-button"
import { ADDRESS, whatsappLink } from "@/lib/site"
import { MapPin, Clock, MessageCircle } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"

export function Contact() {
  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm" amount={0.2}>
          <div className="grid lg:grid-cols-2">
            <div className="bg-primary p-10 text-primary-foreground md:p-14">
              <p className="font-sans text-sm uppercase tracking-[0.25em] text-primary-foreground/80">Vamos conversar</p>
              <h2 className="mt-3 text-balance text-3xl md:text-4xl">
                Você não precisa atravessar isso sozinho
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/90">
                Dar o primeiro passo já é um ato de cuidado consigo mesmo. Envie uma mensagem e dê início à sua jornada
                de autoconhecimento e bem-estar.
              </p>
              <div className="mt-8">
                <CtaButton
                  href={whatsappLink()}
                  external
                  icon={<MessageCircle className="h-4 w-4" />}
                  className="bg-card text-primary hover:bg-card/90"
                >
                  Falar pelo WhatsApp
                </CtaButton>
              </div>
            </div>

            <div className="p-10 md:p-14">
              <h3 className="text-2xl text-foreground">Informações de atendimento</h3>
              <ul className="mt-6 space-y-6">
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground">Consultório</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {ADDRESS.street}
                      <br />
                      {ADDRESS.city} — {ADDRESS.cep}
                    </p>
                    <a
                      href={ADDRESS.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Ver no mapa
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground">Horários</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Segunda a sexta, das 8h às 20h
                      <br />
                      Atendimento mediante agendamento
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground">Modalidades</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Presencial em São Paulo e online para todo o Brasil
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
