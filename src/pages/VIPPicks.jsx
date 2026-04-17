import PredictionCard from "../components/PredictionCard";
import AccumulatorCard from "../components/AccumulatorCard";
import { usePredictions } from "../context/PredictionsContext";
import { useAuth } from "../context/AuthContext";
import { sortByKickoff, sortAccasByKickoff } from "../utils/sortByKickoff";

export default function VIPPicks({ onLoginClick, onRebet }) {
  const { vipPicks, vipAccas, deletePick, updateResult, deleteAcca, updateAccaResult, updateAccaPickResult } = usePredictions();
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
          <p className="hint" style={{ marginBottom: "20px" }}>Reach out to subscribe:</p>
          <div className="vip-contact-btns">
            <a href="https://wa.me/message/2FOHUM4FSH3VP1" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <a href="https://www.facebook.com/share/1HyJ2XCVXX/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </a>
          </div>
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

      {(() => {
        const pendingAccas = sortAccasByKickoff(vipAccas.filter((a) => !a.result || a.result === "pending"));
        const pendingPicks = sortByKickoff(vipPicks.filter((p) => !p.result || p.result === "pending"));
        return (
          <>
            {pendingAccas.length > 0 && (
              <div className="section">
                <h3 className="section-title">Accumulators ({pendingAccas.length})</h3>
                <div className="acca-list">
                  {pendingAccas.map((acca) => (
                    <AccumulatorCard
                      key={acca.id}
                      acca={acca}
                      isAdmin={isAdmin}
                      onDelete={(id) => deleteAcca("vip", id)}
                      onResult={(id, result) => updateAccaResult("vip", id, result)}
                      onPickResult={(id, idx, result, scoreline) => updateAccaPickResult("vip", id, idx, result, scoreline)}
                      onRebet={onRebet}
                    />
                  ))}
                </div>
              </div>
            )}
            <div className="section">
              {pendingAccas.length > 0 && <h3 className="section-title">Single Picks</h3>}
              <div className="cards-grid">
                {pendingPicks.length === 0 && <p className="empty">No VIP picks posted yet. Check back soon.</p>}
                {pendingPicks.map((pick) => (
                  <PredictionCard
                    key={pick.id}
                    pick={pick}
                    isAdmin={isAdmin}
                    onDelete={(id) => deletePick("vip", id)}
                    onResult={(id, result, scoreline) => updateResult("vip", id, result, scoreline)}
                  />
                ))}
              </div>
            </div>
          </>
        );
      })()}
    </div>
  );
}
