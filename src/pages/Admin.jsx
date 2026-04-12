import { useState, useEffect, useRef } from "react";
import { usePredictions } from "../context/PredictionsContext";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { teamsBySport, leaguesBySport, countriesBySport } from "../data/teams";
import AutocompleteInput from "../components/AutocompleteInput";

const empty = { match: "", league: "", country: "", sport: "football", time: "", tip: "", odds: "" };
const emptyAccaPick = { match: "", tip: "", league: "", country: "", time: "", sport: "football" };
const emptyAcca = { picks: [{ ...emptyAccaPick }], totalOdds: "", sportybetCode: "", footballComCode: "", result: "pending" };

function MatchInput({ value, sport, onChange }) {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setShowSuggestions(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleInput = (e) => {
    const val = e.target.value;
    onChange(val);
    const parts = val.split(" vs ");
    const current = parts[parts.length - 1].trim().toLowerCase();
    if (current.length >= 2) {
      const teams = teamsBySport[sport] || [];
      const filtered = teams.filter((t) => t.toLowerCase().includes(current) && !val.includes(t));
      setSuggestions(filtered.slice(0, 6));
      setShowSuggestions(filtered.length > 0);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSelect = (team) => {
    const parts = value.split(" vs ");
    if (parts.length === 1) onChange(team + " vs ");
    else { parts[parts.length - 1] = team; onChange(parts.join(" vs ")); }
    setShowSuggestions(false);
  };

  return (
    <div className="autocomplete-wrap" ref={wrapRef}>
      <input
        placeholder="e.g. Arsenal vs Chelsea"
        value={value}
        onChange={handleInput}
        autoComplete="off"
        required
      />
      {showSuggestions && (
        <ul className="suggestions">
          {suggestions.map((s) => <li key={s} onMouseDown={() => handleSelect(s)}>{s}</li>)}
        </ul>
      )}
    </div>
  );
}

const SPORTS = [
  { value: "football", label: "⚽ Football" },
  { value: "basketball", label: "🏀 Basketball" },
  { value: "tennis", label: "🎾 Tennis" },
  { value: "rugby", label: "🏉 Rugby" },
  { value: "baseball", label: "⚾ Baseball" },
  { value: "hockey", label: "🏒 Hockey" },
  { value: "boxing", label: "🥊 Boxing" },
  { value: "cricket", label: "🏏 Cricket" },
  { value: "other", label: "🏅 Other" },
];

export default function Admin({ setPage }) {
  const { addPick, addAcca } = usePredictions();
  const { logout } = useAuth();
  const [type, setType] = useState("free");
  const [form, setForm] = useState(empty);
  const [accaForm, setAccaForm] = useState(emptyAcca);
  const [success, setSuccess] = useState("");
  const [accaSuccess, setAccaSuccess] = useState("");
  const [users, setUsers] = useState([]);
  const [tab, setTab] = useState("picks");
  const [pickTab, setPickTab] = useState("single");

  const loadUsers = async () => {
    const snap = await getDocs(collection(db, "users"));
    setUsers(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  useEffect(() => { if (tab === "users") loadUsers(); }, [tab]);

  const toggleVip = async (userId, current) => {
    await updateDoc(doc(db, "users", userId), { isVip: !current });
    loadUsers();
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.match || !form.tip) return;
    await addPick(type, form);
    setForm(empty);
    setSuccess(`Pick added to ${type.toUpperCase()} predictions!`);
    setTimeout(() => setSuccess(""), 3000);
  };

  const handleAccaPickChange = (index, field, value) => {
    const updated = accaForm.picks.map((p, i) => i === index ? { ...p, [field]: value } : p);
    setAccaForm({ ...accaForm, picks: updated });
  };

  const addAccaPick = () => setAccaForm({ ...accaForm, picks: [...accaForm.picks, { ...emptyAccaPick }] });

  const removeAccaPick = (index) => {
    if (accaForm.picks.length === 1) return;
    setAccaForm({ ...accaForm, picks: accaForm.picks.filter((_, i) => i !== index) });
  };

  const handleAccaSubmit = async (e) => {
    e.preventDefault();
    if (accaForm.picks.some((p) => !p.match || !p.tip)) return;
    await addAcca(type, accaForm);
    setAccaForm(emptyAcca);
    setAccaSuccess(`Accumulator added to ${type.toUpperCase()}!`);
    setTimeout(() => setAccaSuccess(""), 3000);
  };

  const handleLogout = () => { logout(); setPage("home"); };

  return (
    <div className="page">
      <div className="page-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Admin Panel</h2>
        <button className="btn-outline small" onClick={handleLogout}>Logout</button>
      </div>

      <div className="admin-tabs">
        <button className={tab === "picks" ? "active" : ""} onClick={() => setTab("picks")}>Add Picks</button>
        <button className={tab === "users" ? "active" : ""} onClick={() => setTab("users")}>Manage Users</button>
      </div>

      {tab === "picks" && (
        <>
          <div className="admin-tabs" style={{ marginBottom: "20px" }}>
            <button className={pickTab === "single" ? "active" : ""} onClick={() => setPickTab("single")}>Single Pick</button>
            <button className={pickTab === "acca" ? "active" : ""} onClick={() => setPickTab("acca")}>Accumulator</button>
          </div>

          <div className="form-row" style={{ marginBottom: "20px", maxWidth: "560px" }}>
            <label>Add to</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="free">Free</option>
              <option value="vip">VIP</option>
            </select>
          </div>

          {pickTab === "single" && (
            <div className="admin-form-wrap">
              <h3>Add Single Pick</h3>
              <form className="admin-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>Sport</label>
                  <select name="sport" value={form.sport} onChange={handleChange}>
                    {SPORTS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
                  </select>
                </div>
                <div className="form-row">
                  <label>Match</label>
                  <MatchInput value={form.match} sport={form.sport} onChange={(val) => setForm({ ...form, match: val })} />
                </div>
                <div className="form-row">
                  <label>League</label>
                  <AutocompleteInput
                    value={form.league}
                    onChange={(val) => setForm({ ...form, league: val })}
                    suggestions={leaguesBySport[form.sport] || []}
                    placeholder="e.g. Premier League"
                  />
                </div>
                <div className="form-row">
                  <label>Country</label>
                  <AutocompleteInput
                    value={form.country}
                    onChange={(val) => setForm({ ...form, country: val })}
                    suggestions={countriesBySport[form.sport] || []}
                    placeholder="e.g. England"
                  />
                </div>
                <div className="form-row">
                  <label>Kickoff Time</label>
                  <input name="time" placeholder="e.g. 20:00" value={form.time} onChange={handleChange} />
                </div>
                <div className="form-row">
                  <label>Tip</label>
                  <input name="tip" placeholder="e.g. Over 2.5" value={form.tip} onChange={handleChange} required />
                </div>
                <div className="form-row">
                  <label>Odds</label>
                  <input name="odds" placeholder="e.g. 1.85" value={form.odds} onChange={handleChange} />
                </div>
                <button className="btn-primary" type="submit">Add Pick</button>
                {success && <p className="success-msg">{success}</p>}
              </form>
            </div>
          )}

          {pickTab === "acca" && (
            <div className="admin-form-wrap">
              <h3>Add Accumulator</h3>
              <form className="admin-form" onSubmit={handleAccaSubmit}>
                {accaForm.picks.map((pick, i) => (
                  <div key={i} className="acca-pick-form">
                    <div className="acca-pick-form-header">
                      <label>Pick {i + 1}</label>
                      {accaForm.picks.length > 1 && (
                        <button type="button" className="btn-delete" style={{ padding: "4px 10px", fontSize: "0.75rem" }} onClick={() => removeAccaPick(i)}>Remove</button>
                      )}
                    </div>
                    <div className="form-row">
                      <label>Sport</label>
                      <select value={pick.sport} onChange={(e) => handleAccaPickChange(i, "sport", e.target.value)}>
                        {SPORTS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
                      </select>
                    </div>
                    <div className="form-row">
                      <label>Match</label>
                      <MatchInput
                        value={pick.match}
                        sport={pick.sport}
                        onChange={(val) => handleAccaPickChange(i, "match", val)}
                      />
                    </div>
                    <div className="form-row">
                      <label>League</label>
                      <AutocompleteInput
                        value={pick.league}
                        onChange={(val) => handleAccaPickChange(i, "league", val)}
                        suggestions={leaguesBySport[pick.sport] || []}
                        placeholder="e.g. Premier League"
                      />
                    </div>
                    <div className="form-row">
                      <label>Country</label>
                      <AutocompleteInput
                        value={pick.country}
                        onChange={(val) => handleAccaPickChange(i, "country", val)}
                        suggestions={countriesBySport[pick.sport] || []}
                        placeholder="e.g. England"
                      />
                    </div>
                    <div className="form-row">
                      <label>Kickoff Time</label>
                      <input
                        placeholder="e.g. 20:00"
                        value={pick.time}
                        onChange={(e) => handleAccaPickChange(i, "time", e.target.value)}
                      />
                    </div>
                    <div className="form-row">
                      <label>Tip</label>
                      <input
                        placeholder="Tip (e.g. Over 2.5)"
                        value={pick.tip}
                        onChange={(e) => handleAccaPickChange(i, "tip", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                ))}

                <button type="button" className="btn-outline small" onClick={addAccaPick}>+ Add Another Pick</button>

                <div className="form-row">
                  <label>Total Odds</label>
                  <input placeholder="e.g. 6.45" value={accaForm.totalOdds} onChange={(e) => setAccaForm({ ...accaForm, totalOdds: e.target.value })} />
                </div>
                <div className="form-row">
                  <label>Result</label>
                  <select value={accaForm.result} onChange={(e) => setAccaForm({ ...accaForm, result: e.target.value })}>
                    <option value="pending">Pending</option>
                    <option value="won">Won</option>
                    <option value="lost">Lost</option>
                  </select>
                </div>
                <div className="form-row">
                  <label>Sportybet Code</label>
                  <input placeholder="e.g. SAC9ML" value={accaForm.sportybetCode} onChange={(e) => setAccaForm({ ...accaForm, sportybetCode: e.target.value })} />
                </div>
                <div className="form-row">
                  <label>Football.com Code</label>
                  <input placeholder="e.g. XDF4E89D" value={accaForm.footballComCode} onChange={(e) => setAccaForm({ ...accaForm, footballComCode: e.target.value })} />
                </div>

                <button className="btn-primary" type="submit">Add Accumulator</button>
                {accaSuccess && <p className="success-msg">{accaSuccess}</p>}
              </form>
            </div>
          )}
        </>
      )}

      {tab === "users" && (
        <div className="admin-form-wrap">
          <h3>Manage Users</h3>
          {users.length === 0 && <p className="empty">No users found.</p>}
          <div className="users-list">
            {users.map((u) => (
              <div key={u.id} className="user-row">
                <span>{u.email}</span>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <span className={u.isVip ? "badge" : "badge-inactive"}>{u.isVip ? "VIP" : "Free"}</span>
                  <button
                    className={u.isVip ? "btn-delete" : "btn-primary"}
                    style={{ padding: "6px 14px", fontSize: "0.8rem" }}
                    onClick={() => toggleVip(u.id, u.isVip)}
                  >
                    {u.isVip ? "Revoke VIP" : "Grant VIP"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
