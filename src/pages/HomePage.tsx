import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUser } from '../state/userSlice';
import Hero from "../components/hero/Hero";
import { RootState } from '../state/store';
const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const auth = useSelector((state: RootState) => state.auth);



  function parseJwt(token: any) {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }
  const loadFavoriteItems = async (favs: string[]) => {

    const imageUrls = await Promise.all(
      favs.map(async (item) => {
        // Use axios.get to perform the GET request
        const response = await axios.get(`http://127.0.0.1:4000/MovieFuel/search/byID?idnumber=${item}`, {
          withCredentials: false,
        });
        return response.data; // Extract data from the Axios response
      })
    );

    dispatch(setUser({ favoriteItems: imageUrls }));
  };

  const apiUrl = 'http://localhost:4000/user/profile';
  // Add isLoaded state
  //todo add isloaded to store
  useEffect(() => {
    //console.log('token data:', parseJwt(auth.token).UserInfo.username);
    if (!user.isLoaded) { // Check if data has already been loaded

      if (auth.token) {
        const usernameToRetrieve = parseJwt(auth.token).UserInfo.username;

        fetch(`${apiUrl}/${usernameToRetrieve}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            dispatch(setUser(data));
            dispatch(setUser({ isLoaded: true }));

            if (data.favorites) {
              loadFavoriteItems(data.favorites);
            }


          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
    }
    if (!auth.token && user.isLoaded && user.favorites) {
      axios.put(`http://localhost:4000/user/profile/About/${user.username}`, { about: user.aboutme })
      axios.patch(`http://localhost:4000/user/profile/Favorites/${user.username}`, { favorites: user.favorites })
      dispatch(
        setUser({
          aboutme: '',
          editedText: '',
          isEditing: false,
          isFavoritesOpen: false,
          username: '',
          email: '',
          favoriteItems: [],
          favorites: [],
          profilepicture: '',
          isLoaded: false, // Reset the isLoaded state to false
        })
      );


    }
  }, [dispatch]); // Add isLoaded as a dependency
  return <section>
    <Hero />
  </section>;
};

export default HomePage;
