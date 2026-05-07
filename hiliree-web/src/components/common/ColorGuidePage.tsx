"use client";
import React from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

/* ─────────────────────────────────────────────
   Hiliree App Color Palette
   ALL COLORS VERIFIED FROM THE OFFICIAL DESIGN GUIDE
───────────────────────────────────────────── */
export const COLORS = {
  // ── Brand ──────────────────────────────────
  brand: {
    6: "#270D4D",   // Brand1-6 (darkest)
    5: "#341266",   // Brand1-5
    7: "#4F1B9B",   // Brand1-7
    4: "#9B88CA",   // Brand1-4
    3: "#BAB0DC",   // Brand1-3
    2: "#DDD7ED",   // Brand1-2
    1: "#EEEBF6",   // Brand1-1 (lightest)
  },
  // ── Neutral: Border ────────────────────────
  border: {
    4: "#86909C",   // color-border-4
    3: "#C9CDD4",   // color-border-3
    2: "#E5E6EB",   // color-border-2
    1: "#F2F3F5",   // color-border-1
  },
  // ── Neutral: Fill ──────────────────────────
  fill: {
    5: "#4E5969",   // color-fill-5
    4: "#C9CDD4",   // color-fill-4
    3: "#E5E6EB",   // color-fill-3
    2: "#F2F3F5",   // color-fill-2
  },
  // ── Neutral: Text ──────────────────────────
  text: {
    1: "#1D2129",   // color-text-1
    2: "#4E5969",   // color-text-2
    3: "#86909C",   // color-text-3
    4: "#C9CDD4",   // color-text-4
    5: "#FFFFFF",   // color-text-5
  },
  // ── Functional: Success ────────────────────
  success: {
    6: "#00B42A",   // Success-6
    5: "#23C343",   // Success-5
    7: "#009A29",   // Success-7
    3: "#7BE18B",   // Success-3
    2: "#AFF0B5",   // Success-2
    1: "#E8FFEA",   // Success-1
  },
  // ── Functional: Warning ────────────────────
  warning: {
    6: "#FF7D00",   // Warning-6
    5: "#FF9A2E",   // Warning-5
    7: "#D25F00",   // Warning-7
    3: "#FFCF8B",   // Warning-3
    2: "#FFE4BA",   // Warning-2
    1: "#FFF7E8",   // Warning-1
  },
  // ── Functional: Danger ─────────────────────
  danger: {
    6: "#F53F3F",   // Danger-6
    5: "#F76560",   // Danger-5
    7: "#CB2634",   // Danger-7
    3: "#FBACA3",   // Danger-3
    2: "#FDCDC5",   // Danger-2
    1: "#FFECE8",   // Danger-1
  },
  // ── System: Cyan ───────────────────────────
  cyan: {
    6: "#0FC6C2",   // Cyan-6
    5: "#33D1C9",   // Cyan-5
    7: "#0AA5A8",   // Cyan-7
    3: "#86E8DD",   // Cyan-3
    2: "#B5F4EA",   // Cyan-2
    1: "#E8FFFB",   // Cyan-1
  },
  // ── System: Orange Red ─────────────────────
  orangeRed: {
    6: "#F77234",   // Orange Red-6
    5: "#F99057",   // Orange Red-5
    7: "#CC5120",   // Orange Red-7
    3: "#FCC59F",   // Orange Red-3
    2: "#FDDDC3",   // Orange Red-2
    1: "#FFF3EB",   // Orange Red-1
  },
  // ── Gold ───────────────────────────────────
  gold: {
    6: "#F7BA1E",   // Gold-6
    5: "#F9CC45",   // Gold-5
    7: "#CC9213",   // Gold-7
    3: "#FCE996",   // Gold-3
    2: "#FDF4BF",   // Gold-2
    1: "#FFFCE8",   // Gold-1
  },
  // ── Blue ───────────────────────────────────
  blue: {
    6: "#3491FA",   // Blue-6
    5: "#57A9FB",   // Blue-5
    7: "#206CCF",   // Blue-7
    3: "#9FD4FD",   // Blue-3
    2: "#C3E7FE",   // Blue-2
    1: "#E8F7FF",   // Blue-1
  },
  // ── Yellow ─────────────────────────────────
  yellow: {
    6: "#FADC19",   // Yellow-6
    5: "#FBE842",   // Yellow-5
    7: "#CFAF0F",   // Yellow-7
    3: "#FDFA94",   // Yellow-3
    2: "#FEFEBE",   // Yellow-2
    1: "#FEFFE8",   // Yellow-1
  },
  // ── Lime ───────────────────────────────────
  lime: {
    6: "#9FDB1D",   // Lime-6
    5: "#B5E241",   // Lime-5
    7: "#7EB712",   // Lime-7
    3: "#DCF190",   // Lime-3
    2: "#EDF8BB",   // Lime-2
    1: "#FCFFE8",   // Lime-1
  },
  // ── Pink Purple ────────────────────────────
  pinkPurple: {
    6: "#D91AD9",   // Pink Purple-6
    5: "#E13EDB",   // Pink Purple-5
    7: "#B010B6",   // Pink Purple-7
    3: "#F08EE6",   // Pink Purple-3
    2: "#F7BAEF",   // Pink Purple-2
    1: "#FFE8FB",   // Pink Purple-1
  },
  // ── Magenta ────────────────────────────────
  magenta: {
    6: "#F5319D",   // Magenta-6
    5: "#F754A8",   // Magenta-5
    7: "#CB1EB3",   // Magenta-7
    3: "#FB9DC7",   // Magenta-3
    2: "#FDC2DB",   // Magenta-2
    1: "#FFE8F1",   // Magenta-1
  },
};

