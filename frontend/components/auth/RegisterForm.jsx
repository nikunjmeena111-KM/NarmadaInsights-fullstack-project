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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      formData.append("fullName", form.fullName);
      formData.append("email", form.email);
      formData.append("password", form.password);
      formData.append("profilePicture", file);

      await registerUser(formData);

      router.push("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section className="card">
      <div className="card__inner">

        {/* FULL NAME */}
        <div className="field field--name">
          <img className="field__bg" src="/assets/input-fullname.svg" />
          <input
            name="fullName"
            className="input-overlay"
            onChange={handleChange}
          />
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
            className="input-overlay"
            onChange={handleChange}
          />
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
            className="input-overlay"
            onChange={handleChange}
          />
          <input
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
  name="profilePicture"   // 🔥 MUST MATCH BACKEND
  className="input-overlay file-input"
  onChange={(e) => {
    const selectedFile = e.target.files[0];
    console.log("FILE SELECTED:", selectedFile); // debug
    setFile(selectedFile);
  }}
/>
          <div className="field__label">Profile Picture</div>
          <div className="field__required">*</div>
        </div>

        <button className="submit"  onClick={() => {
             console.log("clicked"); // 🔥 add this
             handleSubmit();
            }}>
          SignUp
        </button>

      </div>
    </section>
  );
}