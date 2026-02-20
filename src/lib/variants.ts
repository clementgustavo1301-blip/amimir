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
    name: "Amimir",
    subtitle: "MELATONINA",
    description: "Gomas de melatonina sabor maracujá para noites profundamente restauradoras.",
    themeColor: "263 60% 48%", // Deep Violet
    frameCount: 240,
    framesPath: "https://htusdphdspwzzckskvit.supabase.co/storage/v1/object/public/amimir/",
  },
];
