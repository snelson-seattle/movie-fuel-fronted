import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: 'user',
    initialState: {
        AboutMe: '',
        editedText: '',
        isEditing: false,
        isFavoritesOpen: false,
        UserName: '',
        Email: '',
        favoriteItems: [],
        Favorites: [],
        ProfilePicture: '',
    },
    reducers: {
        setUser: (state, action) => {
            // Define actions to update the user state here
            // For example, you might have actions like 'setUser' to update the user data
            switch (action.type) {
                case 'user/setUser':

                    return { ...state, ...action.payload };
                // Add more actions as needed
                default:
                    return state;
            }
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;