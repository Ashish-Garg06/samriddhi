"use client";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 3000, suffix: "", pre: "", label: "Women Empowered", format: "k" },
  { value: 15, suffix: "", pre: "", label: "Villages in Himachal" },
  { value: 3, suffix: "", pre: "", label: "Enterprise Clusters" },
  { value: 10, suffix: "", pre: "", label: "Product Categories" },
  { value: 10, suffix: " Cr", pre: "₹", label: "Project Investment", unit: true },
];

function useCountUp(target, run, dur = 1500) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, dur]);
  return n;
}

function StatItem({ stat, run }) {
  const n = useCountUp(stat.value, run);
  const display = stat.format === "k" ? n.toLocaleString("en-IN") : n;
  return (
    <div className="stat">
      <div className="stat-num">
        {stat.pre}
        {display}
        {stat.suffix && <span className="unit">{stat.suffix}</span>}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

export default function StatRibbon() {
  const ref = useRef(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") { setRun(true); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { setRun(true); io.disconnect(); } }),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <section className="stat-ribbon" ref={ref} aria-label="Programme at a glance">
      <div className="wrap">
        <div className="stat-grid">
          {STATS.map((s) => <StatItem key={s.label} stat={s} run={run} />)}
        </div>
      </div>
    </section>
  );
}
