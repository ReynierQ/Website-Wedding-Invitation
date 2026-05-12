"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import FloralCorner from "./FloralCorner";

type Props = { onOpen: () => void };

export default function LandingPage({ onOpen }: Props) {
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

      {/* Floral corners */}
      <FloralCorner position="tl" />
      <FloralCorner position="tr" />
      <FloralCorner position="bl" />
      <FloralCorner position="br" />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: 20,
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 6vw, 3.2rem)",
            fontWeight: 700,
            color: "var(--deep-red)",
            letterSpacing: "0.04em",
            lineHeight: 1.15,
            marginBottom: -40,
            marginTop: -20,
            textTransform: "uppercase",
          }}
        >
          Be Part of Our
          <br />
          Special Day
        </motion.h1>

        {/* Envelope image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          whileHover={{ y: -6, scale: 1.03 }}
          onClick={onOpen}
          style={{
            position: "relative",
            width: 480,
            height: 390,
            marginBottom: -80,
            cursor: "pointer",
            filter: "drop-shadow(0 10px 28px rgba(74,103,65,0.35))",
          }}
        >
          <Image
            src="/assets/green-envelope-close.png"
            alt="Wedding envelope"
            fill
            style={{ objectFit: "cover" }}
            priority
          />

          {/* Pulsing glow ring over the seal area */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.15, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: "55%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 70,
              height: 70,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(155,35,53,0.4) 0%, transparent 70%)",
              pointerEvents: "none",
              zIndex: 5,
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.25em",
            color: "var(--text-mid)",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Unlock the Details
        </motion.p>
      </div>

      {/* Hashtag */}
      <div className="hashtag-label">
        <strong>#ALELIE</strong>
        <em>gallyMarriedto</em>
        <strong>JOHN</strong>
      </div>
    </div>
  );
}