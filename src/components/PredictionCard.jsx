const SPORT_ICONS = {
  football: "⚽",
  basketball: "🏀",
  tennis: "🎾",
  rugby: "🏉",
  baseball: "⚾",
  hockey: "🏒",
  boxing: "🥊",
  cricket: "🏏",
  other: "🏅",
};

const RESULT_STYLES = {
  won:     { label: "✓ WON",     color: "#4ade80", bg: "rgba(74,222,128,0.12)",  border: "rgba(74,222,128,0.3)"  },
  lost:    { label: "✗ LOST",    color: "#f87171", bg: "rgba(248,113,113,0.12)", border: "rgba(248,113,113,0.3)" },
  pending: { label: "⏳ PENDING", color: "#fbbf24", bg: "rgba(251,191,36,0.1)",  border: "rgba(251,191,36,0.25)" },
};

export default function PredictionCard({ pick, onDelete, onResult, isAdmin }) {
  const sportIcon = SPORT_ICONS[pick.sport] || SPORT_ICONS.other;
  const rs = RESULT_STYLES[pick.result] || RESULT_STYLES.pending;

  return (
    <div className="pred-card">
      <div className="pred-header">
        <span className="pred-league">{sportIcon} {pick.league}</span>
        <span className="pred-time">🕐 {pick.time}</span>
      </div>
      <h3 className="pred-match">{pick.match}</h3>
      <div className="pred-meta-row">
        {pick.country && <span className="pred-country">🌍 {pick.country}</span>}
      </div>
      <div className="pred-footer">
        <span className="pred-tip">Tip: <strong>{pick.tip}</strong></span>
        <span className="pred-odds">Odds: <strong>{pick.odds}</strong></span>
        <span className="pred-result-tag" style={{
          color: rs.color,
          background: rs.bg,
          border: `1px solid ${rs.border}`,
        }}>
          {rs.label}
        </span>
      </div>
      {isAdmin && (
        <div className="pred-admin-actions">
          <select value={pick.result} onChange={(e) => onResult(pick.id, e.target.value)}>
            <option value="pending">Pending</option>
            <option value="won">Won</option>
            <option value="lost">Lost</option>
          </select>
          <button className="btn-delete" onClick={() => onDelete(pick.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}
