import { PRODUCTS } from '../data/index.js';

export default function CableVisual() {
  return (
    <svg
      viewBox="0 0 300 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Cable product range illustration"
      role="img"
    >
      {PRODUCTS.map((p, i) => {
        const y = 20 + i * 36;
        return (
          <g key={p.id}>
            <rect x="20" y={y}   width="260" height="22" rx="11" fill={p.dot} opacity="0.08" />
            <rect x="20" y={y+6} width="260" height="10" rx="5"  fill={p.dot} opacity="0.45" />
            <circle cx="20"  cy={y + 11} r="11" fill={p.dot} opacity="0.8" />
            <circle cx="280" cy={y + 11} r="11" fill={p.dot} opacity="0.8" />
            <text
              x="33" y={y + 15}
              fontSize="7"
              fill="#fff"
              opacity="0.95"
              fontWeight="800"
              fontFamily="Inter, sans-serif"
            >
              {p.short}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
