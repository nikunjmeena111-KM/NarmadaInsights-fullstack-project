"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { loginUser } from "../../services/authService";
import { useEffect } from "react";
import { getCurrentUser } from "../../services/authService";




export default function LoginForm() {
const router = useRouter();
const searchParams = useSearchParams();

const registered = searchParams.get("registered");

const [form, setForm] = useState({
email: "",
password: "",
});

const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

useEffect(() => {
const checkAuth = async () => {
try {
await getCurrentUser();
router.push("/dashboard"); // ✅ already logged in
} catch {
// not logged in → stay on page
}
};

checkAuth();
}, []);

const handleChange = (e) => {
setForm({
...form,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
e.preventDefault();


if (loading) return;
setLoading(true);

if (!form.email.trim() || !form.password.trim()) {
  setError("Email and password are required");
  setLoading(false);
  return;
}

try {
  setError("");

  await loginUser({
    email: form.email,
    password: form.password,
  });

  // ✅ Cookie is automatically stored
  router.push("/dashboard");

} catch (err) {
  setError(err.message);
} finally {
  setLoading(false);
}


};

return ( <section className="card"> <div className="card__inner">


    <form onSubmit={handleSubmit}>

      {/* SIGNUP SUCCESS MESSAGE */}
      {registered && (
        <div className="success-message">
          Registered successfully. Please login.
        </div>
      )}

      {/* ERROR */}
      {error && <div className="error-message">{error}</div>}

      {/* EMAIL */}
      <div className="field field--email">
        <img className="field__bg" src="/assets/input-email.svg" />
        <input
          name="email"
          placeholder="Email"
          className="input-overlay"
          onChange={handleChange}
        />
        <div className="field__required">*</div>
      </div>

      {/* PASSWORD */}
      <div className="field field--password">
        <img className="field__bg" src="/assets/input-password.svg" />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input-overlay"
          onChange={handleChange}
        />
        <div className="field__required">*</div>
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="submit"
        disabled={loading}
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>

    </form>

  </div>
</section>


);
}
