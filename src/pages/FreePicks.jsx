import PredictionCard from "../components/PredictionCard";
import AccumulatorCard from "../components/AccumulatorCard";
import { usePredictions } from "../context/PredictionsContext";
import { useAuth } from "../context/AuthContext";
import { sortByKickoff, sortAccasByKickoff } from "../utils/sortByKickoff";

export default function FreePicks({ onRebet }) {
  const { freePicks, freeAccas, deletePick, updateResult, deleteAcca, updateAccaResult, updateAccaPickResult } = usePredictions();
  const { isAdmin } = useAuth();

  const pendingPicks = sortByKickoff(freePicks.filter((p) => !p.result || p.result === "pending"));
  const pendingAccas = sortAccasByKickoff(freeAccas.filter((a) => !a.result || a.result === "pending"));

  return (
    <div className="page">
      <div className="page-header">
        <h2>Free Predictions</h2>
        <p>Today's free tips — available to everyone.</p>
      </div>

      {pendingAccas.length > 0 && (
        <div className="section">
          <h3 className="section-title">Accumulators ({pendingAccas.length})</h3>
          <div className="acca-list">
            {pendingAccas.map((acca) => (
              <AccumulatorCard
                key={acca.id}
                acca={acca}
                isAdmin={isAdmin}
                onDelete={(id) => deleteAcca("free", id)}
                onResult={(id, result) => updateAccaResult("free", id, result)}
                onPickResult={(id, idx, result, scoreline) => updateAccaPickResult("free", id, idx, result, scoreline)}
                onRebet={onRebet}
              />
            ))}
          </div>
        </div>
      )}

      <div className="section">
        {pendingAccas.length > 0 && <h3 className="section-title">Single Picks</h3>}
        <div className="cards-grid">
          {pendingPicks.length === 0 && <p className="empty">No free picks posted yet. Check back soon.</p>}
          {pendingPicks.map((pick) => (
            <PredictionCard
              key={pick.id}
              pick={pick}
              isAdmin={isAdmin}
              onDelete={(id) => deletePick("free", id)}
              onResult={(id, result, scoreline) => updateResult("free", id, result, scoreline)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
