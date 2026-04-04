"use client";

import "./login.css";
import Link from "next/link";
import usePageScale from "../../hooks/usePageScale";
import LoginForm from "../../components/auth/LoginForm";

export default function LoginPage() {
usePageScale();

return ( <div className="viewport">


  {/* NAVBAR */}
  <header className="nav">
    <div className="nav__inner">
      <img className="nav__logo" src="/assets/image-10.png" alt="Logo" />

      <Link href="/about" className="nav__signin">
        About
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
    <LoginForm />

    {/* BOTTOM LINK */}
    <div className="bottom-link">
      <span className="bottom-link__muted">
        Don’t have an account?
      </span>

      <Link href="/register" className="bottom-link__action">
        Sign Up
      </Link>
    </div>

  </div>
</div>


);
}
