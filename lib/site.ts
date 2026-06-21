// Número de WhatsApp da Bárbara (substituir pelo número real).
export const WHATSAPP_NUMBER = "5511999999999"

const DEFAULT_MESSAGE = "Olá, Bárbara! Vim pelo site e gostaria de saber mais!"

export function whatsappLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const ADDRESS = {
  street: "R. Itapura, 239 — Vila Gomes Cardim",
  city: "São Paulo — SP",
  cep: "CEP 03310-000",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=R.+Itapura,+239+-+Vila+Gomes+Cardim,+São+Paulo+-+SP,+03310-000",
}

export const PROFESSIONAL = {
  name: "Bárbara Lírio dos Santos Freitas",
  shortName: "Bárbara Lírio",
  crp: "CRP 06/230669",
  role: "Psicóloga Clínica",
}