interface ColorItem {
  name: string;
  hex: string;
  rgb: string;
  label: string;
  category: string;
}

const colorList: ColorItem[] = [
  // Brand Colors
  { name: "Brand1-6", hex: "#270D4D", rgb: "rgb(39, 13, 77)",      label: "Brand1-6",       category: "Brand" },
  { name: "Brand1-5", hex: "#341266", rgb: "rgb(52, 18, 102)",     label: "Brand1-5",       category: "Brand" },
  { name: "Brand1-7", hex: "#4F1B9B", rgb: "rgb(79, 27, 155)",     label: "Brand1-7",       category: "Brand" },
  { name: "Brand1-4", hex: "#9B88CA", rgb: "rgb(155, 136, 202)",   label: "Brand1-4",       category: "Brand" },
  { name: "Brand1-3", hex: "#BAB0DC", rgb: "rgb(186, 176, 220)",   label: "Brand1-3",       category: "Brand" },
  { name: "Brand1-2", hex: "#DDD7ED", rgb: "rgb(221, 215, 237)",   label: "Brand1-2",       category: "Brand" },
  { name: "Brand1-1", hex: "#EEEBF6", rgb: "rgb(238, 235, 246)",   label: "Brand1-1",       category: "Brand" },

  // Neutral: Border
  { name: "Border-4", hex: "#86909C", rgb: "rgb(134, 144, 156)",   label: "color-border-4", category: "Neutral Border" },
  { name: "Border-3", hex: "#C9CDD4", rgb: "rgb(201, 205, 212)",   label: "color-border-3", category: "Neutral Border" },
  { name: "Border-2", hex: "#E5E6EB", rgb: "rgb(229, 230, 235)",   label: "color-border-2", category: "Neutral Border" },
  { name: "Border-1", hex: "#F2F3F5", rgb: "rgb(242, 243, 245)",   label: "color-border-1", category: "Neutral Border" },

  // Neutral: Fill
  { name: "Fill-5",   hex: "#4E5969", rgb: "rgb(78, 89, 105)",     label: "color-fill-5",   category: "Neutral Fill" },
  { name: "Fill-4",   hex: "#C9CDD4", rgb: "rgb(201, 205, 212)",   label: "color-fill-4",   category: "Neutral Fill" },
  { name: "Fill-3",   hex: "#E5E6EB", rgb: "rgb(229, 230, 235)",   label: "color-fill-3",   category: "Neutral Fill" },
  { name: "Fill-2",   hex: "#F2F3F5", rgb: "rgb(242, 243, 245)",   label: "color-fill-2",   category: "Neutral Fill" },

  // Neutral: Text
  { name: "Text-1",   hex: "#1D2129", rgb: "rgb(29, 33, 41)",      label: "color-text-1",   category: "Neutral Text" },
  { name: "Text-2",   hex: "#4E5969", rgb: "rgb(78, 89, 105)",     label: "color-text-2",   category: "Neutral Text" },
  { name: "Text-3",   hex: "#86909C", rgb: "rgb(134, 144, 156)",   label: "color-text-3",   category: "Neutral Text" },
  { name: "Text-4",   hex: "#C9CDD4", rgb: "rgb(201, 205, 212)",   label: "color-text-4",   category: "Neutral Text" },
  { name: "Text-5",   hex: "#FFFFFF", rgb: "rgb(255, 255, 255)",   label: "color-text-5",   category: "Neutral Text" },

  // Success
  { name: "Success-6", hex: "#00B42A", rgb: "rgb(0, 180, 42)",     label: "Success-6",      category: "Success" },
  { name: "Success-5", hex: "#23C343", rgb: "rgb(35, 195, 67)",    label: "Success-5",      category: "Success" },
  { name: "Success-7", hex: "#009A29", rgb: "rgb(0, 154, 41)",     label: "Success-7",      category: "Success" },
  { name: "Success-3", hex: "#7BE18B", rgb: "rgb(123, 225, 139)",  label: "Success-3",      category: "Success" },
  { name: "Success-2", hex: "#AFF0B5", rgb: "rgb(175, 240, 181)",  label: "Success-2",      category: "Success" },
  { name: "Success-1", hex: "#E8FFEA", rgb: "rgb(232, 255, 234)",  label: "Success-1",      category: "Success" },

  // Warning
  { name: "Warning-6", hex: "#FF7D00", rgb: "rgb(255, 125, 0)",    label: "Warning-6",      category: "Warning" },
  { name: "Warning-5", hex: "#FF9A2E", rgb: "rgb(255, 154, 46)",   label: "Warning-5",      category: "Warning" },
  { name: "Warning-7", hex: "#D25F00", rgb: "rgb(210, 95, 0)",     label: "Warning-7",      category: "Warning" },
  { name: "Warning-3", hex: "#FFCF8B", rgb: "rgb(255, 207, 139)",  label: "Warning-3",      category: "Warning" },
  { name: "Warning-2", hex: "#FFE4BA", rgb: "rgb(255, 228, 186)",  label: "Warning-2",      category: "Warning" },
  { name: "Warning-1", hex: "#FFF7E8", rgb: "rgb(255, 247, 232)",  label: "Warning-1",      category: "Warning" },

  // Danger
  { name: "Danger-6", hex: "#F53F3F", rgb: "rgb(245, 63, 63)",     label: "Danger-6",       category: "Danger" },
  { name: "Danger-5", hex: "#F76560", rgb: "rgb(247, 101, 96)",    label: "Danger-5",       category: "Danger" },
  { name: "Danger-7", hex: "#CB2634", rgb: "rgb(203, 38, 52)",     label: "Danger-7",       category: "Danger" },
  { name: "Danger-3", hex: "#FBACA3", rgb: "rgb(251, 172, 163)",   label: "Danger-3",       category: "Danger" },
  { name: "Danger-2", hex: "#FDCDC5", rgb: "rgb(253, 205, 197)",   label: "Danger-2",       category: "Danger" },
  { name: "Danger-1", hex: "#FFECE8", rgb: "rgb(255, 236, 232)",   label: "Danger-1",       category: "Danger" },

  // Cyan
  { name: "Cyan-6", hex: "#0FC6C2", rgb: "rgb(15, 198, 194)",      label: "Cyan-6",         category: "Cyan" },
  { name: "Cyan-5", hex: "#33D1C9", rgb: "rgb(51, 209, 201)",      label: "Cyan-5",         category: "Cyan" },
  { name: "Cyan-7", hex: "#0AA5A8", rgb: "rgb(10, 165, 168)",      label: "Cyan-7",         category: "Cyan" },
  { name: "Cyan-3", hex: "#86E8DD", rgb: "rgb(134, 232, 221)",     label: "Cyan-3",         category: "Cyan" },
  { name: "Cyan-2", hex: "#B5F4EA", rgb: "rgb(181, 244, 234)",     label: "Cyan-2",         category: "Cyan" },
  { name: "Cyan-1", hex: "#E8FFFB", rgb: "rgb(232, 255, 251)",     label: "Cyan-1",         category: "Cyan" },

  // Orange Red
  { name: "Orange Red-6", hex: "#F77234", rgb: "rgb(247, 114, 52)",   label: "Orange Red-6", category: "Orange Red" },
  { name: "Orange Red-5", hex: "#F99057", rgb: "rgb(249, 144, 87)",   label: "Orange Red-5", category: "Orange Red" },
  { name: "Orange Red-7", hex: "#CC5120", rgb: "rgb(204, 81, 32)",    label: "Orange Red-7", category: "Orange Red" },
  { name: "Orange Red-3", hex: "#FCC59F", rgb: "rgb(252, 197, 159)",  label: "Orange Red-3", category: "Orange Red" },
  { name: "Orange Red-2", hex: "#FDDDC3", rgb: "rgb(253, 221, 195)",  label: "Orange Red-2", category: "Orange Red" },
  { name: "Orange Red-1", hex: "#FFF3EB", rgb: "rgb(255, 243, 235)",  label: "Orange Red-1", category: "Orange Red" },

  // Gold
  { name: "Gold-6", hex: "#F7BA1E", rgb: "rgb(247, 186, 30)",      label: "Gold-6",         category: "Gold" },
  { name: "Gold-5", hex: "#F9CC45", rgb: "rgb(249, 204, 69)",      label: "Gold-5",         category: "Gold" },
  { name: "Gold-7", hex: "#CC9213", rgb: "rgb(204, 146, 19)",      label: "Gold-7",         category: "Gold" },
  { name: "Gold-3", hex: "#FCE996", rgb: "rgb(252, 233, 150)",     label: "Gold-3",         category: "Gold" },
  { name: "Gold-2", hex: "#FDF4BF", rgb: "rgb(253, 244, 191)",     label: "Gold-2",         category: "Gold" },
  { name: "Gold-1", hex: "#FFFCE8", rgb: "rgb(255, 252, 232)",     label: "Gold-1",         category: "Gold" },

  // Blue
  { name: "Blue-6", hex: "#3491FA", rgb: "rgb(52, 145, 250)",      label: "Blue-6",         category: "Blue" },
  { name: "Blue-5", hex: "#57A9FB", rgb: "rgb(87, 169, 251)",      label: "Blue-5",         category: "Blue" },
  { name: "Blue-7", hex: "#206CCF", rgb: "rgb(32, 108, 207)",      label: "Blue-7",         category: "Blue" },
  { name: "Blue-3", hex: "#9FD4FD", rgb: "rgb(159, 212, 253)",     label: "Blue-3",         category: "Blue" },
  { name: "Blue-2", hex: "#C3E7FE", rgb: "rgb(195, 231, 254)",     label: "Blue-2",         category: "Blue" },
  { name: "Blue-1", hex: "#E8F7FF", rgb: "rgb(232, 247, 255)",     label: "Blue-1",         category: "Blue" },

  // Yellow
  { name: "Yellow-6", hex: "#FADC19", rgb: "rgb(250, 220, 25)",    label: "Yellow-6",       category: "Yellow" },
  { name: "Yellow-5", hex: "#FBE842", rgb: "rgb(251, 232, 66)",    label: "Yellow-5",       category: "Yellow" },
  { name: "Yellow-7", hex: "#CFAF0F", rgb: "rgb(207, 175, 15)",    label: "Yellow-7",       category: "Yellow" },
  { name: "Yellow-3", hex: "#FDFA94", rgb: "rgb(253, 250, 148)",   label: "Yellow-3",       category: "Yellow" },
  { name: "Yellow-2", hex: "#FEFEBE", rgb: "rgb(254, 254, 190)",   label: "Yellow-2",       category: "Yellow" },
  { name: "Yellow-1", hex: "#FEFFE8", rgb: "rgb(254, 255, 232)",   label: "Yellow-1",       category: "Yellow" },

  // Lime
  { name: "Lime-6", hex: "#9FDB1D", rgb: "rgb(159, 219, 29)",      label: "Lime-6",         category: "Lime" },
  { name: "Lime-5", hex: "#B5E241", rgb: "rgb(181, 226, 65)",      label: "Lime-5",         category: "Lime" },
  { name: "Lime-7", hex: "#7EB712", rgb: "rgb(126, 183, 18)",      label: "Lime-7",         category: "Lime" },
  { name: "Lime-3", hex: "#DCF190", rgb: "rgb(220, 241, 144)",     label: "Lime-3",         category: "Lime" },
  { name: "Lime-2", hex: "#EDF8BB", rgb: "rgb(237, 248, 187)",     label: "Lime-2",         category: "Lime" },
  { name: "Lime-1", hex: "#FCFFE8", rgb: "rgb(252, 255, 232)",     label: "Lime-1",         category: "Lime" },

  // Pink Purple
  { name: "Pink Purple-6", hex: "#D91AD9", rgb: "rgb(217, 26, 217)",   label: "Pink Purple-6", category: "Pink Purple" },
  { name: "Pink Purple-5", hex: "#E13EDB", rgb: "rgb(225, 62, 219)",   label: "Pink Purple-5", category: "Pink Purple" },
  { name: "Pink Purple-7", hex: "#B010B6", rgb: "rgb(176, 16, 182)",   label: "Pink Purple-7", category: "Pink Purple" },
  { name: "Pink Purple-3", hex: "#F08EE6", rgb: "rgb(240, 142, 230)",  label: "Pink Purple-3", category: "Pink Purple" },
  { name: "Pink Purple-2", hex: "#F7BAEF", rgb: "rgb(247, 186, 239)",  label: "Pink Purple-2", category: "Pink Purple" },
  { name: "Pink Purple-1", hex: "#FFE8FB", rgb: "rgb(255, 232, 251)",  label: "Pink Purple-1", category: "Pink Purple" },

  // Magenta
  { name: "Magenta-6", hex: "#F5319D", rgb: "rgb(245, 49, 157)",    label: "Magenta-6",     category: "Magenta" },
  { name: "Magenta-5", hex: "#F754A8", rgb: "rgb(247, 84, 168)",    label: "Magenta-5",     category: "Magenta" },
  { name: "Magenta-7", hex: "#CB1EB3", rgb: "rgb(203, 30, 179)",    label: "Magenta-7",     category: "Magenta" },
  { name: "Magenta-3", hex: "#FB9DC7", rgb: "rgb(251, 157, 199)",   label: "Magenta-3",     category: "Magenta" },
  { name: "Magenta-2", hex: "#FDC2DB", rgb: "rgb(253, 194, 219)",   label: "Magenta-2",     category: "Magenta" },
  { name: "Magenta-1", hex: "#FFE8F1", rgb: "rgb(255, 232, 241)",   label: "Magenta-1",     category: "Magenta" },
];

