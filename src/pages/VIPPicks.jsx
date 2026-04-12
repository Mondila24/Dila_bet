import PredictionCard from "../components/PredictionCard";
import AccumulatorCard from "../components/AccumulatorCard";
import StatsBar from "../components/StatsBar";
import { usePredictions } from "../context/PredictionsContext";
import { useAuth } from "../context/AuthContext";

export default function VIPPicks({ onLoginClick }) {
  const { vipPicks, vipAccas, deletePick, updateResult, deleteAcca, updateAccaResult } = usePredictions();
  const { user, isVip, isAdmin } = useAuth();

  if (!user) {
    return (
      <div className="page">
        <div className="vip-gate">
          <div className="lock-icon">🔒</div>
          <h2>VIP Members Only</h2>
          <p>Login or create an account to access VIP predictions.</p>
          <button className="btn-primary" onClick={onLoginClick}>Login / Sign Up</button>
        </div>
      </div>
    );
  }

  if (!isVip && !isAdmin) {
    return (
      <div className="page">
        <div className="vip-gate">
          <div className="lock-icon">⭐</div>
          <h2>Subscribe to VIP</h2>
          <p>Your account is not yet a VIP subscriber. Contact the admin to get access.</p>
          <div className="vip-perks">
            <div>✅ High-value accumulators</div>
            <div>✅ Banker of the day</div>
            <div>✅ Early access tips</div>
            <div>✅ Multi-sport predictions</div>
          </div>
          <p className="hint">Contact us on WhatsApp or Telegram to subscribe.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-header vip-header">
        <h2>⭐ VIP Predictions</h2>
        <p>Exclusive high-value tips for subscribers.</p>
      </div>

      <StatsBar picks={vipPicks} />

      {vipAccas.length > 0 && (
        <div className="section">
          <h3 className="section-title">Today's Accumulators</h3>
          <div className="cards-grid">
            {vipAccas.map((acca) => (
              <AccumulatorCard
                key={acca.id}
                acca={acca}
                isAdmin={isAdmin}
                onDelete={(id) => deleteAcca("vip", id)}
                onResult={(id, result) => updateAccaResult("vip", id, result)}
              />
            ))}
          </div>
        </div>
      )}

      <div className="section">
        {vipAccas.length > 0 && <h3 className="section-title">Single Picks</h3>}
        <div className="cards-grid">
          {vipPicks.length === 0 && <p className="empty">No VIP picks posted yet. Check back soon.</p>}
          {vipPicks.map((pick) => (
            <PredictionCard
              key={pick.id}
              pick={pick}
              isAdmin={isAdmin}
              onDelete={(id) => deletePick("vip", id)}
              onResult={(id, result) => updateResult("vip", id, result)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
