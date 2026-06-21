// Prefixa o caminho com o basePath (necessário para GitHub Pages em subpasta).
// Usado em url() de CSS inline, onde o Next não injeta o basePath automaticamente.
// Em next/image o basePath já é aplicado, então não use este helper lá.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ""

export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${BASE_PATH}${normalized}`
}
