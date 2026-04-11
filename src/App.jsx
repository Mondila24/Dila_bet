import { useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import { PredictionsProvider } from "./context/PredictionsContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FreePicks from "./pages/FreePicks";
import VIPPicks from "./pages/VIPPicks";
import Admin from "./pages/Admin";
import AuthPage from "./pages/AuthPage";
import History from "./pages/History";
import "./App.css";

function AppInner() {
  const [page, setPage] = useState("home");
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div className="app-wrap">
      <Navbar page={page} setPage={setPage} onLoginClick={() => setShowAuth(true)} />

      {showAuth && <AuthPage onClose={() => setShowAuth(false)} />}

      <main>
        {page === "home" && <Home setPage={setPage} onLoginClick={() => setShowAuth(true)} />}
        {page === "free" && <FreePicks />}
        {page === "vip" && <VIPPicks onLoginClick={() => setShowAuth(true)} />}
        {page === "admin" && <Admin setPage={setPage} />}
        {page === "history" && <History />}
      </main>

      <footer className="footer">
        <p>⚽ DilaBet — For entertainment purposes only. Bet responsibly.</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <PredictionsProvider>
        <AppInner />
      </PredictionsProvider>
    </AuthProvider>
  );
}
