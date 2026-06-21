import sharp from "sharp"
import path from "path"

const DIR = path.resolve("public/brand")

// Make near-`target` pixels transparent. target as [r,g,b], tol distance.
async function keyOut(input, output, target, tol, { trim = true } = {}) {
  const img = sharp(path.join(DIR, input)).ensureAlpha()
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true })
  const { width, height, channels } = info
  const [tr, tg, tb] = target
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i]
    const g = data[i + 1]
    const b = data[i + 2]
    const dist = Math.sqrt((r - tr) ** 2 + (g - tg) ** 2 + (b - tb) ** 2)
    if (dist <= tol) {
      data[i + 3] = 0
    } else if (dist <= tol * 1.6) {
      // feather edge
      const a = ((dist - tol) / (tol * 0.6)) * 255
      data[i + 3] = Math.min(data[i + 3], Math.round(a))
    }
  }
  let out = sharp(data, { raw: { width, height, channels } }).png()
  if (trim) out = out.trim({ threshold: 10 })
  await out.toFile(path.join(DIR, output))
  console.log("wrote", output)
}

// logo3 = rose mark on white -> keep rose, drop white
await keyOut("logo3.png", "logo-rose.png", [255, 255, 255], 40)
// logo1 = white mark on rose bg -> drop rose (#B68B85 ~ 182,139,133)
await keyOut("logo1.png", "logo-white.png", [182, 139, 133], 55)
// sublogo3 = rose seal on white -> drop white
await keyOut("sublogo3.png", "selo-rose.png", [255, 255, 255], 40)
// sublogo1 = white seal on rose -> drop rose
await keyOut("sublogo1.png", "selo-white.png", [182, 139, 133], 55)
// pattern2 = rose lilies on white -> drop white (no trim, keep tile)
await keyOut("pattern2.png", "pattern-transp.png", [255, 255, 255], 35, { trim: false })

console.log("done")
