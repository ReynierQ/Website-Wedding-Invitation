type WaxSealProps = { size?: number };

export default function WaxSeal({ size = 62 }: WaxSealProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg">
      <circle cx="31" cy="31" r="29" fill="#9b2335" />
      <circle cx="31" cy="31" r="25" fill="#8b1a2a" />
      <circle cx="31" cy="31" r="22" fill="#9b2335" opacity="0.5" />
      <g transform="translate(31,31)">
        <ellipse rx="8" ry="4" fill="#c23048" transform="rotate(0) translate(0,-5)" />
        <ellipse rx="8" ry="4" fill="#c23048" transform="rotate(72) translate(0,-5)" />
        <ellipse rx="8" ry="4" fill="#c23048" transform="rotate(144) translate(0,-5)" />
        <ellipse rx="8" ry="4" fill="#c23048" transform="rotate(216) translate(0,-5)" />
        <ellipse rx="8" ry="4" fill="#c23048" transform="rotate(288) translate(0,-5)" />
        <circle r="6" fill="#8b1a2a" />
        <circle r="3" fill="#6e1420" />
      </g>
      <circle cx="31" cy="31" r="28" fill="none" stroke="#c23048" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}
