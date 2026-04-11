import { useState } from "react";
import { usePredictions } from "../context/PredictionsContext";
import { useAuth } from "../context/AuthContext";
import StatsBar from "../components/StatsBar";

const SPORT_ICONS = {
  football: "⚽", basketball: "🏀", tennis: "🎾", rugby: "🏉",
  baseball: "⚾", hockey: "🏒", boxing: "🥊", cricket: "🏏", other: "🏅",
};

export default function History() {
  const { freePicks, vipPicks } = usePredictions();
  const { isVip, isAdmin } = useAuth();
  const [filter, setFilter] = useState("all");
  const [source, setSource] = useState("all");

  // Free/non-VIP users only see settled VIP picks (won/lost), not pending
  const visibleVipPicks = (isVip || isAdmin)
    ? vipPicks
    : vipPicks.filter((p) => p.result !== "pending");

  const allPicks = [
    ...freePicks.map((p) => ({ ...p, source: "free" })),
    ...visibleVipPicks.map((p) => ({ ...p, source: "vip" })),
  ];

  const settled = allPicks.filter((p) => p.result !== "pending");

  const filtered = settled.filter((p) => {
    const matchFilter = filter === "all" || p.result === filter;
    const matchSource = source === "all" || p.source === source;
    return matchFilter && matchSource;
  });

  const sorted = [...filtered].sort((a, b) => b.createdAt - a.createdAt);

  return (
    <div className="page">
      <div className="page-header">
        <h2>Prediction History</h2>
        <p>Track record of all settled tips.</p>
      </div>

      <StatsBar picks={allPicks} />

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

      {sorted.length === 0 ? (
        <p className="empty">No settled picks yet. Results will appear here after matches are played.</p>
      ) : (
        <div className="history-list">
          {sorted.map((pick) => (
            <div key={pick.id + pick.source} className={`history-row ${pick.result}`}>
              <div className="history-left">
                <span className="history-sport">{SPORT_ICONS[pick.sport] || "🏅"}</span>
                <div>
                  <div className="history-match">{pick.match}</div>
                  <div className="history-meta">{pick.league} · {pick.time}</div>
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
      )}
    </div>
  );
}
