"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "../../services/authService";

export default function RegisterForm() {
const router = useRouter();

const [form, setForm] = useState({
fullName: "",
email: "",
password: "",
});

const [file, setFile] = useState(null);
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");

const handleChange = (e) => {
setForm({
...form,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
e.preventDefault(); // 🔥 VERY IMPORTANT


console.log("SUBMIT CALLED");

if (loading) return;
setLoading(true);

if (
  !form.fullName.trim() ||
  !form.email.trim() ||
  !form.password.trim() ||
  !file
) {
  setError("All fields are required");
  setLoading(false);
  return;
}

try {
  setError("");
  setSuccess("");

  const formData = new FormData();

  formData.append("fullName", form.fullName);
  formData.append("email", form.email);
  formData.append("password", form.password);
  formData.append("profilePicture", file);

  await registerUser(formData);

  setSuccess("Registered successfully");

  setTimeout(() => {
    router.push("/login?registered=true");
  }, 1500);
} catch (err) {
  setError(err.message);
} finally {
  setLoading(false);
}


};

return ( <section className="card"> <div className="card__inner">


    {/* FORM WRAPPER 🔥 */}
    <form onSubmit={handleSubmit}>

      {/* ERROR MESSAGE */}
      {error && <div className="error-message">{error}</div>}

      {/* SUCCESS MESSAGE */}
      {success && <div className="success-message">{success}</div>}

      {/* FULL NAME */}
      <div className="field field--name">
        <img className="field__bg" src="/assets/input-fullname.svg" />
        <input
          name="fullName"
          placeholder="Full Name"
          className="input-overlay"
          onChange={handleChange}
        />
        <div className="field__required">*</div>
      </div>

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

      {/* PROFILE */}
      <div className="field field--profile">
        <img className="field__bg" src="/assets/input-profile.svg" />
        <input
          type="file"
          name="profilePicture"
          className="input-overlay file-input"
          onChange={(e) => {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
          }}
        />
        <div className="field__label">Profile Picture</div>
        <div className="field__required">*</div>
      </div>

      {/* BUTTON */}
      <button
        type="submit" // 🔥 IMPORTANT
        className="submit"
        disabled={loading}
      >
        {loading ? "Signing up..." : "SignUp"}
      </button>

    </form>

  </div>
</section>


);
}
