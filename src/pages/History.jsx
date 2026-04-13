import { useState } from "react";
import { usePredictions } from "../context/PredictionsContext";
import { useAuth } from "../context/AuthContext";

const SPORT_ICONS = {
  football: "⚽", basketball: "🏀", tennis: "🎾", rugby: "🏉",
  baseball: "⚾", hockey: "🏒", boxing: "🥊", cricket: "🏏", other: "🏅",
};

const RESULT_STYLES = {
  won:     { label: "✓ WON",     color: "#4ade80", bg: "rgba(74,222,128,0.12)",  border: "rgba(74,222,128,0.3)"  },
  lost:    { label: "✗ LOST",    color: "#f87171", bg: "rgba(248,113,113,0.12)", border: "rgba(248,113,113,0.3)" },
  pending: { label: "⏳ PENDING", color: "#fbbf24", bg: "rgba(251,191,36,0.1)",  border: "rgba(251,191,36,0.25)" },
};

function ResultTag({ result }) {
  const rs = RESULT_STYLES[result] || RESULT_STYLES.pending;
  return (
    <span className="hist-result-tag" style={{ color: rs.color, background: rs.bg, border: `1px solid ${rs.border}` }}>
      {rs.label}
    </span>
  );
}
function OddsTag({ odds }) {
  if (!odds) return null;
  return <span className="hist-odds-tag">@ {odds}</span>;
}
function ScorelineTag({ scoreline }) {
  if (!scoreline) return null;
  return <span className="hist-scoreline-tag">⚽ {scoreline}</span>;
}

function SummaryBar({ picks, accas }) {
  const wonPicks = picks.filter((p) => p.result === "won").length;
  const lostPicks = picks.filter((p) => p.result === "lost").length;
  const pendingPicks = picks.filter((p) => !p.result || p.result === "pending").length;
  const wonAccas = accas.filter((a) => a.result === "won").length;
  const lostAccas = accas.filter((a) => a.result === "lost").length;
  const pendingAccas = accas.filter((a) => !a.result || a.result === "pending").length;
  const totalSettled = wonPicks + lostPicks;
  const winRate = totalSettled > 0 ? Math.round((wonPicks / totalSettled) * 100) : 0;

  return (
    <div className="summary-bar">
      <div className="summary-section">
        <div className="summary-label">Single Picks</div>
        <div className="summary-counts">
          <span className="summary-won">✓ {wonPicks} Won</span>
          <span className="summary-lost">✗ {lostPicks} Lost</span>
          <span className="summary-pending">⏳ {pendingPicks} Pending</span>
        </div>
      </div>
      <div className="summary-divider" />
      <div className="summary-section">
        <div className="summary-label">Accumulators</div>
        <div className="summary-counts">
          <span className="summary-won">✓ {wonAccas} Won</span>
          <span className="summary-lost">✗ {lostAccas} Lost</span>
          <span className="summary-pending">⏳ {pendingAccas} Pending</span>
        </div>
      </div>
      <div className="summary-divider" />
      <div className="summary-section">
        <div className="summary-label">Win Rate</div>
        <div className="summary-rate">{winRate}%</div>
        <div className="win-rate-bar" style={{ marginTop: "6px" }}>
          <div className="win-rate-fill" style={{ width: `${winRate}%` }} />
        </div>
      </div>
    </div>
  );
}

