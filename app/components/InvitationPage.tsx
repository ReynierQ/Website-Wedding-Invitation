"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import FloralCorner from "./FloralCorner";
import Countdown from "./Countdown";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

type Props = { onEntourage: () => void };

export default function InvitationPage({ onEntourage }: Props) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--cream)",
        overflow: "hidden",
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

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 480,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px 24px",
          gap: 0,
        }}
      >
        {/* Open envelope */}
        <motion.div
          {...fadeUp(0.1)}
          style={{
            width: 450,
            height: 350,
            position: "relative",
            marginTop: -140,
            marginBottom: -60,
            filter: "drop-shadow(0 6px 18px rgba(74,103,65,0.25))",
          }}
        >
          <Image
            src="/assets/green-envelope-open.png"
            alt="Open wedding envelope"
            fill
            style={{ objectFit: "contain" }}
          />
        </motion.div>

        {/* Save the Date + Quote row */}
        <motion.div
          {...fadeUp(0.25)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            width: "100%",
            marginTop: -74,
            marginBottom: 16,
          }}
        >
          {/* Save the Date Card */}
          <div
            style={{
              flexShrink: 0,
              width: 200,
              height: 230,
              position: "relative",
            }}
          >
            <Image
              src="/assets/save-the-date.png"
              alt="Save the Date"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Quote */}
          <p
            style={{
              flex: 1,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.0rem",
              fontStyle: "italic",
              color: "var(--text-dark)",
              lineHeight: 1.55,
              textAlign: "left",
              marginLeft: -15,
            }}
          >
            &ldquo;Who knew the kid I shared crayons with would one day share my heart?&rdquo;
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.p
          {...fadeUp(0.4)}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.95rem",
            color: "var(--text-mid)",
            fontStyle: "italic",
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          Days left before we say{" "}
          <em style={{ fontFamily: "'Playfair Display', serif",  fontSize: "1.5rem", }}>&ldquo;I do&rdquo; 🥂</em> 
        </motion.p>

        <motion.div {...fadeUp(0.5)} style={{ marginBottom: 18 }}>
          <Countdown />
        </motion.div>

        <motion.a
          {...fadeUp(0.65)}
          onClick={onEntourage}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "var(--deep-red)",
            color: "white",
            fontFamily: "'Raleway', sans-serif",
            fontSize: "0.7rem",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "10px 22px",
            borderRadius: 3,
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
            boxShadow: "0 4px 14px rgba(139,26,42,0.3)",
          }}
          whileHover={{
            background: "#6e1420",
            y: -2,
            boxShadow: "0 7px 20px rgba(139,26,42,0.4)",
          }}
          transition={{ duration: 0.2 }}
        >
          📋 More Info
        </motion.a>
      </div>
    </div>
  );
}