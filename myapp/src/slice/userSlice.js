import { createSlice } from '@reduxjs/toolkit';
import { getUserApi } from '../api/UserApi/getUserApi';

const initialState = {
    currentUser: null,
    status: 'idle',
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearUser: (state) => {
            state.currentUser = null;
            state.status = 'idle';
            state.error = null;
        },
        setLoading: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        setSuccess: (state, action) => {
            state.status = 'succeeded';
            state.currentUser = action.payload;
        },
        setError: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});

export const { clearUser, setLoading, setSuccess, setError } = userSlice.actions;

// Parametreli: İd ile kullanıcı çeker
export const fetchUserById = (id) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const user = await getUserApi({ id });
        dispatch(setSuccess(user));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

// Parametresiz: Default id=1 ile kullanıcı çeker
export const fetchUserDirectly = () => async (dispatch) => {
    dispatch(setLoading());
    try {
        const user = await getUserApi({ id: 1 });
        dispatch(setSuccess(user));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export default userSlice.reducer;
