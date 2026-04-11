import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";

const PredictionsContext = createContext();

export function PredictionsProvider({ children }) {
  const [freePicks, setFreePicks] = useState([]);
  const [vipPicks, setVipPicks] = useState([]);
  const [freeAccas, setFreeAccas] = useState([]);
  const [vipAccas, setVipAccas] = useState([]);

  useEffect(() => {
    const freeQ = query(collection(db, "free_picks"), orderBy("createdAt", "desc"));
    const vipQ = query(collection(db, "vip_picks"), orderBy("createdAt", "desc"));
    const freeAccaQ = query(collection(db, "free_accas"), orderBy("createdAt", "desc"));
    const vipAccaQ = query(collection(db, "vip_accas"), orderBy("createdAt", "desc"));

    const unsubFree = onSnapshot(freeQ, (snap) =>
      setFreePicks(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
    );
    const unsubVip = onSnapshot(vipQ, (snap) =>
      setVipPicks(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
    );
    const unsubFreeAcca = onSnapshot(freeAccaQ, (snap) =>
      setFreeAccas(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
    );
    const unsubVipAcca = onSnapshot(vipAccaQ, (snap) =>
      setVipAccas(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
    );

    return () => { unsubFree(); unsubVip(); unsubFreeAcca(); unsubVipAcca(); };
  }, []);

  const addPick = (type, pick) => {
    const col = type === "free" ? "free_picks" : "vip_picks";
    return addDoc(collection(db, col), { ...pick, result: "pending", createdAt: Date.now() });
  };

  const deletePick = (type, id) => {
    const col = type === "free" ? "free_picks" : "vip_picks";
    return deleteDoc(doc(db, col, id));
  };

  const updateResult = (type, id, result) => {
    const col = type === "free" ? "free_picks" : "vip_picks";
    return updateDoc(doc(db, col, id), { result });
  };

  const addAcca = (type, acca) => {
    const col = type === "free" ? "free_accas" : "vip_accas";
    return addDoc(collection(db, col), { ...acca, createdAt: Date.now() });
  };

  const deleteAcca = (type, id) => {
    const col = type === "free" ? "free_accas" : "vip_accas";
    return deleteDoc(doc(db, col, id));
  };

  return (
    <PredictionsContext.Provider value={{
      freePicks, vipPicks, freeAccas, vipAccas,
      addPick, deletePick, updateResult,
      addAcca, deleteAcca
    }}>
      {children}
    </PredictionsContext.Provider>
  );
}

export const usePredictions = () => useContext(PredictionsContext);
