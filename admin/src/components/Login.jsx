import React, { useState } from "react";
import axios from "axios";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("admin@miracle.com");
  const [password, setPassword] = useState("Password123");
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("http://192.168.1.4:5000/api/auth/login", { email, password });
      const payload = { token: res.data.token, user: res.data.user || { email } };
      onLogin(payload);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  }

  return (
    <div style={{display:'flex',minHeight:'100vh',alignItems:'center',justifyContent:'center',padding:24}}>
      <div className="card small-card" style={{maxWidth:420}}>
        <h2 style={{marginTop:0, fontFamily:'Playfair Display, serif', color:'var(--gold)'}}>Admin Login</h2>
        <p style={{color:'var(--muted)', marginTop:0}}>Sign in to manage Miracle products</p>

        {error && <div style={{color:'#b00020', marginBottom:10}}>{error}</div>}

        <form onSubmit={submit}>
          <label>Email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} />

          <label>Password</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />

          <div style={{display:'flex', gap:8, marginTop:8}}>
            <button className="btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
}
