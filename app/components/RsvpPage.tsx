"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import FloralCorner from "./FloralCorner";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

// ─────────────────────────────────────────────
// EMAILJS CONFIG — fill these in:
// 1. Go to https://www.emailjs.com and create a free account
// 2. Add an Email Service (Gmail, Outlook, etc.) → copy the Service ID
// 3. Create an Email Template → copy the Template ID
//    Template variables used: {{from_name}}, {{attendance}}, {{guest_count}}, {{message}}
// 4. Go to Account → API Keys → copy your Public Key
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

type Props = { onBack: () => void };
type Status = "idle" | "sending" | "success" | "error";

export default function RsvpPage({ onBack }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<"attending" | "not-attending" | "">("");
  const [guestCount, setGuestCount] = useState("1");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !attendance) return;

    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          attendance: attendance === "attending" ? "Will Attend ✅" : "Cannot Attend ❌",
          guest_count: attendance === "attending" ? guestCount : "0",
          message: message || "No message",
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 14px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1rem",
    color: "var(--text-dark)",
    background: "white",
    border: "1px solid rgba(139,26,42,0.25)",
    borderRadius: 4,
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Raleway', sans-serif",
    fontSize: "0.65rem",
    fontWeight: 600,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "var(--text-mid)",
    display: "block",
    marginBottom: 6,
  };

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
        <motion.div {...fadeUp(0.05)} style={{ textAlign: "center", marginBottom: 6 }}>
          <span style={{ fontSize: "2rem" }}>💌</span>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2rem",
              fontWeight: 700,
              color: "var(--deep-red)",
              letterSpacing: "0.04em",
              marginTop: 4,
            }}
          >
            RSVP
          </h1>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "0.95rem",
              color: "var(--text-mid)",
              marginTop: 4,
            }}
          >
            Kindly respond on or before August 1, 2026
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div {...fadeUp(0.1)} style={{ textAlign: "center", margin: "14px 0" }}>
          <svg width="200" height="20" viewBox="0 0 200 20" fill="none">
            <path d="M10 10 Q50 2 100 10 Q150 18 190 10" stroke="#c9a84c" strokeWidth="1" fill="none" opacity="0.7"/>
            <circle cx="100" cy="6" r="2" fill="#c9a84c" opacity="0.7"/>
          </svg>
        </motion.div>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: "center", padding: "32px 0" }}
            >
              <div style={{ fontSize: "3rem", marginBottom: 12 }}>🎉</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "#4a6741", marginBottom: 8 }}>
                Thank You!
              </h2>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1rem", color: "var(--text-mid)", lineHeight: 1.6 }}>
                Your RSVP has been received.<br />We can&apos;t wait to celebrate with you!
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              ref={formRef}
              onSubmit={handleSubmit}
              {...fadeUp(0.15)}
              style={{ display: "flex", flexDirection: "column", gap: 18 }}
            >
              {/* Name */}
              <div>
                <label style={labelStyle}>Your Full Name *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Juan dela Cruz"
                  required
                  style={inputStyle}
                />
              </div>

              {/* Attendance radio */}
              <div>
                <label style={labelStyle}>Will you attend? *</label>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { value: "attending", emoji: "✅", label: "Joyfully accepts" },
                    { value: "not-attending", emoji: "❌", label: "Regretfully declines" },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      onClick={() => setAttendance(opt.value as "attending" | "not-attending")}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "10px 14px",
                        borderRadius: 4,
                        border: `1.5px solid ${attendance === opt.value ? "var(--deep-red)" : "rgba(139,26,42,0.2)"}`,
                        background: attendance === opt.value ? "rgba(139,26,42,0.06)" : "white",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          border: `2px solid ${attendance === opt.value ? "var(--deep-red)" : "#ccc"}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {attendance === opt.value && (
                          <div style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--deep-red)" }} />
                        )}
                      </div>
                      <span style={{ fontSize: "1rem" }}>{opt.emoji}</span>
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1rem", color: "var(--text-dark)" }}>
                        {opt.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Guest count — only if attending */}
              {attendance === "attending" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <label style={labelStyle}>Number of guests (including yourself)</label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    {[1].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
                    ))}
                  </select>
                </motion.div>
              )}

              {/* Optional message */}
              <div>
                <label style={labelStyle}>Message for the couple (optional)</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write a short message or well wishes..."
                  rows={3}
                  style={{ ...inputStyle, resize: "none", lineHeight: 1.6 }}
                />
              </div>

              {status === "error" && (
                <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.7rem", color: "var(--deep-red)", textAlign: "center" }}>
                  Something went wrong. Please try again.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={!name || !attendance || status === "sending"}
                style={{
                  background: !name || !attendance ? "rgba(139,26,42,0.4)" : "var(--deep-red)",
                  color: "white",
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  padding: "12px",
                  borderRadius: 3,
                  border: "none",
                  cursor: !name || !attendance ? "not-allowed" : "pointer",
                  boxShadow: "0 4px 14px rgba(139,26,42,0.25)",
                  transition: "background 0.2s",
                }}
              >
                {status === "sending" ? "Sending..." : "Send RSVP 💌"}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

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
            background: "transparent",
            color: "var(--deep-red)",
            fontFamily: "'Raleway', sans-serif",
            fontSize: "0.7rem",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "10px 28px",
            borderRadius: 3,
            border: "1.5px solid var(--deep-red)",
            cursor: "pointer",
          }}
        >
          ← Back
        </button>
      </motion.div>
    </div>
  );
}
