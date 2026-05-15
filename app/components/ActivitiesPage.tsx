"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import FloralCorner from "./FloralCorner";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

const activities = [
  { side: "left", label: "Ceremony" },
  { side: "right", label: "Cocktail Hour &\nPhoto Booth" },
  { side: "left", label: "Performances/Couple\nDance" },
  { side: "right", label: "Dinner Service" },
  { side: "left", label: "Cake Cutting &\nToasting" },
  { side: "right", label: "Wedding\nGames/Bouquet\nTossing" },
  { side: "left", label: "Closing & Thank you\nMsg of the Couple" },
];

type Props = { onBack: () => void; onRsvp: () => void };

export default function ActivitiesPage({ onBack, onRsvp }: Props) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "var(--cream)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Border accent */}
      <div
        style={{
          position: "absolute",
          inset: 12,
          border: "1.5px solid rgba(139,26,42,0.15)",
          borderRadius: 2,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <FloralCorner position="tl" />
      <FloralCorner position="tr" />
      <FloralCorner position="bl" />
      <FloralCorner position="br" />

      {/* Scrollable content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          overflowY: "auto",
          flex: 1,
          padding: "28px 24px 16px",
        }}
      >
        {/* Title */}
        <motion.div {...fadeUp(0.05)} style={{ textAlign: "right", marginBottom: 32 }}>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "2.4rem",
              color: "#4a6741",
              lineHeight: 1.15,
            }}
          >
            Sequence of<br />Activities
          </h1>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative", padding: "0 8px" }}>
          {/* Center vertical line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 1.5,
              background: "var(--text-dark)",
              transform: "translateX(-50%)",
            }}
          />

          {activities.map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.1 + i * 0.08)}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 28,
                position: "relative",
              }}
            >
              {/* Left side content */}
              <div
                style={{
                  flex: 1,
                  textAlign: "right",
                  paddingRight: 20,
                }}
              >
                {item.side === "left" && (
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontSize: "1.15rem",
                      color: "var(--deep-red)",
                      lineHeight: 1.35,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {item.label}
                  </span>
                )}
              </div>

              {/* Heart dot on the line */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "0.75rem",
                  lineHeight: 1,
                  zIndex: 2,
                  color: "var(--text-dark)",
                }}
              >
                ♥
              </div>

              {/* Right side content */}
              <div
                style={{
                  flex: 1,
                  textAlign: "left",
                  paddingLeft: 20,
                }}
              >
                {item.side === "right" && (
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontSize: "1.15rem",
                      color: "var(--deep-red)",
                      lineHeight: 1.35,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {item.label}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* RSVP section */}
        <motion.div
          {...fadeUp(0.7)}
          style={{ marginTop: 20, marginBottom: 20 }}
        >
          {/* PUT RSVP IMAGE HERE */}
            <div
              onClick={onRsvp}
              style={{ cursor: "pointer", width: 240, margin: "2vh 0 2vh 23vw" }}
            >
              <Image
                src="/assets/rsvp-button1.png"
                alt="RSVP Click Here"
                width={160}
                height={140}
                style={{ objectFit: "contain" }}
              />
            </div>

          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.6rem",
              color: "var(--text-mid)",
              textAlign: "center",
              lineHeight: 1.7,
              marginTop: -12,
              letterSpacing: "0.03em",
              textTransform: "uppercase",
              maxWidth: 280,
              margin: "12px auto 0",
              background: "var(--cream)",
            }}
          >
            Kindly confirm your attendance by signing the RSVP on or before August 1, 2026. Only confirmed guests will be accommodated.
          </p>
        </motion.div>

        {/* Back button */}
        <motion.div
          {...fadeUp(0.5)}
          style={{
            position: "relative",
            zIndex: 3,
            display: "flex",
            justifyContent: "center",
            padding: "12px 24px 24px",
            // background: "linear-gradient(to top, var(--cream) 70%, transparent)",
          }}
        >
          <button
            onClick={onBack}
            style={{
              background: "var(--deep-red)",
              color: "white",
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "10px 28px",
              borderRadius: 3,
              border: "1.5px solid var(--deep-red)",
              cursor: "pointer",
              marginTop: -10,
              marginBottom: 70,
            }}
          >
            ← Back
          </button>
        </motion.div>
      </div>
    </div>
  );
}
