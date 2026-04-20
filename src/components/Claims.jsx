import React, { useState } from "react";
import { getClaims, createClaim } from "../services/backend";

export default function Claims() {
  const [claims, setClaims] = useState([]);
  const [form, setForm] = useState({ id: '', user_id: '', event_id: '', amount: '', status: 'pending' });

  const fetchClaims = async () => {
    setClaims(await getClaims());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createClaim({ ...form, id: Number(form.id), user_id: Number(form.user_id), event_id: Number(form.event_id), amount: Number(form.amount) });
    fetchClaims();
  };

  React.useEffect(() => { fetchClaims(); }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Claims Management</h1>
      <form className="mb-4" onSubmit={handleSubmit}>
        <input className="mr-2 p-1 text-black" placeholder="Claim ID" value={form.id} onChange={e => setForm(f => ({ ...f, id: e.target.value }))} />
        <input className="mr-2 p-1 text-black" placeholder="User ID" value={form.user_id} onChange={e => setForm(f => ({ ...f, user_id: e.target.value }))} />
        <input className="mr-2 p-1 text-black" placeholder="Event ID" value={form.event_id} onChange={e => setForm(f => ({ ...f, event_id: e.target.value }))} />
        <input className="mr-2 p-1 text-black" placeholder="Amount" value={form.amount} onChange={e => setForm(f => ({ ...f, amount: e.target.value }))} />
        <button className="px-2 py-1 bg-green-600 rounded" type="submit">Submit Claim</button>
      </form>
      <div>
        <h2 className="font-semibold mb-1">Claim History</h2>
        <ul>
          {claims.map(c => (
            <li key={c.id} className="mb-1 border-b border-slate-700 pb-1">
              #{c.id} | User: {c.user_id} | Event: {c.event_id} | Amount: ₹{c.amount} | Status: {c.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
