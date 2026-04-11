import { useState, useRef, useEffect } from "react";

export default function AutocompleteInput({ value, onChange, suggestions: allSuggestions, placeholder, required }) {
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
    if (val.length >= 1) {
      const filtered = allSuggestions.filter((s) =>
        s.toLowerCase().includes(val.toLowerCase())
      ).slice(0, 6);
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSelect = (item) => {
    onChange(item);
    setShowSuggestions(false);
  };

  return (
    <div className="autocomplete-wrap" ref={wrapRef}>
      <input
        value={value}
        onChange={handleInput}
        placeholder={placeholder}
        autoComplete="off"
        required={required}
      />
      {showSuggestions && (
        <ul className="suggestions">
          {suggestions.map((s) => (
            <li key={s} onMouseDown={() => handleSelect(s)}>{s}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
