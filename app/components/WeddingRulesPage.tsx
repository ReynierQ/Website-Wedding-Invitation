"use client";
import { motion } from "framer-motion";
import FloralCorner from "./FloralCorner";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

const rules = [
  {
    title: "No Plus Ones",
    body: "Invitations are extended only to the individuals named. This allows us to maintain an intimate and carefully planned guest list.",
  },
  {
    title: "Adult-Only Celebration",
    body: "The nature of our event is best suited for adults. We respectfully request that children not attend, so all guests may fully enjoy the evening.",
  },
  {
    title: "Dress Code",
    body: "Please adhere to the attire specified in your invitation. This ensures a cohesive and elegant atmosphere throughout the celebration.",
  },
  {
    title: "Timely Arrival",
    body: "We kindly ask guests to arrive and be seated before the ceremony begins, so the moment flows beautifully. Our celebration is just four hours, and we'd be grateful to share every minute of this once-in-a-lifetime occasion with you.",
  },
  {
    title: "Seating Arrangements",
    body: "Kindly follow the seating plan as arranged to ensure comfort and order for all guests.",
  },
  {
    title: "Celebrate with Grace",
    body: "Above all, we invite you to share in the love, laughter, and unity that define this day.",
  },
];

type Props = { onBack: () => void; onNext: () => void };

export default function WeddingRulesPage({ onBack, onNext }: Props) {
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
          margin: "5vh 3vw 5vh",
          background: "var(--cream)",
        }}
      >
        {/* Green header banner */}
        <motion.div
          {...fadeUp(0.05)}
          style={{
            background: "linear-gradient(135deg, #5c7a52, #4a6741)",
            borderRadius: 10,
            padding: "24px 28px",
            marginBottom: 28,
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "2rem",
              color: "white",
              marginBottom: 12,
              lineHeight: 1.2,
            }}
          >
            Our Wedding Rules!
          </h1>
          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.7,
              maxWidth: 280,
              margin: "0 auto",
            }}
          >
            To ensure our celebration is meaningful, seamless, and enjoyable for all, we kindly request that guests observe the following:
          </p>
        </motion.div>

        {/* Rules list */}
        {rules.map((rule, i) => (
          <motion.div
            key={rule.title}
            {...fadeUp(0.1 + i * 0.07)}
            style={{ marginBottom: 22, textAlign: "center" }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "1.45rem",
                color: "var(--deep-red)",
                marginBottom: 6,
              }}
            >
              {rule.title}
            </h2>
            <p
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.72rem",
                color: "var(--text-dark)",
                lineHeight: 1.75,
                maxWidth: 320,
                margin: "0 auto",
              }}
            >
              {rule.body}
            </p>
          </motion.div>
        ))}

        {/* Back button */}
        <motion.div
          {...fadeUp(0.6)}
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
            }}
          >
            Next →
          </button>
        </motion.div>
      </div>
    </div>
  );
}