const CATEGORY_ORDER = [
  "Brand",
  "Neutral Border",
  "Neutral Fill",
  "Neutral Text",
  "Success",
  "Warning",
  "Danger",
  "Cyan",
  "Orange Red",
  "Gold",
  "Blue",
  "Yellow",
  "Lime",
  "Pink Purple",
  "Magenta",
];

const LIGHT_COLORS = new Set([
  "#EEEBF6","#DDD7ED","#BAB0DC","#9B88CA",
  "#F2F3F5","#E5E6EB","#C9CDD4",
  "#E8FFEA","#AFF0B5","#7BE18B",
  "#FFF7E8","#FFE4BA","#FFCF8B",
  "#FFECE8","#FDCDC5","#FBACA3",
  "#E8FFFB","#B5F4EA","#86E8DD",
  "#FFF3EB","#FDDDC3","#FCC59F",
  "#FFFCE8","#FDF4BF","#FCE996",
  "#E8F7FF","#C3E7FE","#9FD4FD",
  "#FEFFE8","#FEFEBE","#FDFA94",
  "#FCFFE8","#EDF8BB","#DCF190",
  "#FFE8FB","#F7BAEF","#F08EE6",
  "#FFE8F1","#FDC2DB","#FB9DC7",
  "#FFFFFF",
]);

