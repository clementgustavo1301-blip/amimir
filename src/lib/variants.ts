export type ProductVariant = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  themeColor: string; // HSL value string "H S% L%"
  frameCount: number;
  framesPath: string;
};

export const variants: ProductVariant[] = [
  {
    id: "maracuja",
    name: "Maracujá",
    subtitle: "Melatonina",
    description: "Gomas de melatonina sabor maracujá para noites profundamente restauradoras.",
    themeColor: "263 60% 48%", // Deep Violet
    frameCount: 240,
    framesPath: "/frames/maracuja/",
  },
];