export default function History() {
  const { freePicks, vipPicks, freeAccas, vipAccas } = usePredictions();
  const { isVip, isAdmin } = useAuth();
  const [filter, setFilter] = useState("all");
  const [source, setSource] = useState("all");
  const [viewTab, setViewTab] = useState("singles");

  // Everyone sees settled VIP picks/accas — only pending VIP is hidden from non-VIP
  const visibleVipPicks = (isVip || isAdmin)
    ? vipPicks
    : vipPicks.filter((p) => p.result && p.result !== "pending");

  const visibleVipAccas = (isVip || isAdmin)
    ? vipAccas
    : vipAccas.filter((a) => a.result && a.result !== "pending");

  const allPicks = [
    ...freePicks.map((p) => ({ ...p, source: "free" })),
    ...visibleVipPicks.map((p) => ({ ...p, source: "vip" })),
  ];

  const allAccas = [
    ...freeAccas.map((a) => ({ ...a, source: "free" })),
    ...visibleVipAccas.map((a) => ({ ...a, source: "vip" })),
  ];

  const filteredPicks = allPicks.filter((p) => {
    const r = p.result || "pending";
    return (filter === "all" || r === filter) && (source === "all" || p.source === source);
  });

  const filteredAccas = allAccas.filter((a) => {
    const r = a.result || "pending";
    return (filter === "all" || r === filter) && (source === "all" || a.source === source);
  });

  const sortedPicks = [...filteredPicks].sort((a, b) => b.createdAt - a.createdAt);
  const sortedAccas = [...filteredAccas].sort((a, b) => b.createdAt - a.createdAt);

  return (
    <div className="page">
      <div className="page-header">
        <h2>Results</h2>
        <p>All predictions — won, lost and pending. Free and VIP results visible to everyone.</p>
      </div>

      <SummaryBar picks={allPicks} accas={allAccas} />

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
          <button className={filter === "pending" ? "active" : ""} onClick={() => setFilter("pending")}>Pending</button>
        </div>
        <div className="filter-group">
          <button className={source === "all" ? "active" : ""} onClick={() => setSource("all")}>All</button>
          <button className={source === "free" ? "active" : ""} onClick={() => setSource("free")}>Free</button>
          <button className={source === "vip" ? "active" : ""} onClick={() => setSource("vip")}>VIP</button>
        </div>
      </div>

      {/* Singles */}
      {viewTab === "singles" && (
        sortedPicks.length === 0 ? (
          <p className="empty">No picks match this filter.</p>
        ) : (
          <div className="history-list">
            {sortedPicks.map((pick) => (
              <div key={pick.id + pick.source} className={`history-row ${pick.result || "pending"}`}>
                <div className="history-left">
                  <span className="history-sport">{SPORT_ICONS[pick.sport] || "🏅"}</span>
                  <div>
                    <div className="history-match">{pick.match}</div>
                    <div className="history-meta">
                      {pick.country && <span>{pick.country}</span>}
                      {pick.league && <span> · {pick.league}</span>}
                      {pick.time && <span> · 🕐 {pick.time}</span>}
                    </div>
                    <div className="history-tags">
                      <span className="history-tip-tag">{pick.tip}</span>
                      <OddsTag odds={pick.odds} />
                      <ScorelineTag scoreline={pick.scoreline} />
                      <ResultTag result={pick.result || "pending"} />
                      <span className={`source-badge ${pick.source}`}>
                        {pick.source === "vip" ? "⭐ VIP" : "FREE"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      )}

      {/* Accumulators */}
      {viewTab === "accas" && (
        sortedAccas.length === 0 ? (
          <p className="empty">No accumulators match this filter.</p>
        ) : (
          <div className="history-list">
            {sortedAccas.map((acca) => {
              const accaResult = acca.result || "pending";
              return (
                <div key={acca.id + acca.source} className={`history-row ${accaResult} acca-history-row`}>
                  <div className="acca-history-header">
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontSize: "1.3rem" }}>🎯</span>
                      <div>
                        <div className="history-match">Accumulator · {acca.picks?.length || 0} picks</div>
                        <div className="history-tags" style={{ marginTop: "6px" }}>
                          <OddsTag odds={acca.totalOdds} />
                          <ResultTag result={accaResult} />
                          <span className={`source-badge ${acca.source}`}>
                            {acca.source === "vip" ? "⭐ VIP" : "FREE"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="acca-history-picks">
                    {acca.picks?.map((pick, i) => (
                      <div key={i} className="acca-history-pick">
                        <span className="acca-pick-sport">{SPORT_ICONS[pick.sport] || "🏅"}</span>
                        <div className="acca-pick-details" style={{ flex: 1 }}>
                          <span className="acca-pick-match">{pick.match}</span>
                          <span className="acca-pick-meta">
                            {pick.country && <span>{pick.country}</span>}
                            {pick.league && <span> · {pick.league}</span>}
                            {pick.time && <span> · 🕐 {pick.time}</span>}
                          </span>
                          <div className="history-tags" style={{ marginTop: "5px" }}>
                            <span className="history-tip-tag">{pick.tip}</span>
                            <OddsTag odds={pick.odds} />
                            <ScorelineTag scoreline={pick.scoreline} />
                            <ResultTag result={pick.result || "pending"} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )
      )}
    </div>
  );
}
