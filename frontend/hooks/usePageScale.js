"use client";
import { useEffect } from "react";

export default function usePageScale() {
  useEffect(() => {
    const page = document.getElementById("page");
    if (!page) return;

    const PAGE_W = 1440;
    const PAGE_H = 3544;

    function applyScale() {
      const vw = document.documentElement.clientWidth;
      const scale = Math.min(1, vw / PAGE_W);

      page.style.transform = `scale(${scale})`;
      page.parentElement.style.height = `${PAGE_H * scale}px`;
    }

    window.addEventListener("resize", applyScale);
    applyScale();

    return () => window.removeEventListener("resize", applyScale);
  }, []);
}