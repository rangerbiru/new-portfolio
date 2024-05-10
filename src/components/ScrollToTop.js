import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Check if screen width is less than 768px
    if (window.innerWidth < 768) {
      const body = document.querySelector("#root");
      body.scrollIntoView();
    }
  }, [pathname]);

  return null;
}
