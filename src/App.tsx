import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import ButtonDropdownsExample from "./components/Searchbar";
import SearchPagePage from "./pages/SearchPage";
import GuestPage from "./components/guestProfile/GuestProfileView";
import DiscoverPage from "./pages/DiscoverPage";
import MoviePage from "./pages/MoviePage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Review } from "./types/Review";
import Reviews from "./pages/Reviews";



function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/movies/:tmdb_id" element={<MoviePage/>}/>
        <Route path="/discover/:ids" element={<DiscoverPage/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Search/:searchtext" element={<SearchPagePage />} />
        <Route path="/profile" element={<UserPage />} />
        <Route path="/guest-profile/:Otherusername" element={<GuestPage />} />

        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/Reviews/:PostID" element = {<PostPage/>}></Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Container>
  );
}

export default App;
