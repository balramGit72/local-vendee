// authSlice.ts
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token: "",
	myLat:'',
	myLon:"",
	user:"",
	zone_id:"",
	setting:{},
	otp: "",
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
		setZone(state,action) {
			state.zone_id = action.payload
		},
		setSetting(state, action){
			state.setting=action.payload;
		},
		setOtp(state, action){
			state.otp=action.payload;
		}
	},
});

export const { setToken, clearToken, setLatAndLon, setLogin, setZone, setSetting, setOtp } = authSlice.actions;
export default authSlice.reducer;
