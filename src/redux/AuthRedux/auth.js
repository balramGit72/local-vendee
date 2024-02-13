// authSlice.ts
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token: "",
	myLat:'',
	myLon:"",
	user:""
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setToken(state, action) {
			state.token = action.payload;
		},
		setLogin(state, action) {
			state.token = action.payload.api_token;
			state.user = action.payload;
		},
		setLatAndLon(state, action) {
			state.myLat = action.payload.myLat;
			state.myLon = action.payload.myLon
		},
		clearToken(state) {
			state.token = "";
		},
	},
});

export const { setToken, clearToken, setLatAndLon, setLogin } = authSlice.actions;
export default authSlice.reducer;
