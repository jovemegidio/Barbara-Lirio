// Loader de imagem customizado para export estático (GitHub Pages).
// Retorna o caminho direto do arquivo, com o basePath, sem passar pelo
// otimizador do Next (que exige servidor e não existe no GitHub Pages).
export default function githubPagesImageLoader({ src }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ""
  if (/^https?:\/\//.test(src)) return src
  const normalized = src.startsWith("/") ? src : `/${src}`
  return `${base}${normalized}`
}
