"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { MapPin, Monitor, MessageCircle } from "lucide-react"
import { CtaButton } from "@/components/cta-button"
import { whatsappLink } from "@/lib/site"
import { asset } from "@/lib/asset"

const EASE = [0.16, 1, 0.3, 1] as const

const headlineLead = "Psicoterapia para quem sente que está dando conta de tudo,"
const headlineAccent = "menos de si"

export function Hero() {
  const reduce = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90])
  const sealY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -50])
  const patternY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120])

  const words = headlineLead.split(" ")

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
  }
  const wordVariant = {
    hidden: { opacity: 0, y: "0.6em", filter: "blur(6px)" },
    show: { opacity: 1, y: "0em", filter: "blur(0px)", transition: { duration: 0.7, ease: EASE } },
  }
  const fade = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: EASE } },
  }

  return (
    <section ref={sectionRef} id="topo" className="relative overflow-hidden">
      <motion.div
        aria-hidden
        style={{ y: patternY }}
        className="pointer-events-none absolute inset-0 -top-10 opacity-[0.04]"
      >
        <div
          className="h-full w-full"
          style={{ backgroundImage: `url(${asset("/brand/pattern-transp.png")})`, backgroundSize: "260px" }}
        />
      </motion.div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2">
        <motion.div initial="hidden" animate="show" variants={container}>
          <motion.span
            variants={fade}
            className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-secondary/60 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-primary"
          >
            Psicoterapia clínica
          </motion.span>

          <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.1] text-foreground md:text-5xl lg:text-6xl">
            <span className="sr-only">
              {headlineLead} {headlineAccent}
            </span>
            <span aria-hidden className="inline">
              {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom">
                  <motion.span variants={wordVariant} className="inline-block">
                    {word}
                    {i < words.length - 1 ? "\u00A0" : " "}
                  </motion.span>
                </span>
              ))}
              <span className="inline-block overflow-hidden align-bottom">
                <motion.span variants={wordVariant} className="inline-block text-primary">
                  {headlineAccent}
                </motion.span>
              </span>
            </span>
          </h1>

          <motion.p variants={fade} className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Ansiedade, insegurança, conflitos nos relacionamentos, baixa autoestima e autocrítica podem fazer você
            sentir que está sempre tentando dar conta de tudo, mas sem conseguir se sentir bem de verdade.
          </motion.p>
          <motion.p variants={fade} className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            A terapia é um espaço seguro para olhar para o que você sente, compreender sua história e construir formas
            mais saudáveis de se relacionar com você, com os outros e com a vida.
          </motion.p>

          <motion.div variants={fade} className="mt-8">
            <CtaButton href={whatsappLink()} variant="primary" icon={<MessageCircle className="h-4 w-4" />}>
              Conversar com a Bárbara pelo WhatsApp
            </CtaButton>
          </motion.div>

          <motion.ul variants={fade} className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-foreground/75">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Presencial no Tatuapé
            </li>
            <li className="flex items-center gap-2">
              <Monitor className="h-4 w-4 text-primary" /> Atendimento online
            </li>
          </motion.ul>
          <motion.p variants={fade} className="mt-4 text-sm text-muted-foreground">
            Atendimento psicológico para adolescentes, adultos e casais.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
        >
          <motion.div
            aria-hidden
            className="absolute -right-6 -top-6 hidden h-full w-full rounded-[2rem] border border-gold/30 md:block"
            initial={{ opacity: 0, x: 18, y: -18 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.5 }}
          />
          <div className="relative overflow-hidden rounded-[2rem] shadow-xl shadow-primary/10">
            <motion.div style={{ y: imageY }} className="relative h-full w-full will-change-transform">
              <Image
                src="/images/barbara-hero.jpg"
                alt="Bárbara Lírio, psicóloga clínica, sorrindo de forma acolhedora"
                width={900}
                height={1600}
                priority
                className="h-full w-full scale-105 object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            style={{ y: sealY }}
            initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
            className="absolute -right-4 -top-4 flex h-24 w-24 items-center justify-center rounded-full border border-gold/40 bg-card/95 shadow-lg shadow-primary/10 md:-right-8 md:h-28 md:w-28"
          >
            <Image
              src="/brand/selo-rose.png"
              alt="Selo Bárbara Lírio Psicóloga Clínica"
              width={120}
              height={120}
              className="h-[78%] w-[78%] object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.85 }}
            className="absolute -bottom-5 left-5 rounded-2xl border border-border bg-card px-5 py-3 shadow-lg shadow-primary/10 md:left-8"
          >
            <p className="font-serif text-lg font-semibold text-primary">Bárbara Lírio</p>
            <p className="text-xs text-muted-foreground">Psicóloga Clínica — CRP 06/230669</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
