import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import MoviesAndShows from "./Pages/MoviesAndShows/MoviesAndShows";
import MoviesPageOpen from "./Pages/MoviesPageOpen/MoviesPageOpen";
import Subscription from "./Pages/Subscription/Subscription";
import Support from "./Pages/Support/Support";
import MainFooter from "./Components/MainFooter/MainFooter";
import LoadingScreen from "./Components/LoadingScreen";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies-and-shows/:text?" element={<MoviesAndShows />} />
        <Route path="/pageopen/:genre/:id" element={<MoviesPageOpen />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <MainFooter />
    </>
  );
}

export default App;
