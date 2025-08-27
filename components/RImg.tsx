import Image, { type ImageProps } from "next/image"

function shimmer(w: number, h: number) {
  return (
    `data:image/svg+xml;charset=utf-8,` +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'><defs><linearGradient id='g'><stop stopColor='#f6f7f8' offset='0%'/><stop stopColor='#edeef1' offset='50%'/><stop stopColor='#f6f7f8' offset='100%'/></linearGradient></defs><rect width='100%' height='100%' fill='#f6f7f8'/><rect id='r' width='100%' height='100%' fill='url(#g)'><animate attributeName='x' from='-100%' to='100%' dur='1.2s' repeatCount='indefinite'/></rect></svg>`,
    )
  )
}

type Props = Omit<ImageProps, "placeholder" | "blurDataURL"> & {
  blurDataURL?: string
}

export default function RImg({
  alt,
  width,
  height,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  style,
  quality = 70,
  ...rest
}: Props) {
  const w = typeof width === "number" ? width : 100
  const h = typeof height === "number" ? height : 100

  return (
    <Image
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      quality={quality}
      loading="lazy"
      decoding="async"
      placeholder="blur"
      blurDataURL={rest.blurDataURL ?? shimmer(w, h)}
      style={{ objectFit: "cover", ...style }}
      {...rest}
    />
  )
}