function ColorBox({ color }: { color: ColorItem }) {
  const [copiedHex, setCopiedHex] = React.useState(false);
  const [copiedRgb, setCopiedRgb] = React.useState(false);

  const isLight = LIGHT_COLORS.has(color.hex.toUpperCase());

  const handleCopyHex = () => {
    navigator.clipboard.writeText(color.hex);
    setCopiedHex(true);
    setTimeout(() => setCopiedHex(false), 2000);
  };

  const handleCopyRgb = () => {
    navigator.clipboard.writeText(color.rgb);
    setCopiedRgb(true);
    setTimeout(() => setCopiedRgb(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Color Preview */}
      <div
        className="w-full h-20 flex items-end p-2"
        style={{ backgroundColor: color.hex }}
      >
        <span
          className="text-[10px] font-bold font-mono"
          style={{ color: isLight ? "#270D4D" : "#FFFFFF" }}
        >
          {color.label}
        </span>
      </div>

      {/* Color Info */}
      <div className="p-3 space-y-1.5">
        <h3 className="font-semibold text-gray-900 text-xs">{color.name}</h3>

        {/* HEX */}
        <div
          className="flex items-center justify-between bg-gray-50 px-2 py-1 rounded group cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={handleCopyHex}
        >
          <div>
            <p className="text-[8px] text-gray-400 uppercase tracking-wider">HEX</p>
            <p className="text-[11px] font-mono font-bold text-gray-900">{color.hex}</p>
          </div>
          <button className="opacity-0 group-hover:opacity-100 transition-opacity ml-1 shrink-0">
            {copiedHex ? <Check size={12} className="text-green-500" /> : <Copy size={12} className="text-gray-400" />}
          </button>
        </div>

        {/* RGB */}
        <div
          className="flex items-center justify-between bg-gray-50 px-2 py-1 rounded group cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={handleCopyRgb}
        >
          <div className="min-w-0">
            <p className="text-[8px] text-gray-400 uppercase tracking-wider">RGB</p>
            <p className="text-[10px] font-mono font-bold text-gray-900 truncate">{color.rgb}</p>
          </div>
          <button className="opacity-0 group-hover:opacity-100 transition-opacity ml-1 shrink-0">
            {copiedRgb ? <Check size={12} className="text-green-500" /> : <Copy size={12} className="text-gray-400" />}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function ColorGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14 mt-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg" style={{ background: "#270D4D" }} />
            <span className="text-sm text-gray-500 font-medium">Hiliree App</span>
            <span className="text-gray-300">·</span>
            <span className="text-sm text-gray-500">Colors Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Colors</h1>
          <p className="text-gray-500 max-w-xl">
            All colors verified directly from the official Hiliree App design guide. Click any HEX or RGB value to copy it.
          </p>
        </motion.div>

        {/* Color Sections */}
        <div className="space-y-14">
          {CATEGORY_ORDER.map((category) => {
            const colors = colorList.filter((c) => c.category === category);
            if (!colors.length) return null;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-lg font-bold text-gray-800 mb-1">{category}</h2>
                <div className="h-px bg-gray-200 mb-5" />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {colors.map((color) => (
                    <ColorBox key={`${color.category}-${color.hex}`} color={color} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* COLORS Object Reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Import in Your Code</h2>
          <p className="text-gray-500 text-sm mb-6">Copy this COLORS object into any component file.</p>
          <pre className="bg-gray-950 text-green-400 p-6 rounded-xl text-xs overflow-x-auto leading-relaxed">
{`export const COLORS = {
  brand:      { 6: "#270D4D", 5: "#341266", 7: "#4F1B9B", 4: "#9B88CA", 3: "#BAB0DC", 2: "#DDD7ED", 1: "#EEEBF6" },
  border:     { 4: "#86909C", 3: "#C9CDD4", 2: "#E5E6EB", 1: "#F2F3F5" },
  fill:       { 5: "#4E5969", 4: "#C9CDD4", 3: "#E5E6EB", 2: "#F2F3F5" },
  text:       { 1: "#1D2129", 2: "#4E5969", 3: "#86909C", 4: "#C9CDD4", 5: "#FFFFFF" },
  success:    { 6: "#00B42A", 5: "#23C343", 7: "#009A29", 3: "#7BE18B", 2: "#AFF0B5", 1: "#E8FFEA" },
  warning:    { 6: "#FF7D00", 5: "#FF9A2E", 7: "#D25F00", 3: "#FFCF8B", 2: "#FFE4BA", 1: "#FFF7E8" },
  danger:     { 6: "#F53F3F", 5: "#F76560", 7: "#CB2634", 3: "#FBACA3", 2: "#FDCDC5", 1: "#FFECE8" },
  cyan:       { 6: "#0FC6C2", 5: "#33D1C9", 7: "#0AA5A8", 3: "#86E8DD", 2: "#B5F4EA", 1: "#E8FFFB" },
  orangeRed:  { 6: "#F77234", 5: "#F99057", 7: "#CC5120", 3: "#FCC59F", 2: "#FDDDC3", 1: "#FFF3EB" },
  gold:       { 6: "#F7BA1E", 5: "#F9CC45", 7: "#CC9213", 3: "#FCE996", 2: "#FDF4BF", 1: "#FFFCE8" },
  blue:       { 6: "#3491FA", 5: "#57A9FB", 7: "#206CCF", 3: "#9FD4FD", 2: "#C3E7FE", 1: "#E8F7FF" },
  yellow:     { 6: "#FADC19", 5: "#FBE842", 7: "#CFAF0F", 3: "#FDFA94", 2: "#FEFEBE", 1: "#FEFFE8" },
  lime:       { 6: "#9FDB1D", 5: "#B5E241", 7: "#7EB712", 3: "#DCF190", 2: "#EDF8BB", 1: "#FCFFE8" },
  pinkPurple: { 6: "#D91AD9", 5: "#E13EDB", 7: "#B010B6", 3: "#F08EE6", 2: "#F7BAEF", 1: "#FFE8FB" },
  magenta:    { 6: "#F5319D", 5: "#F754A8", 7: "#CB1EB3", 3: "#FB9DC7", 2: "#FDC2DB", 1: "#FFE8F1" },
};`}
          </pre>
        </motion.div>

      </div>
    </div>
  );
}