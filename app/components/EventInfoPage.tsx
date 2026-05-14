"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import FloralCorner from "./FloralCorner";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Lancaster+Hotel+Manila+622+Shaw+Blvd+Mandaluyong+City";

type Props = { onBack: () => void };

export default function EventInfoPage({ onBack }: Props) {
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
          padding: "32px 28px 16px",
        }}
      >
        {/* Title */}
        <motion.div {...fadeUp(0.05)} style={{ textAlign: "right", marginBottom: 20 }}>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "2.4rem",
              color: "#4a6741",
              lineHeight: 1.15,
            }}
          >
            Event<br />Information
          </h1>
        </motion.div>

        {/* Hotel image — clickable, opens map */}
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: 14 }}>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", textDecoration: "none" }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 220,
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 8px 28px rgba(0,0,0,0.15)",
                cursor: "pointer",
              }}
            >
              {/* PUT LANCASTER HOTEL IMAGE HERE */}
                  <Image
                    src="/assets/lancaster-hotel.png"
                    alt="Lancaster Hotel Manila"
                    fill
                    style={{ objectFit: "cover" }}
                  />

              {/* Tap to view map overlay hint */}
              <div
                style={{
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                  background: "rgba(255,255,255,0.85)",
                  borderRadius: 20,
                  padding: "4px 10px",
                  fontSize: "0.6rem",
                  fontFamily: "'Raleway', sans-serif",
                  color: "#4a6741",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                }}
              >
                📍 Tap to view map
              </div>
            </div>
          </a>
        </motion.div>

        {/* HERE'S THE MAP link */}
        {/* <motion.div {...fadeUp(0.15)} style={{ textAlign: "center", marginBottom: 24 }}>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#4a6741",
              textDecoration: "underline",
              textUnderlineOffset: 3,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            HERE&apos;S THE MAP 🗺️
          </a>
        </motion.div> */}

        {/* When */}
        <motion.div {...fadeUp(0.2)} style={{ marginBottom: 16 }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "1.7rem",
              color: "var(--deep-red)",
              marginBottom: 4,
            }}
          >
            When?
          </h2>
          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.8rem",
              color: "var(--text-dark)",
              lineHeight: 1.6,
            }}
          >
            Saturday, August 22<sup>nd</sup> 2026 at 6:00 PM
          </p>
        </motion.div>

        {/* Where */}
        <motion.div {...fadeUp(0.27)} style={{ marginBottom: 16 }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "1.7rem",
              color: "var(--deep-red)",
              marginBottom: 4,
            }}
          >
            Where?
          </h2>
          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.8rem",
              color: "var(--text-dark)",
              lineHeight: 1.6,
            }}
          >
            Lancaster Hotel Manila (Penthouse M1 Level)<br />
            622 Shaw Blvd, Mandaluyong City
          </p>
        </motion.div>

        {/* Parking */}
        <motion.div {...fadeUp(0.34)} style={{ marginBottom: 24 }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "1.7rem",
              color: "var(--deep-red)",
              marginBottom: 4,
            }}
          >
            Parking?
          </h2>
          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.8rem",
              color: "var(--text-dark)",
              lineHeight: 1.6,
              marginRight: 30,
            }}
          >
            Basement Area inside the Lancaster Hotel with 50php Fee.
          </p>
        </motion.div>

        {/* Back button */}
        <motion.div
          {...fadeUp(0.4)}
          style={{
            position: "relative",
            zIndex: 3,
            display: "flex",
            justifyContent: "center",
            padding: "12px 24px 24px",
            background: "linear-gradient(to top, var(--cream) 70%, transparent)",
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
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(139,26,42,0.3)",
              marginTop: 50,
              marginBottom: 2,
              // marginRight: 3,
            }}
          >
            ← Back
          </button>
        </motion.div>
      </div>
    </div>
  );
}
