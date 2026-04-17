// Sorts picks by date + time ascending (earliest kickoff first)
export function sortByKickoff(picks) {
  return [...picks].sort((a, b) => {
    const aStr = `${a.date || "9999-12-31"} ${a.time || "23:59"}`;
    const bStr = `${b.date || "9999-12-31"} ${b.time || "23:59"}`;
    return aStr.localeCompare(bStr);
  });
}

// Sorts accas by the earliest pick kickoff inside them
export function sortAccasByKickoff(accas) {
  return [...accas].sort((a, b) => {
    const earliest = (acca) => {
      const picks = acca.picks || [];
      if (picks.length === 0) return "9999-12-31 23:59";
      return picks.reduce((min, p) => {
        const s = `${p.date || "9999-12-31"} ${p.time || "23:59"}`;
        return s < min ? s : min;
      }, "9999-12-31 23:59");
    };
    return earliest(a).localeCompare(earliest(b));
  });
}
