import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top immediately when pathname changes
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use instant instead of auto/smooth to ensure immediate scroll
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
