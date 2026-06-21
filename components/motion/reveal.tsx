"use client"

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react"

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)"

// Tempo máximo de espera pelo IntersectionObserver antes de forçar a
// exibição do conteúdo. Evita seções permanentemente invisíveis caso o
// observer não dispare por algum motivo (ex.: ambiente de hospedagem
// específico, navegador antigo, layout incomum).
const FALLBACK_MS = 2500

type Direction = "up" | "down" | "left" | "right" | "none"

function offset(direction: Direction, distance: number): CSSProperties {
  switch (direction) {
    case "up":
      return { transform: `translateY(${distance}px)` }
    case "down":
      return { transform: `translateY(-${distance}px)` }
    case "left":
      return { transform: `translateX(${distance}px)` }
    case "right":
      return { transform: `translateX(-${distance}px)` }
    default:
      return {}
  }
}

function useReducedMotion() {
  const [reduce, setReduce] = useState(false)
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduce(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReduce(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])
  return reduce
}

function useInView<T extends HTMLElement>(amount: number, once: boolean) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === "undefined") {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            if (once) observer.disconnect()
          } else if (!once) {
            setInView(false)
          }
        }
      },
      { threshold: amount }
    )
    observer.observe(el)

    // Rede de segurança: garante que o conteúdo nunca fique invisível para sempre.
    const fallback = setTimeout(() => setInView(true), FALLBACK_MS)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [amount, once])

  return { ref, inView }
}

function transitionFor(duration: number, delay: number) {
  return `opacity ${duration}s ${EASE} ${delay}s, filter ${duration}s ${EASE} ${delay}s, transform ${duration}s ${EASE} ${delay}s`
}

interface RevealProps {
  children: ReactNode
  className?: string
  direction?: Direction
  distance?: number
  delay?: number
  duration?: number
  blur?: boolean
  once?: boolean
  amount?: number
  as?: "div" | "section" | "li" | "span" | "article"
}

export function Reveal({
  children,
  className,
  direction = "up",
  distance = 28,
  delay = 0,
  duration = 0.9,
  blur = true,
  once = true,
  amount = 0.3,
  as = "div",
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>(amount, once)
  const reduce = useReducedMotion()
  const Tag = as as keyof JSX.IntrinsicElements

  if (reduce) {
    return <Tag className={className}>{children}</Tag>
  }

  const style: CSSProperties = inView
    ? { opacity: 1, filter: "blur(0px)", transform: "translate(0, 0)", transition: transitionFor(duration, delay) }
    : {
        opacity: 0,
        filter: blur ? "blur(10px)" : "blur(0px)",
        ...offset(direction, distance),
        transition: transitionFor(duration, delay),
      }

  return (
    <Tag ref={ref as never} className={className} style={style}>
      {children}
    </Tag>
  )
}

interface StaggerContextValue {
  inView: boolean
  staggerChildren: number
  delayChildren: number
  counterRef: { current: number }
}

const StaggerContext = createContext<StaggerContextValue | null>(null)

interface StaggerProps {
  children: ReactNode
  className?: string
  delayChildren?: number
  staggerChildren?: number
  once?: boolean
  amount?: number
  as?: "div" | "ul" | "section"
}

export function Stagger({
  children,
  className,
  delayChildren = 0.05,
  staggerChildren = 0.1,
  once = true,
  amount = 0.2,
  as = "div",
}: StaggerProps) {
  const { ref, inView } = useInView<HTMLElement>(amount, once)
  const counterRef = useRef(0)
  counterRef.current = 0
  const Tag = as as keyof JSX.IntrinsicElements

  return (
    <StaggerContext.Provider value={{ inView, staggerChildren, delayChildren, counterRef }}>
      <Tag ref={ref as never} className={className}>
        {children}
      </Tag>
    </StaggerContext.Provider>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
  direction?: Direction
  distance?: number
  duration?: number
  blur?: boolean
  as?: "div" | "li" | "article" | "span"
}

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 26,
  duration = 0.8,
  blur = true,
  as = "div",
}: StaggerItemProps) {
  const ctx = useContext(StaggerContext)
  const reduce = useReducedMotion()
  const indexRef = useRef<number | null>(null)
  if (indexRef.current === null && ctx) {
    indexRef.current = ctx.counterRef.current
    ctx.counterRef.current += 1
  }
  const Tag = as as keyof JSX.IntrinsicElements

  if (!ctx || reduce) {
    return <Tag className={className}>{children}</Tag>
  }

  const delay = ctx.delayChildren + (indexRef.current ?? 0) * ctx.staggerChildren
  const style: CSSProperties = ctx.inView
    ? { opacity: 1, filter: "blur(0px)", transform: "translate(0, 0)", transition: transitionFor(duration, delay) }
    : {
        opacity: 0,
        filter: blur ? "blur(8px)" : "blur(0px)",
        ...offset(direction, distance),
        transition: transitionFor(duration, delay),
      }

  return (
    <Tag className={className} style={style}>
      {children}
    </Tag>
  )
}
