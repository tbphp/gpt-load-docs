import Image from "next/image";

type Props = {
  width?: number;
  theme?: "light" | "dark";
};

export default function BrandLogo({ width = 128, theme = "light" }: Props) {
  return (
    <Image
      src={`/v2/brand/logo-${theme}.svg`}
      alt="GPT-Load"
      width={width}
      height={width / 4}
      unoptimized
    />
  );
}
