import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import NProgress from "nprogress";

function RouteProgress() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();

    const timer = setTimeout(() => {
      NProgress.done();
    }, 300);

    return () => clearTimeout(timer);
  }, [location]);

  return null;
}

export default RouteProgress;
