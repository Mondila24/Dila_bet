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

export default function PredictionCard({ pick, onDelete, onResult, isAdmin }) {
  const resultColor = pick.result === "won" ? "#16a34a" : pick.result === "lost" ? "#dc2626" : "#f59e0b";
  const sportIcon = SPORT_ICONS[pick.sport] || SPORT_ICONS.other;

  return (
    <div className="pred-card">
      <div className="pred-header">
        <span className="pred-league">
          {sportIcon} {pick.league}
        </span>
        <span className="pred-time">🕐 {pick.time}</span>
      </div>
      <h3 className="pred-match">{pick.match}</h3>
      <div className="pred-meta-row">
        {pick.country && <span className="pred-country">🌍 {pick.country}</span>}
      </div>
      <div className="pred-footer">
        <span className="pred-tip">Tip: <strong>{pick.tip}</strong></span>
        <span className="pred-odds">Odds: <strong>{pick.odds}</strong></span>
        <span className="pred-result" style={{ color: resultColor }}>
          {pick.result.toUpperCase()}
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
