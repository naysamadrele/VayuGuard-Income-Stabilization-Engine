import React, { useState } from "react";
import { getPolicies, createPolicy } from "../services/api";

export default function Policy() {
  const [policies, setPolicies] = useState([]);
  const [form, setForm] = useState({ id: '', user_id: '', premium: '', coverage_start: '', coverage_end: '', status: 'active' });

  const fetchPolicies = async () => {
    setPolicies(await getPolicies());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPolicy({ ...form, id: Number(form.id), user_id: Number(form.user_id), premium: Number(form.premium) });
    fetchPolicies();
  };

  React.useEffect(() => { fetchPolicies(); }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Policy Management</h1>
      <form className="mb-4" onSubmit={handleSubmit}>
        <input className="mr-2 p-1 text-black" placeholder="Policy ID" value={form.id} onChange={e => setForm(f => ({ ...f, id: e.target.value }))} />
        <input className="mr-2 p-1 text-black" placeholder="User ID" value={form.user_id} onChange={e => setForm(f => ({ ...f, user_id: e.target.value }))} />
        <input className="mr-2 p-1 text-black" placeholder="Premium" value={form.premium} onChange={e => setForm(f => ({ ...f, premium: e.target.value }))} />
        <input className="mr-2 p-1 text-black" placeholder="Coverage Start" value={form.coverage_start} onChange={e => setForm(f => ({ ...f, coverage_start: e.target.value }))} />
        <input className="mr-2 p-1 text-black" placeholder="Coverage End" value={form.coverage_end} onChange={e => setForm(f => ({ ...f, coverage_end: e.target.value }))} />
        <button className="px-2 py-1 bg-blue-600 rounded" type="submit">Add Policy</button>
      </form>
      <div>
        <h2 className="font-semibold mb-1">Policies</h2>
        <ul>
          {policies.map(p => (
            <li key={p.id} className="mb-1 border-b border-slate-700 pb-1">
              #{p.id} | User: {p.user_id} | Premium: ₹{p.premium} | {p.coverage_start} - {p.coverage_end} | Status: {p.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
