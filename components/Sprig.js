// Ambient botanical sprig used as a large faint decoration in page heroes.
export default function Sprig({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M150 290 C150 200 150 120 150 30" strokeLinecap="round" />
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const y = 60 + i * 38;
        return (
          <g key={i}>
            <path d={`M150 ${y} C110 ${y - 26} 70 ${y - 10} 58 ${y + 18} C95 ${y + 18} 130 ${y + 6} 150 ${y}`} />
            <path d={`M150 ${y} C190 ${y - 26} 230 ${y - 10} 242 ${y + 18} C205 ${y + 18} 170 ${y + 6} 150 ${y}`} />
          </g>
        );
      })}
      <path d="M150 30 C140 18 138 8 150 -2 C162 8 160 18 150 30" />
    </svg>
  );
}
