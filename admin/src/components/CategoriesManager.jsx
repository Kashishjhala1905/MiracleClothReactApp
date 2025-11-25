import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CategoriesManager({ auth, onAdded }) {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const API = "http://192.168.1.4:5000";

  useEffect(() => { load(); }, []);

  async function load() {
    try {
      const res = await axios.get(`${API}/api/categories`);
      setList(res.data || []);
    } catch (err) {
      console.error(err);
    }
  }

  async function create(e) {
    e.preventDefault();
    if (!name.trim()) return;
    setLoading(true);
    try {
      await axios.post(`${API}/api/categories`, { name, description: desc }, {
        headers: { Authorization: `Bearer ${auth.token}` }
      });
      setName(""); setDesc("");
      await load();
      if (onAdded) onAdded();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to create");
    } finally { setLoading(false); }
  }

  async function remove(id) {
    if (!confirm("Delete category? Products keep their string category.")) return;
    try {
      await axios.delete(`${API}/api/categories/${id}`, {
        headers: { Authorization: `Bearer ${auth.token}` }
      });
      await load();
      if (onAdded) onAdded();
    } catch (err) {
      alert(err.response?.data?.message || "Failed");
    }
  }

  return (
    <div style={{maxWidth:720}}>
      <h3 style={{marginTop:0}}>Collections (Categories)</h3>

      <form onSubmit={create} style={{display:'flex', gap:8, marginBottom:12}}>
        <input placeholder="Collection name" value={name} onChange={e=>setName(e.target.value)} style={{flex:1,padding:8}} />
        <input placeholder="Short desc (optional)" value={desc} onChange={e=>setDesc(e.target.value)} style={{flex:1,padding:8}} />
        <button disabled={loading} style={{padding:'8px 12px'}}>{loading ? "Adding..." : "Add"}</button>
      </form>

      <div style={{display:'grid', gap:8}}>
        {list.map(c => (
          <div key={c._id} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:10,background:'#fff',borderRadius:8,boxShadow:'0 6px 18px rgba(0,0,0,0.04)'}}>
            <div>
              <strong>{c.name}</strong>
              <div style={{fontSize:13,color:'#7b6b57'}}>{c.description}</div>
            </div>
            <div style={{display:'flex',gap:8}}>
              <button onClick={() => remove(c._id)} style={{padding:'6px 8px',borderRadius:8}}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
