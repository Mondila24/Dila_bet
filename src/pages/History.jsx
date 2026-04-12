import { useState } from "react";
import { usePredictions } from "../context/PredictionsContext";
import { useAuth } from "../context/AuthContext";
import StatsBar from "../components/StatsBar";

const SPORT_ICONS = {
  football: "⚽", basketball: "🏀", tennis: "🎾", rugby: "🏉",
  baseball: "⚾", hockey: "🏒", boxing: "🥊", cricket: "🏏", other: "🏅",
};

export default function History() {
  const { freePicks, vipPicks, freeAccas, vipAccas } = usePredictions();
  const { isVip, isAdmin } = useAuth();
  const [filter, setFilter] = useState("all");
  const [source, setSource] = useState("all");
  const [viewTab, setViewTab] = useState("singles");

  const visibleVipPicks = (isVip || isAdmin)
    ? vipPicks
    : vipPicks.filter((p) => p.result !== "pending");

  const visibleVipAccas = (isVip || isAdmin)
    ? vipAccas
    : vipAccas.filter((a) => a.result && a.result !== "pending");

  // Singles
  const allPicks = [
    ...freePicks.map((p) => ({ ...p, source: "free" })),
    ...visibleVipPicks.map((p) => ({ ...p, source: "vip" })),
  ];
  const settledPicks = allPicks.filter((p) => p.result !== "pending");
  const filteredPicks = settledPicks.filter((p) => {
    const matchFilter = filter === "all" || p.result === filter;
    const matchSource = source === "all" || p.source === source;
    return matchFilter && matchSource;
  });
  const sortedPicks = [...filteredPicks].sort((a, b) => b.createdAt - a.createdAt);

  // Accas
  const allAccas = [
    ...freeAccas.map((a) => ({ ...a, source: "free" })),
    ...visibleVipAccas.map((a) => ({ ...a, source: "vip" })),
  ];
  const settledAccas = allAccas.filter((a) => a.result && a.result !== "pending");
  const filteredAccas = settledAccas.filter((a) => {
    const matchFilter = filter === "all" || a.result === filter;
    const matchSource = source === "all" || a.source === source;
    return matchFilter && matchSource;
  });
  const sortedAccas = [...filteredAccas].sort((a, b) => b.createdAt - a.createdAt);

  return (
    <div className="page">
      <div className="page-header">
        <h2>Prediction History</h2>
        <p>Track record of all settled tips.</p>
      </div>

      <StatsBar picks={allPicks} />

      {/* View toggle */}
      <div className="admin-tabs" style={{ marginBottom: "20px" }}>
        <button className={viewTab === "singles" ? "active" : ""} onClick={() => setViewTab("singles")}>
          Single Picks
        </button>
        <button className={viewTab === "accas" ? "active" : ""} onClick={() => setViewTab("accas")}>
          Accumulators
        </button>
      </div>

      <div className="history-filters">
        <div className="filter-group">
          <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All</button>
          <button className={filter === "won" ? "active" : ""} onClick={() => setFilter("won")}>Won</button>
          <button className={filter === "lost" ? "active" : ""} onClick={() => setFilter("lost")}>Lost</button>
        </div>
        <div className="filter-group">
          <button className={source === "all" ? "active" : ""} onClick={() => setSource("all")}>All Picks</button>
          <button className={source === "free" ? "active" : ""} onClick={() => setSource("free")}>Free</button>
          <button className={source === "vip" ? "active" : ""} onClick={() => setSource("vip")}>VIP</button>
        </div>
      </div>

      {/* Singles history */}
      {viewTab === "singles" && (
        sortedPicks.length === 0 ? (
          <p className="empty">No settled single picks yet.</p>
        ) : (
          <div className="history-list">
            {sortedPicks.map((pick) => (
              <div key={pick.id + pick.source} className={`history-row ${pick.result}`}>
                <div className="history-left">
                  <span className="history-sport">{SPORT_ICONS[pick.sport] || "🏅"}</span>
                  <div>
                    <div className="history-match">{pick.match}</div>
                    <div className="history-meta">
                      {pick.country && <span>{pick.country} · </span>}
                      {pick.league && <span>{pick.league}</span>}
                      {pick.time && <span> · 🕐 {pick.time}</span>}
                    </div>
                  </div>
                </div>
                <div className="history-right">
                  <span className="history-tip">{pick.tip}</span>
                  <span className="history-odds">@ {pick.odds}</span>
                  <span className={`history-result ${pick.result}`}>
                    {pick.result === "won" ? "✓ WON" : "✗ LOST"}
                  </span>
                  <span className={`source-badge ${pick.source}`}>
                    {pick.source === "vip" ? "⭐ VIP" : "FREE"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )
      )}

      {/* Accumulators history */}
      {viewTab === "accas" && (
        sortedAccas.length === 0 ? (
          <p className="empty">No settled accumulators yet.</p>
        ) : (
          <div className="history-list">
            {sortedAccas.map((acca) => (
              <div key={acca.id + acca.source} className={`history-row ${acca.result} acca-history-row`}>
                <div className="acca-history-header">
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "1.3rem" }}>🎯</span>
                    <div>
                      <div className="history-match">Accumulator · {acca.picks?.length || 0} picks</div>
                      <div className="history-meta">Total Odds: <strong style={{ color: "#fbbf24" }}>{acca.totalOdds}</strong></div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                    <span className={`history-result ${acca.result}`}>
                      {acca.result === "won" ? "✓ WON" : "✗ LOST"}
                    </span>
                    <span className={`source-badge ${acca.source}`}>
                      {acca.source === "vip" ? "⭐ VIP" : "FREE"}
                    </span>
                  </div>
                </div>
                <div className="acca-history-picks">
                  {acca.picks?.map((pick, i) => (
                    <div key={i} className="acca-history-pick">
                      <span className="acca-pick-sport">{SPORT_ICONS[pick.sport] || "🏅"}</span>
                      <div className="acca-pick-details">
                        <span className="acca-pick-match">{pick.match}</span>
                        <span className="acca-pick-meta">
                          {pick.country && <span>{pick.country}</span>}
                          {pick.league && <span> · {pick.league}</span>}
                          {pick.time && <span> · 🕐 {pick.time}</span>}
                        </span>
                      </div>
                      <span className="acca-pick-tip">{pick.tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
}
