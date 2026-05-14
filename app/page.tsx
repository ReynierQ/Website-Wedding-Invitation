"use client";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LandingPage from "./components/LandingPage";
import InvitationPage from "./components/InvitationPage";
import EntouragePage from "./components/EntouragePage";
import DressCodePage from "./components/DressCodePage";
import WeddingRulesPage from "./components/WeddingRulesPage";
import EventInfoPage from "./components/EventInfoPage";

type Page = "landing" | "invitation" | "entourage" | "dresscode" | "weddingrules" | "eventinfo";

export default function Home() {
  const [page, setPage] = useState<Page>("landing");
  const [musicStarted, setMusicStarted] = useState(false);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

 const startMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/assets/Bruno Mars - Risk It All.mp3");
      audioRef.current.loop = true; // ← turn off loop if you want it to stop
      audioRef.current.volume = 0.4;
      audioRef.current.currentTime = 66; // start at 1:06

      // Stop at a specific time — e.g. 3:30 = 210 seconds
      audioRef.current.addEventListener("timeupdate", () => {
        if (!audioRef.current) return;
        if (audioRef.current.currentTime >= 210) { // ← set your end time here
          audioRef.current.pause();
          audioRef.current.currentTime = 66; // loop back to start time
          audioRef.current.play().catch(() => {});
        }
      });
    }
    
    // Must call play() directly inside the user gesture handler for iOS
    audioRef.current.play().catch(() => {});
    setMusicStarted(true);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>

      <AnimatePresence mode="wait">
        {page === "landing" && (
          <motion.div
            key="landing"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.6 }}
            style={{ position: "absolute", inset: 0 }}
          >
             <LandingPage onOpen={() => { startMusic(); setPage("invitation"); }} />
          </motion.div>
        )}

        {page === "invitation" && (
          <motion.div
            key="invitation"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.7 }}
            style={{ position: "absolute", inset: 0 }}
          >
            <InvitationPage onEntourage={() => setPage("entourage")} />
          </motion.div>
        )}

        {page === "entourage" && (
          <motion.div
            key="entourage"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            style={{ position: "absolute", inset: 0 }}
          >
            <EntouragePage 
              onBack={() => setPage("invitation")}
              onNext={() => setPage("dresscode")}
             />
          </motion.div>
        )}

        {page === "dresscode" && (
          <motion.div
            key="dresscode"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            style={{ position: "absolute", inset: 0 }}
          >
            <DressCodePage onBack={() => setPage("entourage")} onNext={() => setPage("weddingrules")} />
          </motion.div>
        )}

        {page === "weddingrules" && (
          <motion.div key="weddingrules" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} transition={{ duration: 0.6 }} style={{ position: "absolute", inset: 0 }}>
            <WeddingRulesPage onBack={() => setPage("dresscode")} onNext={() => setPage("eventinfo")} />
          </motion.div>
        )}

        {page === "eventinfo" && (
          <motion.div key="eventinfo" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} transition={{ duration: 0.6 }} style={{ position: "absolute", inset: 0 }}>
            <EventInfoPage onBack={() => setPage("weddingrules")} />
          </motion.div>
        )}

      </AnimatePresence>

      {/* Mute / Unmute button */}
      {musicStarted && (
        <button
          onClick={toggleMute}
          title={muted ? "Unmute" : "Mute"}
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 100,
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "rgba(139,26,42,0.85)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.1rem",
            boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
            backdropFilter: "blur(4px)",
          }}
        >
          {muted ? "🔇" : "🔊"}
        </button>
      )}
    </div>
  );
}
