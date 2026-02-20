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
  {
    id: "morango",
    name: "Morango",
    subtitle: "Melatonina",
    description: "Sabor suave e adocicado para um ritual noturno equilibrado.",
    themeColor: "328 48% 70%", // Soft Plum
    frameCount: 240,
    framesPath: "/frames/morango/",
  },
  {
    id: "neutro",
    name: "Neutro",
    subtitle: "Melatonina",
    description: "Formulação minimalista focada apenas na qualidade do sono.",
    themeColor: "210 14% 31%", // Dark Charcoal
    frameCount: 240,
    framesPath: "/frames/neutro/",
  },
];
