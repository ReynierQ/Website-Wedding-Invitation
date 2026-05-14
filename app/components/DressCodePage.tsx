"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import FloralCorner from "./FloralCorner";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

type Props = { onBack: () => void; onNext: () => void };

export default function DressCodePage({ onBack, onNext }: Props) {
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
          marginTop: "5vh",
          marginBottom: 100,
          padding: "0px 20px",
          background: "var(--cream)",
        }}
      >
        {/* Gold decorative swirl */}
        <motion.div  style={{ position: "relative", width: "100%", height: "24%", marginTop: -60, marginBottom: -40 }}>
          <Image src="/assets/dresscode-top.png" alt="Dresscode Top" fill style={{ objectFit: "contain" }}></Image>
        </motion.div>

        {/* Bridesmaid & Groomsmen columns */}
        <motion.div
          {...fadeUp(0.1)}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 20px", marginBottom: 15 }}
        >
          {/* Bridesmaid */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "1.15rem",
              color: "#4a6741",
              marginBottom: -1,
              textAlign: "center",
              lineHeight: 1.3,
            }}>
              Bridesmaid<br />Dress Codes
            </h2>

            {/* PUT BRIDESMAID GROUP IMAGE HERE */}
            <div style={{ position: "relative", width: "100%", height: 140, marginBottom: -8 }}>
                <Image src="/assets/bridesmaid.png" alt="Bridesmaids" fill style={{ objectFit: "contain" }} />
            </div>

            {/* PUT BRIDESMAID COLOR PALETTE HERE */}
            <div style={{ position: "relative", width: "100%", height: 70, marginTop: -5, marginBottom: -5 }}>
                <Image src="/assets/bridesmaid-color-palette.png" alt="Bridesmaid colors" fill style={{ objectFit: "contain" }} />
            </div>

            <p style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.6rem",
              color: "var(--text-dark)",
              textAlign: "center",
              lineHeight: 1.6,
              fontWeight: 600,
            }}>
              Casual, formal, and maxi dresses are welcome, as long as they align with the wedding&apos;s chosen theme and style.
            </p>
          </div>

          {/* Groomsmen */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "1.15rem",
              color: "var(--deep-red)",
              marginBottom: 15,
              textAlign: "center",
              lineHeight: 1.3,
            }}>
              Groomsmen<br />Dress Code
            </h2>

            {/* PUT GROOMSMEN GROUP IMAGE HERE */}
            <div style={{ position: "relative", width: "100%", height: 115, marginBottom: -8 }}>
                <Image src="/assets/groomsmen.png" alt="Groomsmen" fill style={{ objectFit: "contain" }} />
            </div>

            {/* PUT GROOMSMEN COLOR PALETTE HERE */}
            <div style={{ position: "relative", width: "100%", height: 80, marginTop: -5, marginBottom: -5 }}>
                <Image src="/assets/groomsmen-color-palette.png" alt="Groomsmen colors" fill style={{ objectFit: "contain" }} />
            </div>

            <p style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.6rem",
              color: "var(--deep-red)",
              textAlign: "center",
              lineHeight: 1.6,
              fontWeight: 600,
            }}>
              White beige long-sleeve shirt with MAROON necktie only
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div style={{ position: "relative", width: "100%", height: "24%", marginTop: -60, marginBottom: -40 }}>
          <Image src="/assets/dresscode-flowers.png" alt="Dresscode Flowers" fill style={{ objectFit: "contain" }}></Image>
        </motion.div>

        {/* Principal Sponsors */}
        <motion.div {...fadeUp(0.25)} style={{ textAlign: "center", marginBottom: 16 }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "1.6rem",
            color: "#4a6741",
            marginBottom: 14,
          }}>
            Principal sponsors
          </h2>

          {/* PUT PRINCIPAL SPONSORS COLOR PALETTE HERE */}
          <div style={{ position: "relative", width: "100%", height: 110, marginTop: -5, marginBottom: -5 }}>
            <Image src="/assets/principal-sponsor-palette.png" alt="Sponsor colors" fill style={{ objectFit: "contain" }} />
          </div>

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.9rem",
            color: "var(--text-dark)",
            lineHeight: 1.7,
            maxWidth: 320,
            margin: "0 auto",
          }}>
            Principal sponsors may select casual or semi-formal attire of their preference, ensuring it remains in harmony with the wedding theme.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div style={{ position: "relative", width: "100%", height: "24%", marginTop: -60, marginBottom: -40 }}>
          <Image src="/assets/dresscode-flowers.png" alt="Dresscode Flowers" fill style={{ objectFit: "contain" }}></Image>
        </motion.div>

        {/* Guests */}
        <motion.div {...fadeUp(0.35)} style={{ textAlign: "center", marginBottom: 24 }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "1.6rem",
            color: "#4a6741",
            marginBottom: 14,
          }}>
            Guests
          </h2>

          {/* PUT GUESTS COLOR PALETTE HERE */}
          <div style={{ position: "relative", width: "100%", height: 110, marginTop: -25, marginBottom: -15 }}>
            <Image src="/assets/guest-palette.png" alt="Guest colors" fill style={{ objectFit: "contain" }} />
          </div>

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.9rem",
            color: "var(--text-dark)",
            lineHeight: 1.7,
            maxWidth: 320,
            margin: "0 auto",
          }}>
            Guests are welcome to wear any outfit, as long as it harmonizes with the wedding theme.
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
                    marginTop: 5,
                    marginBottom: 2,
                    marginRight: 3, 
                }}
                >
                    ← Back
            </button>
            <button
                onClick={onNext}
                style={{
                    background: "var(--deep-red)",
                    color: "white",
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    padding: "10px 24px",
                    borderRadius: 3,
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 14px rgba(139,26,42,0.3)",
                    marginTop: 5,
                    marginBottom: 2,
                    marginLeft: 3, 
                }}
                >
                    Next →
            </button>
        </motion.div>
      </div>
    </div>
  );
}
