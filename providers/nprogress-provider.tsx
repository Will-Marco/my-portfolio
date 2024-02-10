"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { Router } from "next/router";
import nProgress from "nprogress";
import { useEffect } from "react";

const NProgressProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const handleRouteStart = () => nProgress.start();
    const handleRouteDone = () => nProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return (
    <div className="z-40">
      <ProgressBar options={{ showSpinner: false }} />
      {children}
    </div>
  );
};

export default NProgressProvider;
