/** @type {import('next').NextConfig} */

// As configs de export estático só valem ao gerar o build do GitHub Pages
// (workflow define STATIC_EXPORT=true). No preview do v0 / dev usamos o
// comportamento padrão do Next — caso contrário, output:"export" +
// trailingSlash causam loop de redirecionamento atrás do proxy do preview.
const isStaticExport = process.env.STATIC_EXPORT === "true"

// basePath é definido pelo workflow do GitHub Pages.
// Em projeto (usuario.github.io/repo) use "/repo"; na raiz, deixe vazio.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Loader customizado: serve as imagens diretamente (sem otimizador),
    // garantindo que funcionem no GitHub Pages estático com basePath.
    loader: "custom",
    loaderFile: "./lib/image-loader.js",
  },
  ...(isStaticExport
    ? {
        output: "export",
        basePath,
        assetPrefix: basePath || undefined,
        trailingSlash: true,
      }
    : {}),
}

export default nextConfig
