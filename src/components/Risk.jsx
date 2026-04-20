import React, { useState } from "react";
import { calculateRisk } from "../services/backend";

export default function Risk() {
  const [location, setLocation] = useState("");
  const [week, setWeek] = useState("");
  const [basePremium, setBasePremium] = useState(50);
  const [result, setResult] = useState(null);

  const handleCalc = async () => {
    const res = await calculateRisk(location, week, basePremium);
    setResult(res);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Risk Engine (Simulated)</h1>
      <div className="mb-2">
        <input className="mr-2 p-1 text-black" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
        <input className="mr-2 p-1 text-black" placeholder="Week" value={week} onChange={e => setWeek(e.target.value)} />
        <input className="mr-2 p-1 text-black" type="number" placeholder="Base Premium" value={basePremium} onChange={e => setBasePremium(Number(e.target.value))} />
        <button className="px-2 py-1 bg-blue-600 rounded" onClick={handleCalc}>Calculate</button>
      </div>
      {result && (
        <div className="mt-2">
          <div>Dynamic Premium: ₹{result.dynamic_premium}</div>
          <div>Risk Score: {result.risk_score}</div>
        </div>
      )}
    </div>
  );
}
