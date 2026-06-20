import * as React from "react";

/**
 * Logotip Tomaž Cvitkovič s.p.
 * Stiliziran znak "TC" v obliki zobnika/ozobja — industrial feel.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground shadow-industrial ${className ?? ""}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full p-1.5"
      >
        {/* Zobnik obroč */}
        <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.9">
          <circle cx="24" cy="24" r="13" />
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i / 12) * Math.PI * 2;
            const x1 = (24 + Math.cos(a) * 13).toFixed(3);
            const y1 = (24 + Math.sin(a) * 13).toFixed(3);
            const x2 = (24 + Math.cos(a) * 16.5).toFixed(3);
            const y2 = (24 + Math.sin(a) * 16.5).toFixed(3);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </g>
        {/* TC črki */}
        <g fill="currentColor">
          <text
            x="24"
            y="29.5"
            textAnchor="middle"
            fontFamily="var(--font-sans), system-ui, sans-serif"
            fontWeight="800"
            fontSize="13"
            letterSpacing="0.5"
          >
            TC
          </text>
        </g>
        {/* Akcentna črtka */}
        <rect x="14" y="35.5" width="20" height="2" rx="1" fill="var(--accent)" />
      </svg>
    </span>
  );
}
