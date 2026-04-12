import PredictionCard from "../components/PredictionCard";
import AccumulatorCard from "../components/AccumulatorCard";
import StatsBar from "../components/StatsBar";
import { usePredictions } from "../context/PredictionsContext";
import { useAuth } from "../context/AuthContext";

export default function FreePicks() {
  const { freePicks, freeAccas, deletePick, updateResult, deleteAcca, updateAccaResult, updateAccaPickResult } = usePredictions();
  const { isAdmin } = useAuth();

  return (
    <div className="page">
      <div className="page-header">
        <h2>Free Predictions</h2>
        <p>Today's free tips — available to everyone.</p>
      </div>

      <StatsBar picks={freePicks} />

      {freeAccas.length > 0 && (
        <div className="section">
          <h3 className="section-title">Accumulators ({freeAccas.length})</h3>
          <div className="acca-list">
            {freeAccas.map((acca) => (
              <AccumulatorCard
                key={acca.id}
                acca={acca}
                isAdmin={isAdmin}
                onDelete={(id) => deleteAcca("free", id)}
                onResult={(id, result) => updateAccaResult("free", id, result)}
                onPickResult={(id, idx, result, scoreline) => updateAccaPickResult("free", id, idx, result, scoreline)}
              />
            ))}
          </div>
        </div>
      )}

      <div className="section">
        {freeAccas.length > 0 && <h3 className="section-title">Single Picks</h3>}
        <div className="cards-grid">
          {freePicks.length === 0 && <p className="empty">No free picks posted yet. Check back soon.</p>}
          {freePicks.map((pick) => (
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
