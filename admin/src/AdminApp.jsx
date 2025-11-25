import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Dashboard from "./components/DashBoard";

export default function AdminApp() {
  const stored = localStorage.getItem("miracle_auth");
  const initial = stored ? JSON.parse(stored) : null;
  const [auth, setAuth] = useState(initial);

  useEffect(() => {
    if (auth) localStorage.setItem("miracle_auth", JSON.stringify(auth));
    else localStorage.removeItem("miracle_auth");
  }, [auth]);

  return auth ? (
    <Dashboard auth={auth} onLogout={() => setAuth(null)} />
  ) : (
    <Login onLogin={(a) => setAuth(a)} />
  );
}
