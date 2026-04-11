import { useState } from "react";

export default function AccumulatorCard({ acca, onDelete, isAdmin }) {
  const [copied, setCopied] = useState("");

  const handleCopy = (platform, code) => {
    navigator.clipboard.writeText(code);
    setCopied(platform);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="acca-card">
      <div className="acca-header">
        <span className="acca-label">🎯 Accumulator</span>
        <span className="acca-odds">Total Odds: <strong>{acca.totalOdds}</strong></span>
      </div>

      <div className="acca-picks">
        {acca.picks.map((pick, i) => (
          <div key={i} className="acca-pick-row">
            <span className="acca-pick-match">{pick.match}</span>
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
          <button className="btn-delete" onClick={() => onDelete(acca.id)}>Delete Accumulator</button>
        </div>
      )}
    </div>
  );
}
