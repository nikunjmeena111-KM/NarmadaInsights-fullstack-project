"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function usePageScale() {
  const pathname = usePathname();

  useEffect(() => {
    const page = document.getElementById("page");
    if (!page) return;

    const PAGE_W = 1440;
    const PAGE_H = 901;

    function applyScale() {
      const vw = document.documentElement.clientWidth;
      const scale = Math.min(1, vw / PAGE_W);

      page.style.transform = `scale(${scale})`;
      page.style.transformOrigin = "top left";

      if (page.parentElement) {
        page.parentElement.style.height = `${PAGE_H * scale}px`;
      }
    }

    // 🔥 CRITICAL FIX — wait for full paint
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        applyScale();
      });
    });

    // 🔥 also handle resize
    window.addEventListener("resize", applyScale);

    return () => {
      window.removeEventListener("resize", applyScale);
    };
  }, [pathname]);
}