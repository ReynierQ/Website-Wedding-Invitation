"use client";
import { useState } from "react";
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
            <LandingPage onOpen={() => setPage("invitation")} />
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
    </div>
  );
}
