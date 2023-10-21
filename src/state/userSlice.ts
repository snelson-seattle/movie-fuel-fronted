import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: 'user',
    initialState: {
        aboutme: '',
        editedText: '',
        isEditing: false,
        isLoaded: false,
        isFavoritesOpen: false,
        username: '',
        email: '',
        favoriteItems: [] as any[], // Array to store JSON data of favorites
        favorites: [] as string[],      // Array to store favorite IDs for the database
        profilepicture: '',
    },
    reducers: {
        // Action to add an ID to 'favorites' and the corresponding JSON data to 'favoriteItems'
        addToFavorites: (state, action) => {
            const { id, data } = action.payload;
            //console.log('here:', action.type, "data:", data, "id:", id);
            //console.log('fasv1:', Array.from(state.favorites));

            // Create new arrays by spreading the existing arrays and adding the new values
            const updatedFavorites = [...state.favorites, id];
            const updatedFavoriteItems = [...state.favoriteItems, data];
            // console.log('fasv:', Array.from(updatedFavorites));
            return {
                ...state,
                favorites: updatedFavorites,
                favoriteItems: updatedFavoriteItems,
            };


        },

        // Action to remove an ID from 'favorites' and the corresponding JSON data from 'favoriteItems'
        removeFromFavorites: (state, action) => {

            const idToRemove = action.payload.id;
            const index = state.favorites.indexOf(idToRemove);

            if (index !== -1) {
                // Create new arrays without the removed item
                const updatedFavorites = state.favorites.filter(id => id !== idToRemove);
                const updatedFavoriteItems = state.favoriteItems.filter(item => item.id !== Number(idToRemove));

                return {
                    ...state,
                    favorites: updatedFavorites,
                    favoriteItems: updatedFavoriteItems,
                };
            }

            // If the item wasn't found, return the current state
            return state;
        },

        // ... other reducers for your user actions

        // Reducer for 'setUser' action, which is unchanged
        setUser: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { addToFavorites, removeFromFavorites, setUser } = userSlice.actions;

export default userSlice.reducer;
