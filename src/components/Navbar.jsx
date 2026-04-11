import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ page, setPage, onLoginClick }) {
  const { user, isVip, isAdmin, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (p) => {
    setPage(p);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand" onClick={() => navigate("home")}>
        ⚽ DilaBet
      </div>

      {/* Hamburger button — mobile only */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Nav links */}
      <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        <button className={page === "home" ? "active" : ""} onClick={() => navigate("home")}>Home</button>
        <button className={page === "free" ? "active" : ""} onClick={() => navigate("free")}>Free Picks</button>
        <button className={page === "vip" ? "active" : ""} onClick={() => navigate("vip")}>
          VIP Picks {isVip && <span className="badge">✓</span>}
        </button>
        <button className={page === "history" ? "active" : ""} onClick={() => navigate("history")}>History</button>
        {isAdmin && (
          <button className={page === "admin" ? "active" : ""} onClick={() => navigate("admin")}>Admin</button>
        )}
        {user ? (
          <button className="btn-outline small" onClick={() => { logout(); setMenuOpen(false); }}>Logout</button>
        ) : (
          <button className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.85rem" }} onClick={() => { onLoginClick(); setMenuOpen(false); }}>Login</button>
        )}
      </div>
    </nav>
  );
}
