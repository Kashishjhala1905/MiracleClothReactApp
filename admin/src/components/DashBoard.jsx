import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "./ProductForm";
import CreateAdmin from "./CreateAdmin";
import CategoriesManager from "./CategoriesManager";

export default function Dashboard({ auth, onLogout }) {
  const [view, setView] = useState("products"); // products | create | form | categories
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(()=>{ load(); }, []);

  async function load() {
    const res = await axios.get("http://192.168.1.4:5000/api/products");
    setProducts(res.data || []);
  }

  function startAdd() { setEditing(null); setView("form"); }
  function startEdit(p){ setEditing(p); setView("form"); }

  async function handleDelete(id) {
    if (!confirm("Delete this product?")) return;
    await axios.delete(`http://192.168.1.4:5000/api/products/${id}`, {
      headers: { Authorization: `Bearer ${auth.token}` }
    });
    load();
  }

  const filtered = products.filter(p => {
    const q = search.toLowerCase().trim();
    if (!q) return true;
    return p.title.toLowerCase().includes(q) || (p.category || "").toLowerCase().includes(q);
  });

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <h1>Miracle</h1>
          <p>BOUTIQUE</p>
        </div>

        <div style={{display:'flex', flexDirection:'column', gap:6}}>
          <div onClick={()=>setView('products')} className={`nav-btn ${view==='products'?'active':''}`}>Products</div>
          <div onClick={startAdd} className="nav-btn">Add Product</div>
          <div onClick={()=>setView('categories')} className={`nav-btn ${view==='categories'?'active':''}`}>Collections</div>
          {auth.user?.role === "superadmin" && (
            <div onClick={()=>setView('create')} className={`nav-btn ${view==='create'?'active':''}`}>Create Admin</div>
          )}
          <div onClick={onLogout} className="nav-btn">Logout</div>
        </div>

        <div style={{marginTop:'auto', fontSize:12, color:'var(--muted)'}}>
          <div>Logged in as</div>
          <strong>{auth.user?.email}</strong>
          <div style={{marginTop:8, fontSize:12}}>Role: {auth.user?.role}</div>
        </div>
      </aside>

      <main className="main">
        <div className="topbar">
          <div className="search" style={{flex:1}}>
            <input placeholder="Search products or categories..." value={search} onChange={(e)=>setSearch(e.target.value)} />
          </div>
          <div style={{display:'flex', gap:10}}>
            <button className="btn ghost" onClick={load}>Refresh</button>
            <button className="btn">Preview</button>
          </div>
        </div>

        {view === 'products' && (
          <>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <h2 style={{margin:0, fontFamily:'Playfair Display, serif'}}>Products</h2>
              <div>
                <button className="btn" onClick={startAdd}>Add Product</button>
              </div>
            </div>

            <div className="grid" style={{marginTop:12}}>
              {filtered.map(p => (
                <div key={p._id} className="card">
                  <img src={p.img?.startsWith('/uploads') ? `http://192.168.1.4:5000${p.img}` : p.img || "/images/miracle.jpg"} alt={p.title} />
                  <div>
                    <h3 style={{margin:'8px 0 4px 0'}}>{p.title}</h3>
                    <div style={{color:'var(--muted)', fontSize:13}}>{p.category} • {p.price}</div>
                    <p style={{color:'#5b4a3a', fontSize:13, marginTop:8}}>{p.desc}</p>
                  </div>

                  <div className="card-footer" style={{marginTop:8}}>
                    <div style={{display:'flex', gap:8}}>
                      <button className="btn" onClick={()=>startEdit(p)}>Edit</button>
                      <button className="btn ghost" onClick={()=>handleDelete(p._id)}>Delete</button>
                    </div>
                    <div style={{fontSize:12, color:'var(--muted)'}}>ID: {p._id.slice(-6)}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {view === 'form' && (
          <>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <h2>{editing ? 'Edit Product' : 'Add Product'}</h2>
              <div>
                <button className="btn ghost" onClick={()=>setView('products')}>Back</button>
              </div>
            </div>

            <div style={{marginTop:12}}>
              <ProductForm auth={auth} editing={editing} onSaved={()=>{ setView('products'); load(); }} />
            </div>
          </>
        )}

        {view === 'create' && auth.user?.role === "superadmin" && (
          <CreateAdmin token={auth.token} />
        )}

        {view === 'categories' && (
          <CategoriesManager auth={auth} onAdded={() => load()} />
        )}
      </main>
    </div>
  );
}
