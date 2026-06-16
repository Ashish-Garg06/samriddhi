import { LeafSolid } from "./Icons";

export default function SprigDivider() {
  return (
    <div className="sprig-divider" aria-hidden="true">
      <span className="line" />
      <LeafSolid size={16} />
      <span className="line r" />
    </div>
  );
}
