import { useState } from "react";

const SPORT_ICONS = {
  football: "⚽", basketball: "🏀", tennis: "🎾", rugby: "🏉",
  baseball: "⚾", hockey: "🏒", boxing: "🥊", cricket: "🏏", other: "🏅",
};

const RESULT_STYLES = {
  won:     { label: "✓ WON",     color: "#4ade80", bg: "rgba(74,222,128,0.12)",  border: "rgba(74,222,128,0.3)"  },
  lost:    { label: "✗ LOST",    color: "#f87171", bg: "rgba(248,113,113,0.12)", border: "rgba(248,113,113,0.3)" },
  pending: { label: "⏳ PENDING", color: "#fbbf24", bg: "rgba(251,191,36,0.1)",  border: "rgba(251,191,36,0.25)" },
};

export default function AccumulatorCard({ acca, onDelete, onResult, onPickResult, isAdmin }) {
  const [copied, setCopied] = useState("");

  const handleCopy = (platform, code) => {
    navigator.clipboard.writeText(code);
    setCopied(platform);
    setTimeout(() => setCopied(""), 2000);
  };

  const overallResult = acca.result || "pending";
  const overallStyle = RESULT_STYLES[overallResult];

  return (
    <div className="acca-card">
      <div className="acca-header">
        <span className="acca-label">🎯 Accumulator</span>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <span className="acca-result-badge" style={{
            color: overallStyle.color,
            background: overallStyle.bg,
            border: `1px solid ${overallStyle.border}`,
            padding: "3px 10px",
            borderRadius: "999px",
            fontSize: "0.78rem",
            fontWeight: 800,
          }}>
            {overallStyle.label}
          </span>
          <span className="acca-odds">Odds: <strong>{acca.totalOdds}</strong></span>
        </div>
      </div>

      <div className="acca-picks">
        {acca.picks.map((pick, i) => {
          const pickResult = pick.result || "pending";
          const ps = RESULT_STYLES[pickResult];
          return (
            <div key={i} className="acca-pick-row">
              <div className="acca-pick-info">
                <span className="acca-pick-sport">{SPORT_ICONS[pick.sport] || "🏅"}</span>
                <div className="acca-pick-details">
                  <span className="acca-pick-match">{pick.match}</span>
                  <span className="acca-pick-meta">
                    {pick.country && <span>{pick.country}</span>}
                    {pick.league && <span> · {pick.league}</span>}
                    {pick.time && <span> · 🕐 {pick.time}</span>}
                  </span>
                  <div className="acca-pick-bottom">
                    <span className="acca-pick-tip">{pick.tip}</span>
                    <span className="acca-pick-result-tag" style={{
                      color: ps.color,
                      background: ps.bg,
                      border: `1px solid ${ps.border}`,
                    }}>
                      {ps.label}
                    </span>
                  </div>
                </div>
              </div>
              {isAdmin && (
                <select
                  className="acca-pick-result-select"
                  value={pickResult}
                  onChange={(e) => onPickResult && onPickResult(acca.id, i, e.target.value)}
                >
                  <option value="pending">Pending</option>
                  <option value="won">Won</option>
                  <option value="lost">Lost</option>
                </select>
              )}
            </div>
          );
        })}
      </div>

      <div className="acca-codes">
        {acca.sportybetCode && (
          <div className="acca-code-row">
            <span className="platform-name sportybet">Sportybet</span>
            <span className="code-value">{acca.sportybetCode}</span>
            <button
              className={`copy-btn ${copied === "sportybet" ? "copied" : ""}`}
              onClick={() => handleCopy("sportybet", acca.sportybetCode)}
            >
              {copied === "sportybet" ? "✓ Copied" : "Copy"}
            </button>
          </div>
        )}
        {acca.footballComCode && (
          <div className="acca-code-row">
            <span className="platform-name footballcom">Football.com</span>
            <span className="code-value">{acca.footballComCode}</span>
            <button
              className={`copy-btn ${copied === "footballcom" ? "copied" : ""}`}
              onClick={() => handleCopy("footballcom", acca.footballComCode)}
            >
              {copied === "footballcom" ? "✓ Copied" : "Copy"}
            </button>
          </div>
        )}
      </div>

      {isAdmin && (
        <div className="pred-admin-actions">
          <select value={overallResult} onChange={(e) => onResult && onResult(acca.id, e.target.value)}>
            <option value="pending">Overall: Pending</option>
            <option value="won">Overall: Won</option>
            <option value="lost">Overall: Lost</option>
          </select>
          <button className="btn-delete" onClick={() => onDelete(acca.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}
