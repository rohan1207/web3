import "./App.scss";
import React, { useRef, useEffect } from "react";
import RoomToggleButton from "./components/Buttons/RoomToggleButton/RoomToggleButton";
import Experience from "./Experience/Experience";

import { useResponsiveStore } from "./stores/useResponsiveStore";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import Menu from "./components/Menu/Menu";
import Router from "./routes/Router";
import Overlay from "./components/Overlay/Overlay";
import Logo from "./components/Logo/Logo";
import FloatingCard from "./components/FloatingCard/FloatingCard";
import { useFloatingCardStore } from "./stores/floatingCardStore";

function App() {
  const { updateDimensions } = useResponsiveStore();
  const { isVisible, position, text } = useFloatingCardStore();

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <>
      <Menu />
      <Logo />
      <LoadingPage />
      <RoomToggleButton />
      <Overlay />
      <Router />
      <Experience />
      <FloatingCard text={text} position={position} visible={isVisible} />
    </>
  );
}

export default App;
