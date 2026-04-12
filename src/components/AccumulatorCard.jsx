import { useState } from "react";

const SPORT_ICONS = {
  football: "⚽", basketball: "🏀", tennis: "🎾", rugby: "🏉",
  baseball: "⚾", hockey: "🏒", boxing: "🥊", cricket: "🏏", other: "🏅",
};

export default function AccumulatorCard({ acca, onDelete, onResult, isAdmin }) {
  const [copied, setCopied] = useState("");

  const handleCopy = (platform, code) => {
    navigator.clipboard.writeText(code);
    setCopied(platform);
    setTimeout(() => setCopied(""), 2000);
  };

  const resultColor = acca.result === "won" ? "#4ade80" : acca.result === "lost" ? "#f87171" : "#fbbf24";

  return (
    <div className={`acca-card ${acca.result !== "pending" ? "acca-settled" : ""}`}>
      <div className="acca-header">
        <span className="acca-label">🎯 Accumulator</span>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {acca.result && acca.result !== "pending" && (
            <span className="acca-result-badge" style={{ color: resultColor }}>
              {acca.result === "won" ? "✓ WON" : "✗ LOST"}
            </span>
          )}
          <span className="acca-odds">Total Odds: <strong>{acca.totalOdds}</strong></span>
        </div>
      </div>

      <div className="acca-picks">
        {acca.picks.map((pick, i) => (
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
              </div>
            </div>
            <span className="acca-pick-tip">{pick.tip}</span>
          </div>
        ))}
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
          <select value={acca.result || "pending"} onChange={(e) => onResult && onResult(acca.id, e.target.value)}>
            <option value="pending">Pending</option>
            <option value="won">Won</option>
            <option value="lost">Lost</option>
          </select>
          <button className="btn-delete" onClick={() => onDelete(acca.id)}>Delete Accumulator</button>
        </div>
      )}
    </div>
  );
}
