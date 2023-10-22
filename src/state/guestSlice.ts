import { createSlice } from '@reduxjs/toolkit';


const guestSlice = createSlice({
    name: 'guest',
    initialState: {
        aboutme: '',
        username: '',
        email: '',
        favoriteItems: [],
        favorites: [],
        profilepicture: '',
    },
    reducers: {
        setOtherUser: (state, action) => {
            // Define actions to update the user state here
            // For example, you might have actions like 'setUser' to update the user data

            switch (action.type) {
                case 'guest/setOtherUser':

                    return { ...state, ...action.payload };
                // Add more actions as needed
                default:
                    return state;
            }
        },
    },
});

export const { setOtherUser } = guestSlice.actions;

export default guestSlice.reducer;