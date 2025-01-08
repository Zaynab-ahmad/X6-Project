
import './App.css'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home/Home'
import MoviesAndShows from './Pages/MoviesAndShows/MoviesAndShows'
import MoviesPageOpen from './Pages/MoviesPageOpen/MoviesPageOpen'
import ShowsPageOpen from './Pages/ShowsPageOpen/ShowsPageOpen'
import Subscription from './Pages/Subscription/Subscription'
import Support from './Pages/Support/Support'
import MainFooter from './Components/MainFooter/MainFooter'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies-and-shows" element={<MoviesAndShows />} />
        <Route path="/moviespageopen/:id" element={<MoviesPageOpen />} />
        <Route path="/showspageopen/:id" element={<ShowsPageOpen />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <MainFooter />
    </>
  );
}

export default App;
