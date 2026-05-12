"use client";
import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-08-22T00:00:00");

function pad(n: number, len = 2) {
  return String(n).padStart(len, "0");
}

export default function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = WEDDING_DATE.getTime() - Date.now();
      if (diff <= 0) return;
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { val: pad(time.days, 3), label: "Days" },
    { val: pad(time.hours), label: "Hours" },
    { val: pad(time.mins), label: "Mins" },
    { val: pad(time.secs), label: "Secs" },
  ];

  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
      {units.map((u, i) => (
        <div key={u.label} style={{ display: "flex", alignItems: "flex-end", gap: 10 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.8rem, 5vw, 2.4rem)",
                fontWeight: 300,
                color: "var(--text-dark)",
                lineHeight: 1,
                minWidth: 52,
                textAlign: "center",
                letterSpacing: "-0.02em",
              }}
            >
              {u.val}
            </span>
            <span
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.55rem",
                letterSpacing: "0.18em",
                color: "var(--text-mid)",
                textTransform: "uppercase",
                marginTop: 3,
              }}
            >
              {u.label}
            </span>
          </div>
          {i < 3 && (
            <span
              className="animate-blink"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "2rem",
                color: "var(--deep-red)",
                lineHeight: 1,
                paddingBottom: 6,
              }}
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
