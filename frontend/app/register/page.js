"use client";

import "./register.css";
import Link from "next/link";
import usePageScale from "../../hooks/usePageScale";
import RegisterForm from "../../components/auth/RegisterForm";

export default function RegisterPage() {
  usePageScale(); // same as your scale.js

  return (
    <div className="viewport">

      {/* NAVBAR */}
      <header className="nav">
        <div className="nav__inner">
          <img className="nav__logo" src="/assets/image-10.png" alt="Logo" />

          <Link href="/login" className="nav__signin">
            SignIn
          </Link>

          <button className="nav__menu">
            <img src="/assets/menu.svg" alt="" />
          </button>
        </div>
      </header>

      <div className="page" id="page">

        {/* LEFT IMAGE */}
        <img className="image-4" src="/assets/image-4.png" alt="" />

        <div className="left-caption">
          Simple financial insights for better decisions.
        </div>

        {/* FORM */}
        <RegisterForm />

        {/* BOTTOM LINK */}
        <div className="bottom-link">
          <span className="bottom-link__muted">
            Already have an account?
          </span>

          <Link href="/login" className="bottom-link__action">
            Sign In
          </Link>
        </div>

        {/* REQUIRED NOTE */}
        <div className="required-note">
          <span className="required-note__star">*</span>
          <span className="required-note__text">
            Fields are required
          </span>
        </div>

      </div>
    </div>
  );
}