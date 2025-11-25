import React, { useState } from "react";
import axios from "axios";

export default function CreateAdmin({ token }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function submit(e) {
    e.preventDefault();
    setMsg("");
    try {
      await axios.post("http://localhost:5000/api/auth/register", { email, password }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMsg("Admin created successfully");
      setEmail(""); setPassword("");
    } catch (err) {
      setMsg(err.response?.data?.message || "Failed to create admin");
    }
  }

  return (
    <div style={{maxWidth:520}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h2>Create New Admin</h2>
      </div>

      <div className="form" style={{marginTop:12}}>
        {msg && <div style={{marginBottom:8}}>{msg}</div>}
        <form onSubmit={submit}>
          <label>Email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} required />
          <label>Password</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
          <div style={{marginTop:10}}>
            <button className="btn" type="submit">Create Admin</button>
          </div>
        </form>
      </div>
    </div>
  );
}
