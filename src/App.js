import logo from './logo.svg';
import './App.css';
import { Route ,Routes} from "react-router-dom"
import Movie from './pages/Movie';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Series from './pages/Series';
import Tv from './pages/Tv';
import Wishlist from './pages/Wishlist';
import Favorite from './pages/Favorite';
 
function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route exact path='/' element={<Home />}></Route>
    <Route exact path='/Movie' element={<Movie />}></Route>
    <Route exact path='/Wishlist' element={<Wishlist />}></Route>
    <Route exact path='/Series' element={<Series />}></Route>
    <Route exact path='/Tv' element={<Tv />}></Route>
    <Route exact path='/Favorite' element={<Favorite />}></Route>
    </Routes>
    </>
  );
}

export default App;

