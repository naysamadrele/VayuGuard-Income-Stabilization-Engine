import React, { useState } from "react";
import { checkFraud } from "../services/backend";

export default function Fraud() {
  const [userId, setUserId] = useState("");
  const [eventId, setEventId] = useState("");
  const [signals, setSignals] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = async () => {
    const sigArr = signals.split(",").map(Number);
    const res = await checkFraud(Number(userId), Number(eventId), sigArr);
    setResult(res);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Fraud Engine (Simulated)</h1>
      <div className="mb-2">
        <input className="mr-2 p-1 text-black" placeholder="User ID" value={userId} onChange={e => setUserId(e.target.value)} />
        <input className="mr-2 p-1 text-black" placeholder="Event ID" value={eventId} onChange={e => setEventId(e.target.value)} />
        <input className="mr-2 p-1 text-black" placeholder="Signals (comma-separated)" value={signals} onChange={e => setSignals(e.target.value)} />
        <button className="px-2 py-1 bg-purple-600 rounded" onClick={handleCheck}>Check Fraud</button>
      </div>
      {result && (
        <div className="mt-2">
          <div>Trust Score: {result.trust_score}</div>
          <div>Risk Level: {result.risk_level}</div>
        </div>
      )}
    </div>
  );
}
