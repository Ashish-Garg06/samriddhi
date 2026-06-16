// Samriddhi leaf mark — paired leaves over a mountain ridge, evoking the
// document's logo (foliage + Himalaya). Uses currentColor so it adapts to context.
export default function LeafMark({ size = 38 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="1.6" opacity="0.32" />
      {/* mountain ridge */}
      <path
        d="M9 33 17 22l5 6 6-9 11 14H9z"
        fill="currentColor"
        opacity="0.16"
      />
      {/* paired leaves */}
      <path
        d="M24 9c-5 2-9 6-9 12 0 3.6 2.4 6.6 6 7.4-.2-4.2 1-7.6 4.5-10.4-2.2.5-4.2 1.8-5.4 3.8C20.8 17 22.5 13 24 9z"
        fill="currentColor"
      />
      <path
        d="M24 9c5 2 9 6 9 12 0 3.6-2.4 6.6-6 7.4.2-4.2-1-7.6-4.5-10.4 2.2.5 4.2 1.8 5.4 3.8C27.2 17 25.5 13 24 9z"
        fill="currentColor"
        opacity="0.7"
      />
      <path d="M24 28v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
