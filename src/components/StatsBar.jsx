export default function StatsBar({ picks }) {
  const settled = picks.filter((p) => p.result === "won" || p.result === "lost");
  const won = picks.filter((p) => p.result === "won").length;
  const lost = picks.filter((p) => p.result === "lost").length;
  const pending = picks.filter((p) => p.result === "pending").length;
  const winRate = settled.length > 0 ? Math.round((won / settled.length) * 100) : 0;

  return (
    <div className="stats-bar">
      <div className="stat-item">
        <span className="stat-value">{settled.length}</span>
        <span className="stat-label">Total Settled</span>
      </div>
      <div className="stat-item won">
        <span className="stat-value">{won}</span>
        <span className="stat-label">Won</span>
      </div>
      <div className="stat-item lost">
        <span className="stat-value">{lost}</span>
        <span className="stat-label">Lost</span>
      </div>
      <div className="stat-item pending">
        <span className="stat-value">{pending}</span>
        <span className="stat-label">Pending</span>
      </div>
      <div className="stat-item rate">
        <span className="stat-value">{winRate}%</span>
        <span className="stat-label">Win Rate</span>
        <div className="win-rate-bar">
          <div className="win-rate-fill" style={{ width: `${winRate}%` }} />
        </div>
      </div>
    </div>
  );
}
