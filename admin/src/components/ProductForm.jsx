import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ProductForm({ auth, editing, onSaved }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const API = "http://192.168.1.4:5000";

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    if (editing) {
      setTitle(editing.title || "");
      setCategory(editing.category || "");
      setPrice(editing.price || "");
      setDesc(editing.desc || "");
    } else {
      setTitle(""); setCategory(""); setPrice(""); setDesc("");
    }
  }, [editing]);

  async function loadCategories() {
    try {
      const res = await axios.get(`${API}/api/categories`);
      setCategories(res.data || []);
      if (!category && res.data?.length) setCategory(res.data[0].name);
    } catch (err) { console.error(err); }
  }

  async function uploadImage() {
    if (!imgFile) return editing?.img || null;
    setUploading(true);
    const form = new FormData();
    form.append("file", imgFile);
    const res = await axios.post(`${API}/api/upload`, form, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    setUploading(false);
    return res.data.url;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const url = await uploadImage();
      const payload = { title, category, price, desc, img: url };
      if (editing) {
        await axios.put(`http://192.168.1.4:5000/api/products/${editing._id}`, payload, {
          headers: { Authorization: `Bearer ${auth.token}` }
        });
      } else {
        await axios.post("http://192.168.1.4:5000/api/products", payload, {
          headers: { Authorization: `Bearer ${auth.token}` }
        });
      }
      onSaved();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to save product");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Title</label>
      <input value={title} onChange={(e)=>setTitle(e.target.value)} required />

      <label>Category</label>
      <select value={category} onChange={(e)=>setCategory(e.target.value)}>
        {categories.length === 0 && <option>Loading...</option>}
        {categories.map(c => <option key={c._id} value={c.name}>{c.name}</option>)}
      </select>

      <label>Price</label>
      <input value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="$299" required />

      <label>Description</label>
      <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} rows={4} />

      <label>Image</label>
      <input type="file" onChange={(e)=>setImgFile(e.target.files[0])} />

      <div style={{display:'flex', gap:10, marginTop:8}}>
        <button className="btn" type="submit" disabled={uploading}>{uploading ? "Uploading..." : (editing ? "Update" : "Create")}</button>
        <button type="button" className="btn ghost" onClick={onSaved}>Cancel</button>
      </div>
    </form>
  );
}
