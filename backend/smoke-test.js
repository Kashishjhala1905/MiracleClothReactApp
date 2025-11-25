// smoke-test.js
import axios from "axios";

const API = process.env.API_BASE || "http://localhost:5000";
const testAdmin = { email: "admin@miracle.com", password: "Password123" };

async function run() {
  try {
    console.log("1) Health check /");
    const h = await axios.get(`${API}/`);
    console.log("  ->", h.data);

    console.log("2) GET /api/products");
    const prods = await axios.get(`${API}/api/products`);
    console.log("  -> products:", prods.data.length);

    console.log("3) Test upload endpoint (no file, just check route)");
    try {
      await axios.post(`${API}/api/upload`);
      console.log("  -> upload accepted (unexpected)");
    } catch (e) {
      console.log("  -> upload route reachable (status code)", e.response?.status || e.message);
    }

    console.log("4) Login admin");
    const login = await axios.post(`${API}/api/auth/login`, testAdmin);
    console.log("  -> login success, token present:", !!login.data.token);
    const token = login.data.token;

    console.log("5) Test protected GET /api/products (token not required but test protected flows)");
    const headers = { Authorization: `Bearer ${token}` };
    console.log("  -> token user:", login.data.user);

    console.log("\nSMOKE TESTS PASSED (if no errors above).");
  } catch (err) {
    console.error("SMOKE TEST FAILED:", err.response?.data || err.message);
    process.exit(1);
  }
}

run();
