import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Dashboard from "./components/Dashboard";
import Policy from "./components/Policy";
import Claims from "./components/Claims";
import Risk from "./components/Risk";
import Fraud from "./components/Fraud";

const NAV_LINKS = [
  { label: "Dashboard", component: Dashboard },
  { label: "Policy", component: Policy },
  { label: "Claims", component: Claims },
  { label: "Risk", component: Risk },
  { label: "Fraud", component: Fraud },
];

export default function VayuGuard() {
  const [tab, setTab] = useState(0);
  const { t, i18n } = useTranslation();
  const Current = NAV_LINKS[tab].component;
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <nav className="flex gap-4 p-4 border-b border-slate-700 items-center">
        {NAV_LINKS.map((n, i) => (
          <button
            key={n.label}
            className={`px-3 py-1 rounded ${tab === i ? "bg-slate-700" : "hover:bg-slate-800"}`}
            onClick={() => setTab(i)}
          >
            {t(n.label)}
          </button>
        ))}
        <select
          className="ml-auto bg-slate-800 text-white rounded px-2 py-1"
          value={i18n.language}
          onChange={e => i18n.changeLanguage(e.target.value)}
        >
          <option value="en">EN</option>
          <option value="hi">हिंदी</option>
        </select>
      </nav>
      <main className="max-w-2xl mx-auto">
        <Current />
      </main>
    </div>
  );
}
