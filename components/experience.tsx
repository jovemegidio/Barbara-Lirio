import Image from "next/image"
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"

const items = [
  {
    icon: "/brand/icon-acolhimento.png",
    title: "Acolhimento",
    text: "Um espaço seguro, sem julgamentos, onde você pode ser quem é.",
  },
  {
    icon: "/brand/icon-conforto.png",
    title: "Ambiente confortável",
    text: "Um lugar tranquilo e reservado, pensado para o seu bem-estar.",
  },
  {
    icon: "/brand/icon-poltrona.png",
    title: "Escuta presente",
    text: "Atenção genuína a cada detalhe da sua história e do seu momento.",
  },
  {
    icon: "/brand/icon-mente.png",
    title: "Base científica",
    text: "Cuidado fundamentado em abordagens reconhecidas da psicologia.",
  },
  {
    icon: "/brand/icon-lirio.png",
    title: "Crescimento",
    text: "Apoio para o seu autoconhecimento e florescimento pessoal.",
  },
]

export function Experience() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-sm uppercase tracking-[0.25em] text-primary">A experiência do cuidado</p>
          <h2 className="mt-3 text-balance text-3xl text-foreground md:text-4xl">
            O que você encontra na terapia
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Cada encontro é conduzido com cuidado, respeito e presença, do primeiro contato à continuidade do processo.
          </p>
        </Reveal>

        <Stagger
          as="ul"
          staggerChildren={0.12}
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5"
        >
          {items.map((item) => (
            <StaggerItem as="li" key={item.title} className="group flex flex-col items-center text-center">
              <Image
                src={item.icon || "/placeholder.svg"}
                alt={item.title}
                width={420}
                height={420}
                className="h-24 w-24 object-contain transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:scale-105 md:h-28 md:w-28"
              />
              <h3 className="mt-4 text-lg text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
