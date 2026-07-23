"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import FloralCorner from "./FloralCorner";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

const scriptStyle: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', serif",
  fontStyle: "italic",
  fontSize: "0.70rem",
  color: "#b8860b",
  lineHeight: 1.6 ,
};

const bridesmaidStyle: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', serif",
  fontStyle: "italic",
  fontSize: "0.80rem",
  color: "#b8860b",
  lineHeight: 1.6 ,
};

const sectionTitle: React.CSSProperties = {
  fontFamily: "'Raleway', sans-serif",
  fontWeight: 700,
  fontSize: "0.7rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--text-dark)",
  marginBottom: 8,
  marginTop: 10,
};

type Props = { onBack: () => void; onNext: () => void };

export default function EntourageoPage({ onBack, onNext }: Props) {
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
          padding: "0 24px 40px",
          marginBottom: 30,
        }}
      >
        {/* Header */}
        <motion.div
          {...fadeUp(0.1)}
          style={{
            width: 250,
            height: 150,
            position: "relative",
            marginTop: 20,
            marginBottom: -60,
            marginLeft: "clamp(0px, 10vw, 60px)",
            filter: "drop-shadow(0 6px 18px rgba(74,103,65,0.25))",
            overflow: "hidden",
          }}
        >
          <Image
            src="/assets/hashtag.png"
            alt="Open wedding envelope"
            fill
            style={{ objectFit: "contain" }}
          />
        </motion.div>
        {/* <motion.div {...fadeUp(0.05)} style={{ textAlign: "center", paddingTop: 36, marginBottom: 4 }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", color: "var(--deep-red)", letterSpacing: "0.05em" }}>
            <strong>#ALELIE</strong><em>gallyMarriedto</em><strong>JOHN</strong>
          </p>
          <span style={{ fontSize: "1.4rem" }}>💍</span>
        </motion.div> */}

        {/* Green banner */}
        <motion.div
          {...fadeUp(0.15)}
          style={{
            background: "linear-gradient(135deg, #5c7a52, #4a6741)",
            borderRadius: 6,
            padding: "15px 19px",
            margin: "16px 0 24px",
            color: "rgba(255,255,255,0.92)",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          From childhood laughter to lifelong promises, our journey has led us here. We invite you to celebrate with us as playmates become soulmates, sharing in the joy, laughter, and love that make this day unforgettable.
        </motion.div>

        <motion.div 
          style={{
            background: "var(--cream)", 
            border: "1.5px solid rgba(139,26,42,0.15)",
            borderRadius: 6,
            marginBottom: 50,
          }}
        >

          {/* THE Entourage title */}
          <motion.div {...fadeUp(0.2)} style={{ textAlign: "center", marginBottom: 1, background: "var(--cream)", }}>
            <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "1rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--text-mid)" }}>
              THE
            </span>
            <div style={{ marginBottom: -15 }}></div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.9rem", fontStyle: "italic", color: "var(--text-dark)" }}>
              Entourage
            </span>
          </motion.div>

          {/* Two-column sections */}
          <motion.div {...fadeUp(0.25)} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px", textAlign: "center" }}>

            {/* Parents of the Groom */}
            <div>
              <p style={sectionTitle}>Parent&apos;s of the Groom</p>
              <p style={scriptStyle}>Mr. Alexander Tribdino<br />Mrs. Marites Castillo</p>
            </div>

            {/* Parents of the Bride */}
            <div>
              <p style={sectionTitle}>Parent&apos;s of the Bride</p>
              <p style={scriptStyle}>Mr. Alex Tagalan<br />Mrs. Regina Tagalan</p>
            </div>

            {/* Principal */}
            <div>
              <p style={sectionTitle}>Principal</p>
              <p style={scriptStyle}>
                Ms. Angela Poblete<br />
                Ms. Thera Tribdino<br />
                Ms. Jhong Sales<br />
                Mrs. Rose Poblete<br />
                Mrs. Allen Calmada<br />
                Mrs. Rosie Arayata<br />
                Mrs. Tessie Silong<br />
                Ms. Anjet Samson
              </p>
            </div>

            {/* Sponsor */}
            <div>
              <p style={sectionTitle}>Sponsor</p>
              <p style={scriptStyle}>
                Mr. Redentor Villarica<br />
                Mr. Jerome Castillo<br />
                Mr. Artcel Tribdino<br />
                Mr. Leo Bungubung<br />
                Mr. Joel Basister<br />
                Mr. Dodie Nitura<br />
                Mr. Allen Melo<br />
                Mr. Rolly Silong<br />
                Mr. Silvestre Tribdino<br />
                Hon. Mervin Viray
              </p>
            </div>

            {/* Maid of Honor */}
            <div>
              <p style={sectionTitle}>Maid of Honor</p>
              <p style={bridesmaidStyle}>Ms. Algine Mitch Tagalan</p>
            </div>

            {/* Best Man */}
            <div>
              <p style={sectionTitle}>Bestman</p>
              <p style={scriptStyle}>Mr. Mart Tribdino</p>
            </div>

            {/* Groomsmen */}
            <div>
              <p style={sectionTitle}>Groomsmen</p>
              <p style={scriptStyle}>
                Mr. Maximo Samson<br />
                Mr. Royce Millendrez<br />
                Mr. Darel Torres<br />
                Mr. Johan Castillo<br />
                Mr. Kian Lance Santos<br />
                Mr. Joshua Samson<br />
                Mr. Kenneth Tribdino<br />
                Mr. Ron Tiglao
              </p>
            </div>

            {/* Bridesmaids */}
            <div>
              <p style={sectionTitle}>Bridesmaids</p>
              <p style={scriptStyle}>
                Mrs. Zarvia Millendrez<br />
                Mrs. Kristine Tribdino<br />
                Ms. Keith Tagalog<br />
                Ms. Eliza Dela Pea<br />
                Ms. Agatha Arayata<br />
                Ms. Gellanie Sabucor<br />
                Ms. Aj Praise Tribdino<br />
                Ms. Cristian Joy Samson<br />
                Ms. Noreen Tribdino<br />
                Ms. Cheska Tribdino<br />
                Ms. Anamae Santos
                
              </p>
            </div>

            {/* Ring Bearer */}
            <div>
              <p style={sectionTitle}>Ring Bearer</p>
              <p style={scriptStyle}>David</p>
            </div>

            {/* Flower Girl */}
            <div>
              <p style={sectionTitle}>Flower Girl</p>
              <p style={scriptStyle}>Jianna</p>
            </div>

          </motion.div>

          {/* Back button */}
          <motion.div
            {...fadeUp(0.3)}
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
                marginTop: 20,
                marginBottom: 0,
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
                padding: "10px 28px",
                borderRadius: 3,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(139,26,42,0.3)",
                marginTop: 20,
                marginBottom: 0,
                marginLeft: 3, 
              }}
            >
              Next →
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
