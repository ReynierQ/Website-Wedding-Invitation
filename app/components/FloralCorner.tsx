import Image from "next/image";

type FloralCornerProps = {
  position: "tl" | "tr" | "bl" | "br";
};

const positions: Record<string, React.CSSProperties> = {
  tl: { top: -60, left: -60 },
  tr: { top: -8, right: -8 },
  bl: { bottom: -8, left: -8 },
  br: { bottom: -20, right: -50 },
};

export default function FloralCorner({ position }: FloralCornerProps) {
  if (position === "tr" || position === "bl") return null;

  return (
    <div
      style={{
        position: "absolute",
        ...positions[position],
        width: 300,
        height: 300,
        pointerEvents: "none",
        zIndex: 0,
        transform: position === "br" ? "scale(-1, -1)" : undefined,
      }}
    >
      <Image
        src="/assets/pink-white-flower.png"
        alt="Floral Corner"
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}