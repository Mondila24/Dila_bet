import { useAuth } from "../context/AuthContext";

export default function Navbar({ page, setPage, onLoginClick }) {
  const { user, isVip, isAdmin, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-brand" onClick={() => setPage("home")}>
        ⚽ DilaBet
      </div>
      <div className="nav-links">
        <button className={page === "home" ? "active" : ""} onClick={() => setPage("home")}>Home</button>
        <button className={page === "free" ? "active" : ""} onClick={() => setPage("free")}>Free Picks</button>
        <button className={page === "vip" ? "active" : ""} onClick={() => setPage("vip")}>
          VIP Picks {isVip && <span className="badge">✓</span>}
        </button>
        <button className={page === "history" ? "active" : ""} onClick={() => setPage("history")}>History</button>
        {isAdmin && (
          <button className={page === "admin" ? "active" : ""} onClick={() => setPage("admin")}>Admin</button>
        )}
        {user ? (
          <button className="btn-outline small" onClick={logout}>Logout</button>
        ) : (
          <button className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.85rem" }} onClick={onLoginClick}>Login</button>
        )}
      </div>
    </nav>
  );
}
